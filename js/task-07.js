const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

// console.log(spanEl)

inputEl.addEventListener('input', onInputScroll)

function onInputScroll (event) {
spanEl.style.fontSize = event.currentTarget.value + 'px'
}
