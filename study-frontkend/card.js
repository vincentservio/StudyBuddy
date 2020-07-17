

    //<====================VIEW CARD ==========>
    function viewCard() {
        clearForm()
        clearUls()
        let category = document.getElementById("showcard")
        let id = event.target.dataset.id 
        // category.innerHTML = ""
        fetch(BASE_URL+"/decks/"+id)
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
          <button id ="define">Next</button>
         
        </li>


        `   
                let cards = document.querySelectorAll('li a')
                cards.forEach(card => {
                    card.addEventListener('click', () => {
                        // clearUls()
                        randCard()
                    })
                attachClickToLinks()

          
function randCard() {
    
    clearForm()
    clearUls()
    let category = document.getElementById("showcard")
    let cardid = event.target.dataset.id 
    // category.innerHTML = ""
    fetch(BASE_URL + "/cards/" + cardid)
        .then(resp => resp.json())
        .then(deck => { 
          let id =  deck.deck_id
    fetch(BASE_URL + "/decks/" + id)
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
            let cards = document.querySelectorAll('li a')
            cards.forEach(card => {
                card.addEventListener('click', () => {
                    // clearUls()
                    randCard()
                })
            document.getElementById("cardForm").addEventListener('click', displayCreateForm)

            document.getElementById("decks").addEventListener('click', getDecks)

            })

        
})

                
            }


)
    }

})
            })
        }
        