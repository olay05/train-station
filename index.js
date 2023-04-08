document.getElementById("count-el").innerText = 5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
// save()

// let userName = "Paul"
// var message = "you have three new notifications"
// console.log(message + " , " + userName + "!")

// let userName = "Paul" + "!"
// var message = "you have three new notifications,   " 
// messageToUser = message + userName 
// console.log(messageToUser)


// let userName = "Paul" 
// var message = "you have three new notifications," 
// let messageToUser = message + " "+  userName + "!" 
// console.log(messageToUser)

// let name = "Ade"
// let greeting = "Hi, my name is"

// let count = 0
// console.log(count)

// console.log(myAge)
// // let myAge = 20
// // console.log(myAge)
// if you run a code before you declared it. it will return error on the console.
// let myAge = 20

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)
// i use two methods to achived same result.
// let myAge = 20
// let humanDogRatio = 7
// let count = 20* 7
// let myDogAge = count
// console.log(myDogAge)

// let myAge = 20
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)
 
// function increment() {
//    console.log("The button was clicked")
// }

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// function players() {
//     console.log(42)
// }

// players()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function laps() {
//     let totalLap = lap1 + lap2 + lap3
//     // console.log(34 + 33 + 36)
//     console.log(totalLap)
// }

// let lapCompleted = 0
// function lapValue() {
//     lapCompleted = lapCompleted + 1
// }
   

// lapValue()
// lapValue()
// lapValue()

// console.log(lapCompleted)

// let profile = {
//     name: "Yinka",
//     gender: "male",
//     location: "Lagos",
//    Meal: "Rice and Plantian",
//     hobbies: ["sport", "footballer", "reading", "swimming"]
// };
// console.log(profile);


