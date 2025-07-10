const myArr = [0,1,2,3,4,5,6,7,8,9]
console.log(myArr[0]);

const myHeroes = ["supperman", "batman", "spiderman", "ironman"];
console.log(myHeroes[2]);

//array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// // myArr.unshift(9)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

//slice and splice

console.log("A",myArr)

const myn1 = myArr.slice(2, 5);
console.log("B", myn1);

const myn2 = myArr.splice(2, 5);
console.log("c", myArr);
console.log("d", myn2);