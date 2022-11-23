/*Comentario por lineas*/
//Comentario de una sola linea
/*document.write("<h1>Hello World</h1>");

let numberOne = 60;
let numberTwo = 105;

let name = "john";
let lastName = "Cartero";

let result = numberOne + numberTwo;
let completeName = name + ' ' + lastName;

console.log(result);
console.log(completeName);

//-------------------Condicionales-------------------
//=== Comparacion mas fuerte, checar para que sirve
if (numberOne<=numberTwo) {
    console.log("Es menor NumbaUno");
} else console.log("Es mayor NumbaDos");*/

//-------------------1-Rock*Paper*Scissor-------------------
//
const computerChoice = document.getElementById('computerchoice')
const userChoiceDisplay = document.getElementById('yourchoice')
const resultDisplay = document.getElementById('result')
const rockChoice = document.getElementById('rock')
const paperChoice = document.getElementById('paper')
const scissorChoice = document.getElementById('scissor')
var possibleChoices = document.getElementsByClassName('button2')

// the text that the button puts into the result after being clicked
const clickedbtnrock = "Rock";
const clickedbtnpaper = "Paper";
const clickedbtnscissor = "Scissor";

//EventListeners that have the 3 options to be selected
function eventListener() {
    const rock = 1;
    //randomnum();
    if (possibleChoices.textContent = rockChoice.textContent) {
        userChoiceDisplay.textContent = clickedbtnrock;
    console.log("🚀 ~ file: app.js ~ line 39 ~ eventListener ~ clickedbtnrock", clickedbtnrock)
  }
  finalresult(rock,randomnum());
  return console.log("🚀 ~ file: app.js ~ line 68 ~ eventListener3 ~ Rock", rock);
}

function eventListener2() {
    const paper = 2;
    //randomnum();
    if (possibleChoices.textContent = paperChoice.textContent) {
        userChoiceDisplay.textContent = clickedbtnpaper;
        console.log("🚀 ~ file: app.js ~ line 39 ~ eventListener ~ clickedbtnrock", clickedbtnpaper)
    }
    finalresult(paper,randomnum());
    return console.log("🚀 ~ file: app.js ~ line 68 ~ eventListener3 ~ Paper", paper);
  }

  function eventListener3() {
    const scissor = 3;
    //randomnum();
    if (possibleChoices.textContent = scissorChoice.textContent) {
        userChoiceDisplay.textContent = clickedbtnscissor;
        console.log("🚀 ~ file: app.js ~ line 39 ~ eventListener ~ clickedbtnrock", clickedbtnscissor)
    }
    finalresult(scissor,randomnum());
    return console.log("🚀 ~ file: app.js ~ line 68 ~ eventListener3 ~ scissor", scissor);
  }

  //Generate and call the random number 
function randomnum () {
    const min = 1;
    const max = 3;

    const randomInt = (min,max) => 
    max === undefined ? Math.floor(Math.random()*min)
    : min + Math.floor(Math.random()*(max - min + 1)) 

    const x = randomInt(min,max);

    switch(x){
        case 1:
            document.getElementById("computerchoice").innerHTML = "Rock";
            break;
        case 2:
            document.getElementById("computerchoice").innerHTML = "Paper";
            break;
        case 3:
            document.getElementById("computerchoice").innerHTML = "Scissor";
            break;
        default:
            document.getElementById("computerchoice").innerHTML = "Error";
    }

    //document.getElementById("computerchoice").innerHTML = randomInt(min,max)

    console.log("🚀 ~ file: app.js ~ line 104 ~ Random Number", x)
    return x;
}

//Compare the choice with the random number to get the Result
//Rock(1) win to Scissor(2) win to Paper(3) und win to Rock(1)
//Rock(1) lose to Paper(2) lose to Scissor (3)
function finalresult(choice,randomis) {

    switch(choice){
        case 1:
            if(choice == randomis){
                resultDisplay.textContent = "It's a Draw"; 
            console.log("🚀 ~ file: app.js ~ line 78 ~ finalresult ~ Paper", rock, randomis);} else {if(randomis == 3){
                resultDisplay.textContent = "You Win"; 
            console.log("🚀 ~ file: app.js ~ line 78 ~ finalresult ~ Paper", rock, randomis);}
            else {resultDisplay.textContent = "You Lose"; 
            console.log("🚀 ~ file: app.js ~ line 75 ~ finalresult ~ Paper", rock, randomis);}}
            //console.log("🚀 ~ file: app.js ~ line 72 ~ finalresult ~ Rock", rock);
            break;
        case 2:
            if(choice == randomis){
                resultDisplay.textContent = "It's a Draw"; 
            console.log("🚀 ~ file: app.js ~ line 78 ~ finalresult ~ Paper", paper, randomis);} else {if(randomis == 1){
                resultDisplay.textContent = "You Win"; 
            console.log("🚀 ~ file: app.js ~ line 78 ~ finalresult ~ Paper", paper, randomis);}
            else {resultDisplay.textContent = "You Lose"; 
            console.log("🚀 ~ file: app.js ~ line 75 ~ finalresult ~ Paper", paper, randomis);}}
            break;
        case 3:
            if(choice == randomis){
                resultDisplay.textContent = "It's a Draw"; 
            console.log("🚀 ~ file: app.js ~ line 78 ~ finalresult ~ Scissor", scissor, randomis);} else {if(randomis == 2){
                resultDisplay.textContent = "You Win"; 
            console.log("🚀 ~ file: app.js ~ line 78 ~ finalresult ~ Scissor", scissor, randomis);}
            else {resultDisplay.textContent = "You Lose"; 
            console.log("🚀 ~ file: app.js ~ line 78 ~ finalresult ~ Scissor", scissor, randomis);}}
            break;
        default:
            "Error"
    }
}

  //Function that keeps focused to Listen in to the actions
  function addListener() {
    rockChoice.addEventListener(
        "click",
        eventListener,
        {
          //Helps to prevent having duplicate listeners attached
          passive: true,
          //once: true
        }
      );
    paperChoice.addEventListener(
      "click",
      eventListener2,
      {
        //Helps to prevent having duplicate listeners attached
        passive: true,
        //once: true
      }
    );
    scissorChoice.addEventListener(
        "click",
        eventListener3,
        {
          //Helps to prevent having duplicate listeners attached
          passive: true,
          //once: true
        }
      );
  }

for(let i = 0; i < possibleChoices.length; i++) {
    possibleChoices[i].addEventListener("click", function() {
    console.log("Clicked index: " + i);
  })
}

//Function that is called to run all the ohter functions
  addListener();
//document.getElementById("result").innerHTML = possibleChoices;

const Prueba = "Hola";
console.log("🚀 ~ file: app.js ~ line 34 ~ Prueba", Prueba);