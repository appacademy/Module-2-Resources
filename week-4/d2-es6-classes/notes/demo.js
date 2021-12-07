//accessing methods on a grandparent class:

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