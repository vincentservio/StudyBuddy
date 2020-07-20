

//^============== create deck Form =============^

const displayCreateDeckForm = () => {
    let cardFormDiv = document.getElementById('card-form')
    let html = `
        <form>
            <input type="text" id="category" placeholder="Category">
            <br>
            <input type="submit"> 
         </form>
    `
    cardFormDiv.innerHTML = html
    document.querySelector('form').addEventListener('submit', () => {
        createDeck()
        clearForm()
    })
}

//^============== create deck =============^
const createDeck = () =>  {
    event.preventDefault()
    const deck = {
      category: document.getElementById('category').value
    }
    fetch(BASE_URL + '/decks', {
        method: "POST",
        body: JSON.stringify(deck),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(deck => {
        document.querySelector('#show-cards').innerHTML += `
        <li>
            <a href="#" data-id="${deck.id}">${deck.category}
        </li>
        `
        attachClickToLinks()
        clearForm()
    })
}

