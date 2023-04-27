const startButton = document.getElementById("start");
const gridElement = document.querySelector(".grid");
const allTheCells = [];
let playerPosition = 49;
let target;
let target2;

startButton.addEventListener("click", startTheGame);

function startTheGame() {
  for (let i = 0; i < 50; i++) {
    createACell();
  }
  // target = Math.floor(Math.random() * allTheCells.length - 1) + 1
  // target2 = Math.floor(Math.random() * allTheCells.length - 1) + 1
  target = 25;
  target2 = 12;
  displayPlayer();
  displayTarget();
  displayTarget2();
}

function displayTarget() {
  allTheCells[target].classList.add("target");
}

// Je rajoute une deuxième target

function displayTarget2() {
  allTheCells[target2].classList.add("targetTwo"); // Je crée une autre classe pour pouvoir display deux messages différents en fonction de qui le joueur rencontre
}

function displayExit() {
  let exit = 2;
  allTheCells[exit].classList.add("exit"); // add exit class
}

function displayPlayer() {
  allTheCells[playerPosition].classList.add("player");
}

function createACell() {
  const div = document.createElement("div");
  div.classList.add("cell");
  gridElement.append(div);
  allTheCells.push(div);
}

function hidePlayer() {
  allTheCells[playerPosition].classList.remove("player");
}

function move(direction) {
  hidePlayer();

  if (direction === "right") {
    if ((playerPosition + 1) % 10 === 0) {
      return displayPlayer();
    }
    playerPosition += 1;
  }

  if (direction === "left") {
    if (playerPosition % 10 === 0) {
      return displayPlayer();
    }
    playerPosition -= 1;
  }

  if (direction === "up") {
    if (playerPosition < 10) {
      return displayPlayer();
    }
    playerPosition -= 10;
  }

  if (direction === "down") {
    if (playerPosition >= 90) {
      return displayPlayer();
    }
    playerPosition += 10;
  }

  displayPlayer();

  // Dans ce If statement, je veux rajouter avant le remove, un dialog a choix multiple

  if (allTheCells[playerPosition].classList.contains("target")) {
    //je veux que les pnj soient des objets colision.

    // function createContainer() {
    //     const container = document.createElement("div");
    //     body.appendChild(container);
    // }
    // createContainer();

    function createDialog() {
      const dialogDiv = document.createElement("div");
      dialogDiv.id = "dialog1";
      const dialogText = document.createElement("p");
      dialogText.textContent =
        "This is your first challenge adventurer ! bakrnfanfnazefnazjnfvlaernvlanevn,arnvazrjnlvanerj";
      const button1 = document.createElement("button");
      button1.id = "button1";
      button1.textContent = "Solution 1";
      const button2 = document.createElement("button");
      button2.id = "button2";
      button2.textContent = "Solution 2";

      dialogDiv.appendChild(dialogText);
      dialogDiv.appendChild(button1);
      dialogDiv.appendChild(button2);
      document.body.appendChild(dialogDiv);
    }

    createDialog();
    allTheCells[playerPosition].classList.remove("target");

    // Display exit method

    if (!allTheCells.some((cell) => cell.classList.contains("target"))) {
      // both targets have been removed, display exit
      displayExit();
    }
  }

  if (allTheCells[playerPosition].classList.contains("targetTwo")) {
    //ça va changer, je veux que les pnj soient des objets colision.

    function createDialog() {
      const dialogDivTwo = document.createElement("div");
      dialogDivTwo.id = "dialog2";
      const dialogTextTwo = document.createElement("p");
      dialogTextTwo.textContent = "This is your second challenge adventurer !";
      const button3 = document.createElement("button");
      button1.id = "button3";
      button3.textContent = "Solution 3";
      const button4 = document.createElement("button");
      button4.id = "button4";
      button4.textContent = "Solution 4";

      dialogDivTwo.appendChild(dialogTextTwo);
      dialogDivTwo.appendChild(button3);
      dialogDivTwo.appendChild(button4);
      document.body.appendChild(dialogDivTwo);
    }

    createDialog();

    allTheCells[playerPosition].classList.remove("targetTwo");

    // Display exit method

    if (
      !allTheCells.some(
        (cell) =>
          cell.classList.contains("target") ||
          cell.classList.contains("targetTwo")
      )
    ) {
      // both targets have been removed, display exit
      displayExit();
    }
  }
}

