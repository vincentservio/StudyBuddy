

    //<====================VIEW CARD ==========>
function viewCard() {
    clearForm()
    clearUls()
    let category = document.getElementById("showcard")
    let id = event.target.dataset.id 
    // category.innerHTML = ""
    fetch(BASE_URL+"/decks/"+id)
    .then(resp => resp.json())
    .then(deck => {
        let random = Math.floor(Math.random() * deck.cards.length)
        let card = deck.cards[random]
    
        category.innerHTML += 
        `<h1>${deck.category}</h1>
        <li>
            <a href="#" data-id="${card.id}" data-deck-id="${deck.id}">${card.word}</a>
            <br>
            <button id = "delete" data-id="${card.id}">Delete</button>
            <button id = "update-card" data-id="${card.id}">Edit</button>
            <button id ="define" data-id="${card.id}">Next</button>
        </li>
        `   
      attachClickToLinks()
    })
}

                
        
function randCard() {
    clearForm()
    clearUls()
    let category = document.getElementById("showcard")
    let deckId = event.target.dataset.deckId 
    fetch(BASE_URL +"/decks/"+deckId)
    .then(resp => resp.json())
    .then(deck => {
        let random = Math.floor(Math.random() * deck.cards.length)
        let card = deck.cards[random]
        category.innerHTML +=
        `
        <h1>${deck.category}</h1>
        <li>
            <a href="#" data-id="${card.id}" data-deck-id="${deck.id}">${card.word}</a>
            <br>
            <button id = "delete" data-id="${card.id}">Delete</button>
            <button id = "update-card" data-id="${card.id}">Edit</button>
            <button id ="define" data-id="${card.id}">Definition</button>
        
        </li>
        `
        attachClickToLinks()
      
    })

}
   
//^==============




    
    