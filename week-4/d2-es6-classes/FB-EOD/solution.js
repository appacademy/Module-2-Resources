const User = require("./user")
const Post = require("./post")

// let's play around with the stuff we just made!

const john = new User(
    "John Doe",
    45,
    "CA",
    "john@aa.io",
    "password123",
    "Hey I am John! 😀"
)

const brando = new User(
    "Brandon Laursen",
    28,
    "FL",
    "brandon@aa.io",
    "TheOnePieceIsReal!!!",
    "The GOAT!!! 🐐"
)

const charlie = new User(
    "Charles Woods",
    34,
    "TX",
    "charlies@aa.io",
    "password123",
    "Prof Chef turned SWE!"
)

const trevor = new User(
    "Trevor Moore",
    30,
    "Southern CA",
    "trevor@aa.io",
    "password123",
    "Rock Star turned SWE!"
)

// console.log(john)
console.log(brando)
// console.log(charlie)
// console.log(trevor)

// test some methods!
// console.log(brando.getName())

// test updateAbout
// john.updateAbout("My name is john!! WEEEEEEE!")
// console.log(john);


//update relationship
// trevor.updateRelationship();
// console.log(trevor);

// updated password!
// trevor.updatePassword("7868JKHSDJKFHGDsdf&*^&*56sdf");
// console.log(trevor);

// console.log()
brando.addFriend(john)
brando.addFriend(charlie)
brando.addFriend(trevor)

// console.log(brando);

const post1 = new Post(
    "Joyce Manor Is the best band!",
    "Literally the best!!!! Fight me if you don't think so~!",
    "12/25/23"
)

const post2 = new Post(
    "JS is the bees knees",
    "🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝",
    "01/01/24"
)

const post3 = new Post(
    "Chinese food is yummy",
    "I had $50 of Chinese food for dinner, it was amazing and I am stuffed!",
    "01/02/24"
)

const post4 = new Post(
    "Happy New Years!",
    "Wishing everyone a safe and fun new years! 🥳",
    "01/01/24"
)

// adding posts to user
brando.addPost(post1)
brando.addPost(post2)

// console.log(brando)

post1.likePost(john)
post1.likePost(charlie)
post1.likePost(trevor)
// cannot like more than once
// post1.likePost(trevor)


// console.log(post1)
console.log(post1.printPost())
