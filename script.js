let gridContainer = document.querySelector(".gridContainer");
let slider = document.getElementById("myRange");
let sliderValue = document.getElementById("sliderValue");
sliderValue.innerHTML = slider.value;

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    let gridRow = document.createElement("div");
    gridContainer.appendChild(gridRow);
    gridRow.setAttribute("class", "gridRow");
    for (let j = 0; j < gridSize; j++) {
      let gridSquare = document.createElement("div");
      gridRow.appendChild(gridSquare);
      gridSquare.setAttribute("class", "gridSquare");
    }
  }
}

function removeRows() {
  let gridRowsToRemove = document.querySelectorAll(".gridRow");
  for (let i = 0; i < gridRowsToRemove.length; i++) {
    gridRowsToRemove[i].remove();
  }
}

slider.oninput = function () {
  removeRows();
  createGrid((sliderValue.innerHTML = this.value));
  let colorSquare = document.querySelector(".gridSquare");

  function addColor() {
    colorSquare.classList.add("addColor");
  }

  colorSquare.addEventListener("click", () => addColor());
};
