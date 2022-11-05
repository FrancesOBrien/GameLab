
class EarthShip {
    constructor (name, hull, firepower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }    

    attack(alien){
        console.log('MATCH BEARING AND SHOOT')
            if (Math.random() > this.accuracy){
                console.log("Rats! Missed!");
                AlienFleet[0].retaliate(USSHelloWorld)
                } else if (Math.random() < this.accuracy) { 
                        (alien.hull = alien.hull - this.firepower) 
                        console.log('Nice Shot, Gunner!');
                        console.log(alien.name + ' has ' + alien.hull + ' hull remaining')
                        if (alien.hull > 0){
                        AlienFleet[0].retaliate(USSHelloWorld)
                }
            if (alien.hull <= 0){ 
                    AlienFleet.shift(); 
                    console.log("Smoked'em! Is that all you got?!")
                    // game.checkWin() 
                } 
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
            retaliate(uss){
                console.log('INCOMING!')
                    if (Math.random() < this.accuracy) {
                        console.log("That was close!");
                        USSHelloWorld.attack(AlienFleet[0])
                    } else if (Math.random() < this.accuracy) {
                            (uss.hull = uss.hull - this.firepower) 
                            console.log("We're taking damage!")
                            console.log('We have ' + uss.hull + ' hull remaining!' )
                            if (uss.hull > 0) {
                                USSHelloWorld.attack(AlienFleet[0])
                            }
                    if (uss.hull <= 0){
                        console.log('The hull is breached! Initializing escape sequence!')
                        //modal indicating Game Over message, click to try again
                            } 
            }
        }
            
    }

let AlienFleet = []
const makeNewAlienship = (name) => {
    const newAlienShip = new AlienShip(name);
    AlienFleet.push(newAlienShip);
}   
for (let i = 0; i < 6; i++){
    makeNewAlienship('Alien Ship ' + i);
}
// console.log(AlienFleet) 

let USSHelloWorld = new EarthShip('USSHelloWorld', 20, 5, .7)
console.log(USSHelloWorld)

let game = {
    checkWin: () => {
        if (AlienFleet.length <= 0){
            console.log("You Win! Earth is safe from extra-terrestrial invaders...for now! Play again? Y/N")
            } else console.log('Do you want to continue the attack on the next ship? Y/N')
        }
    

    }
USSHelloWorld.attack(AlienFleet[0])
USSHelloWorld.attack(AlienFleet[0])

