
class EarthShip {
    constructor (name, hull, firepower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}

class AlienShip {
    constructor (name){
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
}
let AlienShip1 = new AlienShip('Mu_k')
console.log(AlienShip1)
let AlienShip2 = new AlienShip('Mu_a')
console.log(AlienShip2)
let AlienShip3 = new AlienShip('Mu_d')
console.log(AlienShip3)
let AlienShip4 = new AlienShip('Mu_p')
console.log(AlienShip4)
let AlienShip5 = new AlienShip('Mu_v')
console.log(AlienShip5)
let AlienShip6 = new AlienShip('Mu_x')
console.log(AlienShip6)

let USSHelloWorld = new EarthShip('USSHelloWorld', 20, 5, .7)
console.log(USSHelloWorld)

