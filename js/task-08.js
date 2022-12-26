const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onBtnSubmit)

function onBtnSubmit (event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;


  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
    
}

console.log(`Email: ${email.value}, Password: ${password.value}`);
event.currentTarget.reset();
}




