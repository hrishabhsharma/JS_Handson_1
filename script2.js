var execute = document.querySelector('.again')
var message =document.getElementById("msg")
var chan = document.getElementById("chance")
var atm =document.getElementById("attemp")
var given = document.getElementById("numid")

function create_random(){
    const randomNumber = parseInt(Math.random() * 100 + 1);
    return randomNumber
}

var random;

function start(){
    random = create_random();
    given.value="";
    chan.innerText = '100'
    message.innerHTML = ('Start guessing!!')
    atm.innerText = '0'
    console.log(random);
    
}


let attempts = 0
let chances = 100

function checkguess() {
    const guess = parseInt(given.value);
    console.log(guess)

    attempts++;
    chances--;

    if(guess === random){
        console.log("congratulations You are Winner")
        message.innerHTML = ('You Are Winner')
        execute.innerHTML = ('Play Again')
    }
    else if(guess < random){
        message.innerHTML = ('Number is Low')
        console.log("small")
    }
    else{
        message.innerHTML = ('Number is high')
        console.log("high")
    }
    chan.innerText = chances
    atm.innerText = attempts
}