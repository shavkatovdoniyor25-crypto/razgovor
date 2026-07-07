(function () {
  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
  var db = firebase.firestore();
  db.settings({ experimentalAutoDetectLongPolling: true });

  var ADMIN_QUOTA_KB = 200;

  var state = {
    view: 'loading',
    authError: '',
    currentUser: null,
    users: []
  };

  function el(html) { var d = document.createElement('div'); d.innerHTML = html; return d.firstElementChild; }

  function renderAuth() {
    return '<div class="auth-wrap">' +
      '<div class="edu-wordmark">ICON EDUCATION</div>' +
      '<div class="auth-title">Админ-панель</div>' +
      '<input class="auth-input" type="email" id="auth-email" placeholder="Электронная почта"/>' +
      '<input class="auth-input" type="password" id="auth-password" placeholder="Пароль"/>' +
      (state.authError ? '<div class="muted-sm" style="margin:8px 0;">' + state.authError + '</div>' : '') +
      '<button class="btn strong" id="auth-submit" style="width:100%;margin-top:8px;">Войти</button>' +
      '</div>';
  }

  function fullName(u) { return (u.lastName || '—') + ' ' + (u.firstName || ''); }

  function renderDashboard() {
    var rows = state.users.map(function (u) {
      var loadKb = u.loadKb.toFixed(1);
      var over = u.loadKb > ADMIN_QUOTA_KB;
      var statusChip = u.blocked
        ? '<span class="chip" style="border-color:#ff3b4e;color:#ff3b4e;">Заблокирован</span>'
        : '<span class="chip">Активен</span>';
      return '<tr>' +
        '<td>' + fullName(u) + '<div class="muted-sm">' + (u.email || '') + '</div></td>' +
        '<td>' + (u.teacherName || '—') + '</td>' +
        '<td>' + (u.birthYear || '—') + '</td>' +
        '<td' + (over ? ' style="color:#ff3b4e;"' : '') + '>' + loadKb + ' КБ / ' + ADMIN_QUOTA_KB + ' КБ</td>' +
        '<td>' + statusChip + '</td>' +
        '<td>' +
        '<button class="btn" data-action="block" data-uid="' + u.id + '">' + (u.blocked ? 'Разблокировать' : 'Заблокировать') + '</button> ' +
        '<button class="btn" data-action="delete" data-uid="' + u.id + '">Удалить</button>' +
        '</td>' +
        '</tr>';
    }).join('');

    return '<div class="top-row"><div class="edu-wordmark">ICON EDUCATION — АДМИН</div><button class="btn" id="logout-btn">Выйти</button></div>' +
      '<div class="muted-sm" style="margin-bottom:16px;">Зарегистрировано учеников: ' + state.users.length + '</div>' +
      '<div style="overflow-x:auto;">' +
      '<table class="admin-table">' +
      '<thead><tr><th>Ученик</th><th>Учитель</th><th>Год рождения</th><th>Нагрузка / норма</th><th>Статус</th><th>Действия</th></tr></thead>' +
      '<tbody>' + (rows || '<tr><td colspan="6" class="muted-sm">Пока никто не зарегистрирован.</td></tr>') + '</tbody>' +
      '</table></div>';
  }

  function render() {
    var app = document.getElementById('app');
    if (state.view === 'loading') app.innerHTML = '<div class="muted-sm" style="margin-top:60px;text-align:center;">Загрузка…</div>';
    else if (state.view === 'auth') app.innerHTML = renderAuth();
    else app.innerHTML = renderDashboard();
    bind();
  }

  function loadUsers() {
    return Promise.all([
      db.collection('profiles').get(),
      db.collection('progress').get()
    ]).then(function (results) {
      var profilesSnap = results[0], progressSnap = results[1];
      var progressById = {};
      progressSnap.forEach(function (doc) { progressById[doc.id] = doc.data(); });

      state.users = [];
      profilesSnap.forEach(function (doc) {
        var profile = doc.data();
        var progress = progressById[doc.id] || {};
        var loadKb = JSON.stringify(progress).length / 1024;
        state.users.push({
          id: doc.id,
          email: profile.email,
          lastName: profile.lastName,
          firstName: profile.firstName,
          teacherName: profile.teacherName,
          birthYear: profile.birthYear,
          blocked: !!profile.blocked,
          loadKb: loadKb
        });
      });
      state.users.sort(function (a, b) { return fullName(a).localeCompare(fullName(b)); });
    });
  }

  function enterDashboard() {
    state.view = 'loading';
    render();
    loadUsers().then(function () {
      state.view = 'dashboard';
      render();
    }).catch(function () {
      state.authError = 'Не удалось загрузить список учеников.';
      state.view = 'auth';
      render();
    });
  }

  function mapAuthError(err) {
    switch (err && err.code) {
      case 'auth/invalid-email': return 'Введите корректную почту.';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential': return 'Неверная почта или пароль.';
      default: return 'Что-то пошло не так. Попробуйте ещё раз.';
    }
  }

  function bind() {
    var authSubmit = document.getElementById('auth-submit');
    if (authSubmit) authSubmit.addEventListener('click', function () {
      var email = (document.getElementById('auth-email').value || '').trim().toLowerCase();
      var pass = document.getElementById('auth-password').value || '';
      auth.signInWithEmailAndPassword(email, pass).then(function (cred) {
        return db.collection('admins').doc(cred.user.uid).get().then(function (adminDoc) {
          if (!adminDoc.exists) {
            auth.signOut();
            state.authError = 'У этого аккаунта нет прав администратора.';
            render();
            return;
          }
          state.currentUser = cred.user.uid;
          state.authError = '';
          enterDashboard();
        });
      }).catch(function (err) { state.authError = mapAuthError(err); render(); });
    });

    var logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.addEventListener('click', function () {
      auth.signOut().then(function () {
        state.currentUser = null;
        state.view = 'auth';
        render();
      });
    });

    document.querySelectorAll('[data-action="block"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var uid = btn.getAttribute('data-uid');
        var user = state.users.filter(function (u) { return u.id === uid; })[0];
        if (!user) return;
        var newBlocked = !user.blocked;
        var label = newBlocked ? 'заблокировать' : 'разблокировать';
        if (!confirm('Точно ' + label + ' ученика ' + fullName(user) + '?')) return;
        db.collection('profiles').doc(uid).update({ blocked: newBlocked }).then(function () {
          user.blocked = newBlocked;
          render();
        });
      });
    });

    document.querySelectorAll('[data-action="delete"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var uid = btn.getAttribute('data-uid');
        var user = state.users.filter(function (u) { return u.id === uid; })[0];
        if (!user) return;
        if (!confirm('Удалить ученика ' + fullName(user) + ' и весь его прогресс? Это необратимо. Учётная запись для входа при этом не удаляется — чтобы полностью закрыть доступ, также заблокируйте ученика.')) return;
        Promise.all([
          db.collection('profiles').doc(uid).delete(),
          db.collection('progress').doc(uid).delete()
        ]).then(function () {
          state.users = state.users.filter(function (u) { return u.id !== uid; });
          render();
        });
      });
    });
  }

  auth.onAuthStateChanged(function (user) {
    if (state.currentUser) return;
    if (!user) { state.view = 'auth'; render(); return; }
    db.collection('admins').doc(user.uid).get().then(function (adminDoc) {
      if (!adminDoc.exists) {
        auth.signOut();
        state.view = 'auth';
        render();
        return;
      }
      state.currentUser = user.uid;
      enterDashboard();
    });
  });

  state.view = 'loading';
  render();
})();
