class Dog {
    constructor(name) {
      this.name = name;
      this.sound = 'woof';
    }

    speak() {
        console.log(this)
      return `${this.name} says '${this.sound}'`
    }
  }

  let fido = new Dog("Fido");
  let fidoSpeak = fido.speak.bind(fido);
  console.log(fido)
  console.log(fidoSpeak(), 'from the question') // throws a typeerror because loses context

//   console.log(fido.speak(), 'inside the class') // does not lose context
  // the context of fido.speak() is the fido because we have to key into it





//     const name = 'alex'
//     const sound = 'woof'
//   function speakTwo () {
//       console.log(this)
//     return `${name} says '${sound}'`
//   }
//   console.log(speakTwo(), 'another func') // says undefined



//   console.log(fidoSpeak()); // ERROR
//   How would you fix the error in the code above?

//   apply name and sound to the fido instance

//   speak cannot be used in this way

//   bind the speak method to the fido instance

//   call the speak method with name and sound as arguments
