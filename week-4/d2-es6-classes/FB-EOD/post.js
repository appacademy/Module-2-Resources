/*

1. Create a Class Post that has the following attributes:
    a. title
    b. body
    c. date
    d. likes - start as an empty array
    --Try This--
    e. add an author property - initial value will be a string of "Anonymous"
*/

class Post {
    constructor(title, body, date, likes = []){
        this.title = title,
        this.body = body,
        this.date = date,
        this.likes = likes
    }

    /*
    2. Add the following methods to the Class Post
    a. likePost - takes in a user instance and checks if they have already liked this post.
        print an error to the console if they have
        if not, add the user's name to the likes array

    b. printPost - print to the console:
        the date the post was made on
        the title of the post
        the body of the post
        how many likes the post has

    --- Try This ---

    e. dislikePost - remove previous like (user name) from the likes array
    */

    likePost(user){
        // cannot like a post multiple times
        if (this.likes.includes(user.name)){
            console.log("------ERROR------\n");
            console.log("You already liked this post!");
            console.log("------ERROR------\n");
        } else {
            this.likes.push(user.name);
        }
    }

    printPost(){
        console.log("----------");
        console.log(`Posted on: ${this.date}`);
        console.log(`Title : ${this.title}`);
        console.log(`Body : ${this.body}`);
        // how to account for the like number?
        console.log(`Post likes : ${this.likes.length}`);
        console.log("----------");
    }
}

module.exports = Post;
