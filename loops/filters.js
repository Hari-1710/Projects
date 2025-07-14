const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumber.map((num) => num + 10)

// const newNums = myNumber
//     .map((num) => num * 10)
//     .map((num) => num +1)
//     .filter((num) => num > 50)
// console.log(newNums)

// const myTotal = myNumber.reduce(function (acc, currval) {

//     console.log(`Accumulator is ${acc} and current value is ${currval}`);
//     return acc + currval;
// }, 0);


const myTotal = myNumber.reduce((acc, currval) => acc + currval, 0);
console.log(myTotal); // 55