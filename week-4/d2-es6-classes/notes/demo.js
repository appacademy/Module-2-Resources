//accessing methods on a grandparent class:
const { Book } = require('./book');
// console.log(bk1.getTitles)

class GrandParent {
  funcA() {
    console.log("GrandParent");
  }
}
class Parent extends GrandParent {
  funcA() {
    console.log("Parent");
    super.funcA();
  }
}
class Child extends Parent {
  funcA() {
    console.log("Child");
    super.funcA();
  }
}

const x = new Child();
x.funcA();