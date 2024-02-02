class NFLFan {
    constructor(name, age, team, gamesAttended=0){
        this.name = name,
        this.age = age,
        this.team = team,
        this.gamesAttended = gamesAttended
    }

    getOlder(){
        this.age++
    }

    iAmATraitor(newTeam){
        this.team = newTeam;
        console.log("I am not a loyal fan!")

    }

    attendGame(){
        this.gamesAttended++
    }

}

module.exports = NFLFan;
