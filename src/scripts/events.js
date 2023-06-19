import {renderCard} from './index.js';
export function addEvents(categoriesArray, productsArray) {
    

    let filteredArray = productsArray;
    let categoryIndex = 0;
    

    const inputFilter = document.querySelector(".input__filter")
    const filterButton = document.querySelectorAll(".filter__button")
    const priceParagraph = document.querySelector(".price__input")

    let inputValue = inputFilter.value;

    filterButton.forEach(element => 
        element.addEventListener("click", () => {
            if (element.innerText === 'Todos'){
                filteredArray = productsArray;
                renderCard(productsArray)
            }
            else{
                categoryIndex = categoriesArray.findIndex(c => c === element.innerText)
                filteredArray = productsArray.filter(product => product.category === categoryIndex)
                renderCard(filteredArray)
            }
        })
    )
    inputFilter.addEventListener('input', (event) => {
       
        priceParagraph.textContent = `Até R$ ${event.target.value}`
        filteredArray = productsArray.filter(product => product.price <= event.target.value)
        renderCard(filteredArray)
    } )
  }


