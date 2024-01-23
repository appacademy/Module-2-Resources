module.exports = function reverseString(string) {
  // Your code here
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
};
