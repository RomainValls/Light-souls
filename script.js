const startButton = document.getElementById("start")
const gridElement = document.querySelector(".grid")
const allTheCells = []
let playerPosition = 49;
let target
let target2
let exit
startButton.addEventListener("click", startTheGame)


function startTheGame() {
	for (let i = 0; i < 50; i++) {
		createACell()
	}
	target = Math.floor(Math.random() * allTheCells.length - 1) + 1
	target2 = Math.floor(Math.random() * allTheCells.length - 1) + 1
	displayPlayer()
	displayTarget()
    displayTarget2()
}

function displayTarget() {
	allTheCells[target].classList.add("target")
}

// Je rajoute une deuxième target

function displayTarget2() {
	allTheCells[target2].classList.add("targetTwo")    // Je crée une autre classe pour pouvoir display deux messages différents en fonction de qui le joueur rencontre
}

function displayPlayer() {
	allTheCells[playerPosition].classList.add("player")
}


function createACell() {
	const div = document.createElement("div")
	div.classList.add("cell")
	gridElement.append(div)
	allTheCells.push(div)
}

function hidePlayer() {
	allTheCells[playerPosition].classList.remove("player")
}

function move(direction) {
	
    hidePlayer()
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

	if (allTheCells[playerPosition].classList.contains("target")) {   //ça va changer, je veux que les pnj soient des objets colision. 
        
        
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
            const button2 = document.createElement("button");
            button2.id = "button2";
            button2.textContent = "Solution 2";

            dialogDiv.appendChild(dialogText);
            dialogDiv.appendChild(button1);
            dialogDiv.appendChild(button2);
            document.body.appendChild(dialogDiv);
        }
        allTheCells[playerPosition].classList.remove("target"); 
        createDialog()

		// allTheCells[playerPosition].classList.remove("target") // 

	}
	if (allTheCells[playerPosition].classList.contains("targetTwo")) {    //ça va changer, je veux que les pnj soient des objets colision. 

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

        createDialog()

		
		allTheCells[playerPosition].classList.remove("targetTwo"); 

	}
}

// Je veux que si il n'y a plus de target dans mon grid, une nouvelle target d'une autre couleur est créée, ce sera la porte de sortie du niveau 

// function createExit() {
//     for (let i=0 ; i < 50 ; i++) {
//         if 
//     }
// }

document.addEventListener("keydown", (event) => {
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
	}
})

