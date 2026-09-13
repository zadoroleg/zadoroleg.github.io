# zadoroleg.github.io

Статический персональный сайт-портфолио Олега Задорожного (Creative Digital Producer). Хостится на GitHub Pages.

## Project Structure

- `index.html` - Вся разметка страницы (header, hero, секции 01-06: о себе, компетенции, проекты, опыт, профиль, контакты)
- `styles.css` - Все стили. Цвета и шрифты взяты из Figma-макета
- `assets/` - Изображения: `hero.png`, `project-1.png`, `project-2.png`
- `.gitignore` - Игнорирование мусорных файлов

## Styling

- Шрифт: Inter (Google Fonts, подключается в `index.html`)
- Цвета: фон `#f5f5f3`, текст `#1b1b1b`, вторичный `#666`, акцент `#cfff00`
- Контейнер: `max-width: 1920px`, паддинги 20/40/80px
- Брейкпоинты: 640px (sm), 768px (md), 1024px (lg), 1280px (xl) — соответствуют Tailwind default
- Мобильное меню (<640px): полноэкранный оверлей, checkbox-hack (`#menu-toggle`), закрытие по клику на ссылку — мини-скрипт в `index.html`
- `main.container` — flex-col с gap; `.section` — с бордером сверху (`1px`, `rgba(27,27,27,0.15)`)

## Публикация

Сайт статический: правки в `index.html`/`styles.css`/`assets/` применяются сразу на сайте GitHub Pages после коммита и пуша в `main`.