
let mouseIsDown;

const settingsPanel = document.querySelector(".settings");
const clearBtn = document.querySelector(".clear");
settingsPanel.appendChild(clearBtn);

const rangeBtn = document.querySelector(".divRange");
settingsPanel.appendChild(rangeBtn);
rangeBtn.addEventListener("click", getRange());

function createDiv(num) {
    const gridContainer = document.querySelector(".gridContainer");
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
}

function getRange() {

}

function clearDiv() {
        const x = document.querySelectorAll(".divItem");

        clearBtn.addEventListener("click", e => {
        for (i=0; i<x.length; i++) {
            x[i].style.backgroundColor = "white";
        }
        getDefaultDiv();
    });
};


function getDefaultDiv() {
        const x = document.querySelectorAll(".divItem");

        for (const div of x){
        div.addEventListener("click", e => e.target.classList.add("colorClassMove"));
        div.addEventListener("mousedown", e => mouseIsDown = true);
        div.addEventListener("mouseup", e => mouseIsDown = false);

        div.addEventListener("mousemove", e => {
            if (mouseIsDown === true) {
                e.target.classList.add("colorClassMove");
            }
        });
    }
}

createDiv(16);
clearDiv();


    

