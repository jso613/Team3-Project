// Dropdown
var dropdownButton = document.querySelector("#dropdown-button");
var menudropdownButton = document.querySelector("#menu-dropdown-button");
var dropdownContent = document.getElementsByClassName("dropdown-content")[0];
var menudropdownContent = document.querySelector(".menu-dropdown-content");
// Sorting list
function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.querySelector(".questionList");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    recommendNumber = list.getElementsByClassName("recommend-number");
    // Loop through all list-items:
    for (i = 0; i < (recommendNumber.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */
      if (parseInt(recommendNumber[i].textContent) < parseInt(recommendNumber[i + 1].textContent)) {
        /* if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      prev = recommendNumber[i].parentNode.parentNode.parentNode;
      next = recommendNumber[i+1].parentNode.parentNode.parentNode;
      prev.parentNode.insertBefore(next, prev);
      switching = true;
    }
  }
};

dropdownButton.addEventListener("click", (event) => {
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

menudropdownButton.addEventListener("click", (event) => {
  if (menudropdownContent.style.display === "block") {
    menudropdownContent.style.display = "none";
  } else {
    menudropdownContent.style.display = "block";
  }
})

var dropdownIcon = document.getElementById("dropdown-icon");

var recent = document.querySelector("#header-question-2 > div > div > a:nth-child(1)");
recent.addEventListener("click", () => {
  var content = recent.textContent;
  dropdownButton.textContent = ""
  dropdownButton.appendChild(dropdownIcon);
  dropdownButton.appendChild(document.createTextNode(content));
  dropdownContent.style.display = "none";
})

var recommend = document.querySelector("#header-question-2 > div > div > a:nth-child(2)");
recommend.addEventListener("click", () => {
  var content = recommend.textContent;
  dropdownButton.textContent = ""
  dropdownButton.appendChild(dropdownIcon);
  dropdownButton.appendChild(document.createTextNode(content));
  dropdownContent.style.display = "none";
  sortList();
});

// Ask Button
var askButton = document.querySelector("#ask");
askButton.addEventListener("click", () => {
  var overlay = document.querySelector(".overlay");
  overlay.style.display = "block";
});

// Login Button
var loginButton = document.querySelector("#login");
loginButton.addEventListener("click", () => {
  var overlay = document.querySelector(".overlay");
  var overlayBack = document.querySelector(".overlay-back");
  overlay.style.display = "block";
  var content = overlayBack.textContent + "Login";
  overlayBack.textContent = "";
  overlayBack.appendChild(document.createTextNode(content));
});

// Recommend Button
var recommendNumber =document.getElementsByClassName("recommend-number");
for (let num of recommendNumber){
  var up = num.parentElement.children[0];
  var down = num.parentElement.children[2];
  up.addEventListener("click", () => {
    var numInt = parseInt(num.textContent)
    numInt += 1;
    num.textContent = "";
    num.textContent = " " + numInt + " ";
  });

  down.addEventListener("click", () => {
    var numInt = parseInt(num.textContent)
    numInt -= 1;
    num.textContent = "";
    num.textContent = " " + numInt + " ";
  })
};
