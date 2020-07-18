const BASE_URL = 'http://localhost:3000'

window.addEventListener('load', () => {
    getDecks()

})

//^================== CLICKS =====================^

function attachClickToLinks() {
    let aTag = document.querySelector('li a')
    aTag.addEventListener('click', () => {
        randCard()
    })


    // document.getElementById("next").addEventListener('click', nextfunc)
    document.getElementById("cardForm").addEventListener('click', displayCreateForm)
    document.getElementById("deckForm").addEventListener('click', displayCreateDeckForm)
    document.querySelectorAll("#delete").forEach(card => card.addEventListener('click', removeCard))
    document.querySelector("#define").addEventListener("click", displayCard)


    document.getElementById("decks").addEventListener('click', getDecks)
    // document.getElementById("showcard").addEventListener('click', displayCard)
    document.querySelectorAll("#update-card").forEach(card => card.addEventListener('click', editCard))
    
}

function attachClickToLinks2(){

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

}

//^========== RANDOMIZER =========^
function randomizer(min, max){
let num = max - min + 1
let random = Math.random() * num
let result = Math.floor(random) + min
return result
}



     

// ^=========== Next FUNC==========^

function nextfunc(){
    clearForm()
    let main = document.getElementById('show-cards')
    main.innerHTML = ""
    fetch(BASE_URL +'/cards/'+ id)
        .then(resp => resp.json())
        .then(deck => {
            let random = Math.floor(Math.random() * deck.cards.length)
            let card = deck.cards[random]

            category.innerHTML +=



                //                   
                `
            <li>
            <a href="#" data-id="${card.id}">${card.word}</a>

<div><div>
   <button id = "delete" data-id="${card.id}">Delete</button>
            <button id = "update-card" data-id="${card.id}">Edit</button>
          <button id ="next">Next</button>
         
        </li>


        `

            attachClickToLinks()
        })




}

//^========== RANDOMIZER =========^
function randomizer(min, max) {
    let num = max - min + 1
    let random = Math.random() * num
    let result = Math.floor(random) + min
    return result
}

//^=================== CLEARFORM===============^

function clearForm() {
    let cardFormDiv = document.getElementById('card-form')

    cardFormDiv.innerHTML = ""
}














// ^=================GET CARDS==============^    
// function getCards() { 
//     clearForm()
//     let main = document.querySelector('#show-cards')
//     main.innerHTML = ""
//     fetch(BASE_URL+"/cards")
//     .then(resp => resp.json())
//     .then(cards => {
//         main.innerHTML += cards.map(card => `
//         <li>
//             <a href="#" data-id="${card.id}">${card.word}</a>

//             <button id = "delete" data-id="${card.id}">Delete</button>
//             <button id = "update-card" data-id="${card.id}">Edit</button>
//         </li>
//         `)

      
//         attachClickToLinks()
//             // < i data - action='delete-note' class="em em-x" ></i >
//     })
    
// }











class crd {
    constructor(card){
        this.id = card.id
        this.word = card.word
        this.define = card.define
        this.deck_id = card.deck_id
    }
    renderCard(){
        return
    }

}

