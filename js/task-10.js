const inputEl = document.querySelector("input");
const buttonElCreate = document.querySelector("button[data-create]");
const buttonElDestroy = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");
let inputValue = 0;

buttonElCreate.addEventListener("click", createBoxes);
inputEl.addEventListener("input", onInputChange);
buttonElDestroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function onInputChange(event) {
  inputValue = event.currentTarget.value;
}

function createBoxes(amount) {
  const boxes = [];
  let boxSize = 30;

  for (let i = 0; i < inputValue; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    boxSize += 10;
    boxes.push(box);
  }
  boxesEl.append(...boxes);
}
