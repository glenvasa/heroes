let heroTeam = [];
let apiUrl = "https://akabab.github.io/superhero-api/api/id";
let heroesList = document.querySelector(".heroes-list");

// skip is the array of number ids in data.js that are skipped by the API between 1 - 731

function getHeroesInfo() {
  for (i = 400; i < 732; i++) {
    if (!skip.some((num) => i === num))
      fetch(`${apiUrl}/${i}.json`)
        .then((response) => response.json())
        .then((hero) => {
          localStorage.setItem(`${hero.name}`, JSON.stringify(hero));
          addListItem(hero);
        })
        .catch((error) => {
          console.log(error);
        });
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

function addButtonListener() {
  let cardButtons = document.querySelectorAll(".card-button");
  cardButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let name = e.target.innerText;
      getDetails(name);
    });
  });
}

function getDetails(name) {
  let hero = JSON.parse(localStorage.getItem(name));
  showModal(hero);
}

function showModal(hero) {
  heroesList.style.display = "none";
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => (card.style.animation = "none"));
  cards.forEach((card) => (card.style.transform = "scaleX(1) scaleY(1)"));

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

  modalHeader.innerHTML = `<h1 class="modal-title">${hero.name}</h1>`;

  modalImageContainer.innerHTML = `<img class="modal-image" src="${hero.images.md}"/>`;
  modalFooter.innerHTML = `<button type="button" onclick="showPowers()" class="powers-button btn btn-secondary ">Powers</button>
  <button type="button" onclick="showAppearance()" class="appearance-button btn btn-secondary ">Appearance</button> 
  <button type="button" onclick="showBio()" class="bio-button btn btn-secondary ">Bio</button><button type="button" onclick="showwork()" class="work-button btn btn-secondary ">Work</button>
  <button type="button" onclick="showAffiliations()" class="affiliations-button btn btn-secondary ">Connections</button><button type="button" class="btn btn-secondary close-modal" onclick="hideModal()">Close</button>`;

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
  let workModal = document.querySelector(".work-modal");
  let affiliationsModal = document.querySelector(".affiliations-modal");

  let modal = document.querySelector(".modal-dialog");
  modal.classList.add("hidden");

  appearanceModal.innerHTML = "";
  bioModal.innerHTML = "";
  powersModal.innerHTML = "";
  workModal.innerHTML = "";
  affiliationsModal.innerHTML = "";

  heroesList.style.display = "grid";
}

function showPowers() {
  let powersModal = document.querySelector(".powers-modal");
  powersModal.style.display = "";
  document.querySelector(".powers-button").disabled = true;

  let powersArray = [];

  powersModal.classList.remove("hidden");
  let powersTitle = document.createElement("h2");
  powersTitle.innerText = "Power Stats";
  powersModal.appendChild(powersTitle);
  let powersList = document.createElement("ul");
  powersModal.appendChild(powersList);
  let character = JSON.parse(localStorage.getItem("hero"));
  for (const [key, value] of Object.entries(character.powerstats)) {
    let power = `<li class="powersModalListItem">${key}: ${value}</li>`;
    powersArray.push(power);
  }
  powersList.innerHTML = powersArray.join(" ");

  let closeModalButton = document.createElement("button");
  closeModalButton.innerHTML = `<span>&times;</span>`;
  powersModal.appendChild(closeModalButton);
  closeModalButton.setAttribute("onclick", "closePowersModal()");
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

  appearanceModal.classList.remove("hidden");
  let appearanceTitle = document.createElement("h2");
  appearanceTitle.innerText = "Appearance";
  appearanceModal.appendChild(appearanceTitle);
  let appearanceList = document.createElement("ul");
  appearanceModal.appendChild(appearanceList);
  let character = JSON.parse(localStorage.getItem("hero"));

  for (const [key, value] of Object.entries(character.appearance)) {
    let appearance = `<li class="appearanceModalListItem">${key}: ${value}</li>`;
    appearanceArray.push(appearance);
  }
  appearanceList.innerHTML = appearanceArray.join(" ");

  let closeModalButton = document.createElement("button");
  closeModalButton.innerHTML = `<span>&times;</span>`;
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
  for (const [key, value] of Object.entries(character.biography)) {
    let bio = `<li class="bioModalListItem">${key}: ${value}</li>`;
    bioArray.push(bio);
  }
  bioList.innerHTML = bioArray.join(" ");

  let closeModalButton = document.createElement("button");
  closeModalButton.innerHTML = `<span>&times;</span>`;
  closeModalButton.setAttribute("onclick", "closeBioModal()");
  bioModal.appendChild(closeModalButton);
}

function closeBioModal() {
  console.log("clicked close Bio modal");
  let bioModal = document.querySelector(".bio-modal");
  bioModal.classList.add("hidden");
  document.querySelector(".bio-button").disabled = false;
}

