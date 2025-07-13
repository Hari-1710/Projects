const user = {
    username: "hari",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`Welcome ${this.username}, your price is ${this.price}`);
        console.log(this);
    },
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()   

// console.log(this)

// function chai(){
//     let username = "hari"
//     console.log(this.username);
//     // console.log("Chai is ready");
// }

// chai(); 

// const chai = function() {
//     let username = "hari"
//     console.log(this.username);
//     // console.log("Chai is ready");
// }

// chai()

// const chai = () => {
//     let username = "hari"
//     console.log(this);
//     // console.log("Chai is ready");
// }

// chai()

// const addTwo = (num1, num2) => {
//     // console.log(this);
//     return num1 + num2;
// }

// console.log(addTwo(5, 10));

// const addTwo = (num1, num2) => (num1 + num2);
const addTwo = (num1, num2) => ({username: "hari"})



// console.log(addTwo(5, 10));