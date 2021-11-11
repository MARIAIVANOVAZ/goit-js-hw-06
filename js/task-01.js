"use strict"

const categoriesEl = document.querySelectorAll(`.item`);
console.log('Number of categories:', categoriesEl.length);


const categoriesTitle = [...categoriesEl];
categoriesTitle.forEach((element) => {
    const title = element.querySelector('h2');
    const itemsLength = element.querySelectorAll('li');
    console.log('Category:', title.textContent);
    console.log('Elements:', itemsLength.length);
})

