// Select the elements on the page - canvas, shake button
const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakebutton = document.querySelector(".shake");
const moveAmount = 10;

// set up our canvas for drawing
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

const { width, height } = canvas;
console.log(canvas);
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function

function handleKey(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
    console.log(e.key);
    console.log("HANDLING KEY");
  }
}
window.addEventListener("keydown", handleKey);
const hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
function draw({ key }) {
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  console.log(key);
  //start path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // write a handler for the keys
  switch (key) {
    case "ArrowUp":
      y -= moveAmount;
      break;
    case "ArrowRight":
      x += moveAmount;
      break;
    case "ArrowDown":
      y += moveAmount;
      break;
    case "ArrowLeft":
      x -= moveAmount;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// clear or shake function

function clearCanvas() {
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    "animationend",
    function () {
      console.log("done the shake!");
      canvas.classList.remove("shake");
    },
    { once: true }
  );
}
shakebutton.addEventListener("click", clearCanvas);

// listen for arrow keys
