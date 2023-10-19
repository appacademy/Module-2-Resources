Overview

- up until now we've put all our code in single JS file
- as code base gets larger we'll want to break our code up into multiple files
- each file containing a logical unit of code that defines a module.

Modules

- a module is just a javascript file
- local module: defined within your project
- core modules: native modules contained within Node.js
  - don't have to npm install
  - ex: `path`, `readline`, `fs`
- third party modules: imported using npm

Module systems

- recent node versions contain two different systems
  1.  CommonJS (legacy system)
  2.  ES Modules (newer system)
- conceptually similar
- syntax/implementation details differ

The Module Object

- each module in node has access to a `module` object
- represents current module
- contains number of properties with info about current module

The `module.exports` Property

- object used to export items from the module

To Export a Single Item:

- set `module.exports` equal to that item
- OR
- define property for that item on the `module.exports` obj


Common JS Modules:
```js
// animal.js
class Dog {}
class Cat {}
module.exports = { Cat, Dog }
// or
// module.exports = { Cat: Cat, Dog: Dog }
// or
// module.exports.Cat = Cat;
// module.exports.Dog = Dog;


// shelter.js
class Shelter {}
module.exports = Shelter



// index.js
const { Cat, Dog } = require('./animal');
const Shelter = require('./shelter')

```

