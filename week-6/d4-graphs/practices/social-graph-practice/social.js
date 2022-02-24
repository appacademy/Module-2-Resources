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
    const newId = this.currentID;
    this.users[newId] = { id: newId, name: name };
    this.follows[newId] = new Set();
    return newId;
  }

  getUser(userID) {
    // Your code here
    if (this.users[userID]) return this.users[userID];
    else return null;
  }

  follow(userID1, userID2) {
    // Your code here
    if (!this.users[userID1] || !this.users[userID2]) return false;
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
    const queue = [[userID]];
    const visited = new Set().add(userID);

    const recommended = [];

    while (queue.length) {
      console.log({ queue });
      const currentPath = queue.shift();
      const currentID = currentPath[currentPath.length - 1];
      if (currentPath.length > degrees + 2) break;
      if (currentPath.length > 2) recommended.push(currentID);

      for (let follow of this.follows[currentID]) {
        if (!visited.has(follow)) {
          visited.add(follow);
          queue.push(currentPath.concat(follow));
        }
      }
    }
    console.log('recommended', recommended)
    return recommended;
  }
}

module.exports = SocialNetwork;
