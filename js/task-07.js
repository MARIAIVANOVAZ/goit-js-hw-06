"use strict"

const input = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


input.addEventListener('mousemove', onControlSizeText)
// () => {
//     console.log('rgghj')  
// }

function onControlSizeText () {
    textEl.style.fontSize = input.value + "px";
    
console.log(input.value)
    
}
