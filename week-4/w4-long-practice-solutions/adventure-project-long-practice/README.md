# App Academy Adventure

Welcome to App Academy Adventure! For this project, you will add different
item types to a text adventure using OOP principles. Use the test specs to guide
you as you work through each task described below.

## Setup and Running the code

1. Clone the project from the starter.
2. Type `node game.js` to run the project
3. Type `npm install` to install the tests
4. Type `npm test` to run the tests

## Tips on how to work thrugh this practice

This practice starter includes a (slightly incomplete) command line game that
you play by interacting with prompts in the terminal. First, run the game with
the command `node game.js`, explore the commands available, and play the game to
see how it works.

The commands are:

```shell
Controls:
  Type 'h' for help
  Type 'q' to quit
  Type 'l' to look around
  Type 'i' to check your inventory
  Type 'take <item>' to take an item
```

In the following phases, you will need to add functionality to the game by
defining methods across multiple classes. The directions below are very brief.
Use the following tips and tools to clarify the directions and better understand
what you need to implement.

### Explore the existing code

Browse the code that has already been defined for yu in each file in the
__class__ directory. Make sure you understand the attributes within each class.
- Look for associations between classes
- Examine the methods that have already been completed
- Note where there are methods that you will need to complete yourself
- Look for opportunities to use helper methods

### Use the test specs

The test specs themselves can help you understand the expectations. For example,
look at the first test spec:

```javascript
  it('Item should have name and description attributes', function () {
    let item = new Item("rock", "just a simple rock");

    expect(item.name).to.equal("rock");
    expect(item.description).to.equal("just a simple rock");

  });
```

Reading this spec should lead you to the `Item` class file, __class/item.js__.
There, you will need to define the constructor for the item class, with specific
attributes. In order for this spec to pass, you must be able to initialize a new
instance of the `Item` class, taking in a `name` and `description`.

### Use `console.log()` statements or other debugging tools

If you get stuck trying to implement a method, use carefully-placed
`console.log()` statements to expose the values of your variables. It can be
helpful to log the value of the `this` keyword to better understand the context
of each method.

## Phase 1: Item

Your first task is to add different items to this simple adventure world by
using OOP principles. In this first phase, you will define the `Item` class, and
then define methods across multiple classes that refer to instances of the
`Item` class.

1. Fill out the constructor for the `Item` class in __class/item.js__.

2. Implement instance methods to get, take, and drop items. These methods should
   be defined within the __class/room.js__ file and the __class/player.js__
   file.

- `room.getItemByName` - Retrieves an item from a room by item name
- `player.getItemByName` - Retrieves an item from a player's inventory by
  item name
- `player.takeItem` - Picks up an item from the current room into the player's
  inventory
- `player.dropItem` - Drops an item the player is holding into their current
  room

## Phase 2: Food

1. Create an edible `Food` class that inherits from the `Item` class. Make sure
   you are importing and exporting the appropriate modules.

3. Implement the `player.eatItem` instance method to allow the player to eat
   food items, but not non-food items.

## Phase 3: The World

1. Modify the `loadWorld` function in `world.js` to create items and food items
   from `world-data.js`.
- A non-food item should be instantiated as an instance of the `Item` class
- A food item should be instantiated as an instance of the `Food` class


## Phase 3: Bonus

Add new types of enemies, items and rooms. Run the game using `node game.js` to
see your code changes in action.
