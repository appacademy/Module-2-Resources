// Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    this.currentID++;
    const nextID = this.currentID;

    this.users[nextID] = { id: nextID, name: name };
    this.follows[nextID] = new Set();

    return nextID;
  }

  getUser(userID) {
    // Your code here
    if (this.users[userID]) return this.users[userID];
    else return null;
  }

  follow(userID1, userID2) {
    // Your code here
    //add user2 to my set of follows for user1
    if (!this.users[userID1] || !this.users[userID2]) {
      return false;
    }
    this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {
    // Your code here
    return this.follows[userID];
  }

  getFollowers(userID) {
    // Your code here
    const followers = new Set();

    for (let id in this.follows) {
      if (this.follows[id].has(userID)) followers.add(parseInt(id));
    }
    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
    let queue = [[userID]];
    let recommended = [];
    let visited = new Set();

    visited.add(userID);
    console.log('adjList', this.follows)

    while (queue.length) {
      console.log("currentQueue", queue);
      let path = queue.shift();
      console.log("currentPath", path);
      let id = path[path.length - 1];

      if (path.length > degrees + 2) break;
      if (path.length > 2) recommended.push(id);
      for (let follow of this.follows[id]) {
        if (!visited.has(follow)) {
          visited.add(follow);
          queue.push(path.concat([follow]));
        }
      }
    }
    console.log(recommended)
    return recommended;
  }
}

module.exports = SocialNetwork;
