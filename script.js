
function createDiv(num) {
    const gridContainer = document.querySelector(".gridContainer");
    let mouseIsDown;

    for (i=0; i<(num*num); i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "divItem");

        div.addEventListener("click", e => e.target.classList.add("colorClassMove"));
        div.addEventListener("mousedown", e => mouseIsDown = true);
        div.addEventListener("mouseup", e => mouseIsDown = false);

        div.addEventListener("mousemove", e => {
            if (mouseIsDown === true) {
                e.target.classList.add("colorClassMove");
            }
        });
        gridContainer.appendChild(div);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
}

createDiv(16);
clearDiv();

function clearDiv() {
        const settingsPanel = document.querySelector(".settings");
        const clearBtn = document.querySelector(".clear");
        settingsPanel.appendChild(clearBtn);
        const x = document.querySelectorAll(".divItem");

        clearBtn.addEventListener("click", e => {
        for (i=0; i<x.length; i++) {
            x[i].style.backgroundColor = "white";
        }
    });
};

    const range = document.querySelector(".rangeDiv");
