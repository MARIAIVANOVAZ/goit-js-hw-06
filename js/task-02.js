"use strict"

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientEl = ingredients.map(ingredient =>{
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');

  return itemEl;
}); 

ingredientsList.append(...ingredientEl);

console.log(ingredientEl);
 
 
  