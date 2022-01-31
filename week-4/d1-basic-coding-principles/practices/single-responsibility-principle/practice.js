/******************************** CONSTANTS *********************************/
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */
//
//
// HELPER FUNCTIONS
function combinePieIngredients(pieType) {
  // Find the recipe for the pieType specified
  const recipe = recipes[pieType];

  let combiningMsg = `Combining ingredients for ${pieType}: `
  combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
  console.log(combiningMsg);
}

function bakePies(pieType, quantity) {
  for (let i = 0; i < quantity; i++) {
    combinePieIngredients(pieType)
    console.log(`Baked pie ${i + 1}!`)
  }
}

function calculatePieCost(pieType) {
  const recipe = recipes[pieType]

  const costOfPie = recipe.reduce((prev, current) => {
    return prev + current.cost;
  }, recipe[0].cost);
  console.log(`Cost per pie: ${costOfPie}`);
  return costOfPie
}

function sellPies(costPerPie, quantity, profitMargin = 1.2) {
  const revenue = (costPerPie * profitMargin * quantity)
  console.log(`Sold ${quantity} pies for $${revenue.toFixed(2)}!`);
}


/*************************** FUNCTION TO REFACTOR ****************************/
function bakeAndSellPies(pieType, pieQuantity, profitMargin) {

  bakePies(pieType, pieQuantity)
  const costOfPie = calculatePieCost(pieType)
  sellPies(costOfPie, pieQuantity, profitMargin)
  // // Find the recipe for the pieType specified
  // const recipe = recipes[pieType];
  // // Bake the number of pies specified by the pieQuantity
  // for (let i = 0; i < pieQuantity; i++) {
  //   // Print the ingredients for each ingredient in the recipe
  //   let combiningMsg = `Combining ingredients for ${pieType}: `
  //   combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
  //   console.log(combiningMsg);

  //   // Print the nth pie that was baked
  //   console.log(`Baked pie ${i + 1}!`);
  // }

  // // Print the cost of each pie based on the cost of each ingredient
  // const costOfPie = recipe.reduce((prev, current) => {
  //   return prev + current.cost;
  // }, recipe[0].cost);
  // console.log(`Cost per pie: ${costOfPie}`);

  // // Calculate the total cost of all the pies
  // const totalCost = costOfPie * pieQuantity;

  // // Print the total revenue calculated using the given profitMargin
  // const revenue = totalCost * (profitMargin || 1.2);
  // console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
}

/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};
