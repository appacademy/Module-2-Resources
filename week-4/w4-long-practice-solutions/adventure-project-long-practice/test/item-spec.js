const { expect } = require('chai');

const {Player} = require("../class/player.js");
const {Room} = require("../class/room.js");
const {Item} = require("../class/item.js");
const {Food} = require("../class/food.js");
const { World } = require("../class/world");

const worldData = require('../data/world-data');



describe ('Item', function () {

  it('Item Class: Item should have name and description attributes', function () {
    let item = new Item("rock", "just a simple rock");

    expect(item.name).to.equal("rock");
    expect(item.description).to.equal("just a simple rock");

  });

  it('room.getItemByName - Retrieves an item from a room by item name', function () {
    let item = new Item("rock", "just a simple rock");
    let room = new Room("Test Room", "A test room");

    room.items.push(item);
    expect(room.items.length).to.equal(1);

    expect(room.getItemByName("rock")).to.equal(item);

  });


  it("player.getItemByName - Retrieves an item from a player's inventory by item name", function () {
    let item = new Item("rock", "just a simple rock");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    player.items.push(item);
    expect(player.items.length).to.equal(1);

    expect(player.getItemByName("rock")).to.equal(item);

  });



  it("player.takeItem - Picks up an item from the current room into the player's inventory", function () {
    let item = new Item("rock", "just a simple rock");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    room.items.push(item);
    expect(room.items.length).to.equal(1);
    expect(player.items.length).to.equal(0);

    player.takeItem("rock");

    // expect(room.items.length).to.equal(0);
    expect(player.items.length).to.equal(1);

    expect(player.getItemByName("rock")).to.equal(item);

  });

  it("player.takeItem - When an item is taken, it is removed from the current room", function () {
    let item = new Item("sword", "just a sword");
    let room = new Room("Room 2", "A second test room");
    let player = new Player("player2", room);

    room.items.push(item);
    expect(room.items.length).to.equal(1);
    expect(player.items.length).to.equal(0);

    player.takeItem("sword");

    expect(room.items.length).to.equal(0);

  });



  it("player.dropItem - Drops an item the player is holding into their current room", function () {
    let item = new Item("rock", "just a simple rock");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    player.items.push(item);
    expect(room.items.length).to.equal(0);
    expect(player.items.length).to.equal(1);

    player.dropItem("rock");

    expect(room.items.length).to.equal(1);
    expect(player.items.length).to.equal(0);

    expect(room.getItemByName("rock")).to.equal(item);

  });

  it("player.dropItem - When an item is dropped, the player no longer has it", function () {
    let item = new Item("sword", "just a simple sword");
    let room = new Room("Test Room 2", "A second test room");
    let player = new Player("player2", room);

    player.items.push(item);
    expect(room.items.length).to.equal(0);
    expect(player.items.length).to.equal(1);

    player.dropItem("sword");

    expect(player.items.length).to.equal(0);

  });

});


describe ('Food', function () {

  it('Food should have name and description attributes', function () {
    let food = new Food("sandwich", "a delicious sandwich");

    expect(food.name).to.equal("sandwich");
    expect(food.description).to.equal("a delicious sandwich");

  });


  it('A food should be an instance of Item and Food', function () {
    let food = new Food("sandwich", "a delicious sandwich");
    let item = new Item("rock", "just a simple rock");

    expect(food instanceof Item).to.be.true;
    expect(food instanceof Food).to.be.true;

    expect(item instanceof Item).to.be.true;
    expect(item instanceof Food).to.be.false;
  });


  it('A food item can be eaten by a player', function () {
    let food = new Food("sandwich", "a delicious sandwich");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    player.items.push(food);

    expect(player.items.length).to.equal(1);

    player.eatItem("sandwich");

    expect(player.items.length).to.equal(0);

  });


  it('An item cannot be eaten by a player if not a food item', function () {
    let item = new Item("rock", "just a simple rock");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    player.items.push(item);

    expect(player.items.length).to.equal(1);

    player.eatItem("rock");

    expect(player.items.length).to.equal(1);
  });

});

describe ('World', function () {

  it('loadWorld - A non-food item should be instantiated as an instance of the `Item` class', function() {
    let world = new World();
    world.loadWorld(worldData);

    room = world.rooms[1];
    roomItems = room.items;
    expect(roomItems[0].name).to.equal('rock')
  })

  it('loadWorld - A food item should be instantiated as an instance of the `Food` class', function() {
    let world = new World();
    world.loadWorld(worldData);

    let room = world.rooms[2];
    roomItems = room.items;
    expect(roomItems[0].name).to.equal('sandwich')
  });

});
