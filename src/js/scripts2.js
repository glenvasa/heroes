let heroTeam = [];
// let apiUrl = "https://superheroapi.com/api/114585350670601/";
let apiUrl = "https://akabab.github.io/superhero-api/api/id";
let heroesList = document.querySelector(".heroes-list");

// function getHeroesInfo() {
//   console.log(superHeroesList);
//   superHeroesList.forEach((name) => {
//     fetch(`${apiUrl}search/${name}`)
//       .then((response) => response.json())
//       .then((data) => {
//         data.results.forEach((hero) => {
//           heroTeam.push(hero);
//           localStorage.setItem(`${name}`, JSON.stringify(hero));
//           addListItem(hero);
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });
// }

// code that creates array of only character names (removes table cells that are id numbers) 
// on https://superheroapi.com/ids.html when run from console

// const cells = document.querySelectorAll('.container-fluid td'); 
// let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; 
// const names = Array.from(cells) 
//               .map(cell => cell.innerText)
//               .filter(name => !numbers.some(num => name.includes(num)))
// console.log(names)



// function getHeroesInfo() {
//   console.log(superHeroesList);
//   superHeroesList.forEach((name) => {
//     fetch(`${apiUrl}search/${name}`)
//       .then((response) => response.json())
//       .then((data) => {
//         data.results.forEach((hero) => {
//           heroTeam.push(hero);
//           localStorage.setItem(`${name}`, JSON.stringify(hero));
//           addListItem(hero);
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });
// }

function getHeroesInfo() {
  for (i = 1; i < 40; i++) {
    fetch(`${apiUrl}/${i}.json`)
      .then((response) => response.json())
      .then((hero) => {
        localStorage.setItem(`${hero.name}`, JSON.stringify(hero));
        addListItem(hero);
      });

    // .catch((error) => {
    //   console.log(error);
    // });
  }
}

function addListItem(hero) {
  let listItem = document.createElement("li");
  listItem.classList.add("card");
  listItem.setAttribute("data-name", `${hero.name}`);
  heroesList.appendChild(listItem);
  listItem.innerHTML = `<img class="card-image" src="${hero.images.md}"><button type="button"  
  id="hero-name" class="btn card-button hero-name">${hero.name}</button>`;

  addButtonListener();
}

// function addListItem() {
//   console.log(heroTeam);
//   let newHeroTeam = heroTeam.filter((item, i, ar) => ar.indexOf(item) === i);
//   console.log(newHeroTeam);
//   setTimeout(() => {
//     let newHeroTeam2 = newHeroTeam.filter((item, i, ar) => ar.indexOf(item) === i);
//       newHeroTeam2.map((hero) => {
//     let listItem = document.createElement("li");
//     listItem.classList.add("card");
//     listItem.setAttribute("data-name", `${hero.name}`);
//     // listItem.classList.add("list-group-item");
//     heroesList.appendChild(listItem);
//     listItem.innerHTML = `<img class="card-image" src="${hero.image.url}"><button type="button" class="card-button" id="hero-name" class="btn" data-toggle="modal"
//     data-target="#exampleModal">${hero.name}</button>
//       `;
//   })
//   })
//   addButtonListener();
// }

function addButtonListener() {
  let cardButtons = document.querySelectorAll(".card-button");
  //   console.log(cardButtons);
  cardButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let name = e.target.innerText;
      getDetails(name);
    });
  });
}

function getDetails(name) {
  let hero = JSON.parse(localStorage.getItem(name));
  console.log(hero);
  showModal(hero);
}

function showModal(hero) {
  heroesList.style.display = "none";
  let modal = document.querySelector(".modal-dialog");
  modal.classList.remove("hidden");
  // let body = document.querySelector(".body");
  // body.classList.add("overlay");
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
  modalImageContainer.innerHTML = `<img class="modal-image" src="${hero.images.md}"/>`;
  modalFooter.innerHTML = `<button type="button" onclick="showPowers()" class="powers-button btn btn-secondary ">Powers</button><button type="button" onclick="showAppearance()" class="appearance-button btn btn-secondary ">Appearance</button> <button type="button" onclick="showBio()" class="bio-button btn btn-secondary ">Bio</button><button type="button" onclick="showAffiliations()" class="affiliations-button btn btn-secondary ">Work</button><button type="button" class="btn btn-secondary close-modal"
  onclick="hideModal()">Close</button>`;

  localStorage.setItem("hero", JSON.stringify(hero));
  let modalTitle = document.querySelector(".modal-title");

  if (hero.biography.alignment === "bad") {
    modalTitle.style.color = "black";
    modalTitle.style.textShadow = "2px 1px red";
  } else {
    modalHeader.style.color = "red";
    modalHeader.style.textShadow = "2px 1px black";
  }
}

