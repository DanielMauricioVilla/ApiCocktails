const input = document.getElementById ("input");
const containerCard = document.getElementById ("containerCard");

window.addEventListener ("DOMContentLoaded", () => {
    let URL = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";
    dataRequest(URL);
})

input.addEventListener("keyup", () => {
    let URLF = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`
    dataRequest(URLF);
});

function dataRequest(URL){
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        containerCard.textContent=(null);
        data.drinks.map( element => createCards(element));
    });
}

function createCards(element) {
    const containerText = document.createElement ("div")
    const card = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("h2");
    
    img.src = element.strDrinkThumb;
    img.setAttribute('alt', element.strDrinkThumb);
    name.textContent = element.strDrink;
    
    containerText.classList = "divText";
    card.classList = "card";
    img.classList = "imgCard";
    
    containerText.appendChild(name);
    card.appendChild(img);
    card.appendChild(containerText);
    containerCard.appendChild(card);
}