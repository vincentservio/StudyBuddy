

    //<====================VIEW CARD ==========>
const viewCard = () => {
    clearForm()
    clearUls()
    let showcard = document.getElementById("showcard")
    let id = event.target.dataset.id 
    fetch(BASE_URL+"/decks/"+id)
    .then(resp => resp.json())
    .then(deck => {
        let random = Math.floor(Math.random() * deck.cards.length)
        let card = deck.cards[random]
        let cd = new Cd(card)
        showcard.innerHTML += cd.renderCard()
        changeCard()
        attachClickToLinks()
    })
}

const randCard = () => {
    clearForm()
    clearUls()
    let showcard = document.getElementById("showcard")
    let deckId = event.target.dataset.deckId 
    fetch(BASE_URL +"/decks/"+deckId)
    .then(resp => resp.json())
    .then(deck => {
        let random = Math.floor(Math.random() * deck.cards.length)
        let card = deck.cards[random]
        let cd = new Cd(card)
        showcard.innerHTML += cd.renderCard()
    changeCard()
    attachClickToLinks()
    })

}
class Cd {
    constructor(card){
        this.id = card.id
        this.word = card.word
        this.define = card.define 
        this.gotit = card.gotit
        this.deck_id = card.deck_id

    }
    renderCard() {
        return `
        <li>
            <a href="#" data-id="${this.id}" data-deck-id="${this.deck_id}">${this.word}</a>
            <br> 
            <button id = "delete" data-id="${this.id}">Delete</button>
            <button id = "update-card" data-id="${this.id}">Edit</button>
            <button id ="define" data-id="${this.id}">Define</button>

        </li>
             <button id = "cardForm" href = "#"> Create Card</button >

        `   
          

    }
}

    
    