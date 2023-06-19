import { categories, products} from "./productsData.js";
import { createCard } from "./createcard.js";
import { addEvents } from "./events.js";

const renderDarkMode = () => {
    const buttonDarkMode = document.querySelector(".button__darkmode");
    const html = document.querySelector("html");
    const image = document.querySelector(".img__button")
    const theme = JSON.parse(localStorage.getItem("dark__mode"));
    if(theme){
        image.src="src/assets/img/sun.svg"
        html.classList.add("dark__mode")
    }else{
        image.src="src/assets/img/moon.svg"
        html.classList.remove("dark__mode")
    }
    buttonDarkMode.addEventListener("click", () => {
        html.classList.toggle("dark__mode")
        if(html.classList.contains("dark__mode")){
            image.src = "src/assets/img/sun.svg"
            localStorage.setItem("dark__mode", true)
        }else{
            image.src = "src/assets/img/moon.svg"
            localStorage.setItem("dark__mode", false)
        }
    }) 
}
renderDarkMode()

export const renderGenders = (array) => {
const genderList = document.querySelector(".gender__list");  
    array.forEach(element => {
        let filterButton = document.createElement("li")
        filterButton.classList.add("filter__button")
        let genderButton = document.createElement("button");
        genderButton.classList.add("gender__button")
        genderButton.innerText = element
        filterButton.appendChild(genderButton)
        genderList.appendChild(filterButton)
    });
} 
export const renderCard = (array) =>{
    const cardList = document.querySelector(".cards__list");
    cardList.innerHTML = '';

    array.forEach(product => {
        const card = createCard(product)
        cardList.appendChild(card)
    });   
}

renderCard(products) 
renderGenders(categories)
addEvents(categories, products) 