function hideModal() {
  let powersModal = document.querySelector(".powers-modal");
  let appearanceModal = document.querySelector(".appearance-modal");
  let bioModal = document.querySelector(".bio-modal");
  let affiliationsModal = document.querySelector(".affiliations-modal");
  let modal = document.querySelector(".modal-dialog");
  modal.classList.add("hidden");

  appearanceModal.innerHTML = "";
  bioModal.innerHTML = "";
  powersModal.innerHTML = "";
  affiliationsModal.innerHTML = "";

  appearanceModal.style.display = "none";
  bioModal.style.display = "none";
  powersModal.style.display = "none";
  affiliationsModal.style.display = "none";

  heroesList.style.display = "";

  // let body = document.querySelector(".body");
  // body.classList.remove("overlay");

  // localStorage.clear();
}

function showPowers() {
  let powersModal = document.querySelector(".powers-modal");
  powersModal.style.display = "";
  document.querySelector(".powers-button").disabled = true;

  let powersArray = [];

  // powersModal.setAttribute("onclick", "console.log('hello')");
  powersModal.classList.remove("hidden");
  let powersTitle = document.createElement("h2");
  powersTitle.innerText = "Power Stats";
  powersModal.appendChild(powersTitle);
  let powersList = document.createElement("ul");
  powersModal.appendChild(powersList);
  let character = JSON.parse(localStorage.getItem("hero"));
  console.log(character.powerstats);
  for (const [key, value] of Object.entries(character.powerstats)) {
    let power = `<li>${key}: ${value}</li>`;
    powersArray.push(power);
    console.log(powersArray);
  }
  powersList.innerHTML = powersArray.join(" ");

  let closeModalButton = document.createElement("button");
  closeModalButton.innerHTML = `<span>&times;</span>`;
  // closeModalButton.classList.add("close-modal");
  powersModal.appendChild(closeModalButton);
  closeModalButton.setAttribute("onclick", "closePowersModal()");

  // powersList.appendChild(newPowersArray);
}

function closePowersModal() {
  console.log("clicked close Powers modal");
  let powersModal = document.querySelector(".powers-modal");
  powersModal.classList.add("hidden");
  document.querySelector(".powers-button").disabled = false;
}

function showAppearance() {
  let appearanceModal = document.querySelector(".appearance-modal");
  appearanceModal.style.display = "";
  document.querySelector(".appearance-button").disabled = true;

  let appearanceArray = [];

  // powersModal.setAttribute("onclick", "console.log('hello')");
  appearanceModal.classList.remove("hidden");
  let appearanceTitle = document.createElement("h2");
  appearanceTitle.innerText = "Appearance";
  appearanceModal.appendChild(appearanceTitle);
  let appearanceList = document.createElement("ul");
  appearanceModal.appendChild(appearanceList);
  let character = JSON.parse(localStorage.getItem("hero"));
  console.log(character.appearance);
  for (const [key, value] of Object.entries(character.appearance)) {
    let appearance = `<li>${key}: ${value}</li>`;
    appearanceArray.push(appearance);
    console.log(appearanceArray);
  }
  appearanceList.innerHTML = appearanceArray.join(" ");

  let closeModalButton = document.createElement("button");
  closeModalButton.innerHTML = `<span>&times;</span>`;
  // closeModalButton.classList.add("close-modal");
  closeModalButton.setAttribute("onclick", "closeAppearanceModal()");
  appearanceModal.appendChild(closeModalButton);
}

function closeAppearanceModal() {
  console.log("clicked close Appearance modal");
  let appearanceModal = document.querySelector(".appearance-modal");
  appearanceModal.classList.add("hidden");
  document.querySelector(".appearance-button").disabled = false;
}

function showBio() {
  let bioModal = document.querySelector(".bio-modal");
  bioModal.style.display = "";
  document.querySelector(".bio-button").disabled = true;

  let bioArray = [];

  bioModal.classList.remove("hidden");
  let bioTitle = document.createElement("h2");
  bioTitle.innerText = "Biography";
  bioModal.appendChild(bioTitle);
  let bioList = document.createElement("ul");
  bioModal.appendChild(bioList);
  let character = JSON.parse(localStorage.getItem("hero"));
  console.log(character.biography);
  for (const [key, value] of Object.entries(character.biography)) {
    let bio = `<li>${key}: ${value}</li>`;
    bioArray.push(bio);
    console.log(bioArray);
  }
  bioList.innerHTML = bioArray.join(" ");

  let closeModalButton = document.createElement("button");
  closeModalButton.innerHTML = `<span>&times;</span>`;
  // closeModalButton.classList.add("close-modal");
  closeModalButton.setAttribute("onclick", "closeBioModal()");
  bioModal.appendChild(closeModalButton);
}

