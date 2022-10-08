let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init()
{   //mode button Event Listeners

    for(let i = 0; i < modeButtons.length; i++)
    {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    
            reset();
        });
    }

    for(let i = 0; i<squares.length; i++)
    {
        //add click listeners for squares
        squares[i].addEventListener("click", function(){
        
            //grab color of clicked square
            let clickedColor = this.style.backgroundColor;
    
            if(clickedColor === pickedColor)
            {
                changeColors(pickedColor);
                messageDisplay.textContent = "Correct!!";
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            }
    
            else
            {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again...";
            }
        });
    }

    reset();
}

function reset()
{
    resetButton.textContent = "New Color";
    messageDisplay.textContent = "";
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    //change colors of square
    for(let i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }

        else
        {
            squares[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
    reset();
});


function changeColors(color)
{
    //loop through all squares

    for(let i = 0; i < squares.length; i++)
    {
        //change each color to match picked color
        squares[i].style.backgroundColor = color;
    }
}


function pickColor()
{
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num)
{
    //make an aray
    let arr = [];
    //repeat num times
    for(let i=0; i < num; i++)
    {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return this array
    return arr;
}

function  randomColor()
{
    //pick red b/w 0-255
    let red = Math.floor(Math.random() * 256);
    //pick green b/w 0-255
    let green = Math.floor(Math.random() * 256);
    //pick blue b/w 0-255
    let blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
