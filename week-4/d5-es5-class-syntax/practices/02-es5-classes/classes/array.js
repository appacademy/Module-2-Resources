//!!START
Array.prototype.isEqual = function (array) {
  if (!array || this.length != array.length) return false;

  for (let i = 0; i < array.length; i++) {
    if (this[i] !== array[i]) {
      return false;
    }
  }
  return true;
};
//!!END
