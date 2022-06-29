let mouseIsDown;
let colorPickerMode;
let randomColorMode;
let eraserMode;
let gridLinesMdode;

const gridContainer = document.querySelector(".gridContainer");
const allDiv = document.querySelectorAll(".divItem");
const colorPicker = document.querySelector(".colorMode");
const randomColorModeBtn = document.querySelector(".randomColorMode");
const eraserBtn = document.querySelector(".eraserMode");
const clearBtn = document.querySelector(".clearMode");
const gridLinesBtn = document.querySelector(".gridLinesMode");
const rangeSelector = document.querySelector(".rangeSelector");
const currentValue = document.querySelector(".currentValue");

colorPicker.addEventListener("change", e => {
    colorPicker.style.backgroundColor = "#4ec7b7";
    randomColorModeBtn.style.backgroundColor = "aliceblue";
    eraserBtn.style.backgroundColor = "aliceblue";
    colorPickerMode = true;
    randomColorMode = false;
    eraserMode = false;
});

randomColorModeBtn.addEventListener("click", e => {
    randomColorModeBtn.style.backgroundColor = "#4ec7b7";
    eraserBtn.style.backgroundColor = "aliceblue";
    colorPicker.style.backgroundColor = "aliceblue";
    randomColorMode = true;
    eraserMode = false;
    colorPickerMode = false;
});

eraserBtn.addEventListener("click", e => {
    eraserBtn.style.backgroundColor = "#4ec7b7";
    randomColorModeBtn.style.backgroundColor = "aliceblue";
    colorPicker.style.backgroundColor = "aliceblue";
    eraserMode = true;
    colorPickerMode = false;
    randomColorMode = false;
});

clearBtn.addEventListener("click", clearDiv);

gridLinesBtn.addEventListener("click", e => {
    changeGridLines();
});

currentValue.textContent = `Grid size: ${rangeSelector.value} x ${rangeSelector.value}`;
rangeSelector.addEventListener("input", e => currentValue.textContent = `Grid size: ${rangeSelector.value} x ${rangeSelector.value}` );
rangeSelector.addEventListener("change", e => createDiv(rangeSelector.value)); // gets value from slider to change number of divs to create a new grid

function createDiv(num) {
    // if slider is moved to a different value all divs gets deleted so new ones can be added
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
                const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                div.style.backgroundColor = `${randomColor}`;

            } else if (colorPickerMode === true) {
                div.style.backgroundColor = `${colorPicker.value}`;
            }
        });
        div.addEventListener("mousedown", e => mouseIsDown = true);
        div.addEventListener("mouseup", e => mouseIsDown = false);

        div.addEventListener("mousemove", e => {
            if (mouseIsDown === true && eraserMode === true) {
                div.style.backgroundColor = "white";

            } else if (mouseIsDown === true && randomColorMode === true) {
                randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); 
                div.style.backgroundColor = `${randomColor}`;

            } else if (mouseIsDown === true && colorPickerMode === true) {
                div.style.backgroundColor = `${colorPicker.value}`;

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
        gridLinesBtn.style.backgroundColor = "#4ec7b7";
        for (i=0; i<allDiv.length; i++) {
            allDiv[i].style.border = "0px";
        }

    } else {
        gridLinesBtn.style.backgroundColor = "aliceblue";
        for (i=0; i<allDiv.length; i++) {
            allDiv[i].style.border = "1px ridge black";
        }
    }
}

createDiv(20);



    

