/*

1. Create a Class User that has the following attributes:
        a. name
        b. age
        c. location
        d. email
        e. password
        f. about details (starts as an empty string)
        g. relationship (married/single)
        h. friends (array starts empty)
        i. posts (array starts empty)

*/

class User {
    constructor(name, age, location, email, password, about="", relationship=false, friends = [], posts=[]){
        this.name = name,
        this.age = age,
        this.location = location,
        this.email = email,
        this.password = password,
        this.about = about,
        this.relationship = relationship,
        this.friends = friends,
        this.posts = posts
    }


    /*

    2. Add the following methods to the Class User
            a. getName - returns the user's name
            b. updateAbout - takes in a str and updates the about info
            c. updateRelationship - switches/toggles relationship
            d. updatePassword - takes in a str and updates the password, also prints new password
            e. addFriend - takes in a user instance and adds it to friends
            f. addPost - takes in a post and adds it to a user's posts array;
            ---TRY THIS---
            g. removeFriend - takes in a user instance and removes it from friends
            h. printFriends - prints all a users friends names, or a message if they have none
            i. printUserInfo - Prints out the basic user info, and their friends
    */

     getName(){
        return this.name;
     }

     updateAbout(str){
        this.about = str;
     }

     updateRelationship(){
        this.relationship = !this.relationship;
     }

     updatePassword(str){
        this.password = str
        // helpful message to the user!
        console.log(`Your new password is: ${this.password}`);
     }

      // refactor to accept any number of args
     addFriend(user){
        this.friends.push(user);
     }

     // refactor to accept any number of args
     addPost(post){

        this.posts.push(post);
     }
}

module.exports = User;
