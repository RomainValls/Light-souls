const startButton = document.getElementById("start");
const gridElement = document.querySelector(".grid");
const allTheCells = [];
let playerPosition = 90;
const userInterface = document.querySelector(".user-interface");
let target;
let target2;
let level = 4;
let choice;
let finalBoss;
startButton.addEventListener("click", startTheGame);

// MUSIC PART

let isPlaying = false;

playBtn1.addEventListener("click", () => {
  if (isPlaying) {
    audio1.pause();
    playBtn1.innerHTML = "Play Music";
  } else {
    audio1.play();
    playBtn1.innerHTML = "Pause Music";
  }
  isPlaying = !isPlaying;
});

function playAudio() {
  const audio = document.getElementById("audio1");
  audio.play();
}

// END OF MUSIC PART

function startTheGame() {
  userInterface.style.display = "flex";
  userInterface.style.backgroundColor = "transparent";

  if (level === 1) {
    for (let i = 0; i < 100; i++) {
      createACell();
    }
    // target = Math.floor(Math.random() * allTheCells.length - 1) + 1
    // target2 = Math.floor(Math.random() * allTheCells.length - 1) + 1
    target = 25;
    target2 = 12;
    displayPlayer();
    displayTarget();
  }

  if (level === 2) {
    clearGrid();
    for (let i = 0; i < 100; i++) {
      createACell2();
    }

    target = 27;
    target2 = 19;
    displayPlayer2();
    displayTarget3();
  }

  if (level === 3) {
    clearGrid();
    for (let i = 0; i < 100; i++) {
      createACell3();
    }

    target = 25;
    target2 = 12;
    displayPlayer3();
    displayTarget5();
  }

  if (level === 4) {
    clearGrid();
    for (let i = 0; i < 100; i++) {
      createACell4(i);
    }

    target = 25;

    displayPlayer4();
    displayTarget7();
  }
}

///// LEVEL 1 /////

function displayPlayer() {
  allTheCells[playerPosition].classList.add("player");
}

function displayTarget() {
  allTheCells[target].classList.add("target");
}

function displayTarget2() {
  allTheCells[target2].classList.add("targetTwo"); // Je crée une autre classe pour pouvoir display deux messages différents en fonction de qui le joueur rencontre
}

function displayExit() {
  let exit = 2;
  allTheCells[exit].classList.add("exit"); // add exit class
}

function createACell() {
  const div = document.createElement("div");
  div.classList.add("cell");
  gridElement.append(div);
  allTheCells.push(div);
}

function clearGrid() {
  // Remove all cells from the grid
  while (gridElement.firstChild) {
    gridElement.removeChild(gridElement.firstChild);
  }
  // Clear the allTheCells array
  allTheCells.length = 0;
}

function hidePlayer() {
  allTheCells[playerPosition].classList.remove("player");
}

// Move function

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

    function createDialog() {
      const dialogDiv = document.createElement("div");
      dialogDiv.id = "dialog1";
      const dialogText = document.createElement("p");
      dialogText.textContent = "This is your first challenge adventurer !";
      const button1 = document.createElement("button");
      button1.id = "button1";
      button1.textContent = "I want the sword !!!";
      button1.addEventListener("click", () => {
        choice = "sword";
        dialogDiv.remove();
        if (choice === "sword") {
          const swordImg = document.createElement("div");
          // swordImg.style.display = "block";
          swordImg.classList.add("sword");
          userInterface.append(swordImg);
        }
      });
      const button2 = document.createElement("button");
      button2.id = "button2";
      button2.textContent = "I'd rather take the shield.";
      button2.addEventListener("click", () => {
        choice = "shield";
        dialogDiv.remove();
      });

      dialogDiv.appendChild(dialogText);
      dialogDiv.appendChild(button1);
      dialogDiv.appendChild(button2);
      document.body.appendChild(dialogDiv);

      displayTarget2();
    }

    createDialog();
    allTheCells[playerPosition].classList.remove("target");

    // Display exit method
  }

  if (allTheCells[playerPosition].classList.contains("targetTwo")) {
    //ça va changer, je veux que les pnj soient des objets colision.

    function createDialog() {
      const dialogDivTwo = document.createElement("div");
      dialogDivTwo.id = "dialog2";
      const dialogTextTwo = document.createElement("p");
      dialogTextTwo.textContent = "This is your second challenge adventurer !";
      const button3 = document.createElement("button");
      button3.id = "button3";
      button3.textContent = "Solution 3";
      button3.addEventListener("click", () => {
        dialogDivTwo.remove();
      });
      const button4 = document.createElement("button");
      button4.id = "button4";
      button4.textContent = "Solution 4";
      button4.addEventListener("click", () => {
        dialogDivTwo.remove();
      });

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
  } else if (allTheCells[playerPosition].classList.contains("exit")) {
    hidePlayer();
    level = 2;
    playerPosition = 99;
    startTheGame();
  }
}

