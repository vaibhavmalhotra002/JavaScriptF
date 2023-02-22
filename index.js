// document.getElementById("count-el").innerText=18

// let countEl = document.getElementById("count-el")
// let count = 0
// function increment() {
//     count = count + 1 
//     countEl.innerText =count
// }
let countEl = document.getElementById("count-el")
let count = 0 
function increment(){
    count =count + 1
    countEl.innerText =count 
}

function save(){
    console.log(count)
}
save()

let message ="You have three new notifications"
console.log(message)