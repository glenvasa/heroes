let heroTeam = [];
let apiUrl = "https://superheroapi.com/api/114585350670601/";
let heroesList = document.querySelector(".heroes-list");
// let $modalContainer = $("#modal-container");

const superHeroesList = [
  "A-Bomb",
  "Abe Sapien",
  "Abin Sur",
  "Abomination",
  "Abraxas",
  "Absorbing Man",
  "Adam Monroe",
  "Adam Strange",
  "Agent 13",
];

// const loadHeroesList = async () => {
//   try {
//     let result = await fetch("src/js/data.js");

//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };

function getHeroesInfo() {
  superHeroesList.forEach((name) => {
    fetch(`${apiUrl}search/${name}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          data.results.forEach((hero) => {
            // console.log(hero.name);
            // console.log(hero.image.url);
            heroTeam.push(hero);
            addListItem(hero);
          });
        }
      });
  });
}

function addListItem(hero) {
  //   console.log(hero);

  let listItem = document.createElement("li");
  listItem.classList.add("card");
  heroesList.appendChild(listItem);
  listItem.innerHTML = `<img class="card-image" src="${hero.image.url}"><button type="button" class="card-button" id="hero-name" class="btn" data-toggle="modal"
  data-target="#exampleModal">${hero.name}</button>
    `;
  addButtonListener();
}

function addButtonListener() {
  let cardButtons = document.querySelectorAll(".card-button");
  //   console.log(cardButtons);
  cardButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let name = e.target.innerText;
      showDetails(name);
    });
  });
}

function showDetails(name) {
  //   console.log(name);
  fetch(`${apiUrl}search/${name}`)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((hero) => {
        showModal(hero);
      });
    });
}

function showModal(hero) {
  let modal = document.querySelector(".modal-dialog");
  modal.classList.remove("hidden");
  let body = document.querySelector(".body");
  body.classList.add("overlay");
  //   let overlay = document.querySelector(".overlay");
  //   overlay.addEventListener("click", hideModal);
  let modalBody = document.querySelector(".modal-body");
  let modalImageContainer = document.querySelector(".modal-image-container");
  let modalHeader = document.querySelector(".modal-header");
  let modalFooter = document.querySelector(".modal-footer");

  //   modalTitle.empty();
  //   modalBody.empty();

  modalHeader.innerHTML = `<h1 class="modal-title">${hero.name}</h1>`;
  //   let closeButton = document.createElement("button");
  //   closeButton.innerHTML = `<button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="hideModal()"><span aria-hidden="true">&times;</span></button>`;
  //   modal.appendChild(closeButton);
  modalImageContainer.innerHTML = `<img class="modal-image" src="${hero.image.url}"/>`;
  modalFooter.innerHTML = `<button type="button" onclick="showPowers()" class="powers-button">Powers</button> <button type="button" class="btn btn-secondary"data-dismiss="modal"
  onclick="hideModal()">Close</button>`;
  localStorage.setItem("hero", JSON.stringify(hero));
}

function hideModal() {
  let modal = document.querySelector(".modal-dialog");
  modal.classList.add("hidden");
  let body = document.querySelector(".body");
  body.classList.remove("overlay");
  localStorage.clear();
}

function showPowers() {
  let powersModal = document.querySelector(".powers-modal");
  powersModal.classList.toggle("hidden");
  let powersList = document.createElement("ul");
  powersModal.appendChild(powersList);
  let character = JSON.parse(localStorage.getItem("hero"));
  console.log(character.powerstats);
  for (const [key, value] of Object.entries(character.powerstats)) {
    let power = `<li>${key}: ${value}</li>`;
    powersList.append(power);
  }
}

window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    hideModal();
  }
});

window.addEventListener("load", getHeroesInfo());

//   return {
//     getAll: getAll,
//     add: add,
//     // addListItem: addListItem,
//     loadHeroIdByName: loadHeroIdByName,
//     // loadDetails: loadDetails,
//     // showModal: showModal,
//     // hideModal: hideModal,
//     // showDetails: showDetails,
//   };

// Search for specific pokemon
// $(document).ready(function(){
//   $('#pokemon-search').on('keyup', function() {
//     let value = $(this).val().toLowerCase();
//     $('.list-group-item').filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
//     });
//   });
// });

// heroesRepository.loadList().then(function () {
//   heroesRepository.getAll().forEach(function (hero) {
//     heroesRepository.addListItem(hero);
//   });
// });

// heroesRepository.loadHeroIdByName().then(() => {
//   console.log(hero);
// });
