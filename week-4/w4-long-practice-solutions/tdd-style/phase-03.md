# Phase 3: Testing a Class

For this next phase, you will be utilizing Chai to test a `Person` class. In the
__problems__ directory, locate the file named __person.js__, and in the
__test__ folder, a corresponding __person-spec.js__ file. Work one spec at a
time through the list below using Red, Green, Refactor as you go, and don't
forget to use [Mocha Hooks][mocha-hooks] to make your specs super DRY!

Write specs for each of the described `Person` class methods below. Then write
the code needed to pass those specs.

- `constructor` - will intake a `name` and `age` and set them as properties on
  the instance. Make sure you test that these properties exist on an instance,
  as well as ensuring they are set properly.
- `sayHello()` instance method - will return a string of the `Person` instance's
  name and a greeting message
- `visit(otherPerson)` instance method - will return a string stating that this
  instance visited the passed-in person instance (i.e. `person1.visit(person2)`
  returns `"Mai visited Erin"`).
- `switchVisit(otherPerson)` instance method - will invoke the `visit` function
  of the parameter (`otherPerson`), passing in the current instance as the
  argument.
- `update(obj)` instance method - this method will have two contexts if the
  incoming argument _is_ or _is not_ a valid object.
  - A: If the incoming argument is not an object throw a new `TypeError` with a
    clear message
  - B: If the incoming argument is an object then the instance's properties
    should be updated to match the passed-in object's values as shown below.
  - C: If the incoming object does not have a `name` and an `age` property,
    throw a `TypeError` with an appropriate message

  ```js
  let coolPerson = new Person("mai", 32); // Person { name: 'mai', age: 32 }

  coolPerson.update({ name: "lulu", age: 57 });
  console.log(coolPerson); // Person { name: 'lulu', age: 57 }
  ```

- `tryUpdate(obj)` instance method - this method will call the `update(obj)`
  method with the incoming argument, and it will have two contexts if the
  invocation of `update` was or was not successful:
  - A: If `update` is successfully invoked (it does not throw an error) then
    `true` is returned indicating the update was successful (make sure that the
    instance was updated as well)
  - B: If `update` is not successfully invoked it should **not** throw
    an error, instead it should return `false`.
- `greetAll(obj)` static method - this will intake an array of `Person`
  instances. The `greetAll` method will then call the `sayHello()` method on
  each `Person` instance and store each returned string in an array, before
  finally returning an array of the stored strings.

[mocha-hooks]: https://mochajs.org/#hooks
