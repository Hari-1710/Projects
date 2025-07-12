// // const tinderUser = new Object()

// const tinderUser = {}

// tinderUser.id = "1234"
// tinderUser.name = "Hari"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Hari",
//             lastname: "krishnan"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname)
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// // const obj3 =Object.assign({},obj1, obj2)
// // console.log(obj3)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// const users = [
//     {
//         id: "123",
//         name: "Hari",
//         isLoggedIn: false
//     },
//     {
//         id: "5678",
//         name: "John",
//         isLoggedIn: true
//     }
// ]

// users[1].email 
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))


const course = {
    name: "JavaScript",
    price: 999,
    courseInstructor: "Hari",
}

const {courseInstructor: inst} = course

console.log(inst);

