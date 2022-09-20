const grid = document.getElementById('grid');
const gridPrompt = document.querySelector('.gridPrompt');
const rainbowButton = document.getElementById('rainbowButton')
const clearButton = document.getElementById('clearButton')
const defaultButton = document.getElementById('defaultButton')

// Set toggle funciton so that when a button is pressed, the mode is 'activated' and a condition is met

defaultButton.onclick = () => setCurrentMode('default')
rainbowButton.onclick = () => setCurrentMode('rainbow')
clearButton.onclick = () => reloadGrid()

const gridButton = document.querySelector('.gridButton');
gridButton.addEventListener('click', () => {
    let gridSize = prompt("Choose the size of your grid: you can choose any number between 1 and 100!");
    while (gridSize > 100 || gridSize < 1 || isNaN(gridSize)) {
        if (isNaN(gridSize)) {
            gridSize = prompt("Only numbers are supported\nplease pick a number between 1 and 100");
        } else if (gridSize === null) {
            break;
        } else {
            gridSize = prompt("An error has occured. Please pick a number between 1 and 100");
        }
    }

    gridGenerator(gridSize);
});

function gridGenerator(gridWidth) {
    removeSquares(grid)

    for (let i = 0; i < (gridWidth * gridWidth); i++) {
        let sides = 640/gridWidth + "px";
        const squares = document.createElement('div');
        squares.classList.add('squares');     
         squares.style.width = sides;
         squares.style.height = sides;
        grid.appendChild(squares);
    }
    fillColor();
}


function fillColor() {
    const squares = document.querySelectorAll('.squares');
    squares.forEach(squares => {
        squares.addEventListener('mouseenter', () => {      
            squares.style.backgroundColor = 'black';

        });
    });
}


// function to empty existing squares before setting a new grid size
function removeSquares(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function activateButton(newMode) {
  if (currentMode === 'rainbow') {
    rainbowButton.classList.remove('active')
  } else if (currentMode === 'default') {
    colorButton.classList.remove('active')
  }

  if (newMode === 'rainbow') {
    rainbowButton.classList.add('active')
  } else if (newMode === 'default') {
    defaultButton.classList.add('active')
  }
}

gridGenerator(16);