function closeBioModal() {
  console.log("clicked close Bio modal");
  let bioModal = document.querySelector(".bio-modal");
  bioModal.classList.add("hidden");
  document.querySelector(".bio-button").disabled = false;
}

function showAffiliations() {
  let affiliationsModal = document.querySelector(".affiliations-modal");
  affiliationsModal.style.display = "";
  document.querySelector(".affiliations-button").disabled = true;

  let affiliationsArray = [];

  // powersModal.setAttribute("onclick", "console.log('hello')");
  affiliationsModal.classList.remove("hidden");
  let affiliationsTitle = document.createElement("h2");
  affiliationsTitle.innerText = "Work";
  affiliationsModal.appendChild(affiliationsTitle);
  let affiliationsList = document.createElement("ul");
  affiliationsModal.appendChild(affiliationsList);
  let character = JSON.parse(localStorage.getItem("hero"));
  console.log(character.work);
  for (const [key, value] of Object.entries(character.work)) {
    let affiliation = `<li>${key}: ${value}</li>`;
    affiliationsArray.push(affiliation);
    console.log(affiliationsArray);
  }
  affiliationsList.innerHTML = affiliationsArray.join(" ");

  let closeModalButton = document.createElement("button");
  closeModalButton.innerHTML = `<span>&times;</span>`;
  // closeModalButton.classList.add("close-modal");
  closeModalButton.setAttribute("onclick", "closeAffiliationsModal()");
  affiliationsModal.appendChild(closeModalButton);
}

function closeAffilationsModal() {
  console.log("clicked close Affiliations modal");
  let affiliationsModal = document.querySelector(".affiliations-modal");
  affiliationsModal.classList.add("hidden");
  document.querySelector(".affiliations-button").disabled = false;
}

window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    hideModal();
  }
});

function titleAnimation1() {
  let htitle = document.querySelector(".nav-heroes");
  let vtitle = document.querySelector(".nav-villains");
  vtitle.addEventListener("transitionend", () => {
    titleAnimation2();
  });
  htitle.style.left = "544px";
  vtitle.style.left = "624px";
}

function titleAnimation2() {
  let htitle = document.querySelector(".nav-heroes");
  let vtitle = document.querySelector(".nav-villains");
  htitle.style.transition = "all 2s cubic-bezier(0.1, 2.7, 0.58, 1)";
  vtitle.style.transition = "all 2s cubic-bezier(0.1, 2.7, 0.58, 1)";
  htitle.style.color = "red";
  htitle.style.textShadow = "2px 1px black";
  vtitle.style.color = "black";
  vtitle.style.textShadow = "2px 1px red";

  let width = window.innerWidth;

  console.log(htitle.getBoundingClientRect()); // htitle width = 119.53px
  console.log(vtitle.getBoundingClientRect()); // vtitle width = 129.70px
  // searchbar width = 122.22 px

  // htitle ending position calculation
  // 1/2 window width - 1/2 search bar width
  // - spacing between htitle and searchbar - title width
  htitle.style.left = width / 2 - 61 - 83 - 127.53 + "px";

  // vtitle ending position calculation
  // 1/2 window width + 1/2 search bar width
  // + spacing between searchbar and vtitle
  vtitle.style.left = width / 2 + 61 + 60 + "px";

  htitle.addEventListener("transitionend", () => {
    getHeroesInfo();
    searchAppear();
  });
}

function searchAppear() {
  let navContainer = document.querySelector(".nav-container");
  navContainer.style.borderBottom = "2px groove black";
  navContainer.style.background =
    "radial-gradient(circle, rgba(25,37,91,1) 18%, rgba(121,9,55,1) 52%, rgba(28,122,201,1) 76%)";
  setTimeout(() => {
    let navSearch = document.querySelector(".nav-search");
    navSearch.style.display = "block";
  }, 1000);
  search();
}

function search() {
  let nav = document.querySelector(".heroes-search");
  nav.addEventListener("click", () => {
    let search = document.querySelector("#heroes-search");
    let li = Array.from(document.querySelectorAll(".card"));
    console.log(li);
    search.addEventListener("keyup", () => {
      console.log(search.value);
      value = search.value;

      for (i = 0; i < li.length; i++) {
        txtAttrib = li[i].getAttribute("data-name");
        console.log(txtAttrib);
        if (txtAttrib.toLowerCase().indexOf(value) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  let vtitle = document.querySelector(".nav-villains");
  let width = window.innerWidth;
  // set Villain title start position at width of screen - width of title - 8px
  vtitle.style.left = width - 129.7 - 10 + "px";
  setTimeout(() => {
    titleAnimation1();
  }, 500);
});
