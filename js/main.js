function generateCards(events) {
    let body ="";
    
    const cardEvents = document.getElementById("cards")

    let cards = events.eventos.map(evento => {
        body += `
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
    })
    cardEvents.innerHTML = body;
}

generateCards(data)