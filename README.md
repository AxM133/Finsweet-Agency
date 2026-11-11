# Finsweet Agency

Учебный проект: адаптивный сайт IT-агентства по готовым макетам. Десять страниц, анимации, рабочие формы, загрузка данных с кэшированием и архитектура **Feature-Sliced Design**.

Данных с настоящего сервера пока нет: все запросы идут в локальный mock-API, но через те же схемы и хуки, что понадобятся для реального бэкенда (см. [Работа с данными](#работа-с-данными)).

## Содержание

- [Что внутри](#что-внутри)
- [Технологии](#технологии)
- [Быстрый старт](#быстрый-старт)
- [Скрипты](#скрипты)
- [Страницы и маршруты](#страницы-и-маршруты)
- [Структура репозитория](#структура-репозитория)
- [Архитектура (FSD)](#архитектура-fsd)
- [Ключевые приёмы в коде](#ключевые-приёмы-в-коде)
- [Работа с данными](#работа-с-данными)
- [Дизайн-токены и стили](#дизайн-токены-и-стили)
- [Как добавить страницу / сущность](#как-добавить-страницу--сущность)
- [Соглашения](#соглашения)
- [Ограничения и что можно улучшить](#ограничения-и-что-можно-улучшить)

## Что внутри

- 10 страниц по макетам из папки [`design/`](design) + страница 404.
- Типобезопасные запросы: ответ валидируется схемой **zod**, тип выводится из неё (`z.infer`).
- Рабочие формы (подписка, контакты, отклик на вакансию) с валидацией, состояниями загрузки, ошибки и успеха.
- Анимации: появление при скролле, каскады, счётчики, параллакс, раскрытие картинок, слайдер отзывов, вкладки. Учитывается `prefers-reduced-motion`.
- Поиск и подгрузка «Load more» в блоге, фильтр вакансий по отделам.
- Скелетоны загрузки и блок «Try again» при ошибке запроса.
- Страницы 404 для несуществующих постов, вакансий и сотрудников.
- Адаптивная вёрстка (мобильное меню, сетки под разные ширины).

## Технологии

| Что                                                                       | Версия | Зачем и где используется                                                                                                                                  |
| ------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [React](https://react.dev)                                                | 19     | UI. Функциональные компоненты и хуки                                                                                                                      |
| [TypeScript](https://www.typescriptlang.org)                              | 6      | Типизация. Включены `verbatimModuleSyntax` и `erasableSyntaxOnly` (поэтому нет `enum`, вместо них `as const`)                                             |
| [Vite](https://vite.dev)                                                  | 8      | Сборщик и dev-сервер, алиас `@` → `src`                                                                                                                   |
| [React Router](https://reactrouter.com)                                   | 8      | Маршрутизация: `createBrowserRouter`, ленивая загрузка страниц (`lazy`), `NavLink`, `ScrollRestoration`, `generatePath`, `useSearchParams`                |
| [TanStack Query](https://tanstack.com/query)                              | 5      | Серверное состояние: `useQuery`, `useInfiniteQuery`, `useMutation`, `queryOptions`, кэш и повторные запросы                                               |
| [Zod](https://zod.dev)                                                    | 4      | Схемы данных и форм: валидация ответов API, валидация форм, `z.infer`, `discriminatedUnion`                                                               |
| [Tailwind CSS](https://tailwindcss.com)                                   | 4      | Стили. Токены темы заданы в CSS через `@theme`, подключён плагином `@tailwindcss/vite`                                                                    |
| [Motion](https://motion.dev)                                              | 14     | Анимации: `whileInView`, `AnimatePresence`, `layout`, `useScroll`, `useSpring`, `clipPath`                                                                |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) + [clsx](https://github.com/lukeed/clsx) | 3 / 2 | Функция `cn()`: склеивает классы и разрешает конфликты (`px-4` + `px-8`)                                                                |
| [react-icons](https://react-icons.github.io/react-icons/)                 | 5      | Иконки: Lucide (`react-icons/lu`) и брендовые Font Awesome (`react-icons/fa6`)                                                                            |
| [@fontsource/poppins](https://fontsource.org/fonts/poppins)               | 5      | Шрифт Poppins, подключён локально (без обращения к Google Fonts)                                                                                          |
| [ESLint](https://eslint.org) + typescript-eslint, react-hooks, react-refresh | 10 / 8 / 7 / 0.5 | Линтинг кода                                                                                                                                 |
| [Feature-Sliced Design](https://feature-sliced.design)                    | —      | Методология организации папок и зависимостей                                                                                                              |
| [OpenStreetMap](https://www.openstreetmap.org)                            | —      | Карта на странице Contact (iframe-виджет, ключ не нужен)                                                                                                  |

Бэкенда, UI-библиотек готовых компонентов и тестового фреймворка в проекте нет: компоненты написаны с нуля.

## Быстрый старт

Нужен Node.js актуальной LTS-версии (разработка велась на Node 26) и npm.

```bash
git clone <url-репозитория>
cd "Finsweet Agency/finsweet-agency"   # приложение лежит во вложенной папке

npm install
npm run dev
```

Откройте адрес, который напечатает Vite (обычно <http://localhost:5173>).

В режиме разработки доступна страница **`/ui-kit`**: витрина всех базовых компонентов из `shared/ui`. В продакшен-сборку она не попадает.

## Скрипты

Выполняются из папки `finsweet-agency/`.

| Команда           | Что делает                                              |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Dev-сервер с горячей перезагрузкой                      |
| `npm run build`   | Проверка типов (`tsc -b`) и продакшен-сборка в `dist/`  |
| `npm run preview` | Локальный просмотр собранного `dist/`                   |
| `npm run lint`    | ESLint по всему проекту                                 |

Перед коммитом полезно запускать `npm run build && npm run lint`.

## Страницы и маршруты

Все пути хранятся в одном месте: [`src/shared/config/routes.ts`](finsweet-agency/src/shared/config/routes.ts). Страницы подгружаются лениво, у каждой свой чанк.

| Маршрут              | Страница                                  | Что интересного                                                                                         |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `/`                  | Home                                      | Hero, счётчики, слайдер отзывов с автопрокруткой, блоки с данными из API                                |
| `/services`          | Services                                  | Якорная навигация по блокам, чередующиеся секции текст/фото                                             |
| `/company`           | Company                                   | Параллакс-баннер, сетка команды с hover-оверлеем                                                        |
| `/blog`              | Blog                                      | Trending, Recent, «All posts» с поиском (`?q=`), «Load more» (`useInfiniteQuery`)                       |
| `/blog/:slug`        | Статья                                    | Индикатор чтения, время чтения, шеринг, предыдущий/следующий пост                                       |
| `/careers`           | Careers                                   | Слово «Careers» из фото (`background-clip: text`), фильтр вакансий с анимацией                          |
| `/careers/:slug`     | Вакансия                                  | Доступные вкладки (`Tabs`), форма отклика с валидацией                                                  |
| `/contact`           | Contact                                   | Форма, контакты, карта                                                                                  |
| `/team/:slug`        | Сотрудник                                 | Профиль и посты автора                                                                                  |
| `/privacy-policy`    | Privacy Policy                            | Контент из структурированных блоков (`RichContent`)                                                     |
| `*`                  | 404                                       | Общий блок `NotFoundBlock`, он же для несуществующих постов, вакансий и людей                           |
| `/ui-kit`            | UI-кит (**только dev**)                   | Витрина базовых компонентов                                                                             |

## Структура репозитория

```text
Finsweet Agency/
├── design/                    # макеты страниц (PNG/JPG)
├── finsweet-agency/           # приложение
│   ├── public/
│   ├── src/
│   │   ├── app/               # точка входа: провайдеры, роутер, layout, глобальные стили
│   │   ├── pages/             # по слайсу на каждый маршрут
│   │   ├── widgets/           # крупные блоки, которые повторяются на нескольких страницах
│   │   ├── features/          # действия пользователя (формы, шеринг)
│   │   ├── entities/          # бизнес-сущности: схема, запросы, карточки
│   │   ├── shared/            # переиспользуемое без бизнес-логики
│   │   └── main.tsx           # вход: рендер <App />
│   ├── index.html
│   ├── vite.config.ts
│   └── eslint.config.js
└── README.md
```

## Архитектура (FSD)

Код разложен по слоям **Feature-Sliced Design**. Слои расположены сверху вниз, и действует главное правило:

> **Модуль может импортировать только из слоёв ниже себя.** Слайсы одного слоя друг друга не импортируют.

```text
app        →  собирает приложение
pages      →  страницы (маршруты)
widgets    →  большие блоки интерфейса
features   →  действия пользователя
entities   →  бизнес-сущности
shared     →  инфраструктура и UI-кит
```

| Слой       | Что лежит                                                       | Слайсы в проекте                                                                                                      |
| ---------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `app`      | Провайдеры (React Query, Motion), роутер, `RootLayout`, стили   | —                                                                                                                     |
| `pages`    | Страница целиком + секции, которые нужны только ей              | home, services, company, blog, blog-post, careers, career-details, contact, team-member, privacy-policy, not-found, ui-kit |
| `widgets`  | Блоки, повторяющиеся на разных страницах                        | header, footer, newsletter, process, expertise, stats, client-logos, office-gallery, not-found                        |
| `features` | Действия: форма + мутация + схема                               | subscribe-newsletter, send-message, apply-to-job, share-post                                                          |
| `entities` | Сущность: zod-схема, запросы к API, карточка                    | post, job, team-member, service, testimonial                                                                          |
| `shared`   | `ui` (UI-кит), `api` (запросы), `lib` (хелперы), `config`, `assets` | —                                                                                                                 |

**Публичный API слайса.** У каждого слайса есть `index.ts`, и импортировать нужно только из него:

```ts
import { Header } from '@/widgets/header'            // правильно
import { Header } from '@/widgets/header/ui/Header'  // неправильно: лезем во внутренности
```

**Сегменты внутри слайса:** `ui/` (компоненты), `model/` (схемы, типы, константы), `api/` (запросы), `lib/` (хелперы). Создаются только когда нужны.

**Куда класть блок?** Если секция нужна одной странице, она живёт в `pages/<страница>/ui/`. Если появилась на второй странице (как Newsletter, Process, Stats), её переносят в `widgets/`.

## Ключевые приёмы в коде

Здесь собраны места, на которые стоит посмотреть, чтобы разобраться в проекте.

### Дженерики

| Где                                                       | Что делает                                                                                           |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `shared/api/request.ts` — `request<TSchema>`              | Запрос, возвращающий `z.infer<TSchema>`: тип ответа берётся из схемы                                 |
| `shared/lib/use-zod-form.ts` — `useZodForm<TSchema>`      | Хук формы: схема даёт и валидацию, и тип значений в `onSubmit`                                       |
| `shared/ui/query-state` — `QueryState<TData>`             | Рисует скелетон / ошибку / данные по результату `useQuery` или `useInfiniteQuery`                    |
| `shared/ui/list` — `List<TItem>`                          | Список, тип элемента выводится из `items`                                                            |
| `shared/ui/tabs` — `Tabs<TValue>`                         | Вкладки, значения вкладок типизированы                                                               |
| `shared/lib/polymorphic.ts` — `PolymorphicProps<T>`       | Основа компонентов с пропом `as`: `Button`, `Heading`, `Card`                                        |
| `app/router/lazy-page.ts` — `lazyPage<TName>`             | Ленивая загрузка страницы по имени экспорта                                                          |

### Запросы и кэш

Запросы описываются один раз через `queryOptions` и используются в любом компоненте:

```tsx
// entities/post/api/posts.ts
export const postQueries = {
  trending: () => queryOptions({ queryKey: ['posts', 'trending'], queryFn: ... }),
}

// компонент
const query = useQuery(postQueries.trending())

<QueryState query={query} skeleton={<Skeleton />}>
  {(post) => <TrendingPost post={post} />}
</QueryState>
```

### Формы

```tsx
const { formProps, errors, isSubmitting, submitError } = useZodForm({
  schema: subscribeSchema,                       // zod-схема
  onSubmit: async (values) => { /* values типизированы */ },
})

<form {...formProps}>
  <Input name="email" error={errors.email} />   {/* name совпадает с ключом схемы */}
</form>
```

Ошибка очищается при вводе, первое невалидное поле получает фокус, отправка блокирует поля.

### UI-кит (`shared/ui`)

`Button`, `Input`, `Textarea`, `Checkbox`, `Card`, `Heading`, `Eyebrow`, `Container`, `Section`, `Avatar`, `Logo`, `List`, `Tabs`, `Skeleton`, `QueryState`, `IconBadge`, `RichContent`, `SocialLinks`, декор (`PixelCorner`, `PixelMark`, `PixelSquare`, `AccentBar`) и анимации (`Reveal`, `Stagger`/`StaggerItem`, `CountUp`, `ImageReveal`, `ParallaxImage`). Живую витрину смотрите на `/ui-kit` в dev-режиме.

Компоненты с классами используют `cn()` из `@/shared/lib`: класс, переданный снаружи, перебивает базовый.

### Анимации

Построены на `motion`. Общие обёртки лежат в `shared/ui/motion/`, поэтому в страницах почти нет «сырых» анимаций. Глобально включён `MotionConfig reducedMotion="user"`, а плавная прокрутка по якорям отключается при `prefers-reduced-motion`.

## Работа с данными

Сервера нет: данные лежат в коде слайсов (`entities/*/api/`), а запрос имитируется функцией `mockRequest(schema, data, delay)`. Она ждёт заданное время и **прогоняет данные через ту же zod-схему**, что и настоящий ответ.

Подключение реального API: в файлах `entities/*/api/*.ts` и `features/*/api/*.ts` заменить

```ts
mockRequest(postListSchema, POSTS)
```

на

```ts
request('/posts', postListSchema)
```

и задать адрес сервера в `.env`:

```bash
VITE_API_URL=https://api.example.com
```

Компоненты, хуки и схемы менять не нужно. Ошибки HTTP превращаются в `HttpError`, 404 не повторяется, а страницы показывают блок «not found».

## Дизайн-токены и стили

Токены заданы в [`src/app/styles/index.css`](finsweet-agency/src/app/styles/index.css) через `@theme` и сразу доступны как классы Tailwind. Значения сняты с макетов.

| Токен                        | Значение  | Пример класса                 |
| ---------------------------- | --------- | ----------------------------- |
| `ink`                        | `#232536` | `text-ink`, `bg-ink`          |
| `body` / `muted` / `line`    | `#404150` / `#7b7c86` / `#d3d3d7` | `text-muted`, `border-line` |
| `primary` / `primary-dark`   | `#444cfc` / `#3a41dc` | `bg-primary`                 |
| `brand`                      | `#666dff` | `bg-brand`                    |
| `orange` / `peach` / `peach-soft` | `#ffa155` / `#ffd3af` / `#ffe6d2` | `bg-peach-soft`   |
| `mint` / `lavender` / `surface` | `#edf8fa` / `#f9f9ff` / `#f9f9f9` | `bg-mint`            |

Шрифт: Poppins (400, 500, 600, 800).

## Как добавить страницу / сущность

**Новая страница**

1. Создать `src/pages/<имя>/` с `ui/<Имя>Page.tsx` и `index.ts` (`export { <Имя>Page } from './ui/<Имя>Page'`).
2. Добавить путь в `ROUTES` (`shared/config/routes.ts`).
3. Подключить в `app/router/router.tsx`:
   ```tsx
   { path: ROUTES.myPage, lazy: lazyPage(() => import('@/pages/my-page'), 'MyPage') }
   ```
4. Добавить ссылку в `widgets/header/model/nav-links.ts` (если нужна в меню).

**Новая сущность с данными**

1. `entities/<имя>/model/schema.ts`: zod-схема и тип (`z.infer`).
2. `entities/<имя>/api/<имя>.ts`: запросы через `queryOptions` (пока с `mockRequest`).
3. `entities/<имя>/ui/`: карточка и скелетон.
4. Экспортировать нужное из `entities/<имя>/index.ts`.
5. В странице: `useQuery(...)` + `<QueryState>`.

**Новая форма**: zod-схема в `features/<имя>/model/schema.ts`, мутация в `api/`, компонент на `useZodForm` в `ui/`.

## Соглашения

- **Импорты:** только через алиас `@/` и только из публичного API слайса (`index.ts`).
- **Типы:** `import type` для типов; без `enum` (используем `as const`).
- **Стили:** Tailwind-классы, цвета только из токенов темы, без инлайн-стилей.
- **Коммиты:** [Conventional Commits](https://www.conventionalcommits.org): `feat(pages): build Home page`, `fix(shared): ...`, `chore: ...`, `refactor: ...`.
- **Перед коммитом:** `npm run build && npm run lint`.

## Ограничения и что можно улучшить

- **Нет бэкенда.** Данные локальные, формы никуда не отправляются (имитация).
- **Фотографии вырезаны из макетов** (около 300–500 px), на ретина-экранах они мягкие. Для продакшена нужны оригиналы.
- **Автотестов нет.** Проект проверялся сборкой, линтером и ручным просмотром; один раз для проверки рендера страниц использовался одноразовый SSR-прогон (в репозиторий не входит).
- **Один и тот же текст статьи** у всех постов, а тексты вакансий (кроме вкладки Details) придуманы.
- Ссылка «Terms of use» в футере ведёт на `#`, такой страницы в макетах нет.
- Координаты карты на странице Contact примерные (`SITE.coordinates`).
- Идеи на будущее: линтер границ FSD ([Steiger](https://github.com/feature-sliced/steiger)), Vitest + Testing Library, Playwright, проверка Lighthouse, SEO-метаданные для страниц.

## Макеты

Исходные макеты лежат по ссылке -> [FIGMA](https://www.figma.com/design/7uXTXav74NxsxpVU3Eo04B/Finsweet-Agency--Copy-?node-id=0-1&p=f&t=BO7FyC3XpGPlerqU-0): Home, Service, Company, Blog, Blog inner, Career, Career inner, Contact us, Team template, Privacy Policy.
