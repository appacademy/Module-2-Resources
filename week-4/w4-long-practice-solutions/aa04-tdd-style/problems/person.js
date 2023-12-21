class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `${this.name} says hello!`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return `${otherPerson.name} visited ${this.name}`;
  }

  update(obj) {
    if (typeof obj !== "object") {
      throw new TypeError("Input must be a valid object!");
    }

    if (!obj.name || !obj.age) {
      throw new TypeError("Input must have `name` and `age` properties!");
    }

    this.name = obj.name;
    this.age = obj.age;

    return this;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch {
      return false;
    }
  }

  static greetAll(people) {
    return people.map((person) => person.sayHello());
  }
}

module.exports = Person;
