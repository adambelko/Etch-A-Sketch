
let mouseIsDown;

const settingsPanel = document.querySelector(".settings");

// gets vealue from slider to change grid div number
function getValue() {
    const rangeSelector = document.querySelector(".rangeSelector");
    const currentValue = document.querySelector(".currentValue");
    currentValue.textContent = `Grid size: ${rangeSelector.value} x ${rangeSelector.value}`;

    rangeSelector.addEventListener("input", e => currentValue.textContent = `Grid size: ${rangeSelector.value} x ${rangeSelector.value}` );
    rangeSelector.addEventListener("change", e => createDiv(rangeSelector.value));
}


function createDiv(num) {
    const gridContainer = document.querySelector(".gridContainer");

    // if slider is moved to a different value all divs gets deleted so new ones can be created
    if (num !== 31) {
        while(gridContainer.firstChild) {
            gridContainer.firstChild.remove();
        }
    }

    for (i=0; i<(num*num); i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "divItem");

        div.addEventListener("click", e => div.style.backgroundColor = "black");
        div.addEventListener("mousedown", e => mouseIsDown = true);
        div.addEventListener("mouseup", e => mouseIsDown = false);

        div.addEventListener("mousemove", e => {
            if (mouseIsDown === true) {
                div.style.backgroundColor = "black";
            }
        });
        gridContainer.appendChild(div);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    clearDiv();
}


function clearDiv() {
        const clearBtn = document.querySelector(".clear");
        const x = document.querySelectorAll(".divItem");

        clearBtn.addEventListener("click", e => {
        for (i=0; i<x.length; i++) {
            x[i].style.backgroundColor = "white";
        }
        getDefaultDiv();
    });
};


// brings back "painting" functionality to all divs 
function getDefaultDiv() {
        const x = document.querySelectorAll(".divItem");

        for (const div of x){
        div.addEventListener("click", e => div.style.backgroundColor = "black");
        div.addEventListener("mousedown", e => mouseIsDown = true);
        div.addEventListener("mouseup", e => mouseIsDown = false);

        div.addEventListener("mousemove", e => {
            if (mouseIsDown === true) {
                div.style.backgroundColor = "black";
            }
        });
    }
}

createDiv(31);
getValue();
clearDiv();



    

