// Set actual date for compare
const dateSplit = data.fechaActual.split("-");
const dateParsed = new Date(dateSplit[0], dateSplit[1]-1, dateSplit[2]);
const actualDateStamp = dateParsed.getTime();
console.log("actualDateStamp", actualDateStamp)

function dateConvert(date) {
    eventDateSplit = date.split("-");
    eventDateParsed = new Date(eventDateSplit[0],eventDateSplit[1]-1,eventDateSplit[2]);
    eventDateStamp = eventDateParsed.getTime();
    return eventDateStamp;
}

let pastEvents = [];
let upComingEvents = [];
data.eventos.map(event =>{
  dateConvert(event.date) < actualDateStamp ? pastEvents.push(event) : upComingEvents.push(event)
})

function generateCards(events) {
    let card = "";
    let cardEvents = document.getElementById("cards");

    let cards = events.map(evento => {
        card += `
        <div class="col">
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
    });
    cardEvents.innerHTML = card;
}

generateCards(upComingEvents)