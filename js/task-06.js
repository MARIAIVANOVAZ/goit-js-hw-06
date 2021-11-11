"use strict"

const input = document.querySelector('#validation-input');


input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if(input.value.length == input.dataset.length) {
       input.classList.add('valid');
        input.classList.remove('invalid');
        
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid');
        
    }
     
    
}

// textInput.addEventListener("focus", () => {
//     textInput.value = "This input has focus";
//   });
  
//   textInput.addEventListener("blur", () => {
//     textInput.value = "";
//   });

