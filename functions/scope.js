// let a = 10
// const b = 20
// let c = 300

let a = 300
if (true) {
    let a = 100
    const b = 200
    
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "hari"

    function two(){
        const website = "youtube.com"
        // console.log(username)
    }
    // console.log(website) 
    two()
}

one()

if (true){
    const username = "harikrishnan"
    if (username === "harikrishnan") {
        const website = " youtube.com"
        // console.log(username + website)
    }
    // console.log(website) // This will throw an error because 'website' is not defined in this scope
}

// console.log(username) // This will throw an error because 'username' is not defined in this scope

//**************************************** */

console.log(addone(5))

function addone(num){
    return num + 1
}




const addTwo = function(num){
    return num + 2
}
addTwo(5)         