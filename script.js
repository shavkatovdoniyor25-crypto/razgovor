(function () {
  /* ---------- data ---------- */

  var TIERS = {
    beginner: {
      name: 'Начинающий',
      levels: [
        { topic: 'Знакомство и приветствие', questions: ['Как вас зовут и откуда вы?', 'Сколько вам лет и чем вы занимаетесь?', 'Как вы обычно здороваетесь с новыми людьми?', 'Что вы обычно рассказываете о себе при знакомстве?'] },
        { topic: 'Семья', questions: ['Сколько человек в вашей семье?', 'Расскажите о своих родителях.', 'У вас есть братья или сёстры? Какие они?', 'Кто в вашей семье самый весёлый и почему?'] },
        { topic: 'Мой день', questions: ['Во сколько вы просыпаетесь утром?', 'Что вы делаете после пробуждения?', 'Как проходит ваш обычный день?', 'Что вы делаете перед сном?'] },
        { topic: 'Еда и кафе', questions: ['Какая ваша любимая еда?', 'Что вы обычно едите на завтрак?', 'Любите ли вы готовить? Что именно?', 'Расскажите, как вы заказываете еду в кафе.'] },
        { topic: 'Покупки', questions: ['Где вы обычно покупаете продукты?', 'Что вы купили в последний раз?', 'Любите ли вы ходить по магазинам?', 'Как вы выбираете, что купить?'] },
        { topic: 'Дом и город', questions: ['Опишите, в каком доме вы живёте.', 'Какой у вас любимый район города?', 'Что находится рядом с вашим домом?', 'Что вам нравится в вашем городе?'] },
        { topic: 'Погода', questions: ['Какая сегодня погода?', 'Какое время года вам нравится больше всего?', 'Что вы делаете, когда идёт дождь?', 'Как погода влияет на ваше настроение?'] },
        { topic: 'Хобби и увлечения', questions: ['Какое у вас хобби?', 'Когда вы начали этим увлекаться?', 'Сколько времени вы уделяете хобби в неделю?', 'Хотели бы вы научиться чему-то новому?'] },
        { topic: 'Транспорт и дорога', questions: ['Как вы добираетесь до учёбы или работы?', 'Сколько времени занимает дорога?', 'Какой транспорт вам нравится больше всего?', 'Расскажите о случае, когда вы опоздали из-за транспорта.'] },
        { topic: 'Праздники', questions: ['Какой ваш любимый праздник?', 'Как вы обычно его отмечаете?', 'С кем вы проводите праздники?', 'Расскажите о самом запомнившемся празднике.'] }
      ],
      unlocked: 0
    },
    mid: {
      name: 'Золотая середина',
      levels: [
        { topic: 'Работа и профессия', questions: ['Кем вы работаете или хотите работать?', 'Что вам нравится в этой профессии?', 'Какие качества важны для этой работы?', 'Расскажите о своём обычном рабочем дне.'] },
        { topic: 'Учёба и университет', questions: ['Что вы изучаете и почему выбрали это направление?', 'Какой предмет даётся вам легче всего?', 'Как вы готовитесь к экзаменам?', 'Что бы вы изменили в системе образования?'] },
        { topic: 'Друзья и отношения', questions: ['Как вы познакомились со своим лучшим другом?', 'Что для вас важно в дружбе?', 'Как часто вы видитесь с друзьями?', 'Расскажите о ссоре с другом и как вы помирились.'] },
        { topic: 'Здоровье и врач', questions: ['Как вы заботитесь о своём здоровье?', 'Расскажите о последнем визите к врачу.', 'Что вы делаете, когда простужены?', 'Какие привычки вы считаете полезными для здоровья?'] },
        { topic: 'Спорт', questions: ['Каким видом спорта вы занимаетесь?', 'Как часто вы тренируетесь?', 'За какую команду вы болеете?', 'Расскажите о вашем спортивном достижении.'] },
        { topic: 'Путешествия', questions: ['В какой стране вы недавно были?', 'Что вам больше всего запомнилось в поездке?', 'Куда вы мечтаете поехать и почему?', 'Что вы всегда берёте с собой в путешествие?'] },
        { topic: 'Кино и книги', questions: ['Какой фильм вы посмотрели последним?', 'Какую книгу вы бы порекомендовали и почему?', 'Кто ваш любимый актёр или писатель?', 'Расскажите сюжет любимого фильма своими словами.'] },
        { topic: 'Музыка', questions: ['Какую музыку вы слушаете чаще всего?', 'Играете ли вы на музыкальном инструменте?', 'Расскажите о концерте, на котором вы были.', 'Как музыка влияет на ваше настроение?'] },
        { topic: 'Технологии', questions: ['Каким гаджетом вы пользуетесь каждый день?', 'Как технологии изменили вашу жизнь?', 'Какое приложение вы считаете самым полезным?', 'Боитесь ли вы, что технологии заменят людей на работе?'] },
        { topic: 'Соцсети', questions: ['Какими соцсетями вы пользуетесь?', 'Сколько времени вы проводите в телефоне в день?', 'Что вы обычно публикуете?', 'Как соцсети влияют на отношения между людьми?'] },
        { topic: 'Деньги и покупки', questions: ['Как вы планируете свой бюджет?', 'На что вы тратите деньги охотнее всего?', 'Умеете ли вы копить деньги?', 'Расскажите о крупной покупке, которую вы совершили.'] },
        { topic: 'Аренда жилья', questions: ['Вы снимаете жильё или живёте с семьёй?', 'Что важно при выборе квартиры?', 'Расскажите о поиске жилья — было ли это сложно?', 'Какие проблемы бывают у арендаторов?'] },
        { topic: 'Общественный транспорт', questions: ['Каким общественным транспортом вы пользуетесь чаще всего?', 'Удобен ли транспорт в вашем городе?', 'Расскажите забавный случай в транспорте.', 'Что бы вы улучшили в работе транспорта?'] },
        { topic: 'Планы на будущее', questions: ['Кем вы видите себя через пять лет?', 'Какая ваша главная цель на этот год?', 'Что вы делаете, чтобы достичь своих целей?', 'Какие планы вы уже начали воплощать?'] },
        { topic: 'Воспоминания детства', questions: ['Какое ваше самое яркое воспоминание из детства?', 'В какие игры вы играли в детстве?', 'Кем вы мечтали стать в детстве?', 'Что изменилось в вас с тех пор?'] },
        { topic: 'Звонок по телефону', questions: ['Кому вы обычно звоните чаще всего?', 'Предпочитаете звонить или писать сообщения? Почему?', 'Расскажите о важном телефонном разговоре.', 'Как вы начинаете и заканчиваете телефонный разговор?'] },
        { topic: 'Извинения и просьбы', questions: ['Расскажите случай, когда вам пришлось извиниться.', 'Как вы просите о помощи?', 'Легко ли вам признавать свои ошибки?', 'Как вы реагируете, когда извиняются перед вами?'] },
        { topic: 'Советы и рекомендации', questions: ['Какой совет вы бы дали новому студенту?', 'Порекомендуйте место, которое стоит посетить в вашем городе.', 'Какой совет вам когда-то очень помог?', 'Как вы обычно даёте советы друзьям?'] },
        { topic: 'Сравнение вещей', questions: ['Что лучше — жить в большом городе или в маленьком?', 'Сравните учёбу онлайн и офлайн.', 'Что вы предпочитаете: книгу или фильм по ней?', 'Сравните свою жизнь сейчас и пять лет назад.'] },
        { topic: 'Мнение о фильме', questions: ['Какой фильм произвёл на вас самое сильное впечатление?', 'Согласны ли вы с финалом этого фильма?', 'Какую идею фильма вы бы обсудили с другом?', 'Порекомендовали бы вы этот фильм? Почему?'] },
        { topic: 'Описание человека', questions: ['Опишите внешность и характер близкого человека.', 'Кем вы восхищаетесь и почему?', 'Какие черты характера вы цените в людях?', 'Опишите себя тремя словами и объясните выбор.'] },
        { topic: 'Климат и природа', questions: ['Какой климат в вашем регионе?', 'Как климат влияет на жизнь людей там?', 'Что вы делаете для защиты природы?', 'Какие экологические проблемы вас беспокоят?'] },
        { topic: 'Традиции и обычаи', questions: ['Какая традиция есть в вашей семье?', 'Какой узбекский обычай вы бы объяснили иностранцу?', 'Как традиции меняются с поколениями?', 'Какую традицию вы хотели бы сохранить для своих детей?'] },
        { topic: 'Проблема и решение', questions: ['Расскажите о проблеме, которую вы недавно решили.', 'Как вы принимаете сложные решения?', 'К кому вы обращаетесь за советом в трудной ситуации?', 'Что вы делаете, если решение не сработало?'] },
        { topic: 'Итоговый диалог', questions: ['Расскажите о своём прогрессе в изучении русского языка.', 'Что было самым трудным на этом уровне?', 'Какую тему вы хотели бы обсудить ещё раз?', 'Что вы посоветуете студенту, который только начинает?'] }
      ],
      unlocked: 0
    },
    advanced: {
      name: 'ICONIC',
      levels: [
        { topic: 'Дебаты: за и против', questions: ['Должны ли школьники носить форму? Обоснуйте.', 'Какой аргумент противоположной стороны самый сильный?', 'Как изменить чужое мнение, не переходя на личности?', 'Приведите пример, когда вы поменяли своё мнение в споре.'] },
        { topic: 'Новости и события', questions: ['Какая новость на этой неделе привлекла ваше внимание?', 'Как это событие может повлиять на обычных людей?', 'Доверяете ли вы источникам новостей? Почему?', 'Как вы отличаете факты от мнений в новостях?'] },
        { topic: 'Собеседование на работу', questions: ['Расскажите о себе, как на собеседовании.', 'Почему вы хотите работать именно в этой компании?', 'Какая ваша самая большая слабая сторона и как вы с ней работаете?', 'Где вы видите себя в этой роли через три года?'] },
        { topic: 'Деловая встреча', questions: ['Представьте новый проект команде за одну минуту.', 'Как вы реагируете на критику коллег?', 'Опишите, как вы разрешаете конфликт в команде.', 'Как вы убеждаете команду принять непопулярное решение?'] },
        { topic: 'Публичное выступление', questions: ['Произнесите короткую речь на тему, важную для вас.', 'Как вы справляетесь с волнением перед аудиторией?', 'Что делает выступление запоминающимся?', 'Расскажите о своём опыте публичных выступлений.'] },
        { topic: 'Убеждение и аргументы', questions: ['Убедите слушателя попробовать что-то новое.', 'Какие приёмы убеждения вы считаете честными?', 'Приведите пример манипуляции, которую вы заметили.', 'Как отличить сильный аргумент от слабого?'] },
        { topic: 'Юмор и идиомы', questions: ['Расскажите шутку или смешную историю по-русски.', 'Какая русская идиома вам нравится и что она значит?', 'Понимаете ли вы русский юмор? Приведите пример.', 'Расскажите о забавном недоразумении из-за языка.'] },
        { topic: 'Философский вопрос', questions: ['Что такое счастье, по-вашему?', 'Может ли цель оправдывать средства?', 'Свобода важнее безопасности или наоборот?', 'Как вы определяете смысл жизни?'] },
        { topic: 'Культурные различия', questions: ['Что удивило вас в русской культуре?', 'Чем отличается общение в Узбекистане и в России?', 'Как культурные различия влияют на понимание между людьми?', 'Расскажите о случае культурного недопонимания.'] },
        { topic: 'Экология будущего', questions: ['Какая экологическая проблема самая важная сегодня?', 'Что может сделать один человек для планеты?', 'Как технологии могут помочь экологии?', 'Каким вы видите будущее вашего города через 20 лет?'] },
        { topic: 'Гипотетические ситуации', questions: ['Что бы вы сделали, если бы выиграли миллион?', 'Как изменилась бы ваша жизнь без интернета?', 'Что если бы вы могли жить в любой стране?', 'Как бы вы поступили, увидев несправедливость на улице?'] },
        { topic: 'Пересказ сложной истории', questions: ['Перескажите сложную историю или новость своими словами.', 'Какие детали в истории самые важные?', 'Как вы передаёте эмоции при пересказе?', 'Что в этой истории удивило вас больше всего?'] },
        { topic: 'Критика и обратная связь', questions: ['Как вы даёте критику, не обижая человека?', 'Расскажите о конструктивной критике, которую вы получили.', 'Как вы реагируете на несправедливую критику?', 'Почему обратная связь важна для роста?'] },
        { topic: 'Технологии будущего', questions: ['Как искусственный интеллект изменит нашу жизнь через 10 лет?', 'Какие профессии могут исчезнуть из-за технологий?', 'Опасны ли новые технологии для общества?', 'Какую технологию будущего вы ждёте больше всего?'] },
        { topic: 'Финал: импровизация', questions: ['Расскажите историю, используя пять случайных слов.', 'Опишите свой идеальный день без подготовки.', 'Убедите слушателя в чём-то абсурдном шутки ради.', 'Подведите итог всему, чему вы научились на курсе.'] }
      ],
      unlocked: 0
    }
  };

  var FLOATING_TYPES = [
    { name: 'Ролевой диалог',
      prompt: function (t) { return 'Разыграйте короткий диалог по теме «' + t + '», проговорив голосом обе роли.'; },
      example: function () { return 'Например: «— Привет! Расскажи, как дела? — Всё хорошо, а у тебя?» — придумайте свою короткую сцену из 4–6 реплик.'; } },
    { name: 'Опиши и сравни',
      prompt: function (t) { return 'Опишите и сравните два примера, связанных с темой «' + t + '».'; },
      example: function () { return 'Например: «Первое — это ..., второе — ... . У них общее то, что ..., а отличаются они тем, что ...»'; } },
    { name: 'Спор: за и против',
      prompt: function (t) { return 'Выберите сторону в споре о теме «' + t + '» и обоснуйте её голосом.'; },
      example: function () { return 'Например: «Я считаю, что ..., потому что ... Хотя есть и другое мнение: ...»'; } },
    { name: 'Инструкция',
      prompt: function (t) { return 'Объясните голосом, шаг за шагом, что-то связанное с темой «' + t + '».'; },
      example: function () { return 'Например: «Сначала нужно ..., затем ..., и в конце ...»'; } },
    { name: 'Реакция на ситуацию',
      prompt: function (t) { return 'Представьте неожиданную ситуацию по теме «' + t + '» и отреагируйте на неё голосом.'; },
      example: function () { return 'Например: «Если бы это случилось со мной, я бы сначала ..., а потом ...»'; } },
    { name: 'Пересказ',
      prompt: function (t) { return 'Придумайте и перескажите голосом короткую историю по теме «' + t + '».'; },
      example: function () { return 'Например: «Однажды ... В итоге ...»'; } },
    { name: 'Импровизация',
      prompt: function (t) { return 'Без подготовки начните говорить о теме «' + t + '» с неожиданного ракурса.'; },
      example: function () { return 'Например: начните с любой фразы вроде «Знаете, что интересно...» и продолжайте не останавливаясь.'; } }
  ];

  var ICONS = {
    arrowLeft: '<svg class="icon" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
    arrowRight: '<svg class="icon" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    mic: '<svg class="icon" viewBox="0 0 24 24" style="width:32px;height:32px;"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/></svg>',
    stop: '<svg class="icon" viewBox="0 0 24 24" style="width:32px;height:32px;"><rect x="6" y="6" width="12" height="12" rx="1"/></svg>',
    play: '<svg class="icon" viewBox="0 0 24 24"><path d="M6 4l14 8-14 8V4z"/></svg>',
    download: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 3v12M6 11l6 6 6-6M4 21h16"/></svg>',
    refresh: '<svg class="icon" viewBox="0 0 24 24"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.5 9A9 9 0 0 1 20 6.3M20.5 15A9 9 0 0 1 4 17.7"/></svg>',
    lock: '<svg class="icon" viewBox="0 0 24 24" style="width:14px;height:14px;"><rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
    attach: '<svg class="icon" viewBox="0 0 24 24"><path d="M21 12.5l-8.5 8.5a4.2 4.2 0 0 1-6-6l9-9a2.8 2.8 0 0 1 4 4l-9 9a1.4 1.4 0 0 1-2-2l7.5-7.5"/></svg>'
  };

  /* ---------- Firebase auth + Firestore progress storage ---------- */

  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
  var db = firebase.firestore();
  db.settings({ experimentalAutoDetectLongPolling: true });

  var THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

  function defaultStore() {
    return { unlocked: { beginner: 0, mid: 0, advanced: 0 }, tasks: {}, cards: {}, lastLogin: Date.now() };
  }

  function normalizeStore(data) {
    data.unlocked = data.unlocked || { beginner: 0, mid: 0, advanced: 0 };
    data.tasks = data.tasks || {};
    data.cards = data.cards || {};
    return data;
  }

  function cardsInBox(box) {
    return Object.keys(STORE.cards).map(function (id) {
      return Object.assign({ id: id }, STORE.cards[id]);
    }).filter(function (c) { return c.box === box; });
  }

  // Writes are debounced (1.5s) so rapid actions (typing, quick navigation)
  // collapse into a single Firestore write and stay well inside the free daily quota.
  var saveTimer = null;
  function saveStore() {
    if (!state.currentUser) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      db.collection('progress').doc(state.currentUser).set(STORE).catch(function (e) {
        console.error('Progress save failed', e);
      });
    }, 1500);
  }

  function mapAuthError(err) {
    switch (err && err.code) {
      case 'auth/email-already-in-use': return 'Этот email уже зарегистрирован. Войдите.';
      case 'auth/invalid-email': return 'Введите корректную почту.';
      case 'auth/weak-password': return 'Пароль должен быть не короче 6 символов.';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential': return 'Неверная почта или пароль.';
      default: return 'Что-то пошло не так. Попробуйте ещё раз.';
    }
  }

  function loadAndEnterApp(uid) {
    state.view = 'loading';
    render();
    db.collection('progress').doc(uid).get().then(function (doc) {
      var data = doc.exists ? normalizeStore(doc.data()) : defaultStore();
      var now = Date.now();
      if (data.lastLogin && (now - data.lastLogin) > THIRTY_DAYS_MS) {
        data = defaultStore();
      }
      data.lastLogin = now;
      STORE = data;
      state.currentUser = uid;
      state.authError = '';
      saveStore();
      state.view = 'home';
      render();
    }).catch(function () {
      state.authError = 'Не удалось загрузить прогресс. Проверьте соединение и попробуйте снова.';
      state.view = 'auth';
      render();
    });
  }

  /* ---------- task storage helpers ---------- */

  var STORE = null;

  function getTask(key) { return STORE.tasks[key] || null; }

  function setTask(key, data) {
    STORE.tasks[key] = Object.assign({}, STORE.tasks[key] || {}, data);
    saveStore();
  }

  function firstIncompleteQuestion(tier, level) {
    var lv = TIERS[tier].levels[level];
    for (var i = 0; i < lv.questions.length; i++) {
      var t = getTask(tier + ':' + level + ':0:' + i);
      if (!t || !t.completed) return i;
    }
    return -1;
  }

  function fmtDuration(totalSeconds) {
    if (totalSeconds < 60) return totalSeconds + ' сек';
    var h = Math.floor(totalSeconds / 3600);
    var m = Math.round((totalSeconds % 3600) / 60);
    if (h > 0) return h + ' ч ' + m + ' мин';
    return m + ' мин';
  }

  function computeStats() {
    var seconds = 0, phrases = 0, done = 0, total = 0;
    Object.keys(TIERS).forEach(function (tierKey) {
      TIERS[tierKey].levels.forEach(function (lv, lvIdx) {
        total += lv.questions.length + 1;
        lv.questions.forEach(function (_, qIdx) {
          var t = getTask(tierKey + ':' + lvIdx + ':0:' + qIdx);
          if (t && t.completed) { done++; seconds += t.seconds || 0; phrases += (t.phrases || []).length; }
        });
        var t2 = getTask(tierKey + ':' + lvIdx + ':1');
        if (t2 && t2.completed) { done++; seconds += t2.seconds || 0; }
      });
    });
    return { seconds: seconds, phrases: phrases, done: done, total: total };
  }

  /* ---------- IndexedDB (file handle persistence, best-effort) ---------- */

  var HAS_FS_ACCESS = typeof window.showSaveFilePicker === 'function';

  function idbOpen() {
    return new Promise(function (resolve, reject) {
      var req = indexedDB.open('gs_files', 1);
      req.onupgradeneeded = function () { req.result.createObjectStore('handles'); };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
  }
  function idbSet(key, value) {
    return idbOpen().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction('handles', 'readwrite');
        tx.objectStore('handles').put(value, key);
        tx.oncomplete = function () { resolve(); };
        tx.onerror = function () { reject(tx.error); };
      });
    });
  }
  function idbGet(key) {
    return idbOpen().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction('handles', 'readonly');
        var req = tx.objectStore('handles').get(key);
        req.onsuccess = function () { resolve(req.result); };
        req.onerror = function () { reject(req.error); };
      });
    });
  }

  /* ---------- in-memory audio (survives navigation within this tab session) ---------- */

  var audioMemory = {};

  /* ---------- state ---------- */

  var state = {
    view: 'auth',
    authMode: 'login',
    authError: '',
    currentUser: null,
    tier: null,
    level: null,
    taskIdx: 0,
    recording: false,
    seconds: 0,
    timer: null,
    mediaRecorder: null,
    audioChunks: [],
    micError: null,
    phraseMsg: '',
    restoring: false,
    phraseBox: 1,
    flippedCards: {},
    cardMsg: {}
  };

  function fmt(s) { return '0:' + (s < 10 ? '0' : '') + s; }

  function activeKey() {
    if (state.taskIdx === 0) {
      var idx = firstIncompleteQuestion(state.tier, state.level);
      if (idx === -1) return null;
      return state.tier + ':' + state.level + ':0:' + idx;
    }
    return state.tier + ':' + state.level + ':1';
  }

  /* ---------- auth view ---------- */

  function renderAuth() {
    var isLogin = state.authMode !== 'register';
    return '<div class="auth-wrap">' +
      '<div class="edu-wordmark">ICON EDUCATION</div>' +
      '<div class="auth-title">' + (isLogin ? 'Вход' : 'Регистрация') + '</div>' +
      '<input class="auth-input" type="email" id="auth-email" placeholder="Электронная почта"/>' +
      '<input class="auth-input" type="password" id="auth-password" placeholder="Пароль"/>' +
      (isLogin ? '' : '<input class="auth-input" type="password" id="auth-password2" placeholder="Повторите пароль"/>') +
      (state.authError ? '<div class="muted-sm" style="margin:8px 0;">' + state.authError + '</div>' : '') +
      '<button class="btn strong" id="auth-submit" style="width:100%;margin-top:8px;">' + (isLogin ? 'Войти' : 'Создать аккаунт') + '</button>' +
      '<div class="muted-sm" style="margin-top:16px;text-align:center;">' +
      (isLogin ? 'Нет аккаунта? <a href="#" id="auth-toggle">Зарегистрироваться</a>' : 'Уже есть аккаунт? <a href="#" id="auth-toggle">Войти</a>') +
      '</div></div>';
  }

  /* ---------- home ---------- */

  function tierCard(key) {
    var t = TIERS[key];
    var pct = Math.round((100 * STORE.unlocked[key]) / t.levels.length);
    return '<div class="tier-card" data-tier="' + key + '">' +
      '<div class="tier-name">' + t.name + '</div>' +
      '<div class="tier-count muted">' + t.levels.length + ' уровней</div>' +
      '<div class="bar"><div class="bar-fill" style="width:' + pct + '%"></div></div>' +
      '<div class="tier-progress muted">' + STORE.unlocked[key] + ' / ' + t.levels.length + ' пройдено</div>' +
      '</div>';
  }

  function renderHome() {
    var cards = ['beginner', 'mid', 'advanced'].map(tierCard).join('');
    var stats = computeStats();
    var totalCards = Object.keys(STORE.cards).length;
    return '<div class="top-row"><div class="edu-wordmark">ICON EDUCATION</div><button class="btn" id="logout-btn">Выйти</button></div>' +
      '<div class="stat-card">' +
      '<div class="stat-big">' + fmtDuration(stats.seconds) + '</div>' +
      '<div class="stat-label muted">вы говорили по-русски</div>' +
      '<div class="stat-row muted-sm">Заданий выполнено: ' + stats.done + ' из ' + stats.total + ' · Записано фраз: ' + stats.phrases + '</div>' +
      '</div>' +
      '<div class="tiers">' + cards + '</div>' +
      '<div class="section-divider"></div>' +
      '<div class="phrases-entry" id="open-phrases">' +
      '<div class="tier-name">Ваши фразы</div>' +
      '<div class="muted-sm">' + totalCards + ' карточек на повторении</div>' +
      '</div>';
  }

  /* ---------- levels ---------- */

  function levelDots(tier, i) {
    var task1Done = firstIncompleteQuestion(tier, i) === -1;
    var t2 = getTask(tier + ':' + i + ':1');
    var task2Done = t2 && t2.completed;
    return '<div class="lvl-dots">' +
      '<span class="dot' + (task1Done ? ' on' : '') + '"></span>' +
      '<span class="dot' + (task2Done ? ' on' : '') + '"></span>' +
      '</div>';
  }

  function renderLevels() {
    var t = TIERS[state.tier];
    var unlocked = STORE.unlocked[state.tier];
    var cells = t.levels.map(function (lv, i) {
      var locked = i > unlocked;
      var done = i < unlocked;
      var cls = 'lvl-cell' + (locked ? ' locked' : '') + (done ? ' done' : '');
      return '<div class="' + cls + '" data-idx="' + i + '">' +
        '<div class="lvl-num">' + (locked ? ICONS.lock : (i + 1)) + '</div>' +
        '<div class="lvl-topic muted">' + lv.topic + '</div>' +
        (locked ? '' : levelDots(state.tier, i)) +
        '</div>';
    }).join('');
    return '<button class="btn back-btn" id="back-home">' + ICONS.arrowLeft + ' Назад</button>' +
      '<div class="lesson-title">' + t.name + '</div>' +
      '<div class="levels-grid">' + cells + '</div>';
  }

  /* ---------- record area (shared by task1-question and task2) ---------- */

  function renderRecordArea(key, isMonologue) {
    var mem = audioMemory[key];
    var task = getTask(key);
    var hasPlayableMem = mem && mem.url;

    if (state.restoring) {
      return '<div class="rec-wrap"><div class="muted-sm">Проверяем сохранённый файл на устройстве…</div></div>';
    }

    if (!mem && !(task && task.completed)) {
      return '<div class="rec-wrap">' +
        '<button id="rec-btn" class="rec-btn' + (state.recording ? ' on' : '') + '" aria-label="Записать ответ">' +
        (state.recording ? ICONS.stop : ICONS.mic) + '</button>' +
        '<div id="rec-status" class="rec-status muted">' +
        (state.recording ? 'Идёт запись… ' + fmt(state.seconds) : 'Нажмите, чтобы начать запись') +
        '</div>' +
        (state.micError ? '<div class="muted-sm" style="margin-top:8px;">' + state.micError + '</div>' : '') +
        '</div>';
    }

    var seconds = mem ? mem.seconds : (task ? task.seconds : 0);
    var hasDeviceCopy = task && (task.savedWithHandle || task.savedFileName);
    var bars = '';
    for (var i = 0; i < 28; i++) {
      var h = 6 + Math.round(Math.abs(Math.sin(i * 1.4)) * 20);
      bars += '<span style="height:' + h + 'px;"></span>';
    }

    var playControls;
    if (hasPlayableMem) {
      playControls = '<button class="btn" id="play-btn" aria-label="Прослушать">' + ICONS.play + '</button>' +
        '<div class="waveform">' + bars + '</div><span class="muted-sm">' + fmt(seconds) + '</span>';
    } else if (mem && mem.simulated) {
      playControls = '<div class="muted-sm" style="flex:1;">Запись длилась ' + fmt(seconds) + '. Микрофон недоступен в этом демо-режиме, поэтому воспроизвести её нельзя — на реальном сайте это будет работать.</div>';
    } else if (hasDeviceCopy) {
      playControls = '<div class="muted-sm" style="flex:1;">Голосовое сохранено как «' + task.savedFileName + '». Чтобы прослушать — найдите файл на устройстве.</div>' +
        '<button class="btn" id="attach-btn">' + ICONS.attach + ' Найти файл</button>' +
        '<input type="file" id="attach-input" accept="audio/*" style="display:none;"/>';
    } else {
      playControls = '<div class="muted-sm" style="flex:1;">Задание выполнено. Запись не была сохранена на устройство, поэтому переслушать её нельзя.</div>';
    }

    var saveRow = '<div class="actions-row">' +
      (hasPlayableMem ? '<button class="btn" id="save-btn">' + ICONS.download + ' Сохранить на устройство</button>' : '') +
      '<button class="btn" id="redo-btn">' + ICONS.refresh + ' Записать заново</button>' +
      '</div>';

    var afterRecordBlock;
    if (isMonologue) {
      var savedPhrases = task && task.phrases ? task.phrases : ['', '', ''];
      var rows = '';
      for (var p = 0; p < Math.max(3, savedPhrases.length); p++) {
        rows += '<input class="phrase-input" type="text" data-idx="' + p + '" placeholder="Что не удалось сказать? ' + (p + 1) + '" value="' + (savedPhrases[p] ? savedPhrases[p].replace(/"/g, '&quot;') : '') + '"/>';
      }
      afterRecordBlock = '<div class="muted-sm" style="margin:16px 0 8px;">Впишите минимум 3 фразы, которые вы не смогли сказать, забыли или в которых ошиблись, отвечая на этот вопрос</div>' +
        '<div id="phrase-rows">' + rows + '</div>' +
        '<button class="btn" id="add-phrase-btn" style="margin:8px 0 4px;">+ Добавить фразу</button>' +
        (state.phraseMsg ? '<div class="muted-sm" style="margin-top:6px;">' + state.phraseMsg + '</div>' : '') +
        '<div style="margin-top:16px;"><button class="btn strong" id="complete-btn">Следующий вопрос ' + ICONS.arrowRight + '</button></div>';
    } else {
      afterRecordBlock = '<div class="muted-sm" style="margin:16px 0 8px;">Самопроверка</div>' +
        '<label class="check-item"><input type="checkbox"/>Использовал(а) новые слова по теме</label>' +
        '<label class="check-item"><input type="checkbox"/>Говорил(а) полными предложениями</label>' +
        '<label class="check-item" style="margin-bottom:16px;"><input type="checkbox"/>Ответил(а) по существу</label>' +
        '<button class="btn strong" id="complete-btn">Готово, уровень пройден ' + ICONS.arrowRight + '</button>';
    }

    return '<div class="result-panel">' +
      '<div class="play-row">' + playControls + '</div>' +
      saveRow + afterRecordBlock +
      '</div>';
  }

  /* ---------- lesson: task 1 (monologue, one question at a time) ---------- */

  function renderTask1() {
    var lv = TIERS[state.tier].levels[state.level];
    var activeIdx = firstIncompleteQuestion(state.tier, state.level);

    var dots = lv.questions.map(function (_, i) {
      var done = activeIdx === -1 || i < activeIdx;
      var current = i === activeIdx;
      return '<span class="qdot' + (done ? ' done' : '') + (current ? ' current' : '') + '"></span>';
    }).join('');

    if (activeIdx === -1) {
      var rows = lv.questions.map(function (q, i) {
        var t = getTask(state.tier + ':' + state.level + ':0:' + i);
        var phrasesHtml = ((t && t.phrases) || []).map(function (ph) { return '<li>' + ph + '</li>'; }).join('');
        return '<div class="review-item"><div class="review-q">' + (i + 1) + '. ' + q + '</div><ul class="review-phrases">' + phrasesHtml + '</ul></div>';
      }).join('');
      return '<div class="q-progress">' + dots + '</div>' +
        '<div class="muted-sm" style="margin:8px 0 16px;">Все вопросы этого задания пройдены.</div>' + rows;
    }

    var q = lv.questions[activeIdx];
    var key = state.tier + ':' + state.level + ':0:' + activeIdx;
    return '<div class="q-progress">' + dots + '</div>' +
      '<div class="muted-sm" style="margin:8px 0 4px;">Вопрос ' + (activeIdx + 1) + ' из ' + lv.questions.length + '</div>' +
      '<div class="prompt-box">' + q + '</div>' +
      renderRecordArea(key, true);
  }

  /* ---------- lesson: task 2 (floating) ---------- */

  function renderTask2() {
    var lv = TIERS[state.tier].levels[state.level];
    var type = FLOATING_TYPES[state.level % FLOATING_TYPES.length];
    var key = state.tier + ':' + state.level + ':1';
    return '<span class="chip">' + type.name + '</span>' +
      '<div class="prompt-box">' + type.prompt(lv.topic) +
      '<div class="example-box">' + type.example(lv.topic) + '</div></div>' +
      renderRecordArea(key, false);
  }

  function renderLesson() {
    var t = TIERS[state.tier];
    var lv = t.levels[state.level];
    var task1Done = firstIncompleteQuestion(state.tier, state.level) === -1;

    var tabs = '<div class="task-tabs">' +
      '<button class="tab-btn' + (state.taskIdx === 0 ? ' active' : '') + '" data-tab="0">Задание 1</button>' +
      '<button class="tab-btn' + (state.taskIdx === 1 ? ' active' : '') + (task1Done ? '' : ' tab-disabled') + '" data-tab="1"' + (task1Done ? '' : ' disabled') + '>Задание 2</button>' +
      '</div>';

    return '<button class="btn back-btn" id="back-levels">' + ICONS.arrowLeft + ' К уровням</button>' +
      '<div class="breadcrumb muted">' + t.name + ' · уровень ' + (state.level + 1) + '</div>' +
      '<div class="lesson-title">' + lv.topic + '</div>' +
      tabs +
      (state.taskIdx === 0 ? '<span class="chip">Монолог на время</span>' + renderTask1() : renderTask2());
  }

  /* ---------- your phrases (spaced-repetition cards) ---------- */

  function renderCard(c) {
    var flipped = state.flippedCards[c.id];
    if (!flipped) {
      return '<div class="phrase-card" data-card="' + c.id + '"><div class="phrase-card-text">' + c.text + '</div></div>';
    }
    if (c.box >= 7) {
      return '<div class="phrase-card flipped" data-card="' + c.id + '">' +
        '<div class="muted-sm" style="margin-bottom:8px;">' + c.text + '</div>' +
        '<div class="chip" style="margin-bottom:8px;">Выучено</div>' +
        (c.sentence ? '<div style="font-size:13px;">' + c.sentence + '</div>' : '') +
        '<button class="btn phrase-collapse-btn" data-card="' + c.id + '" style="margin-top:10px;width:100%;">Свернуть</button>' +
        '</div>';
    }
    return '<div class="phrase-card flipped" data-card="' + c.id + '">' +
      '<div class="muted-sm" style="margin-bottom:8px;">' + c.text + '</div>' +
      '<textarea class="phrase-sentence-input" data-card="' + c.id + '" placeholder="Напишите предложение с этой фразой">' + (c.sentence || '') + '</textarea>' +
      (state.cardMsg[c.id] ? '<div class="muted-sm" style="margin-top:6px;">' + state.cardMsg[c.id] + '</div>' : '') +
      '<button class="btn strong phrase-advance-btn" data-card="' + c.id + '" style="margin-top:8px;width:100%;">Дальше → Повтор №' + Math.min(c.box + 1, 7) + '</button>' +
      '<button class="btn phrase-collapse-btn" data-card="' + c.id + '" style="margin-top:8px;width:100%;">Свернуть</button>' +
      '</div>';
  }

  function renderPhrases() {
    var tabs = '';
    for (var b = 1; b <= 7; b++) {
      var count = cardsInBox(b).length;
      tabs += '<button class="phrase-tab' + (state.phraseBox === b ? ' active' : '') + '" data-box="' + b + '">Повтор №' + b + ' <span class="muted-sm">(' + count + ')</span></button>';
    }
    var cardsList = cardsInBox(state.phraseBox);
    var cardsHtml = cardsList.length ? cardsList.map(renderCard).join('') : '<div class="muted-sm">Здесь пока нет карточек.</div>';
    return '<button class="btn back-btn" id="back-home-from-phrases">' + ICONS.arrowLeft + ' Назад</button>' +
      '<div class="lesson-title">Ваши фразы</div>' +
      '<div class="phrase-tabs">' + tabs + '</div>' +
      '<div class="phrase-grid">' + cardsHtml + '</div>';
  }

  /* ---------- render dispatch ---------- */

  function render() {
    var app = document.getElementById('app');
    if (state.view === 'loading') app.innerHTML = '<div class="muted-sm" style="margin-top:60px;text-align:center;">Загрузка…</div>';
    else if (state.view === 'auth') app.innerHTML = renderAuth();
    else if (state.view === 'home') app.innerHTML = renderHome();
    else if (state.view === 'levels') app.innerHTML = renderLevels();
    else if (state.view === 'phrases') app.innerHTML = renderPhrases();
    else app.innerHTML = renderLesson();
    bind();
    if (state.view === 'lesson') maybeAutoRestore();
  }

  /* ---------- auto-restore from device via File System Access API ---------- */

  function maybeAutoRestore() {
    var key = activeKey();
    if (!key || audioMemory[key]) return;
    var task = getTask(key);
    if (!task || !task.completed || !task.savedWithHandle) return;
    if (!HAS_FS_ACCESS) return;

    state.restoring = true;
    render();
    idbGet(key).then(function (handle) {
      if (!handle) { state.restoring = false; render(); return; }
      return handle.queryPermission({ mode: 'read' }).then(function (perm) {
        if (perm !== 'granted') { state.restoring = false; render(); return; }
        return handle.getFile().then(function (file) {
          var url = URL.createObjectURL(file);
          audioMemory[key] = { url: url, seconds: task.seconds || 0 };
          state.restoring = false;
          render();
        });
      });
    }).catch(function () {
      state.restoring = false;
      render();
    });
  }

  /* ---------- recording ---------- */

  function stopStream(recorder) {
    if (recorder && recorder.stream) recorder.stream.getTracks().forEach(function (tr) { tr.stop(); });
  }

  function startRecording() {
    state.micError = null;
    var key = activeKey();
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      state.micError = 'Микрофон недоступен в этом окружении. На реальном сайте запись идёт через микрофон устройства.';
      simulateRecording();
      return;
    }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      state.audioChunks = [];
      var mr = new MediaRecorder(stream);
      state.mediaRecorder = mr;
      mr.ondataavailable = function (e) { if (e.data && e.data.size > 0) state.audioChunks.push(e.data); };
      mr.onstop = function () {
        var blob = new Blob(state.audioChunks, { type: 'audio/webm' });
        audioMemory[key] = { url: URL.createObjectURL(blob), blob: blob, seconds: state.seconds };
        stopStream(mr);
        state.recording = false;
        render();
      };
      mr.start();
      state.recording = true;
      state.seconds = 0;
      render();
      state.timer = setInterval(function () {
        state.seconds++;
        var el = document.getElementById('rec-status');
        if (el) el.textContent = 'Идёт запись… ' + fmt(state.seconds);
      }, 1000);
    }).catch(function () {
      state.micError = 'Доступ к микрофону не разрешён. После разрешения запись сохраняется только у вас на устройстве.';
      simulateRecording();
    });
  }

  function simulateRecording() {
    state.recording = true;
    state.seconds = 0;
    render();
    state.timer = setInterval(function () {
      state.seconds++;
      var el = document.getElementById('rec-status');
      if (el) el.textContent = 'Идёт запись… ' + fmt(state.seconds);
    }, 1000);
  }

  function stopRecording() {
    clearInterval(state.timer);
    var key = activeKey();
    if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
      state.mediaRecorder.stop();
    } else {
      state.recording = false;
      if (!audioMemory[key]) audioMemory[key] = { url: null, seconds: state.seconds, simulated: true };
      render();
    }
  }

  /* ---------- bind ---------- */

  function bind() {
    var app = document.getElementById('app');

    var authToggle = document.getElementById('auth-toggle');
    if (authToggle) authToggle.addEventListener('click', function (e) {
      e.preventDefault();
      state.authMode = state.authMode === 'register' ? 'login' : 'register';
      state.authError = '';
      render();
    });

    var authSubmit = document.getElementById('auth-submit');
    if (authSubmit) authSubmit.addEventListener('click', function () {
      var email = (document.getElementById('auth-email').value || '').trim().toLowerCase();
      var pass = document.getElementById('auth-password').value || '';
      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(email)) { state.authError = 'Введите корректную почту.'; render(); return; }
      if (pass.length < 6) { state.authError = 'Пароль должен быть не короче 6 символов.'; render(); return; }

      if (state.authMode === 'register') {
        var pass2 = document.getElementById('auth-password2').value || '';
        if (pass !== pass2) { state.authError = 'Пароли не совпадают.'; render(); return; }
        auth.createUserWithEmailAndPassword(email, pass).then(function (cred) {
          STORE = defaultStore();
          return db.collection('progress').doc(cred.user.uid).set(STORE).then(function () {
            state.currentUser = cred.user.uid;
            state.authError = '';
            state.view = 'home';
            render();
          });
        }).catch(function (err) { state.authError = mapAuthError(err); render(); });
      } else {
        auth.signInWithEmailAndPassword(email, pass).then(function (cred) {
          loadAndEnterApp(cred.user.uid);
        }).catch(function (err) { state.authError = mapAuthError(err); render(); });
      }
    });

    var logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.addEventListener('click', function () {
      auth.signOut().then(function () {
        state.currentUser = null;
        STORE = null;
        state.view = 'auth';
        state.authMode = 'login';
        render();
      });
    });

    app.querySelectorAll('[data-tier]').forEach(function (node) {
      node.addEventListener('click', function () {
        state.tier = node.getAttribute('data-tier');
        state.view = 'levels';
        render();
      });
    });

    var backHome = document.getElementById('back-home');
    if (backHome) backHome.addEventListener('click', function () { state.view = 'home'; render(); });

    var openPhrases = document.getElementById('open-phrases');
    if (openPhrases) openPhrases.addEventListener('click', function () {
      state.view = 'phrases';
      state.phraseBox = 1;
      render();
    });

    var backHomeFromPhrases = document.getElementById('back-home-from-phrases');
    if (backHomeFromPhrases) backHomeFromPhrases.addEventListener('click', function () { state.view = 'home'; render(); });

    app.querySelectorAll('.phrase-tab').forEach(function (node) {
      node.addEventListener('click', function () {
        state.phraseBox = parseInt(node.getAttribute('data-box'), 10);
        render();
      });
    });

    app.querySelectorAll('.phrase-card:not(.flipped)').forEach(function (node) {
      node.addEventListener('click', function () {
        state.flippedCards[node.getAttribute('data-card')] = true;
        render();
      });
    });

    app.querySelectorAll('.phrase-collapse-btn').forEach(function (node) {
      node.addEventListener('click', function () {
        var id = node.getAttribute('data-card');
        delete state.flippedCards[id];
        delete state.cardMsg[id];
        render();
      });
    });

    app.querySelectorAll('.phrase-advance-btn').forEach(function (node) {
      node.addEventListener('click', function () {
        var id = node.getAttribute('data-card');
        var ta = app.querySelector('.phrase-sentence-input[data-card="' + id + '"]');
        if (!ta) return;
        var newText = ta.value.trim();
        if (!newText) {
          state.cardMsg[id] = 'Напишите предложение с этой фразой.';
          render();
          return;
        }
        var prevText = (STORE.cards[id].sentence || '').trim();
        if (prevText && newText === prevText) {
          state.cardMsg[id] = 'Это то же предложение, что и в прошлый раз. Сотрите его и напишите новое.';
          render();
          return;
        }
        STORE.cards[id].sentence = newText;
        STORE.cards[id].box = Math.min(STORE.cards[id].box + 1, 7);
        saveStore();
        delete state.flippedCards[id];
        delete state.cardMsg[id];
        render();
      });
    });

    var backLevels = document.getElementById('back-levels');
    if (backLevels) backLevels.addEventListener('click', function () {
      clearInterval(state.timer);
      state.recording = false;
      state.view = 'levels';
      render();
    });

    app.querySelectorAll('.lvl-cell:not(.locked)').forEach(function (node) {
      node.addEventListener('click', function () {
        var idx = parseInt(node.getAttribute('data-idx'), 10);
        state.level = idx;
        var q = firstIncompleteQuestion(state.tier, idx);
        if (q !== -1) {
          state.taskIdx = 0;
        } else {
          var t2 = getTask(state.tier + ':' + idx + ':1');
          state.taskIdx = (t2 && t2.completed) ? 0 : 1;
        }
        state.view = 'lesson';
        state.recording = false;
        state.seconds = 0;
        state.micError = null;
        state.phraseMsg = '';
        render();
      });
    });

    app.querySelectorAll('.tab-btn:not([disabled])').forEach(function (node) {
      node.addEventListener('click', function () {
        clearInterval(state.timer);
        state.taskIdx = parseInt(node.getAttribute('data-tab'), 10);
        state.recording = false;
        state.seconds = 0;
        state.micError = null;
        state.phraseMsg = '';
        render();
      });
    });

    var recBtn = document.getElementById('rec-btn');
    if (recBtn) recBtn.addEventListener('click', function () {
      if (!state.recording) startRecording(); else stopRecording();
    });

    var playBtn = document.getElementById('play-btn');
    if (playBtn) playBtn.addEventListener('click', function () {
      var mem = audioMemory[activeKey()];
      if (mem && mem.url) new Audio(mem.url).play();
    });

    var attachBtn = document.getElementById('attach-btn');
    var attachInput = document.getElementById('attach-input');
    if (attachBtn && attachInput) {
      attachBtn.addEventListener('click', function () { attachInput.click(); });
      attachInput.addEventListener('change', function () {
        var file = attachInput.files[0];
        if (!file) return;
        var key = activeKey();
        var task = getTask(key);
        audioMemory[key] = { url: URL.createObjectURL(file), seconds: task ? task.seconds : 0 };
        render();
      });
    }

    var saveBtn = document.getElementById('save-btn');
    if (saveBtn) saveBtn.addEventListener('click', function () {
      var key = activeKey();
      var mem = audioMemory[key];
      var blob = mem && mem.blob ? mem.blob : new Blob([], { type: 'audio/webm' });
      var suggestedName = 'govori-svobodno-' + key.replace(/:/g, '-') + '.webm';

      if (HAS_FS_ACCESS) {
        window.showSaveFilePicker({ suggestedName: suggestedName }).then(function (handle) {
          return handle.createWritable().then(function (writable) {
            return writable.write(blob).then(function () { return writable.close(); });
          }).then(function () {
            return idbSet(key, handle);
          }).then(function () {
            setTask(key, { savedFileName: handle.name, savedWithHandle: true });
            render();
          });
        }).catch(function () {});
      } else {
        var a = document.createElement('a');
        a.href = mem && mem.url ? mem.url : '#';
        a.download = suggestedName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTask(key, { savedFileName: suggestedName, savedWithHandle: false });
        render();
      }
    });

    var redo = document.getElementById('redo-btn');
    if (redo) redo.addEventListener('click', function () {
      var key = activeKey();
      delete audioMemory[key];
      var task = getTask(key);
      if (task) { task.completed = false; saveStore(); }
      state.seconds = 0;
      state.phraseMsg = '';
      render();
    });

    var addPhrase = document.getElementById('add-phrase-btn');
    if (addPhrase) addPhrase.addEventListener('click', function () {
      var wrap = document.getElementById('phrase-rows');
      var idx = wrap.querySelectorAll('.phrase-input').length;
      var input = document.createElement('input');
      input.className = 'phrase-input';
      input.type = 'text';
      input.setAttribute('data-idx', idx);
      input.placeholder = 'Что не удалось сказать? ' + (idx + 1);
      wrap.appendChild(input);
    });

    var complete = document.getElementById('complete-btn');
    if (complete) complete.addEventListener('click', function () {
      var key = activeKey();
      var mem = audioMemory[key];
      var seconds = mem ? mem.seconds : state.seconds;

      if (state.taskIdx === 0) {
        var inputs = app.querySelectorAll('.phrase-input');
        var phrases = [];
        inputs.forEach(function (inp) { if (inp.value.trim()) phrases.push(inp.value.trim()); });
        if (phrases.length < 3) {
          state.phraseMsg = 'Добавьте ещё ' + (3 - phrases.length) + ' фраз(у) — минимум 3.';
          render();
          return;
        }
        setTask(key, { completed: true, seconds: seconds, phrases: phrases });
        phrases.forEach(function (p) {
          var cardId = key + '::' + Date.now() + '::' + Math.random().toString(36).slice(2, 7);
          STORE.cards[cardId] = { text: p, box: 1, sentence: '', createdAt: Date.now() };
        });
        saveStore();
        state.phraseMsg = '';
        state.seconds = 0;
        state.micError = null;
        if (firstIncompleteQuestion(state.tier, state.level) === -1) state.taskIdx = 1;
        render();
      } else {
        setTask(key, { completed: true, seconds: seconds });
        var task1Done = firstIncompleteQuestion(state.tier, state.level) === -1;
        if (task1Done) {
          var unlocked = STORE.unlocked[state.tier];
          var total = TIERS[state.tier].levels.length;
          if (state.level === unlocked && unlocked < total - 1) STORE.unlocked[state.tier] = unlocked + 1;
          saveStore();
        }
        state.view = 'levels';
        render();
      }
    });
  }

  /* ---------- boot ---------- */

  state.view = 'loading';
  render();

  auth.onAuthStateChanged(function (user) {
    if (state.currentUser) return; // already loaded via the login/register flow above
    if (user) loadAndEnterApp(user.uid);
    else { state.view = 'auth'; render(); }
  });
})();
