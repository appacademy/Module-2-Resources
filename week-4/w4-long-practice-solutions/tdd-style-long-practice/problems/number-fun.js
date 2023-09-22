function returnsThree() {
  //!!START
  return 3;
  //!!END
}

function reciprocal(n) {
  //!!START
  if (n < 1 || n > 1000000) {
    throw new TypeError("Number out of range from 1 to 1000000");
  }
  return 1 / n;
  //!!END
}

module.exports = {
  returnsThree,
  reciprocal
};
