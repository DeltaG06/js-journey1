const prompt = require("prompt-sync")()


function getNumber(numberString){
    while(true){
        const number = parseFloat(prompt("Enter Number"+numberString+":"))
        if(isNaN(number)){
            console.log("Invalid input...")

        }
        else{
            return number
        }
    }
}
const num1 = getNumber("one")
const num2 = getNumber("two")
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

