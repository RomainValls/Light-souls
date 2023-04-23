const startButton = document.getElementById("start")
const gridElement = document.querySelector(".grid")
const allTheCells = [];
let playerPosition = 90;
const userInterface = document.querySelector('.user-interface');
let target
let target2
let level = 1; 
startButton.addEventListener("click", startTheGame);


function startTheGame() {
    userInterface.style.display = "block";
    userInterface.style.backgroundColor = "red";
    
    if (level === 1){
        
	for (let i = 0; i < 100; i++) {
		createACell()
	}
	// target = Math.floor(Math.random() * allTheCells.length - 1) + 1
	// target2 = Math.floor(Math.random() * allTheCells.length - 1) + 1
    target = 25;
    target2 = 12;
	displayPlayer()
	displayTarget()
    displayTarget2()
    }


    if (level === 2){
        clearGrid();
	for (let i = 0; i < 100; i++) {
		createACell2();
	}
	
    target = 27;
    target2 = 19;
	displayPlayer2()
	displayTarget3()
    displayTarget4()
    }


    if (level === 3){
	for (let i = 0; i < 100; i++) {
		createACell3();
	}

    target = 25;
    target2 = 12;
	displayPlayer3()
	displayTarget5()
    displayTarget6()
    }
}

function displayPlayer() {
    allTheCells[playerPosition].classList.add("player")
}

function displayTarget() {
	allTheCells[target].classList.add("target")
}

function displayTarget2() {
	allTheCells[target2].classList.add("targetTwo")    // Je crée une autre classe pour pouvoir display deux messages différents en fonction de qui le joueur rencontre
}

function displayExit() {
    let exit = 2;
	allTheCells[exit].classList.add("exit") // add exit class
}



function createACell() {
	const div = document.createElement("div")
	div.classList.add("cell")
	gridElement.append(div)
	allTheCells.push(div)
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
	allTheCells[playerPosition].classList.remove("player")
}

// Move function

function move(direction) {
	
    hidePlayer();


	if (direction === "right") {
		if ((playerPosition + 1) % 10 === 0) {
			return displayPlayer()
		}
		playerPosition += 1
	}


	if (direction === "left") {
		if (playerPosition % 10 === 0) {
			return displayPlayer()
		}
		playerPosition -= 1
	}


	if (direction === "up") {
		if (playerPosition < 10) {
			return displayPlayer()
		}
		playerPosition -= 10
	}


	if (direction === "down") {
		if (playerPosition >= 90) {
			return displayPlayer()
		}
		playerPosition += 10
	}


	displayPlayer()


    // Dans ce If statement, je veux rajouter avant le remove, un dialog a choix multiple 

	if (allTheCells[playerPosition].classList.contains("target")) {   //je veux que les pnj soient des objets colision. 
        
        
        // function createContainer() {
        //     const container = document.createElement("div");         
        //     body.appendChild(container);
        // }
        // createContainer();

            function createDialog() {
            const dialogDiv = document.createElement("div");
            dialogDiv.id = "dialog1";
            const dialogText = document.createElement("p");
            dialogText.textContent = "This is your first challenge adventurer !";
            const button1 = document.createElement("button");
            button1.id = "button1";
            button1.textContent = "Solution 1";
            button1.addEventListener("click", () => {
                dialogDiv.remove();
            });
            const button2 = document.createElement("button");
            button2.id = "button2";
            button2.textContent = "Solution 2";
            button2.addEventListener("click", () => {
                dialogDiv.remove();
            });

            dialogDiv.appendChild(dialogText);
            dialogDiv.appendChild(button1);
            dialogDiv.appendChild(button2);
            document.body.appendChild(dialogDiv);
        }

        createDialog();
        allTheCells[playerPosition].classList.remove("target"); 

        // Display exit method 

	}

    


	if (allTheCells[playerPosition].classList.contains("targetTwo")) {    //ça va changer, je veux que les pnj soient des objets colision. 

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

        if (!allTheCells.some(cell => cell.classList.contains("target") || cell.classList.contains("targetTwo"))) {
            // both targets have been removed, display exit
            displayExit();
	        }
            
        } 

        else if (allTheCells[playerPosition].classList.contains("exit")) {
            hidePlayer();
            level = 2; 
            playerPosition = 99;
            startTheGame();
        }
        
}







