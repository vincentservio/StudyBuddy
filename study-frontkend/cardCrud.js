//^================ ShowCARD ====================^

function displayCard() {
    clearForm()
  clearForm()
    let id = event.target.dataset.id
    let main = document.getElementById('show-cards')
    main.innerHTML = ""
    fetch(BASE_URL + '/cards/' + id)
        .then(resp => resp.json())
        .then(card => {
            main.innerHTML += `
            <p style="color:red:"> previous answers will appear here:</p>
       <h1>${card.word}</h1>
         <h3>${card.define}</h3>
        <p>${card.gotit ? "Got It" : "Dont Got It"} </p>
        `
            // attachClickToLinks()
            // clearUls()

// document.getElementById("next").addEventListener('click', viewCard)






        })


}

// ^=============== CREATE CARD OPTION ==============^

function displayCreateForm() {
    let cardFormDiv = document.getElementById('card-form')
    let html = `
        <form>
        <input type="text" id="category" placeholder="Category">
        <br>
            <label>Create Word</label>
            <input type="text" id="word" placeholder="Word">
            <textarea id="define" rows="4" cols="50"
                placeholder="Definition - The degree of distinctness in outline of an object, image, or sound, especially of an image in a photograph or on a screen."></textarea>
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown Example</a>

            <label>Got it?</label>
            <input type="checkbox" id="gotit">
            <input type="submit"> 
         </form>
    `
    cardFormDiv.innerHTML = html
    const newLocal = document.querySelector('form')
    newLocal.addEventListener('submit', () => {
        updateCard()
        clearForm()
    })
}



//^===============  CREATE CARD =======================^

function createCard() {
    event.preventDefault()
    const card = {
        word: document.getElementById('word').value,
        define: document.getElementById('define').value,
        // category: document.getElementById('catagory').value,
        gotit: document.getElementById("gotit").checked

    }


    fetch(BASE_URL + '/cards', {
        method: "POST",
        body: JSON.stringify(card),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'

        }
    })
        .then(resp => resp.json())
        .then(card => {
            document.querySelector('#show-cards').innerHTML += `
        <li>
            <a href="#" data-id="${card.id}">${card.word}: ${card.define}
        - ${card.gotit ? "Got it" : "Dont got it"}<a/>
          

            <button id = "delete" data-id="${card.id}">Delete</button>
            <button id = "update-card" data-id="${card.id}">Edit</button>
    
        </li>
        `
            attachClickToLinks()
            clearForm()
        })
}

//^========== DELETE CARDS ==============^

function removeCard() {

    event.preventDefault()
    clearForm()
    fetch(BASE_URL + `/cards/${event.target.dataset.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(event.target.parentElement.remove())
        .then(randCard())


}

//^======================= EDIT CARDS =================^
function editCard() {
    event.preventDefault()
    clearForm()
    let id = event.target.dataset.id
    fetch(BASE_URL + `/cards/${id}`)
        .then(resp => resp.json())
        .then(card => {
            let cardFormDiv = document.getElementById('card-form')
            let html = `
        <form data-id="${id}">
            <label>Create</label>
            <input type="text" id="word" value='${card.word}'>
           
            <textarea type="text" id="define" 
                rows="4" cols="50" >${card.define}</textarea>

            <label>Got it?</label>
            <input type="checkbox" id="gotit" ${card.gotit ? "gotit" : ""}>
            <input type="submit"> 
         </form>
    `
            cardFormDiv.innerHTML = html

        })
}
//^=================== UPDATE EDIT CARD ==============^
function updateCard() {
    event.preventDefault()

    let id = event.target.dataset.id
    const card = {
        word: document.getElementById("word").value,
        define: document.getElementById("define").value,
        gotit: document.getElementById("gotit").value

    }
    fetch(BASE_URL + `/cards/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'aaplication/json'
        },
        body: JSON.stringify(card)

    })
        .then(resp => resp.json())
        .then(card => {
            document.querySelector(`li a`).parentElement.innerHTML = `
          <li>
            <a href="#" data-id="${card.id}">${card.word}
            </a>

            <button id = "delete" data-id="${card.id}">Delete</button>
            <button id = "update-card" data-id="${card.id}">Edit</button>
        </li>
        `
            attachClickToLinks()
            clearForm()
        })

}