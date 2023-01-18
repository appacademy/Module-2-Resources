function findBiggerNum(num1, num2) {
  // let bigNum;
  // if (num1 > num2) {
  //   bigNum = num1;
  //   return bigNum;
  // } else {
  //   bigNum = num2;
  //   return bigNum;
  // }
  return num1 > num2 ? num1 : num2;
}

function multiplyBiggerNumByTwo(num1, num2) {
  return findBiggerNum(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return findBiggerNum(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = findBiggerNum(sum1, sum2);
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
                  // weight1 === weight1
  let smallDog = findBiggerNum(weight1, weight2) === weight1 ? weight2 : weight1;
  
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
