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
    '1':  Set(),
    '2':  Set(),
    '3':  Set(),
    '4':  Set()
    }

    this.users[user4ID] = { "id": 4, "name": "John Doe" },
    this.follows[user4ID] =  { "id": 4, "follows": [1, 2, 3, 4] },
  */

  addUser(name) {
    this.currentID++
    const newId = this.currentID

    this.users[newId] = { id: newId, name: name}
    this.follows[newId] = new Set()

    return newId
  }

  getUser(userID) {
    if (this.users[userID]) return this.users[userID]
    else return null
  }

  follow(userID1, userID2) {
    if (!this.users[userID1] || !this.users[userID2]) return false

    this.follows[userID1].add(userID2)
    return true
  }

  getFollows(userID) {
    return this.follows[userID]
  }

  getFollowers(userID) {
    const followers = new Set()

    for (let id in this.follows) {
      if (this.follows[id].has(userID)) followers.add(parseInt(id))
    }

    return followers
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

module.exports = SocialNetwork;
