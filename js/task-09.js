// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.


const colorEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');


buttonEl.addEventListener('click', changeBackground);

function getRandomHexColor() {
  return  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changeBackground() {

  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;


   }


