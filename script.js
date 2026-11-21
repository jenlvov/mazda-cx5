// Галерея цветов: клик по цвету перекрашивает шапку страницы

const hero = document.querySelector('.hero');
const heroColorName = document.querySelector('.hero__color-name');
const items = document.querySelectorAll('.gallery__item');

// Светлый ли цвет: по яркости решаем, каким делать текст в шапке
function isLight(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b > 160;
}

function selectColor(item) {
  const color = item.style.getPropertyValue('--swatch').trim();

  hero.style.setProperty('--machine-grey', color);
  hero.style.setProperty('--machine-grey-light', `color-mix(in srgb, ${color}, white 35%)`);
  hero.classList.toggle('hero--light', isLight(color));
  heroColorName.textContent = item.dataset.name;

  items.forEach((el) => el.classList.toggle('is-active', el === item));
}

items.forEach((item) => {
  item.addEventListener('click', () => selectColor(item));
});

selectColor(items[0]);
