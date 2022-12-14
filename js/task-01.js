const categoriesEl = document.querySelector('#categories')

const allLiInCategoriesEl = categoriesEl.querySelectorAll('.item');
console.log(`Number of categories: ${allLiInCategoriesEl.length}`);

for (let elem of allLiInCategoriesEl){
    console.log(`Category: ${elem.querySelector('h2').textContent}`);
    console.log(`Elements: ${elem.querySelector('ul').children.length} `)
}





//const ulCategoriesEl = document.querySelector('#categories');
//console.log(`Number of categories: ${ulCategoriesEl.children.length}`);

//const titleEl = ulCategotiesEl.firstElementChild.firstElementChild;
//console.log(titleEl);

//console.log(ulEl[0].firstElementChild);

//console.log(ulEl[0].lastElementChild.children.length)