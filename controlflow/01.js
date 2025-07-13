// if condition

// const isUserLoggedIn = false;

// if (isUserLoggedIn){
//   console.log("User is logged in");
// }else{
//   console.log("User is not logged in");
// }

// if (2 === "2") {
//   console.log("This is true");
// }else {
//   console.log("This is false");
// }

// const score = 200

// if (200 > 100){
//     const power ="fly"
//     console.log(`User has power to ${power}`);
// }

// console.log(`user power is ${power}`); // This will throw an error because 'power' is not defined in this scope

// const balance = 1000

// // if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than 500")
// }else if (balance < 750) {
//     console.log("less than 750")
// }else{
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromemail = true

if (userLoggedIn && debitCard) {
    console.log("User can make a purchase");
}

if (loggedInFromGoogle || loggedInFromemail) {
    console.log("User can login");
}