function generateCards(events) {
    let body ="";
    
    const cardEvents = document.getElementById("cards")

    let cards = events.eventos.map(evento => {
        body += `
            <div id="card-container" class="col card-ctn" data-category="${evento.category}">
                <div class="card h-100 shadow">
                <p class="card-price position-absolute top-0 start-0 fw-bold card-text m-3 p-2 bg-light rounded-3">$${evento.price}</p>
                    <img src="${evento.image}" class="card-img p-2" alt="...">
                    <div class="card-body pt-1">
                        <h5 class="card-title text-center pb-2 border-bottom">${evento.name}</h5>
                        <p class="card-text">${evento.description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                        <a href="./pages/details.html" class="btn card-btn btn-primary">More Details</a>
                    </div>
                </div>
            </div>
        `;
    })
    cardEvents.innerHTML = body;

}
generateCards(data)

const allCards = document.querySelectorAll(".card-ctn")


// input Search Filter
const inputSearchEvents = document.getElementById("input-search-events");
console.log("inputsearch", inputSearchEvents)


inputSearchEvents.addEventListener("keyup", (event) =>{
    let arrayContentCardHidden = [];
    const cardContainer = document.getElementById("no");
    let msg = ``;
    //let allCardsArray = Array.prototype.slice.call(allCards);
    //console.log"allCardsArray", allCardsArray)
    //console.log("event.target.value", event.target.value)
    //console.log("event.key", event.key)
    // console.log({ card })
        allCards.forEach(card => {
            card.textContent
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
                ? card.classList.remove("hidden")
                : card.classList.add("hidden");

/*             if(card.classList.contains("hidden")){
                arrayContentCardHidden.push(card)
                }*/
            }); 
let eventResult = document.querySelectorAll(".hidden");

    if (eventResult.length === allCards.length){
        msg += `
            <div class="container text-center">
                <div style="width: 250px; margin: 0 auto">
                    <img style="width: 100%;" src="./assets/image/noEvents" alt="">
                </div>
                <p>Please try another search</p>
            </div>
            `
        }
    cardContainer.innerHTML = msg;
});

/* inputSearch.addEventListener("keyup", (event) =>{
    let arrayContentCardHidden = [];
    const menssageErr = document.getElementById("menssageError")
    let menssagge= ``
    cardsAll.forEach((card) => {
  
      card.textContent.toLowerCase().includes(event.target.value.toLowerCase())
      ? card.classList.remove("hidden") // Si cae en true la sentencia anterior, ocurre esto
      : card.classList.add("hidden") // Si cae en false la sentencia anterior, ocurre esto
  
      if(card.classList.contains("hidden")){
        arrayContentCardHidden.push(card)
      }
    })
  
    if(arrayContentCardHidden.length === cardsAll.length){
      menssagge += `
        <h4>Evento no encontrado, por favor vuelva a intentarlo</h4>
      `
    }
    menssageErr.innerHTML = menssagge; //Mensaje que solo se mostrara si no se encuentra lo ingresado en el input
  }) */
/* noResult = () =>{

}; */


// Checkbox Filter    
const checkboxCtn = document.getElementById("formCheck-ctn");
const inputsCheckbox = document.querySelectorAll(".form-check-input");
const formSelect = document.getElementById("form-select");
const inputOption = document.querySelectorAll(".option-input");

checkboxCtn.addEventListener("change", () => {
    var categoriesChecked = [];

    inputsCheckbox.forEach((inputBox) =>{
        inputBox.checked
            ? categoriesChecked.push(inputBox.value)
            : null
    });
    
    cardsFilter(categoriesChecked);
    noSelect(categoriesChecked);
});

formSelect.addEventListener("change", () =>{
    var categoriesChecked = [];

    inputOption.forEach((option) =>{
        option.selected
            ? categoriesChecked.push(option.value)
            : null
    });

    cardsFilter(categoriesChecked);
    noSelect(categoriesChecked);

});

cardsFilter = (filteredArray) => {
    allCards.forEach((card) => {
        filteredArray.includes(card.getAttribute("data-category"))
            ? card.classList.remove("hidden")
            : card.classList.add("hidden");
    });
};

noSelect = (filteredArray) => {
    filteredArray.length === 0
    ? allCards.forEach((card) => {
        card.classList.remove("hidden")
        })
    : null
};