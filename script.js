var colors = [];
var colorNumber = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#resetBtn");
var mode = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            //get clicked sqyare color
            var clickedColor = this.style.backgroundColor;
            if(pickedColor === clickedColor){
                messageDisplay.textContent = "Correct!";
                changeColor(colorNumber);
                resetBtn.textContent = "Play again?"
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again!";
            }
        });
    }
}

function setUpSquares(){
    for(var i = 0; i < mode.length; i++){
        mode[i].addEventListener("click", function(){
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
    
            colorNumber = this.textContent === "Easy" ? 3 : 6;
            reset();
        })
    }
}

resetBtn.addEventListener("click", reset);

function reset(){
    colors = generateRandomColors(colorNumber);
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = " "; 
    h1.style.backgroundColor = "steelblue";
}

function changeColor(num){
    for(var j = 0; j< num; j++){
         squares[j].style.backgroundColor = pickedColor;
    }
    h1.style.backgroundColor = pickedColor;
}

function pickColor(){
    var random = Math.floor(Math.random()*colorNumber);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        //get random color and push to array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    var color = "rgb(" + red +", " + green + ", " + blue + ")"; 
    return color;
}

