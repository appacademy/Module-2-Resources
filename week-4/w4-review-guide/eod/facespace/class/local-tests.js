/* 
    Use this file to set up and run local tests
*/

const User = require('./user');
const Post = require('./post');

const jeff = new User("Jeff", 32, "WI", "bucksfan1@aol.com", "ericRodgersIsMyDad");
const shane = new User("Shane", 40, "MO", "tooltime@gmail.com", "disgustipated462");
const alex = new User("Alex", 30, "VT", "alexRules@hotmail.com", "djFE132V");
const revan = new User("Revan", 23, "CA", "revanisfired@outlook.com", "F1R3d!");

const post1 = new Post("Batman is my favorite superhero...",
    "I really like Batman, especially the movie The Dark Knight Rises.",
    "4/5/2022" );

const post2 = new Post("I love Aaron Rodgers",
    "He is my favorite person in the world.  Not only is he an amazing quarterback but he is also my real father.  He had me when he was 5...",
    "03/14/2022" );

const post3 = new Post ("Chinese food is yummy",
    "I had $50 of Chinese food for dinner, it was amazing and I am stuffed!",
    "12/26/21" );

const post4 = new Post("New Computer",
    "Got myself a sweet new computer, y'all!",
    "12/25/21");

const post5 = new Post("Fired Again!",
    "Why do I get fired every day???",
    "04/07/22");


    jeff.addFriend(shane, revan, alex);
    jeff.printUserInfo();
    jeff.addPost(post1);
    jeff.addPost(post2);
    shane.addPost(post3);
    alex.addPost(post4);
    revan.addPost(post5);
    jeff.createAndPrintFeed();