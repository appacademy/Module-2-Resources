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

    addFriend(friend) {
        this.friends.push(friend);
        console.log(this.friends);
    }

    removeFriend(badFriend) {
        this.friends = this.friends.filter(friend => friend != badFriend);
        console.log(this.friends)
    }

    printFriends() {
        if (this.friends.length > 0) {
            const viewFriends = this.friends.map(friend => friend.getName());
            console.log(`Your friends are : ${viewFriends}`);
        } else {
            console.log("You don't have any friends");
        }
    }

    printUserInfo(){
        console.log(`Hi! My name is ${this.name} and I am ${this.age} years old...`);
        console.log(`I am currently ${this.relationship ? "married" : "single"} and living in ${this.location}`);
        console.log(`A bit about me: ${this.about}`)
        this.printFriends();
    }
}

const shane = new User('Shane', 40, 'Missouri', );
const jiff = new User('Jiff', 46);

shane.addFriend(jiff);

const alex = new User('Alex', 24);

shane.addFriend(alex);

shane.updateRelationship();

shane.updateAbout('I love programming.');

shane.printUserInfo();