function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

buttonEl.addEventListener('click', onButtonClick);

function onButtonClick( event){
 
  
  bodyEl.style.backgroundColor = getRandomHexColor();
  console.log(bodyEl)
  spanEl.textContent = bodyEl.style.backgroundColor;

}






console.log(buttonEl);
console.log(spanEl);