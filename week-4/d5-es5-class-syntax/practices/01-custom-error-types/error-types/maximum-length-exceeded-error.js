const ValidationError = require('./validation-error');

//!!START
class MaximumLengthExceededError extends ValidationError {
  constructor(excessLength, ...params) {
    // Pass all arguments to parent constructor
    super(...params);

    // The name property should match the class's name
    this.name = 'MaximumLengthExceededError';

    // Custom debugging information
    this.message = "Maximum length exceeded"
    if (excessLength) {
      this.message +=  ` by ${excessLength}`
    }
  }
}
//!!END

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}