// ATTENTION, CETTE PARTIE POUR LE LEVEL 2

function displayPlayer2() {
  allTheCells[playerPosition].classList.add("player");
}

function displayTarget3() {
  allTheCells[target].classList.add("targetThree");
}

function displayTarget4() {
  allTheCells[target2].classList.add("targetFour"); // Je crée une autre classe pour pouvoir display deux messages différents en fonction de qui le joueur rencontre
}

function displayExit2() {
  let exit = 2;
  allTheCells[exit].classList.add("exit"); // add exit class
}

function createACell2() {
  const div = document.createElement("div");
  div.classList.add("cell");
  gridElement.append(div);
  allTheCells.push(div);
}

function hidePlayer2() {
  allTheCells[playerPosition].classList.remove("player");
}

// Move function

function move2(direction) {
  hidePlayer2();

  if (direction === "right") {
    if ((playerPosition + 1) % 10 === 0) {
      return displayPlayer2();
    }
    playerPosition += 1;
  }

  if (direction === "left") {
    if (playerPosition % 10 === 0) {
      return displayPlayer2();
    }
    playerPosition -= 1;
  }

  if (direction === "up") {
    if (playerPosition < 10) {
      return displayPlayer2();
    }
    playerPosition -= 10;
  }

  if (direction === "down") {
    if (playerPosition >= 90) {
      return displayPlayer2();
    }
    playerPosition += 10;
  }

  displayPlayer2();

  // Dans ce If statement, je veux rajouter avant le remove, un dialog a choix multiple

  if (allTheCells[playerPosition].classList.contains("targetThree")) {
    //je veux que les pnj soient des objets colision.

    function createDialog() {
      const dialogDivThree = document.createElement("div");
      dialogDivThree.id = "dialog3";
      const dialogTextThree = document.createElement("p");
      dialogTextThree.textContent =
        "This is your first challenge adventurer ! bakrnfanfnazefnazjnfvlaernvlanevn,arnvazrjnlvanerj";
      const button5 = document.createElement("button");
      button5.id = "button5";
      button5.textContent = "Solution 5";
      button5.addEventListener("click", () => {
        dialogDivThree.remove();
      });
      const button6 = document.createElement("button");
      button6.id = "button6";
      button6.textContent = "Solution 6";
      button6.addEventListener("click", () => {
        dialogDivThree.remove();
      });

      dialogDivThree.appendChild(dialogTextThree);
      dialogDivThree.appendChild(button5);
      dialogDivThree.appendChild(button6);
      document.body.appendChild(dialogDivThree);
    }

    createDialog();
    allTheCells[playerPosition].classList.remove("targetThree");

    displayTarget4();
  }

  if (allTheCells[playerPosition].classList.contains("targetFour")) {
    function createDialog() {
      const dialogDivFour = document.createElement("div");
      dialogDivFour.id = "dialog4";
      const dialogTextFour = document.createElement("p");
      dialogTextFour.textContent = "This is your second challenge adventurer !";
      const button7 = document.createElement("button7");
      button7.id = "button7";
      button7.textContent = "Solution 7";
      button7.addEventListener("click", () => {
        dialogDivFour.remove();
      });
      const button8 = document.createElement("button");
      button8.id = "button8";
      button8.textContent = "Solution 8";
      button8.addEventListener("click", () => {
        dialogDivFour.remove();
      });

      dialogDivFour.appendChild(dialogTextFour);
      dialogDivFour.appendChild(button7);
      dialogDivFour.appendChild(button8);
      document.body.appendChild(dialogDivFour);
    }

    createDialog();

    allTheCells[playerPosition].classList.remove("targetFour");

    // Display exit method

    if (
      !allTheCells.some(
        (cell) =>
          cell.classList.contains("targetThree") ||
          cell.classList.contains("targetFour")
      )
    ) {
      // both targets have been removed, display exit
      displayExit();
    }
  } else if (allTheCells[playerPosition].classList.contains("exit")) {
    hidePlayer2();
    level = 3;
    playerPosition = 99;
    startTheGame();
  }
}

