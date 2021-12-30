// Implement the SocialNetwork class here
class SocialNetwork {
    constructor() {
        this.users = {};
        this.follows = {};
        this.currentID = 0;
    }

    addUser(name) {
        this.currentID++;
        const newId = this.currentID;

        this.users[newId] = { id: newId, name: name };
        this.follows[newId] = new Set();

        // console.log('users', this.users);
        // console.log('follows', this.follows);

        return newId;
    }

    getUser(userID) {
        if (this.users[userID]) return this.users[userID];
        return null;
    }

    follow(userID1, userID2) {
        if (!this.users[userID1] || !this.users[userID2]) return false;

        this.follows[userID1].add(userID2);

        // console.log('follows', this.follows);

        return true;
    }

    getFollows(userID) {
        return this.follows[userID];
    }

    getFollowers(userID) {
        const followers = new Set();

        for (let id in this.follows) {
            if (this.follows[id].has(userID)) followers.add(parseInt(id));
        }

        // console.log(followers);

        return followers;
    }

    getRecommendedFollows(userID, degrees) {
        const queue = [[userID]];
        const visited = new Set().add(userID);

        const recommended = [];

        while (queue.length) {
            // console.log({ queue });
            const path = queue.shift();
            const id = path[path.length - 1];

            // console.log({ path });
            const degreesFromFriend = degrees;
            const degreesFromUs = 2;

            // DO THE THING PART
            if (path.length > degrees + 2) break;

            if (path.length > 2) recommended.push(id);

            console.log(this.follows);
            console.log(this.follows[id]);

            for (let follow of this.follows[id]) {
                if (!visited.has(follow)) {
                    visited.add(follow);

                    queue.push(path.concat(follow));

                    // const pathCopy = [...path];
                    // pathCopy.push(follow);
                    // queue.push(pathCopy);
                }
            }
        }

        // console.log({ recommended });
        return recommended;
    }
}

module.exports = SocialNetwork;
