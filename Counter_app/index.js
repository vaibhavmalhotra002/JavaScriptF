// document.getElementById("count-el").innerText=18

// let countEl = document.getElementById("count-el")
// let count = 0
// function increment() {
//     count = count + 1 
//     countEl.innerText =count
// }
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0 

 console.log(saveEl)
function increment(){
    count += 1
    countEl.textContent =count 
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
}


// let message ="You have three new notifications"
// console.log(message)

// let name = 'Vaibhav'
// let gretting = 'Hi my name is' 
// let myGreeting = gretting + ' ' + name
// console.log(myGreeting)
