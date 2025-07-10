let date = new Date()
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(typeof date)

let myCreatedDate = new Date(2023, 0 , 23)
console.log(myCreatedDate.toDateString())

date.toLocaleString('default',{
    weekday: "long"
})

console.log(date)