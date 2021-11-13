"use strict"

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');
gallery.classList.add('gallery')

const createGallery = images.map(image => 
 `<li><img src="${image.url}" alt="${image.alt}" class ="image"></li>`
).join("");
// gallery.setAttribute("style",  "display: flex; justify-content: space-between; list-style: none");
gallery.insertAdjacentHTML("beforeend", createGallery);

console.log(gallery);


// const gallery = document.querySelector('.gallery');

// const makeGallery = ({url, alt}) => {

//     const itemEl = document.createElement('li');

//     const imageEl = document.createElement('img');
//     imageEl.src = url;
//     imageEl.alt = alt;


//     itemEl.append(imageEl);
    

// return itemEl;
// };
// console.log(makeGallery)
// // gallery.append(itemEl);