// Je veux que si il n'y a plus de target dans mon grid, une nouvelle target d'une autre couleur est créée, ce sera la porte de sortie du niveau

// function createExit() {
//     for (let i=0 ; i < 50 ; i++) {
//         if
//     }
// }

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  switch (event.key) {
    case "ArrowRight":
      move("right");
      break;
    case "ArrowLeft":
      move("left");
      break;
    case "ArrowDown":
      move("down");
      break;
    case "ArrowUp":
      move("up");
      break;
  }
});

///// TEST COUNTER

button12.addEventListener("click", () => {
  dialogDivSix.remove();
  const clickerDiv = document.createElement("div");
  clickerDiv.classList.add("clicker");
  const dialogClicker = document.createElement("h3");
  dialogClicker.textContent = "Press me !!!";
  const clickerButton = document.createElement("button");
  clickerButton.id = "clickme";
  clickerDiv.appendChild(dialogClicker);
  clickerDiv.appendChild(clickerButton);
  document.body.appendChild(clickerDiv);

  let count = 0;
  let timer = 10; // Set the time limit in seconds
  clickerButton.onclick = function () {
    count += 1;
    clickerButton.innerHTML = "Click me: " + count;
    if (count >= 100) {
      // Check if the player has clicked 100 times
      clearInterval(intervalId); // Stop the timer
      alert("You won!"); // Display a message to the player
    }
  };
  const intervalId = setInterval(() => {
    timer--;
    if (timer <= 0) {
      // Check if the time limit is reached
      clearInterval(intervalId); // Stop the timer
      if (count < 100) {
        // Check if the player has clicked less than 100 times
        alert("You lost!"); // Display a message to the player
      }
    }
  }, 1000);
});

// counter qui marche

button12.addEventListener("click", () => {
  dialogDivSix.remove();
  const clickerDiv = document.createElement("div");
  clickerDiv.classList.add("clicker");
  const dialogClicker = document.createElement("h3");
  dialogClicker.textContent = "Press me !!!";
  const clickerButton = document.createElement("button");
  clickerButton.id = "clickme";
  clickerDiv.appendChild(dialogClicker);
  clickerDiv.appendChild(clickerButton);
  document.body.appendChild(clickerDiv);

  let count = 0;
  clickerButton.onclick = function () {
    count += 1;
    clickerButton.innerHTML = "Click me: " + count;
  };
});

// document.addEventListener("keydown", function (event) {
//   const divsArray = document.querySelectorAll(".cell");

//   const cellUp = divsArray[playerPosition],
//     cellDown = divsArray[playerPosition],
//     cellLeft = divsArray[playerPosition - 1],
//     cellRight = divsArray[playerPosition + 1];

//   if (
//     event.key === "ArrowUp" &&
//     cellUp.classList.contains("class2")
//   ) {
//     console.log("you went up and lost a life");
//     console.log(divsArray[playerPosition]);
//     life -= 1;
//     console.log(life);
//     if (life === 0) {
//       alert("Game over!");
//     }
//   } else if (
//     cellDown.classList.contains("class2") &&
//     event.key === "ArrowDown"
//   ) {
//     console.log("you went down and lost a life");
//     life -= 1;
//     console.log(life);
//     if (life === 0) {
//       alert("Game over!");
//     }
//   } else if (
//     cellLeft.classList.contains("class2") &&
//     event.key === "ArrowLeft"
//   ) {
//     console.log("you went left and lost a life");
//     life -= 1;
//     console.log(life);
//     if (life === 0) {
//       alert("Game over!");
//     }
//   } else if (
//     cellRight.classList.contains("class2") &&
//     event.key === "ArrowRight"
//   ) {
//     console.log("you went right and lost a life");
//     life -= 1;
//     console.log(life);
//     if (life === 0) {
//       alert("Game over!");
//     }
//   }

