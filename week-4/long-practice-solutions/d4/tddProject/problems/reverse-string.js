function reverseString(string) {
  if (typeof string !== "string") throw new TypeError("must be a string");
  return [...string].reverse().join("");
}

module.exports = reverseString;
