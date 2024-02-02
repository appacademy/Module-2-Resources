# Phase 4: Testing multiple classes

For this next phase, you will be utilizing Chai to test a `Triangle` class, as
well as the `Scalene` and `Isosceles` classes, which inherit from the
`Triangle` class.

These classes can be used to build instances of _potential_ triangles of different types. Each class includes methods that check the properties of the instance to validate whether it is a valid instance of that class.

In the __problems__ directory, locate the file named __triangle.js__, and in the
__test__ folder, a corresponding __triangle-spec.js__ file. Work one spec at a
time through the list below using Red, Green, Refactor as you go, and don't
forget to use [Mocha Hooks][mocha-hooks] to make your specs super DRY!

## `Triangle` Class

Write specs for each of the described `Triangle` class methods below. Then write
the code needed to pass those specs.

- `constructor` - will intake the lengths of 3 sides `side1`, `side2`, and
  `side3` and set them as properties on the instance. Make sure you test that
  these properties exist on an instance, as well as ensuring they are set
  properly.
- `getPerimeter()` instance method - will return the perimeter of the `Triangle`
  instance, by summing the three sides.
- `hasValidSideLengths()` instance method - returns `true` if it is a valid
  triangle, and `false` if it is invalid. In a valid triangle, the sum of any
  two sides must be greater than the remaining side.
- `validate()` instance method - adds an `isValid` property to the triangle
  instance, with a value of `true` if it is a valid triangle and `false` if the
  side lengths are invalid.
- `getValidTriangles()` static method - takes in an arbitrary number of triangle
  instances, and returns all of the instances that are valid triangles.


## `Scalene` Class

A Scalene triangle is a triangle with three sides of unequal lengths.

Write specs for each of the described `Scalene` class methods below. Then
write the code needed to pass those specs.

- The `Scalene` class should inherit from the `Triangle` class. Each instance of `Scalene` should be initialized with 3 side lengths, as well as an `isValidTriangle` property, with a value derived from the `Triangle` class `hasValidSideLengths` method.
- `isScalene()` instance method - returns `true` if it is a valid
  scalene triangle, and `false` if it is invalid. In a valid scalene triangle, all sides must be different lengths.
-  `validate()` instance method - adds an `isValidScalene` property to the
  scalene triangle instance, with a value of `true` if it is a valid scalene
  triangle and `false` if the side lengths are invalid for a scalene
  triangle.
    - Write tests to make sure that this method overrides the method in the `Triangle` class with the same name.


## `Isosceles` Class

An Isosceles triangle has to sides of equal lengths.

The `Isosceles` class should have similar methods to the `Scalene` class. The
only difference is that the methods should check the side lengths and validate
whether they meet the definition of an Isosceles Triangle.

Write specs for each of the methods. Then write the code needed to pass those
specs.

## BONUS: `Right` and `Equilateral` Class

If your have extra time, write specs for defining a `Right` triangle class as well as an `Equilateral` triangle class.
- What properties need to be defined in the constructor?
- What opportunities are there for using inheritance?
- How might you you validate these two triangle types?

After writing the specs, go ahead and write the code needed to pass those specs.

Once you've finished and you've refactored all your code feel free to run
`mocha` and look at all those passed specs! Pat yourself on the back for
starting your journey into TDD development.

[mocha-hooks]: https://mochajs.org/#hooks
