/* 1. Create a Post Class that has the following attributes:
    a. title
    b. body
    c. date
    d. author
    e. likes
*/

class Post {
    constructor(title, body, date, author) {
        this.title = title;
        this.body = body;
        this.date = date;
        this.author = author;
        this.likes = [];
    }

    likePost(user) {
        if (this.likes.includes(user.name)) {
            throw new Error('You already liked this post!');
        } else {
            this.likes.push(user.name)
        }
    }

    dislikePost(user) {
        this.likes = this.likes.filter(like => like !== user.name);
    }

    printPost() {
        console.log("-------------------")
        console.log(`${this.author.name} posted on ${this.date}`)
        console.log(`Title: ${this.title}`);
        console.log(`Post likes: ${this.likes.length}`);
        console.log(this.body);
        console.log("-------------------")
    }
}

/* 2. Add the following methods to the Post Class:
    a. likePost - increment the likes counter
    b. dislikePost - decrement the likes counter
    c. printPost - format and log the post to the console

*/

module.exports = Post;