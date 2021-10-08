# Social Graph Practice Part 1

In this practice, you will implement a social network using an adjacency list.
This network will be "follow" based, similar to Twitter or Instagram.

Your task is to implement the `SocialNetwork` class with the ability to add
users, follow users, list a user's followers and those they are following,
and recommend followers.

_Note: As you work through this practice, recall the new information we learned
about adjacency lists and apply that to your strategies and solutions rather
than taking an OOP approach. This will help you cement these new concepts into
your knowledge base for practices and projects moving forward._  Note that you
will still be using OOP to build other parts of this project, just not the graph itself.

## Directions

1. Clone the project from the [starter]
2. Install packages with `npm install`
3. Read the directions and test specs to understand the problem
4. Run tests with `npm test`
5. Implement code until tests are all passing


## Part 1: Social Network Setup

Start with the basic implementation of a social network in the `SocialNetwork`
class.

### Add User

Implement `addUser` which takes in a name. It should create and store a User
object with two keys: an integer ID that starts from 1 and increments for each
new user, and a name which uses the passed in name parameter. It should also
initialize a new set to track who the user follows. The return value of
`addUser` should be the unique ID that can be used to access that user.

When implemented correctly, the stored User object will look like this:
`{ "id": 1, "name": "John Doe" }`

Example:

```js
userID1 = socialNetwork.addUser('John Doe');
userID2 = socialNetwork.addUser('Jane Doe');

console.log(userID1); // 1
console.log(userID2); // 2
```

### Get User

Implement `getUser` which takes in a userID and returns a user object. If a
user with that ID cannot be found, return `null`.

Example:

```js
user1 = socialNetwork.getUser(1);
user2 = socialNetwork.getUser(2);
user3 = socialNetwork.getUser(3);

console.log(user1.name); // 'John Doe'
console.log(user2.name); // 'Jane Doe'
console.log(user3);      // null
```

### Follow

Implement `follow` which takes in two userIDs and sets user1 to follow user2.
It should return `true` if the follow was successful and `false` otherwise.

Example:

```js
socialNetwork.follow(1, 2); // true
socialNetwork.follow(1, 3); // false, userID 3 does not exist
```

### Get Follows

Implement `getFollows` which takes in a userID and returns a set
containing all the IDs of the users they follow.

Example:

```js
socialNetwork.getFollows(1); // Set { 2 }
socialNetwork.getFollows(2); // Set {}
```

### Get Followers

Implement `getFollowers` which takes in a userID and returns a set
containing all the IDs of that user's followers.

Example:

```js
socialNetwork.getFollowers(1); // Set {}
socialNetwork.getFollowers(2); // Set { 1 }
```



[starter]: https://github.com/appacademy/practice-for-week-06-social-graph-practice