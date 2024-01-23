// const user1 = {
//   name: "shane",
//   email: "shane@shane.com",
//   password: "password",
//   friends: [],
//   addFriend: function (friend) {
//     this.friends.push(friend);
//     return this.friends;
//   },
// };

// console.log(user1.addFriend(user2));

// console.log(user1.friends[0].name);

// const user2 = {
//   name: "briana",
//   email: "briana@briana.com",
//   password: "password",
//   friends: [],
//   addFriend: function (friend) {
//     this.friends.push(friend);
//   },
// };

class User {
  constructor(name, email, password, age) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
    this.friends = [];

    console.log("hello");
  }

  addFriend(friend) {
    this.friends.push(friend);
    return this.friends;
  }

  static introduceFriends(people) {
    people.forEach((person) => console.log(`Hi, I'm ${person.name}!`));
  }
}

// const shane = new User("shane", "shane@shane.com", "password");
// const briana = new User("briana", "briana@briana.com", "password");

// console.log(shane.addFriend(briana));
// briana.addFriend(shane);
// console.log(shane);
// console.log(briana);

// User.introduceFriends([shane, briana]);

class PremiumUser extends User {
  constructor(name, email, password) {
    super(name, email, password);
    this.monies = 5;
  }

  addMonies(money) {
    this.monies += money;
  }
}

const pUser = new PremiumUser("premo", "premo@premo.com", "...");

// console.log(pUser.addFriend(shane));
console.log(pUser);
