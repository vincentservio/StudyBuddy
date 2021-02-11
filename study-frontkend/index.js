const BASE_URL = 'http://localhost:3000'

window.addEventListener('load', () => {
    getDecks()
})

//^================== CLICKS =====================^
const changeCard = () =>  {
    let aTag = document.querySelector('li a')
    aTag.addEventListener('click', () => {
        randCard()
    })
    document.getElementById("CardBtn").addEventListener('click', displayCreateForm)

}

const attachClickToDeck = () => {
// document.getElementById("sortDecks").addEventListener('click', sortDecks)


    let cards = document.querySelectorAll('li a')
    cards.forEach(card => {
        card.addEventListener('click', () => {
            viewCard()
        })
    })
    document
      .getElementById("deckForm").addEventListener("click", displayCreateDeckForm);
    document.getElementById("decks").addEventListener('click', getDecks)
}

const attachClickToLinks = () =>  {
    document.getElementById("CardBtn").addEventListener("click", displayCreateForm);
    document.querySelector("#delete").addEventListener('click', removeCard)
    document.querySelector("#define").addEventListener("click", displayCard)
    document.getElementById("decks").addEventListener('click', getDecks)
    document.querySelectorAll("#update-card").forEach(card => card.addEventListener('click', editCard))
    
}


