const prompt = require ("prompt-sync")()
const name=prompt("Whats your name?: ")
console.log("Hello",name,"! Welcome to our game")


const shouldWePlay = prompt('Do you want to play?')

if(shouldWePlay.toLowerCase()==="yes"){
    //game logic

    const leftOrRight=prompt("You enter a maze, do you go left or right? : ")
    if (leftOrRight=="left"){
        console.log("You go left and see a bridge...")
        const cross=prompt("Do you wanna cross the bridge? : ")
        if(cross == "yes"){
            console.log("The bridge was weak , it BROKE and you fell.\n You lost...")
            
        }
        else{
            console.log("Good Choice...\nYOU WIN!")
        }
    }
    else{
        console.log("You fall off a cliff...")
    }

}   

else if(shouldWePlay.toLowerCase()==="no"){
    console.log("Okay :(")
}
else{
    console.log("Invalud input... ");
}