# Long Practice: Class Syntax with Dragons

In this practice, you will create and use classes, inheritance, and commonJS
module importing/exporting!

## Set up

Clone the starter from the **Download** link at the bottom of this page.

Run `npm install` to install any dependencies.

## Phase 1: Create a Dragon

Let's create a class to represent a Dragon! 🐲

Your goal is to pass all the test specs in the __test/dragon-spec.js__ file.
Run the Mocha test specs in that file with the following command:

```shell
npm test test/dragon-spec.js
```

Implement the following in the __classes/dragon.js__ file.

1. Define a class named `Dragon` containing a constructor method that
   accepts two arguments which should initialize the following properties:

   * name - the name of the dragon (like "Puff" or "Toothless")
   * color - the color of the dragon ( like "green" or "black")

2. Define an instance method to the `Dragon` class. The method should be named
   `breathesFire` and return a string that uses the `name` property value
   formatted as `${name} breathes fire everywhere! BURN!!!!`.

3. Define a static method to the `Dragon` class. The method should be named
   `getDragons` and accept any number of instances of the `Dragon` class that
   are passed into it as separate arguments.  The `getDragons` static method
   should return an array of all the dragon names from the instances that were
   passed into it as arguments.

In addition to Mocha, you should test your code manually using Node.js. After
the `Dragon` class definition, you can insert the examples below and use the
command, `node classes/dragon.js` to run it.

Examples:

```js
const puff = new Dragon("Puff", "green");
console.log(puff);
console.log(puff.breathesFire());
```

This should print to the terminal:

```plaintext
Dragon { name: 'Puff', color: 'green' }
Puff breathes fire everywhere! BURN!!!!
```

```js
const toothless = new Dragon("Toothless", "black");
console.log(toothless);
console.log(toothless.breathesFire());
```

This should print to the terminal:

```plaintext
Dragon { name: 'Toothless', color: 'black' }
Toothless breathes fire everywhere! BURN!!!!
```

```js
const puff = new Dragon("Puff", "green");
const toothless = new Dragon("Toothless", "black");
console.log(Dragon.getDragons(puff, toothless));
```

This should print to the terminal:

```plaintext
[ 'Puff', 'Toothless' ]
```

## Phase 2: Create a Friendly Dragon

Let's create a class to represent a FriendlyDragon! 🐲

Your goal is to pass all the test specs in the __test/friendly-dragon-spec.js__
file. Run the Mocha test specs in that file with the following command:

```shell
npm test test/friendly-dragon-spec.js
```

Implement the following in the __classes/friendly-dragon.js__ file.

1. Require with CommonJS the `Dragon` class from the __classes/dragon.js__ file.

2. Define a class named `FriendlyDragon` that inherits from the `Dragon` parent
   class you required.  The `FriendlyDragon` class should contain a constructor
   method that accepts four arguments which should initialize the following
   properties:

   * `name` - the name of the dragon (should be inherited)
   * `color` - the color of the dragon (should be inherited)
   * `lifeGoals` - an array of skills the Friendly Dragon is good at
   * `friend` - the Friendly Dragon's best buddy (they all have one!)

3. Export the `FriendlyDragon` class so that other modules can require it.
   **NOTE: IF YOU DO NOT CORRECTLY EXPORT THE `FriendlyDragon` CLASS, THE MOCHA
   TESTS WILL THROW A `TypeError` AND NOT RUN**

