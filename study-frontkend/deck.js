
const getDecks = () => {
    clearUls()
    clearForm()

    let showDecks = document.getElementById('show-decks')
   
    fetch(BASE_URL+"/decks")
    .then(resp => resp.json())
    .then(decks => {
        decks.forEach(deck =>{
            let dk = new Dk(deck)
            // attachClickToLinks()
            showDecks.innerHTML += dk.renderDeck()
        })
        attachClickToDeck()
    })
}
 
    
class Dk {
    constructor(deck){
         this.id = deck.id
         this.category = deck.category 
    }

    renderDeck() {
        return  `
    <li>
        <a href="#" data-id="${this.id}">${this.category}</a>
    </li>
    `
    }
}


        



