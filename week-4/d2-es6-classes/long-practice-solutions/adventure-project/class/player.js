const { Food } = require('./food');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        // Picks up an item from the current room into the player's inventory

        //!!START
        let item = this.currentRoom.getItemByName(itemName);

        if (item) {
            this.items.push(item);
            console.log(`You took ${item.name}`)
        }
        //!!END
    }

    dropItem(itemName) {
        // Drops an item the player is holding into their current room

        //!!START
        let item = this.getItemByName(itemName);

        if (item) {
            this.currentRoom.items.push(item);
            console.log(`You dropped ${item.name}`)
        }
        //!!END
    }

    eatItem(itemName) {
        // Allow the player to eat food items, but not non-food items

        //!!START
        let item = this.getItemByName(itemName);

        if (!item) {
            console.log(`You do not have ${itemName}`);
        } else if (!(item instanceof Food)) {
            console.log(`You cannot eat ${item.name}`);
            this.items.push(item);
        } else {
            console.log(`You ate ${item.name}`);
        }
        //!!END
    }

    getItemByName(name) {
        // Retrieves an item from a player's inventory by item name

        //!!START
        for (let i = 0 ; i < this.items.length ; i++) {
            let item = this.items[i];
            if (item.name.toLowerCase().startsWith(name)) {
                return this.items.splice(i, 1)[0];
            }
        }

        console.log("Item not found");
        //!!END
    }
}

module.exports = {
  Player,
};
