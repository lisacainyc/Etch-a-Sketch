let grid = document.querySelector(".grid");

function createGrid(n){
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            let unit = document.createElement("div");
            unit.classList = "unit";
            unit.textContent = `${i} ${j}`;
            grid.appendChild(unit);
        }

    }
}

createGrid(16);

grid.addEventListener('mouseover', (e) => e.target.style.backgroundColor = "black");