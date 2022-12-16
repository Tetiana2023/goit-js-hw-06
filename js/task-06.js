const inputEl = document.querySelector('#validation-input');

//inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);


function onInputBlur (event) {
if (event.currentTarget.value === inputEl.dataset.length) {
    inputEl.classList.add('.valid');
    inputEl.classList.remove('.invalid');

} 
else {
    inputEl.classList.add('.invalid');
    inputEl.classList.remove('.valid');

}
};

console.log(inputEl)