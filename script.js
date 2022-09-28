let color = 'black'

// creates 16 x 16 grid
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

populateBoard(16); // defaults to 16x16 on startup

// changes size of board
function changeSize(input) {
  if (input >= 1 && input <= 100){
    populateBoard(input);
  }
  else {
    console.log('invalid input, please select a number between 1 and 100.');
  }
}

function colorSquare() {
  this.style.backgroundColor = color;
}

function changeColor(choice) {
  color = choice;
}