//   if (
//     event.key === "ArrowUp" &&
//     cellUp.classList.contains("class3")
//   ) {
//     const swordImg = document.createElement("div");
//     swordImg.classList.add("sword");
//     swordContainer.appendChild(swordImg);
//     if (swordContainer.children.length === 5) {
//       alert("You WIIIN");
//     }
//   } else if (
//     cellLeft.classList.contains("class3") &&
//     event.key === "ArrowLeft"
//   ) {
//     // const swordImg = document.createElement("div");
//     swordImg.classList.add("sword");
//     swordContainer.appendChild(swordImg);
//     if (swordContainer.children.length >= 5) {
//       alert("You WIIIN");
//     }
//   } else if (
//     cellRight.classList.contains("class3") &&
//     event.key === "ArrowRight"
//   ) {
//     // const swordImg = document.createElement("div");
//     swordImg.classList.add("sword");
//     swordContainer.appendChild(swordImg);
//     if (swordContainer.children.length >= 5) {
//       alert("You WIIIN");
//     }
//   }
// });

// document.addEventListener("keydown", function (event) {
//   const divsArray = document.querySelectorAll(".cell");

//   const cellUp = divsArray[playerPosition],
//     cellDown = divsArray[playerPosition],
//     cellLeft = divsArray[playerPosition - 1],
//     cellRight = divsArray[playerPosition + 1];

//   if (
//     event.key === "ArrowUp" &&
//     cellUp.classList.contains("class2")
//   ) {
//     console.log("you went up and lost a life");
//     console.log(divsArray[playerPosition]);
//     life -= 1;
//     console.log(life);
//     if (life === 0) {
//       alert("Game over!");
//     }
//   } else if (
//     cellDown.classList.contains("class2") &&
//     event.key === "ArrowDown"
//   ) {
//     console.log("you went down and lost a life");
//     life -= 1;
//     console.log(life);
//     if (life === 0) {
//       alert("Game over!");
//     }
//   } else if (
//     cellLeft.classList.contains("class2") &&
//     event.key === "ArrowLeft"
//   ) {
//     console.log("you went left and lost a life");
//     life -= 1;
//     console.log(life);
//     if (life === 0) {
//       alert("Game over!");
//     }
//   } else if (
//     cellRight.classList.contains("class2") &&
//     event.key === "ArrowRight"
//   ) {
//     console.log("you went right and lost a life");
//     life -= 1;
//     console.log(life);
//     if (life === 0) {
//       alert("Game over!");
//     }
//   }

//   if (
//     event.key === "ArrowUp" &&
//     cellUp.classList.contains("class3")
//   ) {
//     const swordImg = document.createElement("div");
//     swordImg.classList.add("sword");
//     swordContainer.appendChild(swordImg);
//     if (swordContainer.children.length === 5) {
//       alert("You WIIIN");
//     }
//   } else if (
//     cellLeft.classList.contains("class3") &&
//     event.key === "ArrowLeft"
//   ) {
//     // const swordImg = document.createElement("div");
//     swordImg.classList.add("sword");
//     swordContainer.appendChild(swordImg);
//     if (swordContainer.children.length >= 5) {
//       alert("You WIIIN");
//     }
//   } else if (
//     cellRight.classList.contains("class3") &&
//     event.key === "ArrowRight"
//   ) {
//     // const swordImg = document.createElement("div");
//     swordImg.classList.add("sword");
//     swordContainer.appendChild(swordImg);
//     if (swordContainer.children.length >= 5) {
//       alert("You WIIIN");
//     }
//   }
// });
