//^=================== CLEARFORM===============^

const clearForm = () => {
    let cardFormDiv = document.getElementById('card-form')
    cardFormDiv.innerHTML = ""
}

//<===================== CLEAR ULs ==============>
const clearUls = () => {
    let showCards = document.getElementById('showcard')
    showCards.innerHTML = ""

    let showDecks = document.getElementById('show-decks')
    showDecks.innerHTML = ""

    let showDefine = document.getElementById('show-cards')
    showDefine.innerHTML = ""
}