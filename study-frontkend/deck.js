
function getDecks() {
    clearUls()
    clearForm()

    let showDecks = document.getElementById('show-decks')
    showDecks.innerHTML = ""
    fetch(BASE_URL + "/decks")
        .then(resp => resp.json())
        .then(decks => {
            showDecks.innerHTML += decks.map(deck =>
                `
            <li>
            <a href="#" data-id="${deck.id}" deck-data-id="${deck.id}">${deck.category}</a>
         
        </li>
        `)


            let cards = document.querySelectorAll('li a')
            cards.forEach(card => {
                card.addEventListener('click', () => {

                    viewCard()

                })
            })
            document.getElementById("cardForm").addEventListener('click', displayCreateForm)
            document.getElementById("deckForm").addEventListener('click', displayCreateDeckForm)
            document.querySelectorAll("#delete").forEach(card => card.addEventListener('click', removeCard))



            document.getElementById("decks").addEventListener('click', getDecks)
            // document.getElementById("showcard").addEventListener('click', displayCard)
            document.querySelectorAll("#update-card").forEach(card => card.addEventListener('click', editCard))



        })

}

