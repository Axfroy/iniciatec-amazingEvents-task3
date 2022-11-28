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

inputSearchEvents.addEventListener("keyup", (event) =>{
    let eventResult = document.querySelectorAll(".hidden")

    //let allCardsArray = Array.prototype.slice.call(allCards);
    //console.log("allCardsArray", allCardsArray)
    //console.log("event.target.value", event.target.value)
    //console.log("event.key", event.key)
    // console.log({ card })
    let filterCard = (list) =>{
        list.forEach(card => {
            card.textContent
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
                ? card.classList.remove("hidden")
                : card.classList.add("hidden")
            })
        };
    filterCard(allCards);

    eventResult.length === allCards.length
    ? noResult()
    : null;
});


noResult = () =>{
    console.log("das")
    var cardContainer = document.getElementById("cards");
    cardContainer.innerHTML = `
        <div class="container text-center">
            <div>
                <img style="width: 100%;" src="./assets/image/noEvents" alt="">
            </div>
            <p>Please try another search</p>
        </div>
        `;
};


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