
class EarthShip {
    constructor (name, hull, firepower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.attack = attack();
    }    
    attack(){
            if (Math.random() < USSHelloWorld.accuracy) { //randomize attack, if it's successful
                (AlienShip.hull = AlienShip.hull - USSHelloWorld.firepower) //assess damage to aliens
                console.log('Nice Shot, Gunner!');//indicates a successful attack
                console.log(AlienShip.name + 'has ' + AlienShip.hull + ' hull remaining'); //shows new hull rating, status check
              if (AlienShip.hull > 0){ //if alien ship is still alive, they retaliate
                if(Math.random() < AlienShip.accuracy) { //randomize attack based on accuracy
                    (USSHelloWorld.hull = USSHelloWorld.hull - AlienShip.firepower) //calculate damage
                    console.log("We're taking damage!")//indicates a successful attack
                    console.log('We have ' + USSHelloWorld.hull + ' hull remaining!' ) //shows new hull rating, status check
                    if(USSHelloWorld.hull <= 0){
                        console.log('The hull is breached! Initializing escape sequence!')
                        //modal indicating Game Over message, click to try again
                    } 
                } else if (Math.random() > AlienShip.accuracy){
                    console.log("That was a close one!");
                    } 
              } else if (AlienShip.hull <= 0){ //if damage drives Alien hull to zero or below
                AlienFleet.shift(); //remove AlienFleet[0] and move AlienFleet[1] into [0]
                console.log("Smoked'em! Is that all you got?!")
                // modal indicating victory over this ship, Retreat or continue battle click options
                } 
            } else if (Math.random() > USSHelloWorld.accuracy){
                console.log("Rats! Missed!")
                }
        }
    }

class AlienShip {
    constructor (name){
        this.name = name;
        this.hull = this.randomHull(10,20)    
        this.firepower = this.randomFirepower(2,4);
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
for (let i = 1; i < 7; i++){
    makeNewAlienship('Mu_k_' + i);
}
console.log(AlienFleet)

let USSHelloWorld = new EarthShip('USSHelloWorld', 20, 5, .7)
// console.log(USSHelloWorld)

let game = {
    checkWin: () => {
        if (AlienFleet.length < 0){
        //modal "You Win! Earth is safe from extra-terrestrial invaders...for now! Play again Y/N"
        }
    }

    }


    

// console.log(AlienShip1)
// attack(AlienShip1)