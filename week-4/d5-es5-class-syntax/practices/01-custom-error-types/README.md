# Practice: Custom JS Error Types

In this practice, you will create custom JavaScript error types.

## Set up

Clone the starter from the **Download** link at the bottom of this page.

Run `npm install` to install any dependencies.

## Instructions

Create a `ValidationError` error type that inherits from the `Error` type. It
should be thrown whenever an input is invalid.

Here's an example of how the `MaximumLengthExceededError` can be used:

```js
class Field {
  constructor(inputName, value) {
    this.inputName = inputName;
    this.value = value;
  }
}

// When a message is passed in:
const passwordInput = new Field('Password', 'pass');
// Field { inputName: 'Password', value: 'pass' }
if (passwordInput.value === 'pass') {
  throw new ValidationError('Insecure password');
}
// throws ValidationError: Insecure password

// When a message is not passed in:
const passwordInput = new Field('Password', 10);
// Field { inputName: 'Password', value: 10 }
if (typeof passwordInput.value !== 'string') {
  throw new ValidationError();
}
// throws ValidationError: Invalid input
```

Implement the following in the __error-types/validation-error.js__ file.

1. Create an error type called `ValidationError` that inherits from `Error`.
2. The first argument to the `constructor` method should be set to the
   `message` property of the instantiated instance. If an argument was not
   passed in, the `message` property should default to "Invalid input".

Test that your custom error type is working as intended by running the test
specs in the __test/validation-error-spec.js__ with the following command:

```js
npm test test/validation-error-spec.js
```

Next, you will create a `MaximumLengthExceededError` error type that inherits
from the `ValidationError` custom error type. It should be thrown whenever an
input exceeds the maximum length designated for that input.

Here's an example of how the `MaximumLengthExceededError` can be used:

```js
class Field {
  constructor(inputName, value, maxLength = null) {
    this.inputName = inputName;
    this.value = value;
    this.maxLength = maxLength;
  }

  changeInput(newValue) {
    if (!this.maxLength) {
      throw new MaximumLengthExceededError()
    } else if (newValue.length > this.maxLength) {
      throw new MaximumLengthExceededError(newValue.length - this.maxLength)
    }

    this.value = newValue;
  }
}

// When no maximum length is specified:
const nameInput = new Field('Name', 'Zelda');
// Field { inputName: 'Name', value: 'Zelda', maxLength: null }
nameInput.changeInput('Sheik');
// throws MaximumLengthExceededError: Maximum length exceeded

// When maximum length is specified and is exceeded:
const nameInput = new Field('Name', 'Zelda', 5);
// Field { inputName: 'Name', value: 'Zelda', maxLength: 5 }
nameInput.changeInput("Ganondorf");
// throws MaximumLengthExceededError: Maximum length exceeded by 4

// When maximum length is specified and is not exceeded:
const nameInput = new Field('Name', 'Zelda', 5); 
// Field { inputName: 'Name', value: 'Zelda', maxLength: 5 }
nameInput.changeInput("Sheik");
// does not throw an error
```

Implement the following in the __error-types/maximum-length-exceeded-error.js__
file.

1. Create an error type called `MaximumLengthExceededError` that inherits from
   `Error`.
2. The first argument to the `constructor` method should represent the
   difference in the maximum length and actual length of the input.
   The `message` property of the instantiated instance should be set to
   "Maximum length exceeded by ${excessLength}" if there is a first argument.
   If there isn't a first argument passed in, the `message` property should
   default to "Maximum length exceeded".

Test that your custom error type is working as intended by running the test
specs in the __test/maximum-length-exceeded-error-spec.js__ with the following
command:

```js
npm test test/maximum-length-exceeded-error-spec.js
```
