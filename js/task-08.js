// const form = document.querySelector(".login-form");
// // const button = document.querySelector("[type="submit"]");

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
// //   const {
// //     elements: { login, password }
// //   } = event.currentTarget;

// //   if (login.value === "" || password.value === "") {
// //     return console.log("Please fill in all the fields!");
// //   }

// //   console.log(`Login: ${login.value}, Password: ${password.value}`);
// //   event.currentTarget.reset();
// console.log('sfgfd')
// }

// "use strict"

const form = document.querySelector('.login-form');


 form.addEventListener('submit', onSubmit);

 function onSubmit(event) {
     event.preventDefault();

     const formElements = event.currentTarget.elements;
    // console.dir(formElements);
    
     const mail = formElements.email.value;
     const password = formElements.password.value;

     const formData = {
         mail,
         password,
        };
        // console.log(formData);
     
        if(formElements.email.value === "" || formElements.password.value === "") {
            return alert('Please fill all fields!');
        } else {
            console.log(formData);
        }
        
   
    event.currentTarget.reset();
 }

