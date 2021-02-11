
const getDecks = () => {
    clearUls()
    clearForm()

    let showDecks = document.getElementById('show-decks')
    let CardBtn = document.getElementById("CardBtn")
    CardBtn.innerHTML = ""
    fetch(BASE_URL+"/decks")
    .then(resp => resp.json())
    .then(decks => {
    document.getElementById("sortDecks").addEventListener('click', () => {
        sortDecks(decks)
    })
        decks.forEach(deck =>{
            let dk = new Deck(deck)
            // attachClickToLinks()
            showDecks.innerHTML += dk.renderDeck()
    })
        attachClickToDeck()
    })
}



function sortDecks() {
    clearUls()
    let showDecks = document.getElementById('show-decks')
    fetch(BASE_URL + "/decks")
    .then(resp => resp.json())
    .then(decks => { 
        decks.sort(function(a, b){
            let categoryA = a.category.toUpperCase();
            let categoryB = b.category.toUpperCase();
            return (categoryA > categoryB) ? -1 : 1
        })
        decks.forEach(deck => {
            let dk = new Deck(deck)
            attachClickToDeck()
            showDecks.innerHTML += dk.renderDeck()
        })
    })
}


    


 
    
class Deck {
    constructor(deck){
         this.id = deck.id
         this.category = deck.category 
         Deck.decks << this
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

Deck.decks = []
    
 



        



