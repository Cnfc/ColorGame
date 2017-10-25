var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var tryAgainDisplay = document.querySelector(".error");
var successDisplay = document.querySelector(".success");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
  colors = generateRandomColors(6); // All new colors
  pickedColor = pickColor(); // Random color from array
  renderPickedColor(pickedColor);
  tryAgainDisplay.style.visibility = "hidden";
  successDisplay.style.display = "none";

  for (var i = 0; i < squares.length; i++) {
    squares[i].classList.remove("square-wrong");
    squares[i].style.background = colors[i];
  }
});

renderPickedColor(pickedColor);

for(var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;

    if (clickedColor === pickedColor) {
      successDisplay.style.display = "block";
      resetButton.textContent = "Play Again?";
      tryAgainDisplay.style.visibility = "hidden";
      changeColors(clickedColor);
    } else {
      this.classList.add("square-wrong");
      this.style = "";
      tryAgainDisplay.style.visibility = "visible";
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r +", " + g +", " + b + ")";
}

function renderPickedColor(pickedColor) {
  var colorDisplays = document.querySelectorAll(".colorDisplay");

  for (var i = 0; i < colorDisplays.length; i++) {
    colorDisplays[i].textContent = pickedColor;
  }
}
