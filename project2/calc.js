const prompt = require("prompt-sync")()

let num1;
let num2;
while(true){
    num1 = parseFloat(prompt("Enter Number1 : "))
if (isNaN(num1))
    console.log("Invalid input...")
else{
    break;
}
}

while(true){
    num2 = parseFloat(prompt("Enter Number2 : "))
    if(isNaN(num2)){
        console.log("Invalid Input...")

    }
    else{
        break
    }
}
const operator = prompt("Enter sign : ")

let result;

let valid = true

switch(operator){
    case "+":
        result = num1+num2
        break;
    case "-":
        result = num1 - num2
        break;
    case "/":
         result = num1 / num2
         
         break; 
            
    case "%":
        result = num1 % num2
        
        break;
    case "*":
        result = num1 * num2
        
        break;
    default:
        console.log("Invalid input...")
        valid = false

}

if(valid){
    console.log(num1,operator,num2,"=",result)
}




function getNumber(){

}