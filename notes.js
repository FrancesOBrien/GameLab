//AlienShip Factory creates an array called AlienFleet. We could use a for loop to iterate through each ship until its hull reaches zero. So, a set of nested for loops? one to iterate through the Fleet array and one to iterate through the hull property until the ship is ded. o lord
class AlienShip {
    constructor(name){
        this.name = name;
        this.hull = this.randomHull(10,25)    
        this.firepower = this.randomFirepower(2,8);
        this.accuracy = this.randomAccuracy(.6, .8);
        }

            randomHull(min, max) {
            return Math.floor(Math.random() * (max-min) + min);
            }

            randomFirepower(min, max) {
            return Math.floor(Math.random() * (max-min) + min);
            }

            randomAccuracy() {
            return(Math.floor(Math.random() * 3) + 6) / 10;
            }
    }

let AlienFleet = []

const makeNewAlienship = (name) => {
    const newAlienShip = new AlienShip(name);
    AlienFleet.push(newAlienShip);
}

//make a loop that calls a class and generates AlienFleet

for (let i = 0; i < 6; i++){
    makeNewAlienship('Mu_k_' + i);
}
console.log(AlienFleet)




//This works, but I want to combine these two functions into one automatic return-fire from the Alien Ship
function attack(AlienShip) {
    if (USSHelloWorld.hull > 0) { //if your ship is still alive
        if (Math.random() < USSHelloWorld.accuracy) { //randomize attack, if it's successful
            (AlienShip.hull == AlienShip.hull - 5) //assess damage to aliens
            console.log('Nice Shot, Gunner!')
            if (AlienShip.hull <= 0){
                console.log("Smoked'em!") //add alert box with message to continue game (instantiate another ship?)
            }
        } else { // if attack is not successful
            console.log('Rats! Missed!')
        }
    } else {
        console.log('Captain, the hull is breached! Abandon ship!')
    } 
    console.log(AlienShip)
} 

function defendEarth(AlienShip) {
    if (AlienShip.hull > 0) { //if alien ship is still alive
        if(Math.random() < AlienShip.accuracy) { //randomize attack based on accuracy
            (USSHelloWorld.hull == USSHelloWorld.hull - AlienShip.firepower) //calculate damage
            console.log("We're taking damage!")
            if (USSHelloWorld.hull <= 0){
                console.log('Captain, the hull is breached! Abandon ship!') //cool to add an alert box with "game over" message
            }
        }
    }
}

//here is the gameplay as one function: USS attacks once and the Alien retaliation is triggered
function attack(AlienShip) { //this function will attack the alien ship and trigger retaliation
    if (USSHelloWorld.hull > 0) { //if ship is still alive
        console.log(yourTurn = true); //flag that it's the user's turn
        if (Math.random() < USSHelloWorld.accuracy) { //randomize attack, if it's successful
            (AlienShip.hull = AlienShip.hull - 5) //assess damage to aliens
            console.log('Nice Shot, Gunner!')//indicates a successful attack
            console.log(AlienShip) //shows new hull rating, status check
            if (AlienShip.hull <= 0){ //if damage drives Alien hull to zero or below
                console.log("Smoked'em!") //add alert box with message to continue game (instantiate another ship?)
            } else if (AlienShip.hull > 0){ //if alien hull is greater than zero after attack, retaliation!
                console.log(yourTurn = false); //flag that it's the computer's turn
                if(Math.random() < AlienShip.accuracy) { //randomize attack based on accuracy
                    (USSHelloWorld.hull = USSHelloWorld.hull - AlienShip.firepower) //calculate damage
                    console.log("We're taking damage!")//indicates a successful attack
                    console.log(USSHelloWorld)//shows new hull rating, status check
                    if (USSHelloWorld.hull <= 0){
                        console.log('Captain, the hull is breached! Abandon ship!') //add alert box with "Game Over" message
                    } 
                } else { // if attack is not successful
                    console.log('Rats! Missed!') //indicates unsuccessful attack
                    console.log(AlienShip) //status check
                }
            } 
        } 
    }
}
