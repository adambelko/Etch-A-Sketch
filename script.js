let mouseIsDown;
let eraserClick;

const gridContainer = document.querySelector(".gridContainer");
const allDiv = document.querySelectorAll(".divItem");

const eraseBtn = document.querySelector(".eraser");
eraseBtn.addEventListener("click", e=> eraserClick = true);

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearDiv);

const gridLinesBtn = document.querySelector(".gridLines");
gridLinesBtn.addEventListener("click", changeGridLines);

const rangeSelector = document.querySelector(".rangeSelector");
const currentValue = document.querySelector(".currentValue");
currentValue.textContent = `Grid size: ${rangeSelector.value} x ${rangeSelector.value}`;
rangeSelector.addEventListener("input", e => currentValue.textContent = `Grid size: ${rangeSelector.value} x ${rangeSelector.value}` );
rangeSelector.addEventListener("change", e => createDiv(rangeSelector.value)); // gets value from slider to change number of divs to create a new grid

function createDiv(num) {
    // if slider is moved to a different value all divs gets deleted so new ones can be created
    if (num !== 31) {
        while(gridContainer.firstChild) {
            gridContainer.firstChild.remove();
        }
    }

    for (i=0; i<(num*num); i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "divItem");

        div.addEventListener("click", e => {
            div.style.backgroundColor = "black";
            if (eraserClick === true) div.style.backgroundColor = "white";
        });
        div.addEventListener("mousedown", e => mouseIsDown = true);
        div.addEventListener("mouseup", e => mouseIsDown = false);

        div.addEventListener("mousemove", e => {
            // need to make a toggle function for eraser button to disable changing bg color when not needed anumore
            if (mouseIsDown === true && eraserClick === true) div.style.backgroundColor = "white";
            else if (mouseIsDown === true) div.style.backgroundColor = "black";
        });
        gridContainer.appendChild(div);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    
    changeGridLines();
}

function clearDiv() {
    const allDiv = document.querySelectorAll(".divItem");
    for (i=0; i<allDiv.length; i++) {
        allDiv[i].style.backgroundColor = "white";
    }
    getDefaultDiv();
};


function changeGridLines() {
    const allDiv = document.querySelectorAll(".divItem");
    if (allDiv[0].style.border == "1px ridge black") {
        for (i=0; i<allDiv.length; i++) {
            allDiv[i].style.border = "0px";
        }

    } else {
        for (i=0; i<allDiv.length; i++) {
            allDiv[i].style.border = "1px ridge black";
        }
    }
}


// brings back "painting" functionality to all divs after "clearing" them
function getDefaultDiv() {

    for (i=0; i<allDiv.length; i++){
        allDiv[i].addEventListener("click", e => div[i].style.backgroundColor = "black");
        allDiv[i].addEventListener("mousedown", e => mouseIsDown = true);
        allDiv[i].addEventListener("mouseup", e => mouseIsDown = false);

        allDiv[i].addEventListener("mousemove", e => {
            if (mouseIsDown === true) div[i].style.backgroundColor = "black";
        });
    }
}

createDiv(31);



    

