
const getDecks = () => {
    clearUls()
    clearForm()

    let showDecks = document.getElementById('show-decks')
    let CardBtn = document.getElementById("CardBtn")
    CardBtn.innerHTML = ""
    fetch(BASE_URL+"/decks")
    .then(resp => resp.json())
    .then(decks => {
        decks.forEach(deck =>{
            let dk = new Deck(deck)
            // attachClickToLinks()
            showDecks.innerHTML += dk.renderDeck()
        })
        attachClickToDeck()
    })
}
 
    
class Deck {
    constructor(deck){
         this.id = deck.id
         this.category = deck.category 
    }

    renderDeck() {
        return  `
    <li>
        <a href="#" data-id="${this.id}">${this.category}</a>
    </li>
    <br>
    `
    }
}


        