// ATTENTION, PARTIE 3 !!!!

function displayPlayer3() {
  allTheCells[playerPosition].classList.add("player");
}

function displayTarget5() {
  allTheCells[target].classList.add("targetFive");
}

function displayTarget6() {
  allTheCells[target2].classList.add("targetSix"); // Je crée une autre classe pour pouvoir display deux messages différents en fonction de qui le joueur rencontre
}

function displayExit3() {
  let exit = 5;
  allTheCells[exit].classList.add("exit"); // add exit class
}

function createACell3() {
  const div = document.createElement("div");
  div.classList.add("cell");
  gridElement.append(div);
  allTheCells.push(div);
}

function hidePlayer3() {
  allTheCells[playerPosition].classList.remove("player");
}

// Move function

function move3(direction) {
  hidePlayer3();

  if (direction === "right") {
    if ((playerPosition + 1) % 10 === 0) {
      return displayPlayer3();
    }
    playerPosition += 1;
  }

  if (direction === "left") {
    if (playerPosition % 10 === 0) {
      return displayPlayer3();
    }
    playerPosition -= 1;
  }

  if (direction === "up") {
    if (playerPosition < 10) {
      return displayPlayer3();
    }
    playerPosition -= 10;
  }

  if (direction === "down") {
    if (playerPosition >= 90) {
      return displayPlayer3();
    }
    playerPosition += 10;
  }

  displayPlayer3();

  // Dans ce If statement, je veux rajouter avant le remove, un dialog a choix multiple

  if (allTheCells[playerPosition].classList.contains("targetFive")) {
    //je veux que les pnj soient des objets colision.

    function createDialog() {
      const dialogDivFive = document.createElement("div");
      dialogDivFive.id = "dialog5";
      const dialogTextFive = document.createElement("p");
      dialogTextFive.textContent =
        "This is your fifth challenge adventurer ! bakrnfanfnazefnazjnfvlaernvlanevn,arnvazrjnlvanerj";
      const button9 = document.createElement("button");
      button9.id = "button9";
      button9.textContent = "Solution 9";
      button9.addEventListener("click", () => {
        dialogDivFive.remove();
      });
      const button10 = document.createElement("button");
      button10.id = "button10";
      button10.textContent = "Solution 10";
      button10.addEventListener("click", () => {
        dialogDivFive.remove();
      });

      dialogDivFive.appendChild(dialogTextFive);
      dialogDivFive.appendChild(button9);
      dialogDivFive.appendChild(button10);
      document.body.appendChild(dialogDivFive);
    }

    createDialog();
    allTheCells[playerPosition].classList.remove("targetFive");

    displayTarget6();
  }

  if (allTheCells[playerPosition].classList.contains("targetSix")) {
    function createDialog() {
      const dialogDivSix = document.createElement("div");
      dialogDivSix.id = "dialog6";
      const dialogTextSix = document.createElement("p");
      dialogTextSix.textContent = "This is your sixth challenge adventurer !";
      const button11 = document.createElement("button");
      button11.id = "button11";
      button11.textContent = "Solution 11";
      button11.addEventListener("click", () => {
        dialogDivSix.remove();
      });
      const button12 = document.createElement("button");
      button12.id = "button12";
      button12.textContent = "Solution 12";
      button12.addEventListener("click", () => {
        dialogDivSix.remove();
      });

      dialogDivSix.appendChild(dialogTextSix);
      dialogDivSix.appendChild(button11);
      dialogDivSix.appendChild(button12);
      document.body.appendChild(dialogDivSix);
    }

    createDialog();

    allTheCells[playerPosition].classList.remove("targetSix");

    // Display exit method

    if (
      !allTheCells.some(
        (cell) =>
          cell.classList.contains("targetFive") ||
          cell.classList.contains("targetSix")
      )
    ) {
      // both targets have been removed, display exit
      displayExit3();
    }
  } else if (allTheCells[playerPosition].classList.contains("exit")) {
    hidePlayer();
    level = 4; // LEVEL = 4 une fois level 4 fait
    playerPosition = 99;
    startTheGame();
  }
}

