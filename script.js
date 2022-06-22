

function createDiv(num) {
    const gridContainer = document.querySelector(".gridContainer");
    let mouseIsDown;
    for (i=0; i<(num*num); i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "divItem");

        div.addEventListener('mousedown', e => mouseIsDown = true);
        div.addEventListener('mouseup', e => mouseIsDown = false);

        div.addEventListener('mousemove', e => {
            if (mouseIsDown === true) {
                e.target.classList.add("colorClassMove");
            } else {
                e.target.classList("divItem");
            }

        });
        gridContainer.appendChild(div);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
}

createDiv(16);