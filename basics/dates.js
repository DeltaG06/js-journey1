//Dates

// let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate=new Date(2023,0,5)
// let myCreatedDate=new Date(2023,0,5,3)

let myCreatedDate=new Date("2023-01-13")
console.log(myCreatedDate.toLocaleString())

// timestamp in milli seconds 
let timeStamp=  Date.now()
console.log(timeStamp)

console.log(myCreatedDate.getTime())

//to convert into seconds 
console.log(Math.floor(myCreatedDate.getTime()/100))