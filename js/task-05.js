const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputName)

function onInputName (event)  {
    spanEl.textContent = event.currentTarget.value;
    
    if ( !inputEl.value ) {
      spanEl.textContent = "Ananimus";
    
   }
     
};

//console.log(inputEl); 
//console.log(spanEl);
