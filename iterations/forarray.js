// for of

// const arr = [1,2,3,4,5]

// for (const i of arr) {
//     console.log(i)

// }

// const greet = "hello world"
// for( const i of greet) {
//     if(i == " "){
//         continue;
//     }
//     console.log(`Each char is ${i}`)
// }

//mapss

const map = new Map()
map.set('IN', "india")
map.set('US', "united")
map.set('UK', "states")
map.set('IN', "india")


// console.log(map)

for (const [key,value] of map) {
    console.log(key, ":", value)
    
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'spiderman'
// }