// ATTENTION, CETTE PARTIE POUR LE LEVEL 2






function displayTarget3() {
	allTheCells[target].classList.add("targetThree")
}

function displayTarget4() {
	allTheCells[target2].classList.add("targetFour")    // Je crée une autre classe pour pouvoir display deux messages différents en fonction de qui le joueur rencontre
}

function displayExit2() {
    let exit = 2;
	allTheCells[exit].classList.add("exit") // add exit class
}

function displayPlayer2() {
	allTheCells[playerPosition].classList.add("player")
}


function createACell2() {
	const div = document.createElement("div")
	div.classList.add("cell")
	gridElement.append(div)
	allTheCells.push(div)
}

function hidePlayer2() {
	allTheCells[playerPosition].classList.remove("player")
}

// Move function

function move2(direction) {
	
    hidePlayer2();


	if (direction === "right") {
		if ((playerPosition + 1) % 10 === 0) {
			return displayPlayer2()
		}
		playerPosition += 1
	}


	if (direction === "left") {
		if (playerPosition % 10 === 0) {
			return displayPlayer2()
		}
		playerPosition -= 1
	}


	if (direction === "up") {
		if (playerPosition < 10) {
			return displayPlayer2()
		}
		playerPosition -= 10
	}


	if (direction === "down") {
		if (playerPosition >= 90) {
			return displayPlayer2()
		}
		playerPosition += 10
	}


	displayPlayer2()


    // Dans ce If statement, je veux rajouter avant le remove, un dialog a choix multiple 

	if (allTheCells[playerPosition].classList.contains("targetThree")) {   //je veux que les pnj soient des objets colision. 
        
        
        // function createContainer() {
        //     const container = document.createElement("div");         
        //     body.appendChild(container);
        // }
        // createContainer();

            function createDialog() {
            const dialogDiv = document.createElement("div");
            dialogDiv.id = "dialog1";
            const dialogText = document.createElement("p");
            dialogText.textContent = "This is your first challenge adventurer ! bakrnfanfnazefnazjnfvlaernvlanevn,arnvazrjnlvanerj";
            const button1 = document.createElement("button");
            button1.id = "button1";
            button1.textContent = "Solution 1";
            button1.addEventListener("click", () => {
                dialogDiv.remove();
            })
            const button2 = document.createElement("button");
            button2.id = "button2";
            button2.textContent = "Solution 2";
            button2.addEventListener("click", () => {
                dialogDiv.remove();
            })

            dialogDiv.appendChild(dialogText);
            dialogDiv.appendChild(button1);
            dialogDiv.appendChild(button2);
            document.body.appendChild(dialogDiv);
        }

        createDialog();
        allTheCells[playerPosition].classList.remove("targetThree"); 

        // Display exit method 

        if (!allTheCells.some(cell => cell.classList.contains("targetThree"))) {
            // both targets have been removed, display exit
            displayExit();
        }

	}


	if (allTheCells[playerPosition].classList.contains("targetFour")) {    //ça va changer, je veux que les pnj soient des objets colision. 

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
            })

            dialogDivTwo.appendChild(dialogTextTwo);
            dialogDivTwo.appendChild(button3);
            dialogDivTwo.appendChild(button4);
            document.body.appendChild(dialogDivTwo);
        }

        createDialog();
		
		allTheCells[playerPosition].classList.remove("targetFour"); 

        // Display exit method 

        if (!allTheCells.some(cell => cell.classList.contains("targetThree") || cell.classList.contains("targetFour"))) {
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

    if (level === 1) {
    console.log(event.key)
	switch (event.key) {
		case "ArrowRight":
			move("right")
			break
		case "ArrowLeft":
			move("left")
			break
		case "ArrowDown":
			move("down")
			break
		case "ArrowUp":
			move("up")
			break
	}}
    if (level === 2) {
    console.log(event.key)
	switch (event.key) {
		case "ArrowRight":
			move2("right")
			break
		case "ArrowLeft":
			move2("left")
			break
		case "ArrowDown":
			move2("down")
			break
		case "ArrowUp":
			move2("up")
			break
	}}
})

