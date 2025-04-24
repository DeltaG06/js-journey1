const prompt = require("prompt-sync")

function printInfo(){
    console.log("Contact Management System")
    console.log("---------------------------")
    console.log("1. Add a contact : ")
    console.log("2. delete a contact : ")
    console.log("3. View contacts : ")
    console.log("4. search contacts : ")
    console.log("5. Exit : ")
}
function addContact(){}


function deleteContact(){}


function searchContact(){}

function listContact(contacts){}


printInfo()

const num = prompt("Enter an Operation (1-5) : ")
let keepGoing=true
while (true) {
    switch(num){
    case "1" : 
        addContact()
        break;
    case "2"  :
        deleteContact()
        break;
    case "3" :
        searchContact()

        break;
    case  "4" :
        listContact()
        break;
    case "5" :
        keepGoing=false
        break;
    default :
        console.lof("Unknown")
}}