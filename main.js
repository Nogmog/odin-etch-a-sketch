const mainGrid = document.querySelector("#container");
for(i = 0; i < 256; i++){
    let newGrid = document.createElement("div");

    newGrid.classList.add("grids");
    newGrid.setAttribute("id", i);
    newGrid.addEventListener("mouseover", onHover);

    mainGrid.appendChild(newGrid);
}


function onHover(e){
    let f = document.getElementById(e.target.id)
    f.style.cssText = "background-color: black";

}

const info = document.querySelector("#info");
const resetBtn = info.querySelector("#reset");

resetBtn.addEventListener("mouseup", function(){
    let grids = mainGrid.querySelectorAll(".grids");

    grids.forEach(element => {
        element.style.cssText = "";
    });
})