4. Additionally, add two(2) instance methods to the `FriendlyDragon` class.
    * `hasLifeGoals()` - this method should `console.log` each of the
    `FriendlyDragon`'s life goals separately, in the format `${name} likes to
    ${lifeGoal}`
    * `helpsPeople()` - this method should return a string using the `name` and
      `friend` property values formatted as `${name} helps their friend
      ${friend}`.

In addition to Mocha, you should test your code manually using Node.js. After
the `FriendlyDragon` class definition, you can insert the examples below and use
the command, `node classes/friendly-dragon.js` to run it.

Examples:

```js
const puff = new FriendlyDragon(
  "Puff",
  "green",
  [
    "live by the sea",
    "frolick in the autumn mist",
    "help small children"
  ],
  "Jackie Paper"
);
console.log(puff);
console.log(puff.breathesFire()); //Friendly dragons can still breathe fire!
puff.hasLifeGoals();
console.log(puff.helpsPeople());
```

This should print to the terminal:

```plaintext
FriendlyDragon {
  name: 'Puff',
  color: 'green',
  lifeGoals: [
    'live by the sea',
    'frolick in the autumn mist',
    'help small children'
  ],
  friend: 'Jackie Paper'
}
Puff breathes fire everywhere! BURN!!!!
Puff likes to live by the sea
Puff likes to frolick in the autumn mist
Puff likes to help small children
Puff helps their friend Jackie Paper
```

```js
const toothless = new FriendlyDragon(
  "Toothless",
  "black",
  [
    "save the town of Burke",
    "fly with a kid on his back",
    "hang out with Vikings"
  ],
  "Hiccup"
);
console.log(toothless); toothless.hasLifeGoals();
console.log(toothless.helpsPeople());
console.log(toothless.breathesFire());
```

This should print to the terminal:

```plaintext

FriendlyDragon {
  name: 'Toothless',
  color: 'black',
  lifeGoals: [
    'save the town of Burke',
    'fly with a kid on his back',
    'hang out with Vikings'
  ],
  friend: 'Hiccup'
}
Toothless likes to save the town of Burke
Toothless likes to fly with a kid on his back
Toothless likes to hang out with Vikings
Toothless helps their friend Hiccup
Toothless breathes fire everywhere! BURN!!!!
```

## Phase 3: Create an Evil Dragon

Let's create a class to represent an EvilDragon! 🐉

Your goal is to pass all the test specs in the __test/evil-dragon-spec.js__
file. Run the Mocha test specs in that file with the following command:

```shell
npm test test/evil-dragon-spec.js
```

Implement the following in the __classes/evil-dragon.js__ file.

1. Require with CommonJS the `Dragon` class from the __classes/dragon.js__ file.

2. Define a class named `EvilDragon` that inherits from the `Dragon` parent
   class you imported.  The `EvilDragon` class should contain a constructor
   method that accepts four arguments that initialize the following properties:

   * `name` - the name of the dragon (should be inherited)
   * `color` - the color of the dragon (should be inherited)
   * `evilDoings` - an array of bad things the Evil Dragon does
   * `nemesis` - the Evil Dragon's arch-nemesis.

3. Export the `EvilDragon` class so that other modules can require it.
   **NOTE: IF YOU DO NOT CORRECTLY EXPORT THE `FriendlyDragon` CLASS, THE MOCHA
   TESTS WILL THROW A 'TypeError` AND NOT RUN**

