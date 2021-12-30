// Implement the SocialNetwork class here
class SocialNetwork {
    constructor() {
        this.users = {};
        this.follows = {};
        this.currentID = 0;
    }

    addUser(name) {
        this.currentID++;
        const nextID = this.currentID;

        this.users[nextID] = { id: nextID, name: name };
        // this.follows[nextID] = new Set();

        return nextID;
    }

    getUser(userID) {
        // Your code here
    }

    follow(userID1, userID2) {
        // Your code here
    }

    getFollows(userID) {
        // Your code here
    }

    getFollowers(userID) {
        // Your code here
    }

    getRecommendedFollows(userID, degrees) {
        // Your code here
    }
}

module.exports = SocialNetwork;
