import { fetchUser} from "./loginSystem.js";

document.querySelector("title").append(``);
//Checking if any user is signed in... If yes, then fetching the user information from lognSystem.
//Here I am using a index system to fetch the logged in user from the list of total users
let isSignedIn = localStorage.getItem("isSignedIn") || "false";
let signedIndex;
let currentUser = null;
if (isSignedIn == "true") {
  signedIndex = localStorage.getItem("signedInUser");
  currentUser = fetchUser(signedIndex);
  document.querySelector(".profile_button").classList.add("hidden");

  if(currentUser.hasOwnProperty("name")) {
    document.querySelector("#welcome").textContent = "Hello " + currentUser.name;
  } else {
    document.querySelector("#welcome").textContent = "Hello Myntra User";
  }

  document.querySelector(".number_div").textContent = currentUser.phone;
  document.querySelectorAll("#loginSpecial").forEach((elem) => {
    elem.classList.remove("hidden");
    if (currentUser.cart.length) {
      document.querySelector("#cart-counter").textContent =
        currentUser.cart.length;
      document.querySelector("#cart-counter").classList.remove("hidden");
      let x = setInterval(function () {
        currentUser = fetchUser(signedIndex);
        document.querySelector("#cart-counter").textContent =
          currentUser.cart.length;
      }, 1000);
    }
  });
}

import mappingDataFetcher from "./home_page_map_data.js";
mappingDataFetcher();
let map_data = JSON.parse(localStorage.getItem("category_array"));
// console.log(map_data);
let overlay = document.querySelector("#overlay");

//Index --> color object for mapping
let map_colors = [
  "#0e0e0e",
  "#0e0e0e",
  "#0e0e0e",
  "#0e0e0e",
  "#0e0e0e",
  "#0e0e0e",
  "#0e0e0e",
  "#0e0e0e",
  "#0e0e0e",
  "#0e0e0e",
  "#0e0e0e",
  "#0e0e0e",
];

//navbar menu container hover effect
let mapBox = document.querySelector(".navbar-mapping-div");
let navCategory = document.querySelectorAll(".navbar-categories-li");

//map box hover function
mapBox.addEventListener("mouseover", function () {
  overlay.classList.remove("hidden");
  mapBox.classList.remove("hidden");
});

mapBox.addEventListener("mouseleave", function () {
  overlay.classList.add("hidden");
  mapBox.innerHTML = "";
  mapBox.classList.add("hidden");
  //   navCategory.forEach((elem, index) => {
  //     elem.style.border = "0";
  //   });
});

//Adding hover for the mapBox on navCategory
navCategory.forEach((elem, index) => {
  if (index == 11) {
    return;
  }
  elem.addEventListener("mouseover", function () {
    elem.style.cursor = "pointer";
    displayFlex(index);

    mapBox.addEventListener("mouseover", function () {
      for (let i = 0; i < 5; i++) {
        if (i == index) {
          navCategory[i].style.borderBottom = "4px solid " + map_colors[index];
        } else {
          navCategory[i].style.borderBottom = "0";
        }
      }
    });
  });
  elem.addEventListener("mouseleave", function () {
    displayHidden(index);
    mapBox.addEventListener("mouseleave", function () {
      elem.style.border = "0";
    });
  });
});

//displayFlex on hover
function displayFlex(index) {
  overlay.classList.remove("hidden");
  mapBox.classList.remove("hidden");

  //Write data mapping function here
  let current_data = map_data[index];
  mapCategoryData(current_data, index);
  navCategory[index].style.borderBottom = "4px solid " + map_colors[index];
  //Keep displaying data if the cursor moves from category selector to the hidden div
  mapBox.addEventListener("mouseover", function () {
    mapBox.innerHTML = "";
    mapCategoryData(current_data, index);
    mapBox.classList.remove("hidden");
  });
}

//display Hidden on mouseleave
function displayHidden(index) {
  overlay.classList.add("hidden");
  navCategory[index].style.borderBottom = "0";
  mapBox.innerHTML = "";
  mapBox.classList.add("hidden");
}

function mapCategoryData(data, index) {
  if (!mapBox.innerHTML == "") {
    return;
  }
  data.forEach((elem) => {
    let currentBox = document.createElement("div");

    currentBox.setAttribute("id", "nav_map_innerBox");
    // currentBox.style.border = "1px solid red";

    currentBox.addEventListener("click", function () {
      console.log("dfdf");
      // console.log('dfd')
      // window.location.href = "./menInter.html"
    });

    //mapping the internal data on the current box
    for (let i = 0; i < elem.length; i++) {
      let line = document.createElement("p");

      line.style.cursor = "pointer";
      if (i == 0) {
        //   line.setAttribute('class', "innerHeading");
        // line.style.color = map_colors[index];
        line.style.fontWeight = "700";
        line.style.marginBottom = "10px";
      }

      line.setAttribute("class", "nav_innerBox_text");

      line.textContent = elem[i];

      currentBox.append(line);
    }

    mapBox.append(currentBox);
    // mapBox.addEventListener('mouseleave', function() {

    // })
  });
}



