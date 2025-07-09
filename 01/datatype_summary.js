//primitive

// types:
/*

string, number, boolean, null, undefined, symbol, BigInt

*/

const score = 100
const scoreValue = 100.3

const isLoggedin = false
const ouside_temp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId)

/*

//referencetpe or nonprimitive datatypes

Array, objects, Functions

*/

const heros = ["superman","spiderman","batman"]

let myData = {
    name: "hari",
    age: 22,
}

const myFunction = function(){
    console.log("helloworld");
    
}

console.log(heros[0])
console.log(myData)

myFunction();
