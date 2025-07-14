// const coding = ["js", "rb", "swift", "cpp", "java"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item 
// });

// console.log(values); // undefined, as forEach does not return anything  

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num>4);
// console.log(newNums); // [5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     // console.log(num);
//     return num > 4;
// });

// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// });
// console.log(newNums); // [5, 6, 7, 8, 9, 10]


const books = [
    { title: "Book 1", genre: "Fiction", publish: 2020, edition: 134 },
    { title: "Book 2", genre: "Non-Fiction", publish: 2019, edition: 267 },
    { title: "Book 3", genre: "Fiction", publish: 2021, edition: 12 },
    { title: "Book 4", genre: "Science", publish: 2018, edition: 34 },
    { title: "Book 5", genre: "Fiction", publish: 2022, edition: 15 },
    { title: "Book 6", genre: "Non-Fiction", publish: 2023, edition: 16 },
];

let userBooks = books.filter((bk) => bk.genre === 'Fiction')
userBooks = books.filter((bk) => {
    return bk.publish > 2020 && bk.genre === 'Fiction';
})


console.log(userBooks)