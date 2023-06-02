//************ */ Output for Question No1

var Qno1 = document.getElementById("text")
Qno1.innerText += ` ${Qno1.id}`
console.log(Qno1)

//************ */ Output for Question No2

var Qno2 = document.getElementsByTagName("h1")
var Q2 = document.getElementById("Q2")
Q2.innerText += ` ${Qno2[0].tagName}`
console.log(Qno2[0])


//************ */ Output for Question No3

var Qno3 = document.getElementsByClassName("box")
Qno3[0].innerText += ` ${Qno3[0].className}`
console.log(Qno3[0])

//************ */  Output for Question No4

var Qno4 = document.getElementsByTagName("h1")[1]
Qno4.addEventListener('click',()=>{
    Qno4.innerText = "Hello World"
})

console.log(Qno4)

//************ */  Output for Question No5

var Qno5 = document.getElementById("replace")

let count=true
function show(){
    if(count){
        Qno5.innerText = `Welcome to Elevation academy`
        count=false
    }
    else{
        Qno5.innerText = `Hello World`
        count=true
    }
}

//************ */ Output for Question No6

var Qno6 = document.getElementsByTagName("h1")[3]

Qno6.style.color = 'red'
Qno6.id = 'heading'

// var heading = document.createAttribute("id")
// heading.value="heading";
// Qno6.setAttributeNode(heading)

console.log(Qno6)

//************ */ Output for Question No7

var Qno7 = document.querySelector(".parent")

let Count=true;
function changedirection(){
    if(Count){
        Qno7.style.display = 'block'
        Count=false
    }
    else{
        Qno7.style.display = 'flex'
        Count=true
    }
}

console.log(Qno7)

//************ */ Output for Question No9

var Qno9 = document.querySelector(".clock")

function Zero(t) {
    return t < 10 ? '0'.concat(t) : t
}

function time(){
let time = new Date();

let hrs  = time.getHours();
let mins = time.getMinutes();
let secs = time.getSeconds();

Qno9.innerHTML = `Hours ${Zero(hrs)} : Minutes ${Zero(mins)} : Seconds ${Zero(secs)}`
// console.log(`time : ${Zero(hrs)} : ${Zero(mins)} : ${Zero(secs)}`)
}

setInterval(time, 1000)


// Question No10 **GAME**



