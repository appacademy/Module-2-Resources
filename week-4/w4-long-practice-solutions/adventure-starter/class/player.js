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
        let newItem = this.currentRoom.getItemByName(itemName);
        console.log(newItem)
        this.items.push(newItem);
        console.log(`You took ${newItem.name}.`);
    }

    dropItem(itemName) {
        let newItem = this.getItemByName(itemName);
        
        this.currentRoom.items.push(newItem);
        console.log(`You left ${newItem.name}.`);
    }

    eatItem(itemName) {
        // const foodItem = this.items.splice(this.items.indexOf(itemName))[0];
        let item = this.getItemByName(itemName);

        if (!item) {
            console.log(`You do not have ${itemName}`);
        } else if (!(item instanceof Food)) {
            console.log(`You cannot eat ${item.name}`);
            this.items.push(item);
        } else {
            console.log(`You ate ${item.name}`);
        }
    }

    getItemByName(name) {
        for (let i = 0 ; i < this.items.length ; i++) {
            let item = this.items[i];
            if (item.name.toLowerCase().startsWith(name)) {
                return this.items.splice(i, 1)[0];
            }
        }

        console.log("Item not found");
    }
}

module.exports = {
  Player,
};
