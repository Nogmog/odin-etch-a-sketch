const mainGrid = document.querySelector("#container")
for(i = 0; i < 256; i++){
    let newGrid = document.createElement("div");
    newGrid.classList.add("grids")
    mainGrid.appendChild(newGrid)
}