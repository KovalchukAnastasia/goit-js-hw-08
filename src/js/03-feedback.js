const throttle = require('lodash.throttle');
const formEl = document.querySelector(".feedback-form");


// Обробка події "input"
const onInput = throttle((event) => {
    event.preventDefault();

    const data = {
        email: formEl.elements["email"].value,
        message: formEl.elements["message"].value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(data))

}, 500); 
formEl.addEventListener('input', onInput); 

//Перевірка сховища. Заповнення форми
const formState = localStorage.getItem("feedback-form-state");
if (formState) {
    const formStateValue = JSON.parse(formState);
    formEl.elements["email"].value = formStateValue.email;
    formEl.elements["message"].value = formStateValue.message;
};

// Обробка події "submit"
formEl.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault();

    const data = {
        email: formEl.elements["email"].value,
        message: formEl.elements["message"].value
    };
    console.log(data);
    event.currentTarget.reset();
    localStorage.clear();
    
}   


