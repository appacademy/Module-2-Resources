# Social Graph Practice Part 2

In this practice, you will implement a social network using an adjacency list.
This network will be "follow" based, similar to Twitter or Instagram.

Your task is to implement the `SocialNetwork` class with the ability to add
users, follow users, list a user's followers and those they are following,
and recommend followers.

*Note: As you work through this practice recall the new information we learned about adjacency lists and apply that to your strategies and solutions rather than taking an OOP approach. This will help you cement these new concepts into your knowledge base for practices and projects moving forward.*

## Directions

1. Continue working from the [starter] from part 1
2. Read the directions and test specs to understand the problem
3. Run tests with `npm test`
4. Implement code until tests are all passing

## Part 2: Recommended Follows

Implement `getRecommendedFollows` which takes in a userID and an integer,
degrees. This function returns an array containing a list of recommended
users to follow.

It finds recommendations by the follows of that user's follows. The distance the algorithm will search for recommended follows is represented by the `degrees` integer.

* degrees = 1 -> Users your follows also follow
* degrees = 2 -> Users your follows follows also follow
* degrees = 3 -> Users your follows follows follows also follow

For example:

```js
socialNetwork.getFollows(1); // [2]
socialNetwork.getFollows(2); // [3]
socialNetwork.getFollows(3); // [4, 5]
socialNetwork.getFollows(4); // [1, 2]
socialNetwork.getFollows(5); // [6]

socialNetwork.getRecommendedFollows(1, 1); // [3]
socialNetwork.getRecommendedFollows(1, 2); // [3, 4, 5]
socialNetwork.getRecommendedFollows(1, 3); // [3, 4, 5, 6]
```


[starter]: https://github.com/appacademy/practice-for-week-06-social-graph-practice