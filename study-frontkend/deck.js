
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
            <a href="#" data-id="${deck.id}">${deck.category}</a>
         
        </li>
        `)


            attachClickToLinks()


        })

}

