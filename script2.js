const randomNumber = Math.floor(Math.random()*100)+1;

var chan = document.getElementById("chance")
var atm =document.getElementById("attemp")
var message =document.getElementById("msg")


let attempts = 0
let chances = 100

function checkguess (){
    const guess =   parseInt(document.getElementById("numid").value);
    console.log(guess)

    attempts++;
    chances--;

    if(guess === randomNumber){
        console.log("congratulations"+attempts)
        message.innerHTML = ('You Are Winner')
    }
    else if(guess < randomNumber){
        console.log("small")
    }
    else{
        console.log("high")
    }
    chan.innerText = chances
    atm.innerText = attempts
}

function start(){
    var element = document.querySelector(".check");
     element.reset()
  }