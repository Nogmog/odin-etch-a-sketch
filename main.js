const mainGrid = document.querySelector("#container");
for(i = 0; i < 256; i++){
    let newGrid = document.createElement("div");

    newGrid.classList.add("grids");
    newGrid.addEventListener("mouseover", onHover);

    mainGrid.appendChild(newGrid);
}


function onHover(e){
    console.log(e)
    e.target.classList.add("grid-black")

}