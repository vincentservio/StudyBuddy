

//<====================VIEW CARD ==========>
function viewCard() {
    clearForm()
    clearUls()
    let category = document.getElementById("showcard")
    let id = event.target.dataset.id

    fetch(BASE_URL + "/decks/" + id)
        .then(resp => resp.json())
        .then(deck => {
            let random = Math.floor(Math.random() * deck.cards.length)
            let card = deck.cards[random]

            category.innerHTML +=



                //                   
                `
            <li>
            <a href="#" data-id="${card.id}">${card.word}</a>

<div><div>
   <button id = "delete" data-id="${card.id}">Delete</button>
            <button id = "update-card" data-id="${card.id}">Edit</button>
          <button id ="next">Next</button>
         
        </li>


        `

            attachClickToLinks()
        })




}