function showwork() {
  let workModal = document.querySelector(".work-modal");
  workModal.style.display = "";
  document.querySelector(".work-button").disabled = true;

  let workArray = [];

  workModal.classList.remove("hidden");
  let workTitle = document.createElement("h2");
  workTitle.innerText = "Work";
  workModal.appendChild(workTitle);
  let workList = document.createElement("ul");
  workModal.appendChild(workList);
  let character = JSON.parse(localStorage.getItem("hero"));

  for (const [key, value] of Object.entries(character.work)) {
    let work = `<li class="workModalListItem">${key}: ${value}</li>`;
    workArray.push(work);
  }
  workList.innerHTML = workArray.join(" ");

  let closeModalButton = document.createElement("button");
  closeModalButton.innerHTML = `<span>&times;</span>`;
  closeModalButton.setAttribute("onclick", "closeWorkModal()");
  workModal.appendChild(closeModalButton);
}

function closeWorkModal() {
  console.log("clicked close work modal");
  let workModal = document.querySelector(".work-modal");
  workModal.classList.add("hidden");
  document.querySelector(".work-button").disabled = false;
}

function showAffiliations() {
  let affiliationsModal = document.querySelector(".affiliations-modal");
  affiliationsModal.style.display = "";
  document.querySelector(".affiliations-button").disabled = true;

  let affiliationsArray = [];

  affiliationsModal.classList.remove("hidden");
  let affiliationsTitle = document.createElement("h2");
  affiliationsTitle.innerText = "Connections";
  affiliationsModal.appendChild(affiliationsTitle);
  let affiliationsList = document.createElement("ul");
  affiliationsModal.appendChild(affiliationsList);
  let character = JSON.parse(localStorage.getItem("hero"));

  for (const [key, value] of Object.entries(character.connections)) {
    let affiliation = `<li class="affiliationsModalListItem">${key}: ${value}</li>`;
    affiliationsArray.push(affiliation);
  }
  affiliationsList.innerHTML = affiliationsArray.join(" ");

  let closeModalButton = document.createElement("button");
  closeModalButton.innerHTML = `<span>&times;</span>`;
  affiliationsModal.appendChild(closeModalButton);
  closeModalButton.setAttribute("onclick", "closeAffiliationsModal()");
}

function closeAffiliationsModal() {
  console.log("clicked close affiliations modal");
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
  htitle.style.transition = "left 2s cubic-bezier(0.1, 2.7, 0.58, 1)";
  vtitle.style.transition = "left 2s cubic-bezier(0.1, 2.7, 0.58, 1)";
  htitle.style.color = "red";
  htitle.style.textShadow = "2px 1px black";
  vtitle.style.color = "black";
  vtitle.style.textShadow = "2px 1px red";

  let width = window.innerWidth;

  // console.log(htitle.getBoundingClientRect()); // htitle width = 119.53px
  // console.log(vtitle.getBoundingClientRect()); // vtitle width = 129.70px
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
  }, 2500);
  search();
}

function search() {
  // displays previously loaded character cards that were hidden while nav animation ran
  let heroesList = document.querySelector(".heroes-list");
  let cards = document.querySelectorAll(".card");
  // heroesList.classList.add("fade-in");
  setTimeout(() => {
    heroesList.style.display = "grid";
    // cards.forEach((card) => (card.style.animation = "cardGrow .5s ease-in;"));
  }, 500);

  cards.forEach((card) => (card.style.transform = "scaleX(1) scaleY(1)"));

  let nav = document.querySelector(".heroes-search");
  nav.addEventListener("click", () => {
    let search = document.querySelector("#heroes-search");
    let li = Array.from(document.querySelectorAll(".card"));

    search.addEventListener("keyup", () => {
      value = search.value.toLowerCase();
      for (i = 0; i < li.length; i++) {
        txtAttrib = li[i].getAttribute("data-name");
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
  let htitle = document.querySelector(".nav-heroes");
  let vtitle = document.querySelector(".nav-villains");
  let width = window.innerWidth;
  // set Villain title start position at width of screen - width of title - 8px
  vtitle.style.left = width - 129.7 - 10 + "px";

  getHeroesInfo();

  htitle.style.visibility = "visible";
  setTimeout(() => {
    htitle.style.animation = "grow 2s ease-in";
    htitle.style.transform = "scaleX(1.1) scaleY(1.1)";
  }, 700);
  setTimeout(() => {
    vtitle.style.visibility = "visible";
    vtitle.style.animation = "grow 2s ease-in";
    vtitle.style.transform = "scaleX(1.1) scaleY(1.1)";
  }, 3600);
  setTimeout(() => {
    titleAnimation1();
  }, 6500);
});