// ATTENTION PARTIE 4; BOSS FINAL

function displayPlayer4() {
  allTheCells[playerPosition].classList.add("player");
}

function displayTarget7() {
  allTheCells[target].classList.add("finalBoss");
}

// function displayTarget8() {
// 	allTheCells[target2].classList.add("targetTwo")    // Je crée une autre classe pour pouvoir display deux messages différents en fonction de qui le joueur rencontre
// }

// function displayExit() {
//     let exit = 2;
// 	allTheCells[exit].classList.add("exit") // add exit class
// }

function createACell4(position) {
  const div = document.createElement("div");
  div.classList.add("cell");
  div.dataset.position = position;
  gridElement.append(div);
  allTheCells.push(div);
}

// function clearGrid() {
//     // Remove all cells from the grid
//     while (gridElement.firstChild) {
//       gridElement.removeChild(gridElement.firstChild);
//     }
//     // Clear the allTheCells array
//     allTheCells.length = 0;
//   }

// Move function

function move4(direction) {
  hidePlayer();

  if (direction === "right") {
    if ((playerPosition + 1) % 10 === 0) {
      return displayPlayer4();
    }
    playerPosition += 1;
  }

  if (direction === "left") {
    if (playerPosition % 10 === 0) {
      return displayPlayer4();
    }
    playerPosition -= 1;
  }

  if (direction === "up") {
    if (playerPosition < 10) {
      return displayPlayer4();
    }
    playerPosition -= 10;
  }

  if (direction === "down") {
    if (playerPosition >= 90) {
      return displayPlayer4();
    }
    playerPosition += 10;
  }

  displayPlayer4();

  if (allTheCells[playerPosition].classList.contains("finalBoss")) {
    //je veux que les pnj soient des objets colision.

    function createDialog() {
      const dialogDivBoss = document.createElement("div");
      dialogDivBoss.id = "dialogBoss";
      const dialogTextBoss = document.createElement("p");
      dialogTextBoss.textContent =
        "I'm going to burn you down little insect !!!";
      const buttonBoss = document.createElement("button");
      buttonBoss.id = "buttonBoss";
      buttonBoss.textContent = "Let's fight !!";

      buttonBoss.addEventListener("click", () => {
        dialogDivBoss.remove();
        let intervalId;
        let currentPosition = -10;
        const divsArray = document.querySelectorAll(".cell");
        bossAttack();

        function bossAttack() {
          for (let i = 0; i < 10; i++) {
            const randomNum = Math.random();
            if (randomNum < 0.2) {
              divsArray[i].classList.add("class1");
              divsArray[i].setAttribute("data-position", i);
              currentPosition = i;
            } else if (randomNum < 0.95) {
              divsArray[i].classList.add("class2");
              divsArray[i].setAttribute("data-position", i);
              currentPosition = i;
            } else if (randomNum >= 0.95) {
              divsArray[i].classList.add("class3");
              divsArray[i].setAttribute("data-position", i);
              currentPosition = i;
            }
          }

          intervalId = setInterval(() => {
            const class1Divs = document.querySelectorAll(".class1");
            // let counterAttack = 0

            for (let i = 0; i < class1Divs.length; i++) {
              const currentPosition = parseInt(class1Divs[i].dataset.position);
              if (currentPosition < 90) {
                class1Divs[i].classList.remove("class1");
                const newPosition = currentPosition + 10;
                divsArray[newPosition].classList.add("class1");
                divsArray[newPosition].setAttribute(
                  "data-position",
                  newPosition
                );
              } else if (currentPosition >= 90) {
                divsArray[currentPosition].classList.remove("class1");
              }
            }

            const class2Divs = document.querySelectorAll(".class2");

            for (let i = 0; i < class2Divs.length; i++) {
              const currentPosition = parseInt(class2Divs[i].dataset.position);
              if (currentPosition < 90) {
                class2Divs[i].classList.remove("class2");
                const newPosition = currentPosition + 10;
                divsArray[newPosition].classList.add("class2");
                divsArray[newPosition].setAttribute(
                  "data-position",
                  newPosition
                );
              } else if (currentPosition >= 90) {
                console.log("coucou =================");
                divsArray[currentPosition].classList.remove("class2");
                clearInterval(intervalId);
              }
            }

            const class3Divs = document.querySelectorAll(".class3");

            for (let i = 0; i < class3Divs.length; i++) {
              const currentPosition = parseInt(class3Divs[i].dataset.position);
              if (currentPosition < 90) {
                class3Divs[i].classList.remove("class3");
                const newPosition = currentPosition + 10;
                divsArray[newPosition].classList.add("class3");
                divsArray[newPosition].setAttribute(
                  "data-position",
                  newPosition
                );
              } else if (currentPosition >= 90) {
                divsArray[currentPosition].classList.remove("class3");
              }
            }
            if (
              !document.querySelector(".class1") &&
              !document.querySelector(".class2") &&
              !document.querySelector(".class3")
            ) {
              bossAttack();
            }
          }, 500);
        }
      });

      dialogDivBoss.appendChild(dialogTextBoss);
      dialogDivBoss.appendChild(buttonBoss);

      document.body.appendChild(dialogDivBoss);
    }

    createDialog();
    allTheCells[playerPosition].classList.remove("finalBoss");
  }
}

document.addEventListener("keydown", (event) => {
  if (level === 1) {
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
  }
  if (level === 2) {
    console.log(event.key);
    switch (event.key) {
      case "ArrowRight":
        move2("right");
        break;
      case "ArrowLeft":
        move2("left");
        break;
      case "ArrowDown":
        move2("down");
        break;
      case "ArrowUp":
        move2("up");
        break;
    }
  }
  if (level === 3) {
    console.log(event.key);
    switch (event.key) {
      case "ArrowRight":
        move3("right");
        break;
      case "ArrowLeft":
        move3("left");
        break;
      case "ArrowDown":
        move3("down");
        break;
      case "ArrowUp":
        move3("up");
        break;
    }
  }
  if (level === 4) {
    console.log(event.key);
    switch (event.key) {
      case "ArrowRight":
        move4("right");
        break;
      case "ArrowLeft":
        move4("left");
        break;
      case "ArrowDown":
        move4("down");
        break;
      case "ArrowUp":
        move4("up");
        break;
    }
  }
});
