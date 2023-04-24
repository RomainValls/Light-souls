// ADD event listener sur le bouton let's fight du boss



// on click, je veux que les divs du haut aient une classe d'obstacles, de manière aléatoire (5 divs au hasard sont sélectionnées).

// Get the array of div elements
const divsArray = document.querySelectorAll('.cell');

// Loop through the first 10 divs in the array
for (let i = 0; i < 10; i++) {
  // Generate a random number between 0 and 1
  const randomNum = Math.random();

  // Assign classes based on the outcome of the random number
  if (randomNum < 0.3) {
    divsArray[i].classList.add('class1');
  } else if (randomNum < 0.6) {
    divsArray[i].classList.add('class2');
  } else {
    divsArray[i].classList.add('class3');
  }
}

// je veux que chaque divs de ma classe obstacle descendent sur leur colonne, jusqu'en bas. 