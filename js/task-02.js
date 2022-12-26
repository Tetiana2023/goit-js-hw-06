const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//const ulIngredientsEl = document.querySelector('#ingredients')
//console.log(ulIgreientsEl);

// for (let ingredient of ingredients) {
//const liEl = document.createElement('li');

 //liEl.textContent = ingredient;
 //liEl.classList.add('item');
 
 //ulIgreientsEl.append(liEl);
 //}
 //console.log(ulIgreientsEl);

// ========================================================
const ulIngredientsEl = document.querySelector('#ingredients')

const list = ingredients.map((ingredient) => {
    let liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add('item');
   return liEl;
  });
   ulIngredientsEl.append(...list);

//========================================================

 //for (let ingredient of ingredients) {
  //  let liEl = document.createElement("li");
  //  liEl.textContent = ingredient;
  //  ulIgreientsEl.append(liEl);
  // }