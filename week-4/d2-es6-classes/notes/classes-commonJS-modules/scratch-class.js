// const shane = {
//   username: 'shane',
//   email: 'shane@wilkey.com',
//   password: 'password',
//   friends: [],
//   addFriends: function(friend) {
//     this.friends.push(friend);
//   }
// }

// const gary = {
//   username: 'gary',
//   email: 'gary@song.com',
//   password: 'password',
//   friends: [],
//   addFriends: function(friend) {
//     this.friends.push(friend);
//   }
// }


class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.friends = [];
    // console.log('hi from premium user *********************')
  }

  sayHello() {
    console.log(`Hi my name is ${this.username}`)
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  static introduceFriends(users) {
    users.forEach(user => {
      user.sayHello();
    })
  }
}

class PremiumUser extends User {
  constructor(username, email, startingFunds=5) {
    super(username, email)
    this.funds = startingFunds
  }
}

const shane = new PremiumUser('shane', 'shane@wilkey.com', 5);

console.log(shane)
// const shane = new User('shane', 'shane@wilkey.com', 'password')
// const gary = new User('gary', 'gary@song.com', 'not-garys-password')
// shane.addFriend(gary);
// console.log(shane)

// gary.addFriend(shane)
// console.log(gary)
// shane.addFriend(gary)
// console.log(shane);

// User.introduceFriends([gary, shane])
// console.log(shane2.password);
// console.log(gary2)
