CommonJS Modules
Up until now, you've used Node to run a single JavaScript file that contains all of your code. For tiny applications, this approach works fine, but for most applications, a different approach is required.

Instead of a single, monolithic JavaScript file that contains all of your application code, you should organize your code into multiple files, with each file containing a logical unit of code that works together.

When you finish this article, you should be able to:

Add a local module to a Node.js application
Use the module.exports property to export from a module
Export multiple items or a single item from a module
Use the require() function to import from a module
This article only covers using modules in Node.js. Later on, you'll learn how to use modules with JavaScript that runs in the browser.

Node.js modules
In Node.js, each JavaScript file defines a module.

Modules defined within your project are known as local modules. Ideally, each local module has a single purpose that's focused on implementing a single bit of functionality.

Exporting multiple items from a module
To make variables and functions defined in a module (file) accessible to other modules (files) in your application, you need to export them.

Each module in Node has access to a module object that represents the current module. The module object contains a number of properties that provide information about the current module. One of those properties, the module.exports property, is used to export items from the module.

Option A: Assigning an object to the module.exports property
Assign a new object to the module.exports property. The new object should have a property for each item that you want to export.

For example, the following calculator.js file has functions defined inside the file like add, subtract, multiply, etc. It also has an operations variable assigned to an array. Only the add and subtract functions and operations array are to be exported from the calculator.js file to be used by other files.

To do this, set the module.exports property to a new object with the add, subtract, and operations properties referencing the add and subtract functions, and the operations array:

// calculator.js

const operations = ['+', '-', '*'];

function add(num1, num2) {
  // ...
}

function subtract(num1, num2) {
  // ...
}

function multiply(num1, num2) {
  // ...
}

module.exports = { // only add, subtract, and operations gets exported from this file
  add,
  subtract,
  operations
};

// The above is shorthand for below
// module.exports = {
//   add: add,
//   subtract: subtract,
//   operations: operations
// };
multiply is not included in the exports and will not be accessible.

Option B: Set properties on the module.exports object
This option has the same outcome of Option A. The decision to use Option A or Option B is a stylistic choice. Choose one to use, but make sure you can recognize and use both.

To export an item as a property on module.exports, you can assign a property directly on the module.exports property.

Exporting an item is to define a property for that item on the module.exports object.

Using the calculator.js example from before, add, subtract, and operations are added as properties onto the existing module.exports object instead of setting module.exports to a new object:

// calculator.js

const operations = ['+', '-', '*'];

function add(num1, num2) {
  // ...
}

function subtract(num1, num2) {
  // ...
}

function multiply(num1, num2) {
  // ...
}

// set the add, subtract, and operations properties on the module.exports object
module.exports.add = add;
module.exports.subtract = subtract;
module.exports.operations = operations;
Node initializes the module.exports property to an empty object. If you don't declare and initialize any properties on the module.exports object, then nothing will be exported from the module.

The module.exports property names don't need to match the item names. However, it makes sense to keep the property names consistent with the item names so they are easier to remember and find later if you need to update them.

Option C: The exports shortcut
Occasionally, you will see exports without the module. in front of it. That's because Node provides an exports variable that's initialized to the module.exports property value. You can use the exports variable as a shortcut.

Using the calculator.js example from before, add, subtract, operations are added as properties onto the given exports object:

// calculator.js

const operations = ['+', '-', '*'];

function add(num1, num2) {
  // ...
}

function subtract(num1, num2) {
  // ...
}

function multiply(num1, num2) {
  // ...
}

// set the add, subtract, and operations properties on the exports object
exports.add = add;
exports.subtract = subtract;
exports.operations = operations;
Exporting a single item from a module
To export a single item from a module, there is only one way to do that, which is to assign module.exports to the single item you want to export.

Using the calculator.js example, to export the operations array as the ONLY item to export from the file:

// calculator.js

const operations = ['+', '-', '*'];

function add(num1, num2) {
  // ...
}

function subtract(num1, num2) {
  // ...
}

function multiply(num1, num2) {
  // ...
}

// set module.exports to the operations function instead of an object
module.exports = operations;
No other items can be exported from this file if you export operations this way.

Importing using require
When a module needs something from another module, it is said to be dependent on that module. A module's dependencies are the other modules that are required for it to run properly.

Another way to think of a dependency is as a requirement.

The built-in require function allows you to import item(s) from a module. The require function takes in a relative path from the module in which require is being called, to the module you wish to import.

As an example, take a look at the following file structure:

./school
├── courses
|   ├── physics.js
|   └── music.js
└── people
    ├── students.js
    └── teachers.js
If you are trying to import the students.js module into the physics.js module, then inside of physics.js, the require functions will be invoked like so:

// physics.js
const students = require('../people/students');

// ...
The require function takes in the relative path from the module that is importing to the module that is exporting.

Notice how the file extension, .js, is dropped in the file path. It's not necessary to add the file extension if the extension is .js.

Importing multiple items from a module
To use the multiple items exported from a module in other modules, you must know how the items are being exported from the desired module.

Multiple items are exported from a module as properties of the exported object. You can import the object and access the properties of the object to get the desired items.

In the calculator.js example, add, subtract, and operations were properties of a single object that is exported from the module. To import the object into another module in the same folder, you can extract the properties from the object exported like so:

const calculator = require('./calculator');
const add = calculator.add;
const subtract = calculator.subtract;
const operations = calculator.operations;
You can also use object destructuring to extract the properties of the object.

const { add, subtract, operations } = require('./calculator');
Now you can use the add, subtract, and operations properties exported from the calculator.js module in this module!

Importing an item from a module with a single export
To import a single item from a module that only has one item exported, you can simply use the require function without any object destructuring. The return of the require function will be the single item that was exported.

For example, in the calculator.js example when operations is exported as the only item from the module, you can import and use operations like so:

// calculator.js
// ...
module.exports = operations;
// module that is importing
const operations = require('./calculator');
For both importing multiple items or importing a single item export, you need to know what is exported from the required module. Once you know that and the relative path from the importing module to the exporting module, then you can break down your code into multiple files instead of being contained to one file.

Folder module
A folder, not just a file, can also be loaded as a module in Node.js. The folder MUST have a file called index.js. Importing a folder as a module will prompt Node.js to look for a file called index.js in that folder to import. It will only look for and load the index.js file in that folder.

As an example, take a look at the following file structure:

./school
├── courses
|   ├── physics.js
|   └── music.js
└── people
    ├── index.js
    ├── students.js
    └── teachers.js
To load the index.js file in the people folder as a module inside of the physics.js file, you can do the following:

// physics.js

const people = require('../people');
// const people = require('../people/index.js'); // equivalent import
When the people folder is imported as a module, it prompts Node.js to look for a file called index.js inside of that file to load. It does not load all the files in that folder, only the index.js file.

What you've learned
In this article, you learned how to add a local module to a Node.js application. You also learned how to use the module.exports property to export multiple items or a single item from a module. You learned how to use the require() function to import from a module. Finally, you learned that folders can act as modules too, not just files.