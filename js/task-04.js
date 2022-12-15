const decrementBtnEl = document.querySelector(`button[data-action="decrement"]`);
const incrementBtnEl = document.querySelector(`button[data-action="increment"]`);

const countEl = document.querySelector('#value');
let count = 0;

decrementBtnEl.addEventListener('click', onDecrementBtnClick );
incrementBtnEl.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick(){
    count -= 1;
    // замінюю 0 на інше значення після кліку
    countEl.innerHTML = count;


}

function onIncrementBtnClick(){
    count += 1;
    //  замінюю 0 на інше значення після кліку
    countEl.innerHTML = count;
}