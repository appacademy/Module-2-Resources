// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  /*
    this.users = {
    '1':  { "id": 1, "name": "John Doe" },
    '2':  { "id": 2, "name": "John Doe" },
    '3':  { "id": 3, "name": "John Doe" },
    '4':  { "id": 4, "name": "John Doe" },
    }

    this.follows = {
    '1':  { "id": 1, "follows": [1, ,2 3, 4,] },
    '2':  { "id": 2, "follows": [1, ,2 3, 4,] },
    '3':  { "id": 3, "follows": [1, ,2 3, 4,] },
    '4':  { "id": 4, "follows": [1, ,2 3, 4,] },
    }

    this.users[user4ID] = { "id": 4, "name": "John Doe" },
    this.follows[user4ID] =  { "id": 4, "follows": [1, 2, 3, 4] },
  */

  addUser(name) {
    // Your code here
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
