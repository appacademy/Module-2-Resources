function isOdd(num){
  // start
  if(num % 2 === 1){
    return true
  } else {
    return false
  }

  // format into a "Guard Clause" (not DRY, just more readable)
  if(num % 2 === 1){
    return true
  }
  return false

  // Remove the redundant return of false (DRY!)
  return num % 2 === 1
}


// Common function that gets pulled out from
// all the others
function getBiggerNumber(num1, num2){
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function multiplyBiggerNumByTwo(num1, num2) {
  // Original
  // let bigNum;
  // if (num1 > num2) {
  //   bigNum = num1;
  //   return bigNum * 2;
  // } else {
  //   bigNum = num2;
  //   return bigNum * 2;
  // }

  // Refactor
  let bigNum = getBiggerNumber(num1, num2)
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  // Original
  // let bigNum;
  // if (num1 > num2) {
  //   bigNum = num1;
  //   return bigNum / 3;
  // } else {
  //   bigNum = num2;
  //   return bigNum / 3;
  // }

  // Refactor
  let bigNum = getBiggerNumber(num1, num2);
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  // Original
  // let bigNum;
  // if (sum1 > sum2) {
  //   bigNum = sum1;
  //   return `I ate ${bigNum} tacos.`;
  // } else {
  //   bigNum = sum2;
  //   return `I ate ${bigNum} tacos.`;
  // }

  // Refactor
  let bigNum = getBiggerNumber(sum1, sum2);
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  // Original
  // let smallDog;
  // if (weight1 < weight2) {
  //   smallDog = weight1;
  //   return `I adopted a dog that weighs ${smallDog} pounds.`;
  // } else {
  //   smallDog = weight2;
  //   return `I adopted a dog that weighs ${smallDog} pounds.`;
  // }

  // Refactor                                        
  let smallDog = getBiggerNumber(weight1, weight2) == weight1 ? weight2 : weight1;
                                                      // Ternary! Not DRY, but concise and cool
                                                      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
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