4. Additionally, add two(2) instance methods to the `EvilDragon` class.
    * `dontInviteThemOverForDinner()` - this method should `console.log` out
      each of the Evil Dragon's evil doings separately, in the format `${name}
      will ${evilDoing}`
    * `burnsNemesis()` - this method should return a string using `name` and
      `nemesis` property values formatted as `${name} destroys ${nemesis} with
      fire! WHOOOSH!!!`.

In addition to Mocha, you should test your code manually using Node.js. After
the `EvilDragon` class definition, you can insert the examples below and use
the command, `node classes/evil-dragon.js` to run it.

Examples:

```js
const enderDragon = new EvilDragon(
  "Ender Dragon",
  "black", [
    "spit a fireball at Steve",
    "rule over all the Endermen",
    "destroy all blocks in its way"
  ],
  "Steve"
);
console.log(enderDragon);
enderDragon.dontInviteThemOverForDinner();
console.log(enderDragon.breathesFire());
console.log(enderDragon.burnsNemesis());
```

This should print to the terminal:

```plaintext
EvilDragon {
  name: 'Ender Dragon',
  color: 'black',
  evilDoings: [
    'spit a fireball at Steve',
    'rule over all the Endermen',
    'destroy all blocks in its way'
  ],
  nemesis: 'Steve'
}
Ender Dragon will spit a fireball at Steve
Ender Dragon will rule over all the Endermen
Ender Dragon will destroy all blocks in its way
Ender Dragon breathes fire everywhere! BURN!!!!
Ender Dragon destroys Steve with fire! WHOOOSH!!!
```

```js
const drogon = new EvilDragon(
  "Drogon",
  "black-red",
  [
    "eat all your livestock",
    "burn down your castle in Westeros",
    "burn your father and brother"
  ],
  "Night King"
);
console.log(drogon);
drogon.dontInviteThemOverForDinner();
console.log(drogon.breathesFire());
console.log(drogon.burnsNemesis());
```

This should print to the terminal:

```plaintext
EvilDragon {
  name: 'Drogon',
  color: 'black-red',
  evilDoings: [
    'eat all your livestock',
    'burn down your castle in Westeros',
    'burn your father and brother'
  ],
  nemesis: 'Night King'
}
Drogon will eat all your livestock
Drogon will burn down your castle in Westeros
Drogon will burn your father and brother
Drogon breathes fire everywhere! BURN!!!!
Drogon destroys Night King with fire! WHOOOSH!!!
```

## Phase 4: Make All Dragons

Let's make instances of both Friendly and Evil Dragons! 🐲 🐉 🐲

Your goal is to pass all the test specs in the __test/all-dragons-spec.js__
file. Run the Mocha test specs in that file with the following command:

```shell
npm test test/all-dragons-spec.js
```

Implement the following in the __all-dragons.js__ file.

1. Require the `FriendlyDragon` class from the
   __./classes/friendly-dragon.js__ module.

2. Require the `EvilDragon` class from the
   __./classes/evil-dragon.js__ module.

3. Create 2 new instances, 1 of the `FriendlyDragon` Class and the other of the
   `EvilDragon` Class
    * A `FriendlyDragon` named "Falkor" with the color "white", the life goals
      of "save Atreyu from the swamp", "save Atreyu from the Nothing", and
      "scare the local bullies into a dumpster" and has the friend "Bastian".
      Assign this new instance to the variable `falkor`
    * An `EvilDragon` named "Smaug" with the color "black", the evilDoings of
      "take over your mountain kingdom", "steal all your dwarven gold", and
      "burn down your floating village" and has the nemesis of "Dwarf King".
      Assign this new instance to the variable named "smaug"

4. Call the static `getDragons` method on the `Dragon` Class with your `falkor`
   and `smaug` instances as arguments. Save this method call to a variable
   named `allDragons` and add it to the `export` statement that already exists.
   _Note, there is a comment that cautions not to edit the export statement; it
   is __required__ to modify it for this step._

In addition to Mocha, you should test your code manually using Node.js. After
you implemented the steps above, you can insert the examples below and use
the command, `node all-dragons.js` to run it.

Examples:

```js
console.log(falkor);
falkor.hasLifeGoals();
console.log(falkor.breathesFire());
console.log(falkor.helpsPeople());
```

```plaintext
FriendlyDragon {
  name: 'Falkor',
  color: 'white',
  lifeGoals: [
    'save Atreyu from the swamp',
    'save Atreyu from the Nothing',
    'scare the local bullies into a dumpster'
  ],
  friend: 'Bastian'
}
Falkor likes to save Atreyu from the swamp
Falkor likes to save Atreyu from the Nothing
Falkor likes to scare the local bullies into a dumpster
Falkor breathes fire everywhere! BURN!!!!
Falkor helps their friend Bastian
```

```js
console.log(smaug);
smaug.dontInviteThemOverForDinner();
console.log(smaug.breathesFire());
console.log(smaug.burnsNemesis());
```

```plaintext
EvilDragon {
  name: 'Smaug',
  color: 'black',
  evilDoings: [
    'take over your mountain kingdom',
    'steal all your dwarven gold',
    'burn down your floating village'
  ],
  nemesis: 'Dwarf King'
}
Smaug will take over your mountain kingdom
Smaug will steal all your dwarven gold
Smaug will burn down your floating village
Smaug breathes fire everywhere! BURN!!!!
Smaug destroys Dwarf King with fire! WHOOOSH!!!
```

The static method from step 4, when called and printed to the terminal:

```plaintext
[ 'Falkor', 'Smaug' ]
```