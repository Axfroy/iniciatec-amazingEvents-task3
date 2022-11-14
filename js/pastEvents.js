const dateSplit = data.fechaActual.split("-");
const dateToCompareParsed = new Date(dateSplit[0], dateSplit[1]-1, dateSplit[2]);
const actualDateStamp = dateToCompareParsed.getTime();
console.log("actualDateStamp", actualDateStamp)

function dateConvert(date) {
    dateEventSplit = date.split("-");
    dateEventParsed = new Date(dateEventSplit[0],dateEventSplit[1]-1,dateEventSplit[2]);
    eventDateStamp = dateEventParsed.getTime();
    return eventDateStamp;
}

let pastEvents = [];
let upComingEvents = [];
data.eventos.map(event =>{
  dateConvert(event.date) < actualDateStamp ? pastEvents.push(event) : upComingEvents.push(event)
})


function generatePastCards(events) {
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

generatePastCards(pastEvents)

/* function paintPastEvents(users) {
    let body ="";

    const cardEvents = document.getElementById("cards")
    
    for (let i = 0; i < users.length; i++){
            body += `
            <div class=" card col-md-3 mx-3" style="width: 18rem";>
                <img src="${users[i].image}" class="card-img-top p-2" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${users[i].name}</h5>
                    <p class="card-text">${users[i].description}</p>
                    <a href="./pages/details.html" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `;
        }
        cardEvents.innerHTML = body;
    }

paintPastEvents(pastEvents) */
/* for (let i = 0; i < data.eventos.length; i++) {
    if(data.eventos[i].date < data.fechaActual){
      console.log("pasa")
    }
  } */

