function createGrid(num, parent) {
    for (let i = 0; i < num; i++) {
        console.log(i);
        const newDiv = document.createElement('div');
        newDiv.classList.add('cell');
        parent.appendChild(newDiv);
    }
}

function clearGrid() {
    grid = document.querySelectorAll('.cell');
    grid.forEach(cell => cell.style.backgroundColor = 'white');
}

const random = document.querySelector('#random')
random.addEventListener('change', function() {
    if (this.checked) {
        random.classList.add('checked')
    } else {
        random.classList.remove('checked')
    }
})

function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function drawGrid(size) {
    const gridArea = document.getElementById('container');
    gridArea.style.gridTemplateColumns = `repeat(${size}, minmax(1px, 1fr))`
    createGrid(Math.pow(size, 2), gridArea);
    
    const cells = document.querySelectorAll('.cell');
    const color = document.getElementById('colorpicker');
    cells.forEach(cell => cell.addEventListener('mouseenter', function() {
        if (document.querySelector('.checked')) {
            this.style.backgroundColor = randomColor();
        } else {
            this.style.backgroundColor = color.value;
        }
    }))
}

function setValue(range, value) {
    const val = range.value;
    value.innerHTML = val + ' x ' + val; 
}

const gridValue = document.querySelector('.rangeValue')
const range = document.querySelector('.slider');
range.addEventListener("input", function() {
    setValue(range, gridValue);
})

let width = range.value;

drawGrid(width);

range.addEventListener('mouseup', function() {
    clearGrid()
    grid = document.querySelectorAll('.cell')
    grid.forEach(cell => cell.remove())
    drawGrid(document.getElementById('gridRange').value)
})