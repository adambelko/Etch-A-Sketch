let mouseIsDown;
let randomColorMode;
let eraserMode;

const gridContainer = document.querySelector(".gridContainer");
const allDiv = document.querySelectorAll(".divItem");

const randomColorModeBtn = document.querySelector(".randomColorMode");
randomColorModeBtn.addEventListener("click", e=> randomColorMode = true);

const eraseBtn = document.querySelector(".eraserMode");
eraseBtn.addEventListener("click", e=> eraserMode = true);

const clearBtn = document.querySelector(".clearMode");
clearBtn.addEventListener("click", clearDiv);

const gridLinesBtn = document.querySelector(".gridLinesMode");
gridLinesBtn.addEventListener("click", changeGridLines);

const rangeSelector = document.querySelector(".rangeSelector");
const currentValue = document.querySelector(".currentValue");
currentValue.textContent = `Grid size: ${rangeSelector.value} x ${rangeSelector.value}`;
rangeSelector.addEventListener("input", e => currentValue.textContent = `Grid size: ${rangeSelector.value} x ${rangeSelector.value}` );
rangeSelector.addEventListener("change", e => createDiv(rangeSelector.value)); // gets value from slider to change number of divs to create a new grid

function createDiv(num) {
    // if slider is moved to a different value all divs gets deleted so new ones can be created
    if (num !== 20) {
        while(gridContainer.firstChild) {
            gridContainer.firstChild.remove();
        }
    }

    for (i=0; i<(num*num); i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "divItem");

        div.addEventListener("click", e => {
            div.style.backgroundColor = "black";
            if (eraserMode === true) {
                div.style.backgroundColor = "white";
            
            } else if (randomColorMode === true) {
                const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                div.style.backgroundColor = `${randomColor}`;
            }
        });
        div.addEventListener("mousedown", e => mouseIsDown = true);
        div.addEventListener("mouseup", e => mouseIsDown = false);

        div.addEventListener("mousemove", e => {
            if (mouseIsDown === true && eraserMode === true) {
                div.style.backgroundColor = "white";

            } else if (mouseIsDown === true && randomColorMode === true) {
                randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                div.style.backgroundColor = `${randomColor}`;

            } else if (mouseIsDown === true) {
                div.style.backgroundColor = "black";
            }
        });
        gridContainer.appendChild(div);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    
    changeGridLines();
}

function eraseDiv() {

}

function clearDiv() {
    const allDiv = document.querySelectorAll(".divItem");
    for (i=0; i<allDiv.length; i++) {
        allDiv[i].style.backgroundColor = "white";
    }
    createDiv(rangeSelector.value);
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

createDiv(20);



    

