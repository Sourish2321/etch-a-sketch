const canvas = document.querySelector('#canvas');
const btn = document.querySelector('#grid');
let grid = 256;

makeGrid(16)


btn.addEventListener("click", event => {
    let gridbtn = prompt("Enter the Grid Size?")
    let gridtoint = parseInt(gridbtn)
    if(gridtoint > 100) {
        alert("Do you Really want your Computer Crash?")
    }
    else if(gridtoint == 0) {
        alert("Please Enter A Value for the Grid!")
    }
    else {
        grid = gridtoint * gridtoint
        clearGrid()
        makeGrid(gridtoint)
    }   
})
    
    
function makeGrid(size) {
for (let i = 0; i < grid; i++) {
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    const gridSquares = document.createElement('div');
    gridSquares.style.cssText = "border : solid black; width : 15px; height: 15px"
    canvas.appendChild(gridSquares)
    gridSquares.addEventListener("mouseover", event => {
        gridSquares.style.backgroundColor = "lightblue" 
    });
}
}

function clearGrid() {
    canvas.innerHTML = ""
}