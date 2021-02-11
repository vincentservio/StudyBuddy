//^================ ShowCARD ====================^

const displayCard = () => {
  clearForm();
  let id = event.target.dataset.id;
  let main = document.getElementById("show-cards");
  main.innerHTML = "";
  fetch(BASE_URL + "/cards/" + id)
    .then((resp) => resp.json())
    .then((card) => {
      main.innerHTML += `
    <h1>${card.word}</h1>
    <h3>${card.define}</h3>
    <p>${card.gotit ? "Got It" : "Dont Got It"} </p>
    `;
      attachClickToLinks();
    });
};

// ^=============== CREATE CARD OPTION ==============^

const displayCreateForm = () => {
  let cardFormDiv = document.getElementById("card-form");
  let html = `
        <form>
            <br>
            <label>Create Word</label>
            <input type="text" id="word" placeholder="Word" >
            <textarea id="define" rows="4" cols="50"
                placeholder="Definition - The degree of distinctness in outline of an object, image, or sound, especially of an image in a photograph or on a screen."></textarea>
            <label>Got it?</label>
            <input type="checkbox" id="gotit">
            <input type="submit"> 
         </form>
    `;
  cardFormDiv.innerHTML = html;
  document.querySelector("form").addEventListener("submit", () => {
    createCard();
    clearForm();
  });
};

//^===============  CREATE CARD =======================^

const createCard = () => {
  event.preventDefault();
  debugger;
  const card = {
    deck_id: document.querySelector("li a").dataset.deckId,
    word: document.getElementById("word").value,
    define: document.getElementById("define").value,
    gotit: document.getElementById("gotit").value,
  };

  fetch(BASE_URL + "/cards", {
    method: "POST",
    body: JSON.stringify(card),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((card) => {
      new CreateEditCard(card);
      attachClickToLinks();
      clearForm();
    });
};

//^========== DELETE CARDS ==============^

const removeCard = () => {
  event.preventDefault();
  clearForm();
  fetch(BASE_URL + `/cards/${event.target.dataset.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(event.target.parentElement.remove())
    .then(getDecks());
};

//^======================= EDIT CARDS =================^
const editCard = () => {
  event.preventDefault();
  clearForm();
  let id = event.target.dataset.id;
  fetch(BASE_URL + `/cards/${id}`)
    .then((resp) => resp.json())
    .then((card) => {
      let cardFormDiv = document.getElementById("card-form");

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
        `;
      cardFormDiv.innerHTML = html;
      document.querySelector("form").addEventListener("submit", () => {
        updateCard();
        clearForm();
      });
    });
};
//^=================== UPDATE EDIT CARD ==============^
const updateCard = () => {
  event.preventDefault();
  let id = event.target.dataset.id;
  const card = {
    deck_id: document.querySelector("li a").dataset.deckId,
    word: document.getElementById("word").value,
    define: document.getElementById("define").value,
    gotit: document.getElementById("gotit").value,
  };
  fetch(BASE_URL + `/cards/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "aaplication/json",
    },
    body: JSON.stringify(card),
  })
    .then((resp) => resp.json())
    .then((card) => {
      let cd = new CreateEditCard(card);
      cd.returnCreate();
      clearForm();
      attachClickToLinks();
    });
};

const createCardBtn = () => {
  const page = document.getElementById("CardBtn");

  page.innerHTML += `       
          <button id = "CardBtn" href = "#"> Create Card</button >
        `;
};

class CreateEditCard {
  constructor(card) {
    this.id = card.id;
    this.word = card.word;
    this.define = card.define;
    this.gotit = card.gotit;
    this.deck_id = card.deck_id;
  }
  returnCreate() {
    return `         
        <li>
            <a href="#" data-id="${this.id}"  > ${this.word}: ${this.define}
            // - ${this.gotit ? "Got it" : "Dont got it"}<a/>
            <button id = "delete" data-id="${this.id}">Delete</button>
            <button id = "update-card" data-id="${this.id}">Edit</button>
    
        </li>
        `;
  }
}
