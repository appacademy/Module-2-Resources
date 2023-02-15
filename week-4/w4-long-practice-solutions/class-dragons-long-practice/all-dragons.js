//!!START
// You need to require all the other files so we will have access to them.  For
// calling the static method, you do not have to require the Dragon class, you
// could just use the FriendlyDragon or EvilDragon class, as they will inherit
// that method from their parent as well, or you can require Dragon and call it
// on that
const FriendlyDragon = require("./classes/friendly-dragon");
const EvilDragon = require("./classes/evil-dragon");
const Dragon = require("./classes/dragon");

const falkor = new FriendlyDragon(
  "Falkor",
  "white",
  [
    "save Atreyu from the swamp",
    "save Atreyu from the Nothing",
    "scare the local bullies into a dumpster",
  ],
  "Bastian"
);

const smaug = new EvilDragon(
  "Smaug",
  "black",
  [
    "take over your mountain kingdom",
    "steal all your dwarven gold",
    "burn down your floating village",
  ],
  "Dwarf King"
);
// You can also call the getDragons method on FriendlyDragon or EvilDragon
// because they both inherit that method from their parent class Dragon.
// Remember, a static method must be called on the class, NOT an instance of the
// class
const allDragons = Dragon.getDragons(falkor, smaug);
// const allDragons = FriendlyDragon.getDragons(falkor, smaug);
// const allDragons = EvilDragon.getDragons(falkor, smaug);
//!!END

//!!START SILENT
module.exports.allDragons = allDragons
//!!END

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
} catch {
  module.exports = null;
}
