

//^============== create deck Form =============^

function displayCreateDeckForm() {
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
function createDeck() {
    event.preventDefault()
    const deck = {
      
        category: document.getElementById('category').value

    }


    // fetch(BASE_URL + '/cards', {
    //     method: "POST",
    //     body: JSON.stringify(card),
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'

    //     }
    // })
    //     .then(resp => resp.json())
    //     .then(card =>  {
    //     document.querySelector('#show-cards').innerHTML += `
    // <li>
    //     <a href="#" data-id="${card.id}">${card.word}: ${card.define} 
    // - ${card.gotit ? "Got it" : "Dont got it"}<a/>


    //     <button id = "delete" data-id="${card.id}">Delete</button>
    //     <button id = "update-card" data-id="${card.id}">Edit</button>

    // </li>
    // `
    // }

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
                <a href="#" data-id="${deck.id}">${deck.catagory}



            </li>
            `


            attachClickToLinks()
            clearForm()
        })
}