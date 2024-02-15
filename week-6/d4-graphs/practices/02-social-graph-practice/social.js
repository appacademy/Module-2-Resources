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
      if (this.follows[id].has(userID)) followers.add(+id);
    }

    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    const queue = [[userID]];

    const recommended = [];// !

    const visited = new Set([userID]);

    while (queue.length) {
      let path = queue.shift();

      let id = path[path.length - 1];

      let neighbors = this.follows[id];
      // console.log(id);

      if(path.length > degrees + 2) break;// !

      if(path.length > 2) recommended.push(id);// !

      neighbors.forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([...path, neighbor]);
        }
      });
    };

    return recommended;
  };


}

// const socialNetwork = new SocialNetwork();

// userID1 = socialNetwork.addUser("User 1");
// userID2 = socialNetwork.addUser("User 2");
// userID3 = socialNetwork.addUser("User 3");
// userID4 = socialNetwork.addUser("User 4");
// userID5 = socialNetwork.addUser("User 5");
// userID6 = socialNetwork.addUser("User 6");

// socialNetwork.follow(1, 2);
// socialNetwork.follow(2, 3);
// socialNetwork.follow(3, 4);
// socialNetwork.follow(3, 5);
// socialNetwork.follow(4, 1);
// socialNetwork.follow(4, 2);
// socialNetwork.follow(5, 6);


// console.log(socialNetwork.getRecommendedFollows(1, 1));
// console.log(socialNetwork.getFollows(1)); // Set { 2 }
// console.log(socialNetwork.getFollows(2)); // Set {}

// console.log(socialNetwork.getFollowers(1)); // Set {}
// console.log(socialNetwork.getFollowers(2)); // Set { 1 }

module.exports = SocialNetwork;
