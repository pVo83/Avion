# Avion

Avion — интернет-магазин мебели и товаров для дома на Vue 3. Проект включает главную страницу, About, каталог товаров, страницу продукта и корзину.

## Стек

- Vue 3
- Vite
- Vue Router
- Pinia
- SCSS
- ESLint / Stylelint

## Особенности

- Адаптивная вёрстка под desktop, tablet и mobile (`clamp()`, SCSS mixins).
- 4 layout-компонента с динамическим переключением через Vue Router.
- Переиспользуемые UI-компоненты: кнопки, карточки товаров, навигация, бургер, мобильное меню.
- Header и Footer с вариантами (`variant`) для разных страниц.
- Мобильное меню с overlay, `<Transition>` и Pinia store.
- Корзина: добавление товаров, изменение количества, итоговая сумма.
- Оптимизация изображений: WebP + JPG fallback, lazy loading (`AppImage`).
- Деплой на GitHub Pages через GitHub Actions.

## Команды

```bash
npm install
npm run dev
npm run build
```

Генерация WebP из исходных изображений:

```bash
npm run webp
```

Проверка и автоисправление кода:

```bash
npm run lint
npm run stylelint:fix
```
