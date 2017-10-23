var numberOfSqueres = 6;
var colors = generateRandomColors(numberOfSqueres);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelector(".mode");

for (var i = 0; i < modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove('selected');
    modeButtons[1].classList.remove('selected');
    this.classList.add('selected');
    this.textContent === "Easy" ? numberOfSqueres = 3: numberOfSqueres = 6;
    reset();
  });
}

function reset(){
  colors = generateRandomColors(numberOfSqueres); // All new colors
  pickedColor = pickColor(); // Random color from array
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Color";
  messageDisplay.textContent = "";

  for (var i=0; i<squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function() {
//   reset();
// });
  colors = generateRandomColors(numberOfSqueres); // All new colors
  pickedColor = pickColor(); // Random color from array
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Color";

  messageDisplay.textContent = "";

  for (var i = 0; i< squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
})


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;

    if(clickedColor === pickedColor) {
      messageDisplay. textContent = "Correct!";
      resetButton.textContent = 'Play Again?';
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  for(var i = 0; i<squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for(var i = 0; i<num; i++) {
    arr.push(randomColor())

  }
  return arr;

}
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r +', ' + g +', ' +b + ')';
}