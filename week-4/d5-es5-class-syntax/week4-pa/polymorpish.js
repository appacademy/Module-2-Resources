//  ! What does Erase mean?
// * To remove or undo a mistake

class Eraser {
  constructor(size, removed = false) {
    this.size = size;
    this.removed = removed;
  }

  erase() {
    return `rubber eraser - ${!this.removed}`;
  }
}

class WritingInstrument extends Eraser {
  constructor(type, material, bodyColor, label) {
    super(type, material, bodyColor, label);
  }

  write() {
    return true;
  }
}

class Pencil extends WritingInstrument {
  constructor(type, material, bodyColor, label, graphiteThickness) {
    super(type, material, bodyColor, label);
    this.graphiteThickness = graphiteThickness;
  }
}

let yellowPencil = new Pencil();
console.log(`yellowPencil :`, yellowPencil.erase()); // rubber eraser - true

class Pen extends WritingInstrument {
  constructor(type, material, bodyColor, label, inkColor, inkLevel) {
    super(type, material, bodyColor, label);
    this.inkColor = inkColor;
    this.inkLevel = inkLevel;
  }

  refill() {
    return true;
  }
}

let blackPen = new Pen();
console.log(`blackPen : `, blackPen.erase()); // rubber eraser - true

// console.log(blackPen.returnEmoji()) // TypeError: blackPen.countPens is not a function
// blackPen is an instanceof Pen, and cannot access the static method returnEmoji.
// we can access Eraser's erase() though...

// static methods can only be called on the class itself
// console.log('Only the Pen Class can run returnEmoji() -> ', Pen.returnEmoji()) // 🎯🎯🎯🎯🎯

// ? an instance of the Pen Class

class CaligraphyPen extends Pen {
    constructor(type, material, bodyColor, label, price, removed) {
      super(type, material, bodyColor, label, removed);
      this.price = price;
    }

  // * same method name from Class Eraser, different function definition
  // * still `erasing` but in a different way 🙏
  // * morphed erase() on line 79 into something else, but still

  // ? Function Overriding - if we comment out CaligraphyPen's erase() method, and run the console.log on 83...
  // ? Original erase() will be called from Class Eraser and return a string => `rubber eraser - true`

  // ! We have repurposed the name:
  // - morphed this method into a another form
  // - inherited erase() from Class Eraser
  // - different classes are using the same interface - method names
  

  erase() {
    if ([1, 2, 3].length >= 1) this.removed = !this.removed;
    return `whiteout - ${this.removed}`;
  }

  static returnEmoji() {
    return `🎯🎯🎯🎯🎯`;
  }
}

let fancyPen = new CaligraphyPen();
console.log("fancyPen : ", fancyPen.erase()); //rubber eraser - true

// invoke with erase() commented out
// console.log("🖋️ fancyPen : ", fancyPen.erase()); //rubber eraser - true

// ! Static methods can only be called on the class itself
console.log(
  "Only the Class CaligraphyPen can run returnEmoji() -> ",
  CaligraphyPen.returnEmoji()
); // 🎯🎯🎯🎯🎯

/*
Function overloading refers to sending a different number or type of parameters to a particular function.

Consider sum(number1, number2) and sum(listOfNumbers).
The first accepts two numeric parameters; the second, an array of numbers.
The returned value from both is the total calculated by adding up all the numbers provided.
Each version of parameters needs a different implementation (number1 + number2 vs. a for-loop).
Therefore, this is an example of polymorphism.

*/
