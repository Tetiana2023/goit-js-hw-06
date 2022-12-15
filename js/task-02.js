const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIgreientsEl = document.querySelector('#ingredients')
//console.log(ulIgreientsEl);

 for (let ingredient of ingredients) {
const liEl = document.createElement('li');

 liEl.textContent = ingredient;
 liEl.classList.add('item');
 
 ulIgreientsEl.append(liEl);
 }
 console.log(ulIgreientsEl);