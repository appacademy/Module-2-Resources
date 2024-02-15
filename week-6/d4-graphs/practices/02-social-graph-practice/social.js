// Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    this.currentID++;
    const nextId = this.currentID;

    this.users[nextId] = { id: nextId, name: name };
    this.follows[nextId] = new Set();

    return nextId;
  }

  getUser(userID) {
    if (this.users[userID]) return this.users[userID];
    else return null;
  }

  // user1 to follow user2
  follow(userID1, userID2) {
    if (!this.users[userID1] || !this.users[userID2]) return false;

    this.follows[userID1].add(userID2);
    return true;
  }

  /*

    1 : {id: 1, name: 'brandon'}
    2 : {id: 2, name: 'maica' }
    3 : null

    users : { 1, 2, 3, 4  }
    follows: { 1:{2}, 2:{1, 3, 4} }
    [2,3], [2,4]

  */

  getFollows(userID) {
    return this.follows[userID];
  }

  getFollowers(userID) {
    const followers = new Set();

    for (let id in this.follows) {
      if (this.follows[id].has(userID)) followers.add(parseInt(id));
    };

    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

const socialNetwork = new SocialNetwork();

userID1 = socialNetwork.addUser("John Doe");
userID2 = socialNetwork.addUser("Jane Doe");

user1 = socialNetwork.getUser(1);
user2 = socialNetwork.getUser(2);
user3 = socialNetwork.getUser(3);

socialNetwork.follow(1, 2); // true
socialNetwork.follow(1, 3); // false, userID 3 does not exist

// console.log(socialNetwork.getFollows(1)); // Set { 2 }
// console.log(socialNetwork.getFollows(2)); // Set {}


console.log(socialNetwork.getFollowers(1)); // Set {}
console.log(socialNetwork.getFollowers(2)); // Set { 1 }

module.exports = SocialNetwork;
