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

/***************************** HELPER FUNCTIONS ******************************/
let getRecipe = pieType => recipes[pieType]

function combinePieIngredients(pieType) {
  const recipe = getRecipe(pieType);
  let combiningMsg = `Combining ingredients for ${pieType}: `;
  combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
  console.log(combiningMsg);
}

function bakePies(pieType, quantity) {
  for (let i = 0; i < quantity; i++) {
    combinePieIngredients(pieType);
    console.log(`Baked pie ${i + 1}!`);
  }
}

function calculatePieCost(pieType) {
  const ingredients = recipes[pieType];
  const costOfPie = ingredients.reduce((prev, current) => {
    return prev + current.cost;
  }, ingredients[0].cost);
  console.log(`Cost per pie: ${costOfPie}`);
  return costOfPie;
}

function sellPies(costPerPie, quantity, profitMargin=1.2) {
  let revenue = (costPerPie * profitMargin) * quantity;
  console.log(`Sold ${quantity} pies for $${revenue.toFixed(2)}!`);
}

/*************************** FUNCTION TO REFACTOR ****************************/
function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  const recipe = getRecipe(pieType);

  bakePies(pieType, pieQuantity);
  const costOfPie = calculatePieCost(pieType);
  sellPies(costOfPie, pieQuantity, profitMargin);
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
