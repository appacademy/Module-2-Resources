/* 
    1. Create a Class User that has the following attributes:
        a. name
        b. age
        c. location
        d. email
        e. password
        f. about details (starts as an empty string)
        g. relationship (married/single use a boolean)
        h. friends (array starts empty)
 */  


class User {
    constructor(name, age, location, email, password) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.email = email;
        this.password = password;
        this.about = '';
        this.relationship = false;
        this.friends = [];
        this.posts = [];
    }

    /*    2. Add the following methods to the Class User
        a. getName - returns the user's name
        b. updateAbout - takes in a str and updates the about info
        c. updateRelationship - switches/toggles relationship 
        d. updatePassword - takes in a str and updates the password, also prints new password
        e. addFriend - takes in a user instance and adds it to friends
        f. removeFriend - takes in a user instance and removes it from friends
        g. printFriends - prints all a users friends names, or a message if they have none 
        h. printUserInfo - Prints out the basic user info, and their friends
    */
    getName() {
        return this.name
    }

    updateAbout(str) {
        this.about = str
        return this.about;
    }

    updateRelationship(){
        this.relationship = !this.relationship;
    }

    updatePassword(str) {
        this.password = str;
        console.log(`Your new password is: "${this.password}"`);
    }
    
    addFriend(...friends) {
        friends.forEach( friend => {
            if(this.friends.includes(friend.name)){
                console.log("-------ERROR-------");
                console.log(`${friend.name} is already your friend!`)
                console.log("-------ERROR-------");
            } else {
                this.friends.push(friend);
            };
        });
    }

    removeFriend(badFriend) {
        this.friends = this.friends.filter(friend => friend != badFriend);
    }

    printFriends() {
        if (this.friends.length > 0) {
            const viewFriends = this.friends.map(friend => friend.getName());
            console.log(`Your friends are : ${viewFriends}`);
        } else {
            console.log("You don't have any friends right now 😞");
        }
    }

    printUserInfo(){
        console.log(`Hi! My name is ${this.name} and I am ${this.age} years old...`);
        console.log(`I am currently ${this.relationship ? "married" : "single"} and living in ${this.location}`);
        console.log(`A bit about me: ${this.about}`)
        this.printFriends();
    }

    // We need to keep track of the user's posts. 
    // The post allows us to pass in the author
    // can we add a new property so each user has a list of their own posts?
    // we also need a function to print out this list of posts

    addPost(post) {
        post.author = this
        this.posts.push(post)
    }

    printAllPosts() {
        this.posts.forEach(post => {
            post.printPost(this)
        })
    }

    createAndPrintFeed(){
        let allPosts = this.posts;
        this.friends.forEach( friend => {
            allPosts = [...allPosts, ...friend.posts]
        })
      
        // allPosts.forEach( post => post.printPost())

        const compare = (a,b) => {
            if (a.date < b.date) return 1;
            if (a.date > b.date) return -1;
            if (a.date === b.date) return 0;
        }
        
        let sortedPosts = allPosts.sort(compare)
        sortedPosts.forEach( post => post.printPost())
        
    }
    
    // Finally we need to curate a feed. 
    // Take all of the current user's posts
    // search all of our friends for posts adding those posts to the user's
    // sort the posts by date in a descending manner
    // print the posts

    
}

module.exports = User;