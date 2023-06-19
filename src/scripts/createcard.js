export function createCard(product) {
    const card = document.createElement("li")
    const imgProduct = document.createElement("img")
    const containerProductContent = document.createElement("div")
    const divProductInfo = document.createElement("div")
    const paragraphProduct = document.createElement("p")
    const yearProduct = document.createElement("p")
    const titleProduct = document.createElement("h2")
    const buyProduct = document.createElement("div")
    const priceProduct = document.createElement("span")
    const buttonProduct = document.createElement("button")
    
    imgProduct.alt = product.band
    imgProduct.src = product.img
    

    paragraphProduct.innerText = product.band
    
    yearProduct.innerText = product.year
    
    titleProduct.innerText = product.title
    
    priceProduct.innerText = `R$ ${product.price.toFixed(2)}`
    
    buttonProduct.innerText = "Comprar"

    divProductInfo.classList.add('divProductInfo')
    card.classList.add("card")
    containerProductContent.classList.add('containerProductContent')
    buyProduct.classList.add('buyProduct')
    
    buyProduct.append(priceProduct, buttonProduct)
    containerProductContent.append(divProductInfo, titleProduct, buyProduct)
    divProductInfo.append(paragraphProduct, yearProduct)
    card.append(imgProduct,containerProductContent)
    return card
}

