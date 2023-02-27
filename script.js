// global variables
let color = 'black'
let click = true;

// creates grid
function populateBoard(size) {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement('beforeend', square);
  }
}

// changes size of board
function changeSize(input) {
  if (input >= 1 && input <= 100) {
    document.querySelector('.error').style.display = 'none';
    populateBoard(input);
  } else {
    document.querySelector('.error').style.display = 'flex';
    console.log('too many/little squares');
  }
}

changeSize(16); // defaults to 16x16 on startup

// color selection
function colorSquare() {
  if (click) {
    if(color === 'rainbow') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if(color === 'shade') {
      
      // if current opacity is less than 1, run the following function
      let currentOpacity = this.getAttribute('data-opacity') || 0; // Grabbed opacity on current square/div or defualted value to zero
      if (currentOpacity < 1) {
      currentOpacity = parseFloat(currentOpacity) + 0.1;
      this.setAttribute('data-opacity', currentOpacity); // value came back as string, had to concatonate strings for incrementation by converting to interger using parseFloat (parseInt drop decimal)
      // console.log(currentOpacity);

      this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`; // Setting color for the new value
    }
  } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => div.style.backgroundColor = 'white');  
}

document.querySelector('.board').addEventListener('click', () => {
  click = !click; // Using boolean statement to toggle click feature
  if(click) {
    document.querySelector('.mode').textContent = 'Mode: Coloring';
  } else {
    document.querySelector('.mode').textContent = 'Mode: Not Coloring';
  }
});