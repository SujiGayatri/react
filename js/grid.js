// var n = parseInt(window.prompt("Enter number"));
// var parent = document.getElementsByClassName("child")[0];
// var currentRow = 0;
// var currentCol = 0;

// if(n<=5){
// for(let i=0;i<n;i++){
//     var row = document.createElement('div');
//     row.style.display = "flex";
//     for(let j=0;j<n;j++){
//     var div = document.createElement("div");
//     div.style.backgroundColor = "blue";
//     div.style.width = "100px";
//     div.style.height = "100px";
//     div.style.margin = "1px";
//     if (i === 0 && j === 0) {
//         div.classList.add('active');
//     }
//     row.appendChild(div);
//     }
//     parent.appendChild(row);
// }
// }
// else{
//     alert("please enter a number in a range of 1 to 5");
// }


// function updateActiveCell() {
//     const cells = document.querySelectorAll('.grid-item');
//     cells.forEach(cell => cell.classList.remove('active'));
//     const index = currentRow * n + currentCol;
//     cells[index].classList.add('active');
// }

// function move(direction) {
//     switch (direction) {
//         case 'up':
//             if (currentRow > 0) currentRow--;
//             break;
//         case 'down':
//             if (currentRow < n - 1) currentRow++;
//             break;
//         case 'left':
//             if (currentCol > 0) currentCol--;
//             break;
//         case 'right':
//             if (currentCol < n - 1) currentCol++;
//             break;
//     }
//     updateActiveCell();
// }

var n = parseInt(window.prompt("Enter number"));
var parent = document.getElementsByClassName("child")[0];
var currentRow = 0;
var currentCol = 0;
var grid = [];
var imgSrc = 'https://static.vecteezy.com/system/resources/thumbnails/012/658/426/small/white-plastic-ball-png.png'; // Replace with your image URL
var imgElement = document.createElement('img');
imgElement.src = imgSrc;
imgElement.style.backgroundRepeat = 'no-repeat';
imgElement.style.backgroundSize = '100% 100%';

if (n > 0 && n <= 5) {
    for (let i = 0; i < n; i++) {
        var row = document.createElement('div');
        row.style.display = "flex";
        var rowCells = [];
        for (let j = 0; j < n; j++) {
            var div = document.createElement("div");
            div.style.backgroundColor = "blue";
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.margin = "1px";
            row.appendChild(div);
            rowCells.push(div);
        }
        parent.appendChild(row);
        grid.push(rowCells);
    }
    // grid[0][0].style.backgroundColor = "skyblue";  // Initialize the first cell as active
    grid[0][0].appendChild(imgElement);
} else {
    alert("Please enter a number in a range of 1 to 5");
}

function updateActiveCell() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j].style.backgroundColor = "blue";
            if (grid[i][j].contains(imgElement)) {
                grid[i][j].removeChild(imgElement);
            }
        }
    }
    // grid[currentRow][currentCol].style.backgroundColor = "skyblue";
    grid[currentRow][currentCol].appendChild(imgElement);
}

function move(direction) {
    switch (direction) {
        case 'up':
            if (currentRow > 0) currentRow--;
            break;
        case 'down':
            if (currentRow < n - 1) currentRow++;
            break;
        case 'left':
            if (currentCol > 0) currentCol--;
            break;
        case 'right':
            if (currentCol < n - 1) currentCol++;
            break;
    }
    updateActiveCell();
}
