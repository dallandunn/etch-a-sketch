function createDivs(num, parent) {
    for (let i = 0; i < num; i++) {
        console.log(i);
        const newDiv = document.createElement('div');
        newDiv.classList.add('cell');
        document.querySelector(parent).appendChild(newDiv);
    }
}

function clearGrid() {
    grid = document.querySelectorAll('.cell')
    grid.forEach(cell => cell.style.backgroundColor = 'white');
}

let width = 16;
createDivs(Math.pow(width, 2), "#container");

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => cell.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'black';
}))
