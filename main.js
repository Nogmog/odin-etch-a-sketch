const mainGrid = document.querySelector("#container");
let mode = "black";

function makeGrid(num){
    numGrids = num**2;

    mainGrid.setAttribute("style","grid-template-columns: repeat("+num+", 1fr); grid-template-rows: repeat("+num+", 1fr)");

    for(i = 0; i < numGrids; i++){
        let newGrid = document.createElement("div");

        newGrid.classList.add("grids");
        newGrid.setAttribute("id", i);
        newGrid.addEventListener("mouseover", onHover);
        mainGrid.appendChild(newGrid);
    }
}

function onHover(e){
    let f = document.getElementById(e.target.id);

    if(mode == "black"){
    f.style.cssText = "background-color: black";

    }else if(mode == "random"){
        let R = Math.floor(Math.random() * 256);
        let G = Math.floor(Math.random() * 256);
        let B = Math.floor(Math.random() * 256);
        f.style.backgroundColor = "rgb("+R+","+G+","+B+")"

    }
}

const info = document.querySelector("#info");
const resetBtn = info.querySelector("#reset");
const sizeBtn = info.querySelector("#size");
const blkBtn = info.querySelector("#black");
const rndBtn = info.querySelector("#random");

resetBtn.addEventListener("mouseup", function(){
    let grids = mainGrid.querySelectorAll(".grids");

    grids.forEach(element => {
        element.style.cssText = "";
    });
})

sizeBtn.addEventListener("mouseup", function(){
    let gridSize = prompt("How big would you like your new grid?", 16)

    if(typeof gridSize == "number" || gridSize < 100){
        let mainRemove = mainGrid.querySelectorAll(".grids");
        mainRemove.forEach(e => {
            e.remove();
        })
        makeGrid(gridSize)
    }else{
        alert("Put a number in less than 100")
    }
})

blkBtn.addEventListener("mouseup", changeColour)
rndBtn.addEventListener("mouseup", changeColour)
const modeName = info.querySelector("#colourMode")
function changeColour(e){
    mode = e.target.id;
    modeName.textContent = "Mode: " + mode
}

makeGrid(16)