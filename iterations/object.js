// const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'apple'
// }

// for (const key in myObject) {
//     console.log(`${key} shourtcut is for ${myObject[key]}`)
    
// }


// const programming = ["js", "rb", "swift"]

// for (const key in programming){
//     console.log(programming[key])
// }

const coding = ["js", "rb", "swift", "cpp", "java"]

// coding.forEach(function(item){
//     console.log(item)
// })

// coding.forEach( (item)=> {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`)
})