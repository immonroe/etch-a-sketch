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

// populateBoard(16);

// changes size of board
function changeSize(input) {
  if (input >= 1 && input <= 100) {
    document.querySelector('.error').style.display = 'none';
    populateBoard(input);
  } else {
    document.querySelector('.error').style.display = 'flex';
    console.log('too many/little squares'); // works properly with console.log but has issues on startup with queryselector
  }
}

changeSize(16); // defaults to 16x16 on startup

// color selection
function colorSquare() {
  if (click) {
    if(color === 'rainbow') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } 
    
  //   else if(color === 'shade') {
  //     let currentOpacity = 
  //     this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
  // } 
  
  else {
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