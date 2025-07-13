const userEmail = "hari@gmail.com"

if (userEmail) {
    console.log("User email exists");
}else{
    console.log("User email does not exist");
}

//falsy values

// false, 0 ,-0, "", null, undefined, NaN, BigInt 0n

//truthy values
// true, 1, 0.1, "hello", [], {}, BigInt 1n, "0"

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

// nullish coalescing operator (??)

// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 10;



// console.log(val1); // 5


//terniary operator

// condition ? expressionIfTrue : expressionIfFalse

const iceTeaPrice = 30;

iceTeaPrice >= 50 ? console.log("Ice tea is expensive") : console.log("Ice tea is affordable");