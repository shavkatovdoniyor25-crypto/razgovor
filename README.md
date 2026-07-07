# Говорю свободно

Статический сайт (HTML/CSS/JS без сборки) для практики устной русской речи. Хостится бесплатно на GitHub Pages, прогресс и фразы учеников хранятся в Firebase (Auth + Firestore, бесплатный план Spark).

## Файлы

- `index.html`, `style.css`, `script.js` — сам сайт
- `firebase-config.js` — ключи вашего Firebase-проекта (нужно вставить свои)
- `firestore.rules` — правила безопасности Firestore (вставляются в консоль Firebase, отдельно не деплоятся)

## Запуск локально

Микрофон в браузере работает только по `https://` или `http://localhost` — просто открыть `index.html` двойным кликом (`file://`) для записи голоса не подойдёт. Запустите локальный сервер:

```
python3 -m http.server 5500
```

и откройте `http://localhost:5500`.

## Настройка Firebase (один раз)

1. [console.firebase.google.com](https://console.firebase.google.com) → Add project → бесплатный план Spark, карта не нужна.
2. В проекте: Project settings (шестерёнка) → General → Your apps → Add app → Web (`</>`) → зарегистрировать. Скопировать объект `firebaseConfig`.
3. Вставить эти значения в `firebase-config.js` вместо `REPLACE_ME`.
4. Build → Authentication → Get started → вкладка Sign-in method → включить **Email/Password**.
5. Build → Firestore Database → Create database → Production mode → выбрать регион → Enable.
6. Firestore Database → вкладка Rules → вставить содержимое `firestore.rules` → Publish.
7. После того как сайт окажется на GitHub Pages: Authentication → Settings → Authorized domains → добавить домен вида `<username>.github.io`.

## Деплой на GitHub Pages

```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <URL вашего пустого репозитория>
git push -u origin main
```

Затем на GitHub: Settings → Pages → Source: Deploy from branch → Branch: `main` / `(root)` → Save. Через 1–2 минуты сайт появится на `https://<username>.github.io/<repo>/`.

## Как это остаётся бесплатным

- GitHub Pages — бесплатный хостинг статики без ограничений по количеству посетителей.
- Firestore/Auth на плане Spark: 20 000 записей и 50 000 чтений в день, 1 ГБ хранилища — с большим запасом для курса на несколько сотен учеников (см. расчёты в переписке).
- Голосовые записи никогда не отправляются на сервер — только текстовый прогресс (пройденные уровни, фразы, предложения).
- Прогресс ученика, не заходившего 30 дней подряд, автоматически стирается при следующем входе — хранилище не засоряется забытыми аккаунтами.
