//factory attempt
class AlienShipFactory {
    constructor(name){
        this.name = name;
        this.hull = this.randomHull(3,6)    
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
    
    makeNewAlienShip(name) {
        const newAlienShip = new AlienShip(name);
        this.AlienFleet.push(newAlienShip)
    }

    printAlienShip(){
        for(let AlienShip of this.AlienFleet){
            console.log(AlienShip)
        }
    }
}
makeNewAlienShip('Mu_k')


// class BadGuyFactory {
//     constructor(factoryType) {
//       this.factoryType = factoryType;
//       this.badGuyCollection = [];
//     }
  
//     makeNewBadGuy(damage, health, attackShout) {
//       const newBadGuy = new BadGuy(this.factoryType, damage, health, attackShout);
//       this.badGuyCollection.push(newBadGuy);
//     }
  
//     printBadGuys() {
//       for (let badGuy of this.badGuyCollection) {
//         console.log(badGuy);
//       }
//     }
//   }
// class BadGuy {
//     constructor(type, damage, health, attackShout) {
//       this.type = type;
//       this.damage = damage;
//       this.health = health;
//       this.attackShout = attackShout;
//     }
//     shout() {
//       console.log(`${this.type} says: ${this.attackShout}`);
//     }
//   }