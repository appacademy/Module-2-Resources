const NFLFan = require('./nflfan')

class SuperFan extends NFLFan {
    constructor(name, age, team, gamesAttended=25, gamesThrownOutOf=0){
        super(name, age, team, gamesAttended)
        this.gamesThrownOutOf = gamesThrownOutOf
    }

    iAmNoTraitor(){
        console.log("I would rather die than route for a different team!")
        console.log(`${this.team} for life!!!`)
    }

    iGotThrownOut(opposingTeam){
        this.gamesThrownOutOf++
        console.log(`When the ${this.team} played the ${opposingTeam} I got thrown out!`)
        console.log("I was harassing the ref and security kicked me out, it was awesome!")
    }
}

module.exports = SuperFan;
