// global variables
let color = 'black';
let click = true;
let touchActive = false; // Added variable to track touch interactions

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
        square.addEventListener('touchmove', touchColorSquare); // Added touchmove event listener
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

function setSize() {
    let input = document.querySelector('.input input').value;
    changeSize(input);
}

changeSize(16); // defaults to 16x16 on startup

// color selection
function colorSquare() {
    if (click) {
        if (color === 'rainbow') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else if(color === 'shade') {
            let currentOpacity = this.getAttribute('data-opacity') || 0;
            if (currentOpacity < 1) {
                currentOpacity = parseFloat(currentOpacity) + 0.1;
                this.setAttribute('data-opacity', currentOpacity);
                this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
            }
        } else {
            this.style.backgroundColor = color;
        }
    }
}

// Touch color selection
function touchColorSquare(event) {
    if (touchActive) {
        if (color === 'rainbow') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else if(color === 'shade') {
            let currentOpacity = this.getAttribute('data-opacity') || 0;
            if (currentOpacity < 1) {
                currentOpacity = parseFloat(currentOpacity) + 0.1;
                this.setAttribute('data-opacity', currentOpacity);
                this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
            }
        } else {
            this.style.backgroundColor = color;
        }
    }
    event.preventDefault(); // Prevent scrolling on touchmove
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', () => {
    click = !click;
    if (click) {
        document.querySelector('.mode').textContent = 'Mode: Coloring';
    } else {
        document.querySelector('.mode').textContent = 'Mode: Not Coloring';
    }
});

// Touch interaction handlers
document.querySelector('.board').addEventListener('touchstart', () => {
    touchActive = true;
});

document.querySelector('.board').addEventListener('touchend', () => {
    touchActive = false;
});