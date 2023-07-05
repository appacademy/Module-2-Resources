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


const shane = new User('shane', 'shane@wilkey.com', 'password')
const gary = new User('gary', 'gary@song.com', 'not-garys-password')

gary.addFriend(shane)
console.log(gary)
shane.addFriend(gary)
console.log(shane);

// User.introduceFriends([gary, shane])
// console.log(shane2.password);
// console.log(gary2)
