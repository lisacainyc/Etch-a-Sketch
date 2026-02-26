let button = document.querySelector(".create");
let grid = document.querySelector(".grid");
let unit = document.querySelector(".unit");

button.addEventListener('click', function(){
    gridSize = Number(prompt("Enter a number between 1 and 100"));
    createGrid(gridSize);

})

function createGrid(n){
    grid.innerHTML = '';
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            let unit = document.createElement("div");
            unit.classList = "unit";
            unit.style.height = `calc(75vh / ${n})`;
            unit.style.width = `calc(75vh / ${n})`;
            grid.appendChild(unit);
        }
    
    }
};

grid.addEventListener('mouseover', function(e){
    if (e.target.classList.contains("unit")){
     e.target.style.backgroundColor = "black";}
    });