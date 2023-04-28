const startButton = document.getElementById("start");
const gridElement = document.querySelector(".grid");
const allTheCells = [];
let playerPosition;
const userInterface = document.querySelector(".user-interface");
let target;
let target2;
let level = 1;
let swordDivs = document.getElementsByClassName("sword");
let shoesContainer = document.getElementById("shoesContainer");
const swordContainer = document.getElementById("swordContainer");
let choice;
let choiceTwo;
let choiceSong;
let finalBoss;
let life = 3;

const fireDiv = document.querySelector(".mo-fire");
fireDiv.style.display = "none";

startButton.addEventListener("click", startTheGame);

// MUSIC PART

let isPlaying = false;

playBtn1.addEventListener("click", () => {
  if (isPlaying) {
    audio1.pause();
    playBtn1.innerHTML = "Play Music";
  } else {
    audio1.play();
    playBtn1.innerHTML = "";
  }
  isPlaying = !isPlaying;
});

function playAudio() {
  const audio = document.getElementById("audio1");
  audio.play();
}

// END OF MUSIC PART

function startTheGame() {
  startButton.style.display = "none";
  userInterface.style.display = "flex";
  userInterface.style.backgroundColor = "transparent";
  gridElement.style.display = "flex";

  if (level === 1) {
    for (let i = 0; i < 150; i++) {
      createACell();
    }

    playerPosition = 140;
    // target = Math.floor(Math.random() * allTheCells.length - 1) + 1
    // target2 = Math.floor(Math.random() * allTheCells.length - 1) + 1
    target = 132;
    target2 = 12;
    displayPlayer();
    displayTarget();
  }

  if (level === 2) {
    clearGrid();
    for (let i = 0; i < 150; i++) {
      createACell2();
    }
    playerPosition = 140;
    console.log(playerPosition);
    target = 97;
    target2 = 16;
    displayPlayer2();
    displayTarget3();
  }

  if (level === 3) {
    clearGrid();
    for (let i = 0; i < 150; i++) {
      createACell3();
    }
    playerPosition = 140;
    target = 25;
    target2 = 12;
    displayPlayer3();
    displayTarget5();
  }

  if (level === 4) {
    clearGrid();
    for (let i = 0; i < 150; i++) {
      createACell4(i);
    }

    target = 147;

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
  let exit = 9;
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
    if ((playerPosition + 1) % 15 === 0) {
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
    if (playerPosition >= 140) {
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
      dialogText.textContent =
        "Welcome adventurer ! MY name is Eoldorgudrof. I bet you're here to defeat the dragon, as everyone else ? Let me help you in your journey, choose an equipment. Remember that you will need 15 swords to defeat the dragon. By taking the shoes, you might need to find others swords, but you could dodge dragon's attacks more easily...";
      const button1 = document.createElement("button");
      button1.id = "button1";
      button1.textContent = "The sword ! The sword !!! ";
      button1.addEventListener("click", () => {
        choice = "sword";
        dialogDiv.remove();
        if (choice === "sword") {
          const swordImg = document.createElement("div");

          swordImg.classList.add("sword");
          const swordContainer = document.getElementById("swordContainer");
          swordContainer.appendChild(swordImg);
        }
      });
      const button2 = document.createElement("button");
      button2.id = "button2";
      button2.textContent = "Your shoes look nice...";
      button2.addEventListener("click", () => {
        choice = "shoes";
        dialogDiv.remove();
        if (choice === "shoes") {
          const shoesImg = document.createElement("div");
          // swordImg.style.display = "block";
          shoesImg.classList.add("shoes");
          const shoesContainer = document.getElementById("shoesContainer");
          shoesContainer.append(shoesImg);
        }
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
      dialogTextTwo.textContent =
        "Hello there. I'm a keeper of the dungeon. I'm here to prevent you from a painful death, only if you can solve this riddle... There were 5 children in a room. Iris drew a picture, Barry played video games, Andrew played chess, and Trina read a book. What is the fifth child, Mindy, doing?";

      let correctAnswer;
      let wrongAnswer;

      const button3 = document.createElement("button");
      button3.id = "button3";
      button3.textContent = "Playing with the cat";
      button3.addEventListener("click", () => {
        choiceTwo = "cat";
        wrongAnswer = true;
        dialogDivTwo.remove();

        if (wrongAnswer) {
          console.log("badAnswer====");
          const wrongAnswerDiv = document.createElement("div");
          wrongAnswerDiv.id = "wrongAnswerDiv";
          const wrongAnswerText = document.createElement("p");
          wrongAnswerText.id = "wrongAnswerText";
          wrongAnswerText.textContent =
            "Really ? So you think Andrew was playing chess all alone ? I'll keep the sword for the next, more capable adventurer...";
          const wrongAnswerButton = document.createElement("button");
          wrongAnswerButton.id = "wrongAnswerButton";
          wrongAnswerButton.textContent =
            "You're not helping dude... Alright, let's go without your sword, it was ugly anyway.";
          wrongAnswerButton.onclick = function () {
            wrongAnswerDiv.remove();
          };

          wrongAnswerDiv.appendChild(wrongAnswerText);
          wrongAnswerDiv.appendChild(wrongAnswerButton);
          document.body.appendChild(wrongAnswerDiv);
        }
        return false;
      });

      const button4 = document.createElement("button");
      button4.id = "button4";
      button4.textContent = "Reading a book";
      button4.addEventListener("click", () => {
        choiceTwo = "book";
        wrongAnswer = true;
        dialogDivTwo.remove();

        if (wrongAnswer) {
          console.log("badAnswer====");
          const wrongAnswerDiv = document.createElement("div");
          wrongAnswerDiv.id = "wrongAnswerDiv";
          const wrongAnswerText = document.createElement("p");
          wrongAnswerText.id = "wrongAnswerText";
          wrongAnswerText.textContent =
            "Really ? So you think Andrew was playing chess all alone ? I'll keep the sword for the next, more capable adventurer...";
          const wrongAnswerButton = document.createElement("button");
          wrongAnswerButton.id = "wrongAnswerButton";
          wrongAnswerButton.textContent =
            "You're not helping dude... Alright, let's go without your sword, it was ugly anyway.";
          wrongAnswerButton.onclick = function () {
            wrongAnswerDiv.remove();
          };
          wrongAnswerDiv.appendChild(wrongAnswerText);
          wrongAnswerDiv.appendChild(wrongAnswerButton);
          document.body.appendChild(wrongAnswerDiv);
        }

        return false;
      });

      const button3Bis = document.createElement("button");
      button3Bis.id = "button3Bis";
      button3Bis.textContent = "Playing chess";
      button3Bis.addEventListener("click", () => {
        choiceTwo = "chess";
        correctAnswer = true;
        dialogDivTwo.remove();

        if (correctAnswer) {
          console.log("goodanswer====");
          const goodAnswerDiv = document.createElement("div");
          goodAnswerDiv.id = "goodAnswerDiv";
          const goodAnswerText = document.createElement("p");
          goodAnswerText.id = "goodAnswerText";
          goodAnswerText.textContent =
            "That's some fresh brain we have right here, well done. I'm ok giving you my last sword, I think you have what it takes to defeat the dragon.";
          const goodAnswerButton = document.createElement("button");
          goodAnswerButton.id = "goodAnswerButton";
          goodAnswerButton.textContent =
            "Of course I have what it takes. Give me the sword, chop chop !";
          goodAnswerButton.onclick = function () {
            const swordImg = document.createElement("div");
            // swordImg.style.display = "block";
            swordImg.classList.add("sword");
            const swordContainer = document.getElementById("swordContainer");
            swordContainer.appendChild(swordImg);
            goodAnswerDiv.remove();
          };
          goodAnswerDiv.appendChild(goodAnswerText);
          goodAnswerDiv.appendChild(goodAnswerButton);
          document.body.appendChild(goodAnswerDiv);
        }

        return true;
      });

      const button4Bis = document.createElement("button");
      button4Bis.id = "button4Bis";
      button4Bis.textContent = "Taking a nap";
      button4Bis.addEventListener("click", () => {
        choiceTwo = "troll";
        wrongAnswer = true;
        dialogDivTwo.remove();

        if (wrongAnswer) {
          console.log("badAnswer====");
          const wrongAnswerDiv = document.createElement("div");
          wrongAnswerDiv.id = "wrongAnswerDiv";
          const wrongAnswerText = document.createElement("p");
          wrongAnswerText.id = "wrongAnswerText";
          wrongAnswerText.textContent =
            "Really ? So you think Andrew was playing chess all alone ? I'll keep the sword for the next, more capable adventurer...";
          const wrongAnswerButton = document.createElement("button");
          wrongAnswerButton.id = "wrongAnswerButton";
          wrongAnswerButton.textContent =
            "You're not helping dude... Alright, let's go without your sword, it was ugly anyway.";
          wrongAnswerButton.onclick = function () {
            wrongAnswerDiv.remove();
          };
          wrongAnswerDiv.appendChild(wrongAnswerText);
          wrongAnswerDiv.appendChild(wrongAnswerButton);
          document.body.appendChild(wrongAnswerDiv);
        }

        return false;
      });

      dialogDivTwo.appendChild(dialogTextTwo);
      dialogDivTwo.appendChild(button3);
      dialogDivTwo.appendChild(button4);
      dialogDivTwo.appendChild(button3Bis);
      dialogDivTwo.appendChild(button4Bis);
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
  let exit = 9;
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
    if ((playerPosition + 1) % 15 === 0) {
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
    if (playerPosition >= 140) {
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
        "OMG ! Are you also an adventurer ? I once tried to achieve this quest, but unfortunately I lost my equipment... Could you give me one of your sword, so that I can escape ?";
      const button5 = document.createElement("button");
      button5.id = "button5";
      button5.textContent = "No way dude";
      button5.addEventListener("click", () => {
        dialogDivThree.remove();
        const stealAll = document.createElement("div");
        stealAll.id = "stealAll";
        const stealAllText = document.createElement("p");
        stealAllText.id = "stealAllText";
        stealAllText.textContent =
          "Really ? I have no other choice than stealing all your equipment then.";
        const stealAllButton = document.createElement("button");
        stealAllButton.id = "stealAllButton";
        stealAllButton.textContent = "What a scam...";
        stealAll.appendChild(stealAllText);
        stealAll.appendChild(stealAllButton);
        document.body.appendChild(stealAll);

        stealAllButton.onclick = function () {
          stealAll.remove();
          const swordContainer = document.getElementById("swordContainer");
          const shoesContainer = document.getElementById("shoesContainer");
          while (swordContainer.firstChild) {
            swordContainer.removeChild(swordContainer.lastChild);
          }
          while (shoesContainer.firstChild) {
            shoesContainer.removeChild(shoesContainer.lastChild);
          }
        };
      });
      const button6 = document.createElement("button");
      button6.id = "button6";
      button6.textContent = "Hmm... Ok ... I guess...";
      button6.addEventListener("click", () => {
        dialogDivThree.remove();

        const getTwoSwords = document.createElement("div");
        getTwoSwords.id = "getTwoSwords";
        const getTwoSwordsText = document.createElement("p");
        getTwoSwordsText.id = "getTwoSwordsText";
        getTwoSwordsText.textContent =
          "Hmmm... You passed my test ! You have a good heart. Won't help you against the dragon tho. But here's two swords that might help a little ";
        const getTwoSwordsButton = document.createElement("button");
        getTwoSwordsButton.id = "getTwoSwordsButton";
        getTwoSwordsButton.textContent =
          "Couldn't you just give me those swords directly ? I'm doing the dirty job dude.";
        getTwoSwords.appendChild(getTwoSwordsText);
        getTwoSwords.appendChild(getTwoSwordsButton);
        document.body.appendChild(getTwoSwords);

        getTwoSwordsButton.onclick = function () {
          getTwoSwords.remove();
          const swordImg = document.createElement("div");
          const swordImg2 = document.createElement("div");
          // swordImg.style.display = "block";
          swordImg.classList.add("sword");
          swordImg2.classList.add("sword");
          const swordContainer = document.getElementById("swordContainer");
          swordContainer.appendChild(swordImg);
          swordContainer.appendChild(swordImg2);
        };
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
      dialogTextFour.textContent =
        "I'm the second keeper of the dungeon. You see, in order to defeat the dragon, I think a certain knowledge is necessary. If you know from where the next song is, I'll let you in.";

      const button7 = document.createElement("button7");
      button7.id = "button7";
      button7.textContent = "Alright, I'm ready !";

      let correctSong;
      let wrongSong;

      button7.addEventListener("click", () => {
        dialogDivFour.remove();

        const answerMusicDiv = document.createElement("div");
        answerMusicDiv.id = "answerMusicDiv";

        const starWarsButton = document.createElement("button");
        starWarsButton.id = "starWarsButton";
        starWarsButton.textContent = "It's from Star Wars, for sure.";
        starWarsButton.addEventListener("click", () => {
          choiceSong = "starWars";
          wrongSong = true;
          answerMusicDiv.remove();
          quizzSong.pause();

          if (wrongSong) {
            console.log("badSong====");
            const wrongSongDiv = document.createElement("div");
            wrongSongDiv.id = "wrongSongDiv";
            const wrongSongText = document.createElement("p");
            wrongSongText.id = "wrongSongText";
            wrongSongText.textContent =
              "Star Wars, really ? Give me your sword, it can't be hold by an ignorant.";
            const wrongSongButton = document.createElement("button");
            wrongSongButton.id = "wrongSongButton";
            wrongSongButton.textContent = "WTF ? No, I'm keeping it this time.";
            wrongSongButton.onclick = function () {
              wrongSongDiv.remove();
            };

            wrongSongDiv.appendChild(wrongSongText);
            wrongSongDiv.appendChild(wrongSongButton);
            document.body.appendChild(wrongSongDiv);
          }

          return false;
        });

        const zeldaButton = document.createElement("button");
        zeldaButton.id = "zeldaButton";
        zeldaButton.textContent = "This song is from Zelda, I'm not a noob.";
        zeldaButton.addEventListener("click", () => {
          choiceSong = "zelda";
          correctSong = true;
          answerMusicDiv.remove();
          quizzSong.pause();

          if (wrongSong) {
            console.log("badSong====");
            const wrongSongDiv = document.createElement("div");
            wrongSongDiv.id = "wrongSongDiv";
            const wrongSongText = document.createElement("p");
            wrongSongText.id = "wrongSongText";
            wrongSongText.textContent = "that wasn't the right song";
            const wrongSongButton = document.createElement("button");
            wrongSongButton.id = "wrongSongButton";
            wrongSongButton.textContent = "Meh, it looked like it.";
            wrongSongButton.onclick = function () {
              wrongSongDiv.remove();
            };

            wrongSongDiv.appendChild(wrongSongText);
            wrongSongDiv.appendChild(wrongSongButton);
            document.body.appendChild(wrongSongDiv);
          }

          if (correctSong) {
            console.log("badSong====");
            const correctSongDiv = document.createElement("div");
            correctSongDiv.id = "correctSongDiv";
            const correctSongText = document.createElement("p");
            correctSongText.id = "correctSongText";
            correctSongText.textContent =
              "GG WP !! Wasn't too challenging I see.";
            const correctSongButton = document.createElement("button");
            correctSongButton.id = "correctSongButton";
            correctSongButton.textContent =
              "Hehe, easy peasy, give me a sword, feeling like slicing stuff today.";
            correctSongButton.onclick = function () {
              const swordImg = document.createElement("div");
              // swordImg.style.display = "block";
              swordImg.classList.add("sword");
              const swordContainer = document.getElementById("swordContainer");
              swordContainer.appendChild(swordImg);
              correctSongDiv.remove();
            };

            correctSongDiv.appendChild(correctSongText);
            correctSongDiv.appendChild(correctSongButton);
            document.body.appendChild(correctSongDiv);
          }
          return true;
        });

        const pokemonButton = document.createElement("button");
        pokemonButton.id = "pokemonButton";
        pokemonButton.textContent = "It might be from Pokemon ..?";

        pokemonButton.addEventListener("click", () => {
          choiceSong = "pokemon";
          wrongSong = true;
          answerMusicDiv.remove();
          quizzSong.pause();

          if (wrongSong) {
            console.log("badSong====");
            const wrongSongDiv = document.createElement("div");
            wrongSongDiv.id = "wrongSongDiv";
            const wrongSongText = document.createElement("p");
            wrongSongText.id = "wrongSongText";
            wrongSongText.textContent =
              "Pokemon, really ? Give me your sword, it can't be hold by an ignorant.";
            const wrongSongButton = document.createElement("button");
            wrongSongButton.id = "wrongSongButton";
            wrongSongButton.textContent =
              "Meh, it still looks quite similar right? And I'm keeping the sword, you thief !";
            wrongSongButton.onclick = function () {
              wrongSongDiv.remove();
            };

            wrongSongDiv.appendChild(wrongSongText);
            wrongSongDiv.appendChild(wrongSongButton);
            document.body.appendChild(wrongSongDiv);
          }

          return false;
        });

        const marioButton = document.createElement("button");
        marioButton.id = "marioButton";
        marioButton.textContent = "Definitely from the plumber game.";
        marioButton.addEventListener("click", () => {
          choiceSong = "mario";
          wrongSong = true;
          answerMusicDiv.remove();
          quizzSong.pause();

          if (wrongSong) {
            console.log("badSong====");
            const wrongSongDiv = document.createElement("div");
            wrongSongDiv.id = "wrongSongDiv";
            const wrongSongText = document.createElement("p");
            wrongSongText.id = "wrongSongText";
            wrongSongText.textContent =
              "Mario, really ? Give me your sword, it can't be hold by an ignorant.";
            const wrongSongButton = document.createElement("button");
            wrongSongButton.id = "wrongSongButton";
            wrongSongButton.textContent =
              "I was joking, I know it's not Mario... Anyway, I'm keeping the sword.";
            wrongSongButton.onclick = function () {
              wrongSongDiv.remove();
            };

            wrongSongDiv.appendChild(wrongSongText);
            wrongSongDiv.appendChild(wrongSongButton);
            document.body.appendChild(wrongSongDiv);
          }

          return false;
        });
        answerMusicDiv.appendChild(starWarsButton);
        answerMusicDiv.appendChild(zeldaButton);
        answerMusicDiv.appendChild(pokemonButton);
        answerMusicDiv.appendChild(marioButton);
        document.body.appendChild(answerMusicDiv);

        const quizzSong = document.getElementById("quizzSong");
        quizzSong.play();
      });

      dialogDivFour.appendChild(dialogTextFour);
      dialogDivFour.appendChild(button7);
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
  let exit = 9;
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
    if ((playerPosition + 1) % 15 === 0) {
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
    if (playerPosition >= 140) {
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
        "Hey, you !! I've been stuck here for, I think, a year or two. I could escape by calling the strange guy at the beginning of the dungeon, but in order to call him, I need to remember it's name correctly, can you help ? I'll give you my sword if you give me the right name.";

      let correctNameChoice;
      let wrongNameChoice;

      const button9 = document.createElement("button");
      button9.id = "button9";
      button9.textContent = "I think it was Eoldorgudrof";

      button9.addEventListener("click", () => {
        correctNameChoice = true;
        dialogDivFive.remove();

        if (correctNameChoice) {
          const correctNameDiv = document.createElement("div");
          correctNameDiv.id = "correctNameDiv";
          const correctNameText = document.createElement("p");
          correctNameText.id = "correctNameText";
          correctNameText.textContent =
            "That's it !! Thank you so much, here's my sword.";
          const correctNameButton = document.createElement("button");
          correctNameButton.id = "correctNameButton";
          correctNameButton.textContent = "Sure, thanks!";
          correctNameButton.onclick = function () {
            const swordImg = document.createElement("div");
            // swordImg.style.display = "block";
            swordImg.classList.add("sword");
            const swordContainer = document.getElementById("swordContainer");
            swordContainer.appendChild(swordImg);
            correctNameDiv.remove();
          };

          correctNameDiv.appendChild(correctNameText);
          correctNameDiv.appendChild(correctNameButton);
          document.body.appendChild(correctNameDiv);
        }
        return true;
      });
      const button10 = document.createElement("button");
      button10.id = "button10";
      button10.textContent = "It was Eoldurgodrof, for sure";
      button10.addEventListener("click", () => {
        wrongNameChoice = true;
        dialogDivFive.remove();

        if (wrongNameChoice) {
          const wrongNameDiv = document.createElement("div");
          wrongNameDiv.id = "wrongNameDiv";
          const wrongNameText = document.createElement("p");
          wrongNameText.id = "wrongNameText";
          wrongNameText.textContent =
            "Well, it doesn't seem to be working. If you can't remember, you're not having my sword, eh !!";
          const wrongNameButton = document.createElement("button");
          wrongNameButton.id = "wrongNameButton";
          wrongNameButton.textContent = "Wow. Rude. Stay stuck then byeee.";
          wrongNameButton.onclick = function () {
            wrongNameDiv.remove();
          };

          wrongNameDiv.appendChild(wrongNameText);
          wrongNameDiv.appendChild(wrongNameButton);
          document.body.appendChild(wrongNameDiv);
        }
        return true;
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
      dialogTextSix.textContent =
        "The door has long been closed... You'll need to go crazy and hit it many times for it to break. GO !";

      const button12 = document.createElement("button");
      button12.id = "button12";
      button12.textContent = "Hmmm...okkk";
      button12.addEventListener("click", () => {
        dialogDivSix.remove();
        const clickerDiv = document.createElement("div");
        clickerDiv.classList.add("clicker");
        const dialogClicker = document.createElement("h3");
        dialogClicker.textContent = "Press me 50 times! You have 10 seconds.";
        const clickerButton = document.createElement("button");
        clickerButton.id = "clickme";
        clickerDiv.appendChild(dialogClicker);
        clickerDiv.appendChild(clickerButton);
        document.body.appendChild(clickerDiv);

        let count = 0;
        let timer = 10;
        clickerButton.onclick = function () {
          count += 1;
          clickerButton.innerHTML = "Click me: " + count;
          if (count >= 50) {
            // Check if the player has clicked 100 times
            clearInterval(intervalId); // Stop the timer
            alert("You won!");
            clickerDiv.remove();
          }
        };
        const intervalId = setInterval(() => {
          timer--;
          if (timer <= 0) {
            clearInterval(intervalId);

            if (count < 50) {
              clickerDiv.remove();

              function youLost() {
                if (swordContainer.length > 0) {
                  const youLostDiv = document.createElement("div");
                  youLostDiv.id = "youLostDiv";
                  const giveSwordButton = document.createElement("button");
                  giveSwordButton.id = "giveSwordButton";

                  const lostText = document.createElement("h3");
                  lostText.id = "lostText";
                  lostText.textContent =
                    "The gate didn't break... I can help you :D if you give me one of your equipment in return.>:c";

                  youLostDiv.appendChild(lostText);
                  youLostDiv.appendChild(giveSwordButton);

                  document.body.appendChild(youLostDiv);

                  giveSwordButton.onclick = function () {
                    let lastDiv = swordContainer.lastElementChild;
                    swordContainer.removeChild(lastDiv);

                    youLostDiv.remove();
                  };
                } else {
                  const youLostDivTwo = document.createElement("div");
                  youLostDivTwo.id = "youLostDivTwo";
                  const youLostDivTwoText = document.createElement("p");
                  youLostDivTwoText.id = "youLostDivTwoText";
                  youLostDivTwoText.textContent =
                    "Well, you failed this challenge...  What a shame... I'll help you open the gate this time... (This guy has zero chance lol)";
                  const youLostDivTwoButton = document.createElement("button");
                  youLostDivTwoButton.id = "youLostDivTwoButton";
                  youLostDivTwoButton.textContent =
                    "Thanks dude. I might get killed by the dragon, so it's the least you can do in my opinion...";
                  youLostDivTwo.appendChild(youLostDivTwoText);
                  youLostDivTwo.appendChild(youLostDivTwoButton);
                  document.body.appendChild(youLostDivTwo);

                  youLostDivTwoButton.onclick = function () {
                    youLostDivTwo.remove();
                  };
                }
              }
              youLost();
            }
          }
        }, 1000);
      });

      dialogDivSix.appendChild(dialogTextSix);
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
      displayExit3(); // à mettre dans l'event listener du bouton clicker
    }
  } else if (allTheCells[playerPosition].classList.contains("exit")) {
    hidePlayer();
    if (isPlaying) {
      audio1.pause();
    }
    const bossSong = document.getElementById("bossSong");
    bossSong.play();
    level = 4; // LEVEL = 4 une fois level 4 fait
    playerPosition = 145;
    fireDiv.style.removeProperty("display");
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

function winAlert() {
  const winAlert = document.createElement("div");
  winAlert.id = "winAlert";
  const winAlertText = document.createElement("h3");
  winAlertText.id = "winAlertText";
  winAlertText.textContent = "YIHAAA, THE DRAGON IS SMOKED !";
  const winAlertButton = document.createElement("button");
  winAlertButton.id = "winAlertButton";
  winAlertButton.textContent = "Let's start again ?";

  winAlert.appendChild(winAlertText);
  winAlert.appendChild(winAlertButton);
  document.body.appendChild(winAlert);

  winAlertButton.onclick = function () {
    winAlert.remove();
    level = 1;
    clearGrid();
    startTheGame();
  };
}

function loseAlert() {
  const loseAlert = document.createElement("div");
  loseAlert.id = "loseAlert";
  const loseAlertText = document.createElement("h3");
  loseAlertText.id = "loseAlertText";
  loseAlertText.textContent = "Pshhhht... You're just a pile of ashes now...";
  const loseAlertButton = document.createElement("button");
  loseAlertButton.id = "loseAlertButton";
  loseAlertButton.textContent = "Let's start again ?";

  loseAlert.appendChild(loseAlertText);
  loseAlert.appendChild(loseAlertButton);
  document.body.appendChild(loseAlert);

  loseAlertButton.onclick = function () {
    loseAlert.remove();
    level = 1;
    clearGrid();
    startTheGame();
  };
}

function createACell4(position) {
  const div = document.createElement("div");
  div.classList.add("cell");
  div.dataset.position = position;
  gridElement.append(div);
  allTheCells.push(div);
}

function move4(direction) {
  hidePlayer();

  if (direction === "right") {
    if ((playerPosition + 1) % 15 === 0) {
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
    if (playerPosition >= 140) {
      return displayPlayer4();
    }
    playerPosition += 10;
  }

  displayPlayer4();

  if (allTheCells[playerPosition].classList.contains("finalBoss")) {
    // startBossFightButton.addEventListener("click", createDialog());

    function createDialog() {
      const startBossFightDiv = document.createElement("div");
      startBossFightDiv.id = "startBossFightDiv";
      const startBossFightText = document.createElement("p");
      startBossFightText.id = "startBossFightText";
      startBossFightText.textContent =
        "So, you're finally here. Almost felt asleep. Don't try to escape, it's pointless. You'll get burn, and after the third burn, you'll just die in excruciating pain.";
      const startBossFightButton = document.createElement("button");
      startBossFightButton.id = "startBossFightButton";
      startBossFightButton.textContent =
        "I'm not afraid of you. Plus, you smell like barbecue.";

      startBossFightDiv.appendChild(startBossFightText);
      startBossFightDiv.appendChild(startBossFightButton);
      document.body.appendChild(startBossFightDiv);

      startBossFightButton.onclick = function () {
        startBossFightDiv.remove();
        const dialogDivBoss = document.createElement("div");
        dialogDivBoss.id = "dialogBoss";
        const dialogTextBoss = document.createElement("p");
        dialogTextBoss.textContent =
          "I'm going to burn you down little insect !!!";
        const buttonBoss = document.createElement("button");
        buttonBoss.id = "buttonBoss";
        buttonBoss.textContent = "Let's fight !!";

        dialogDivBoss.appendChild(dialogTextBoss);
        dialogDivBoss.appendChild(buttonBoss);

        document.body.appendChild(dialogDivBoss);

        buttonBoss.addEventListener("click", () => {
          dialogDivBoss.remove();
          let intervalId;
          let currentPosition = -10;

          const divsArray = document.querySelectorAll(".cell");
          // let swordContainer = document.getElementById("swordContainer");
          // let shoesContainer = document.getElementById("shoesContainer");

          let shoesDivs = document.getElementsByClassName("shoes");
          console.log(swordDivs.length);

          if (shoesDivs.length <= 0) {
            bossAttack1();
          }

          if (shoesDivs.length >= 1) {
            bossAttack2();
          }
          // BOSS ATTACK 1

          function bossAttack1() {
            for (let i = 0; i < 10; i++) {
              const randomNum = Math.floor(Math.random() * 10);
              if (randomNum < 2) {
                divsArray[i].classList.add("class1");
                divsArray[i].setAttribute("data-position", i);
                currentPosition = i;
              } else if (randomNum < 8) {
                divsArray[i].classList.add("class2");
                divsArray[i].setAttribute("data-position", i);
                currentPosition = i;
              } else if (randomNum >= 8) {
                divsArray[i].classList.add("class3");
                divsArray[i].setAttribute("data-position", i);
                currentPosition = i;
              }
            }

            intervalId = setInterval(() => {
              const class1Divs = document.querySelectorAll(".class1");
              // let counterAttack = 0

              for (let i = 0; i < class1Divs.length; i++) {
                const currentPosition = parseInt(
                  class1Divs[i].dataset.position
                );

                if (currentPosition < 140) {
                  class1Divs[i].classList.remove("class1");
                  const newPosition = currentPosition + 10;
                  divsArray[newPosition].classList.add("class1");
                  divsArray[newPosition].setAttribute(
                    "data-position",
                    newPosition
                  );
                } else if (currentPosition >= 140) {
                  divsArray[currentPosition].classList.remove("class1");
                }
              }

              const class2Divs = document.querySelectorAll(".class2");

              for (let i = 0; i < class2Divs.length; i++) {
                const currentPosition = parseInt(
                  class2Divs[i].dataset.position
                );
                if (currentPosition < 140) {
                  class2Divs[i].classList.remove("class2");
                  const newPosition = currentPosition + 10;
                  divsArray[newPosition].classList.add("class2");
                  divsArray[newPosition].setAttribute(
                    "data-position",
                    newPosition
                  );
                } else if (currentPosition >= 140) {
                  divsArray[currentPosition].classList.remove("class2");
                  clearInterval(intervalId);
                }
              }

              const class3Divs = document.querySelectorAll(".class3");

              for (let i = 0; i < class3Divs.length; i++) {
                const currentPosition = parseInt(
                  class3Divs[i].dataset.position
                );
                if (currentPosition < 140) {
                  class3Divs[i].classList.remove("class3");
                  const newPosition = currentPosition + 10;
                  divsArray[newPosition].classList.add("class3");
                  divsArray[newPosition].setAttribute(
                    "data-position",
                    newPosition
                  );
                } else if (currentPosition >= 140) {
                  divsArray[currentPosition].classList.remove("class3");
                }
              }

              for (let i = 0; i < divsArray.length; i++) {
                if (
                  divsArray[i].classList.contains("class2") &&
                  divsArray[i].classList.contains("player")
                ) {
                  console.log("You lost a life, woups");

                  life -= 1;
                  console.log(life);
                  // console.log(parseInt(divsArray[i].dataset.position));
                }
              }

              for (let i = 0; i < divsArray.length; i++) {
                if (
                  divsArray[i].classList.contains("class3") &&
                  divsArray[i].classList.contains("player")
                ) {
                  console.log("You found a sword");
                  const swordImg = document.createElement("div");
                  swordImg.classList.add("sword");
                  swordContainer.appendChild(swordImg);
                  if (swordContainer.children.length === 15) {
                    clearInterval(intervalId);
                    winAlert();
                  }
                  console.log(life);
                  // console.log(parseInt(divsArray[i].dataset.position));
                }
              }

              if (
                !document.querySelector(".class1") &&
                !document.querySelector(".class2") &&
                !document.querySelector(".class3")
              ) {
                bossAttack1();
              }
            }, 75);

            if (swordContainer.children.length === 15) {
              clearInterval(intervalId);
              winAlert();
            }

            if (life === 0) {
              clearInterval(intervalId);
              loseAlert();
            }
          }

          function bossAttack2() {
            for (let i = 0; i < 10; i++) {
              const randomNum = Math.floor(Math.random() * 10);
              if (randomNum < 2) {
                divsArray[i].classList.add("class1");
                divsArray[i].setAttribute("data-position", i);
                currentPosition = i;
              } else if (randomNum < 8) {
                divsArray[i].classList.add("class2");
                divsArray[i].setAttribute("data-position", i);
                currentPosition = i;
              } else if (randomNum >= 8) {
                divsArray[i].classList.add("class3");
                divsArray[i].setAttribute("data-position", i);
                currentPosition = i;
              }
            }

            intervalId = setInterval(() => {
              const class1Divs = document.querySelectorAll(".class1");
              // let counterAttack = 0

              for (let i = 0; i < class1Divs.length; i++) {
                const currentPosition = parseInt(
                  class1Divs[i].dataset.position
                );

                if (currentPosition < 140) {
                  class1Divs[i].classList.remove("class1");
                  const newPosition = currentPosition + 10;
                  divsArray[newPosition].classList.add("class1");
                  divsArray[newPosition].setAttribute(
                    "data-position",
                    newPosition
                  );
                } else if (currentPosition >= 140) {
                  divsArray[currentPosition].classList.remove("class1");
                }
              }

              const class2Divs = document.querySelectorAll(".class2");

              for (let i = 0; i < class2Divs.length; i++) {
                const currentPosition = parseInt(
                  class2Divs[i].dataset.position
                );
                if (currentPosition < 140) {
                  class2Divs[i].classList.remove("class2");
                  const newPosition = currentPosition + 10;
                  divsArray[newPosition].classList.add("class2");
                  divsArray[newPosition].setAttribute(
                    "data-position",
                    newPosition
                  );
                } else if (currentPosition >= 140) {
                  divsArray[currentPosition].classList.remove("class2");
                  clearInterval(intervalId);
                }
              }

              const class3Divs = document.querySelectorAll(".class3");

              for (let i = 0; i < class3Divs.length; i++) {
                const currentPosition = parseInt(
                  class3Divs[i].dataset.position
                );
                if (currentPosition < 140) {
                  class3Divs[i].classList.remove("class3");
                  const newPosition = currentPosition + 10;
                  divsArray[newPosition].classList.add("class3");
                  divsArray[newPosition].setAttribute(
                    "data-position",
                    newPosition
                  );
                } else if (currentPosition >= 140) {
                  divsArray[currentPosition].classList.remove("class3");
                }
              }

              for (let i = 0; i < divsArray.length; i++) {
                if (
                  divsArray[i].classList.contains("class2") &&
                  divsArray[i].classList.contains("player")
                ) {
                  console.log("You lost a life, woups");

                  life -= 1;
                  console.log(life);
                  // console.log(parseInt(divsArray[i].dataset.position));
                }
              }

              for (let i = 0; i < divsArray.length; i++) {
                if (
                  divsArray[i].classList.contains("class3") &&
                  divsArray[i].classList.contains("player")
                ) {
                  console.log("You found a sword");
                  const swordImg = document.createElement("div");
                  swordImg.classList.add("sword");
                  swordContainer.appendChild(swordImg);
                  if (swordContainer.children.length === 15) {
                    clearInterval(intervalId);
                    winAlert();
                  }
                  console.log(life);
                  // console.log(parseInt(divsArray[i].dataset.position));
                }
              }

              if (
                !document.querySelector(".class1") &&
                !document.querySelector(".class2") &&
                !document.querySelector(".class3")
              ) {
                bossAttack2();
              }
            }, 100);

            if (swordContainer.children.length === 15) {
              clearInterval(intervalId);
              winAlert();
            }
            if (life === 0) {
              clearInterval(intervalId);
              loseAlert();
            }
          }
        });
      };
    }

    createDialog();
    allTheCells[playerPosition].classList.remove("finalBoss");
  }
}

if (life === 0) {
  clearInterval(intervalId);
  loseAlert();
}
if (swordContainer.length === 15) {
  clearInterval(intervalId);
  winAlert();
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
        displayPlayer4();
        break;
      case "ArrowUp":
        displayPlayer4();
        break;
    }
  }
});
