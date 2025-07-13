// function sayMyName(){
//     console.log("H")
//     console.log("A")
//     console.log("R")
//     console.log("I")
    
// }

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }

// function addTwoNumbers(num1, num2){
//     let result = num1 + num2
//     return result
// }

// const result = addTwoNumbers(5, 4)

// console.log(result)


// function loginUserMessage(username = "sam") {
//     if(username === undefined){
//         return "Please enter a username"
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400 , 500))

const user = {
    username: "hari",
    price: 999,
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

handleObject(user)