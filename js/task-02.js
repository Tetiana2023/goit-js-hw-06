const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIgreientsEl = document.querySelector('#ingredients')

 for (let ingredient of ingredients) {
const liEl = document.createElement('li');

 liEl.textContent = ingredient;
 liEl.classList.add('item');
 //console.log(liEl);
 ulIgreientsEl.append(liEl);
 }
 console.log(ulIgreientsEl);