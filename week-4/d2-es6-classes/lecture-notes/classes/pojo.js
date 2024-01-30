/*


  Pojo

  This keyword
  * refers to the object thats calling the method
  * talk more about THIS tomorrow


  * This both work but theres a more intuitive way
  * The class syntax provides a more concise and expressive way to achieve inheritance
  * we can take advantage of extends keyword
  * More concise syntax along with additional features like a cleaner way to handle inheritance, static methods, and getters/setters.

*/


const user1 = {
  name: 'brandon',
  email: 'brandon@email.com',
  password:'password',
  friends:[],
  addFriend: function(friend) {
    this.friends.push(friend);
  }
};

const user2 = {
  name: 'maica',
  email:'maica@email.com',
  password: 'password',
  friends: [],
  addFriend: function(friend) {
    this.friends.push(friend);
  }
}

// console.log(user1);
// user1.addFriend(user2);
// console.log(user1.friends);

function createUser(name, email, password) {

  return {
    name: name,
    email: email,
    password: password,
    friends: [],
    addFriend: function(friend) {
      this.friends.push(friend);
    }
  }
}

// console.log(createUser('john', 'john@mail.com', 'password'));

function createUser2(name, email, password) {

  this.name = name;
  this.email = email;
  this.password = password;
  this.friends = [];
  this.addFriend = function(friend) {
    this.friends.push(friend);
  }

};
