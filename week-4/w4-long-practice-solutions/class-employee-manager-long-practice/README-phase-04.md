# Phase 4: Calculate Bonuses

## Instructions

In this phase you will first add an instance method to an existing class that 
will calculate an `Employee`'s bonus. Your `Manager` class will automatically 
inherit this method, but you will need it to behave differently for a 
`Manager`. Luckily, polymorphism allows you to _override_ an existing method 
and alter its behavior. 

Be sure to understand what the problem is asking of you. Use Polya's framework 
to help build your understanding. Use the specs and local tests provided to 
help drive your development.

Run the specs with `npm test test/04-calculate-bonus-spec.js`

## Phase 4a

To begin with, define a method, `calculateBonus(multiplier)`, in the `Employee`
class. A regular `Employee` should calculate their bonus like this:

```plaintext
bonus = (employee salary) * multiplier
```

Run the following locally to confirm everything is working as it should. 

```js
const raph = new Employee('Raphael', 90000, 'Ninja');
const donny = new Employee('Donatello', 85000, 'Grasshopper');

console.log(raph.calculateBonus(0.25)); // => 22500
console.log(donny.calculateBonus(0.15)); // => 12750
```

## Phase4b

To calculate a `Manager`'s bonus you must sum the salaries of each `employee`
in their `employees` array. You must also take into account whether each
`employee` is an instance of an `Employee`, in which case simply add their
`salary` to a sum. If they are a `Manager` you must then process each of their
employees, and so on. 

The the repetitive nature of this problem suggests that a recursive solution
might be appropriate. You should extract this logic into a helper function
named `_totalSubSalary()`. The `_` ahead of the method name is an indication
to other developers that this method is "private" and should only
be used as a helper. 

Inside of `_totalSubSalary()`, create a sum variable. Check to see if each
`employee` is an instance of `Manager`. If so, add their `salary` plus a
recursive call to their `_totalSubSalary()` to sum. If not, simply add
their `salary` to sum. 

The `calculateBonus` logic should look something like this:

```plaintext
bonus = (manager's salary + total salary of all employees under them)
 * multiplier
```

Once all the test specs are passing try running these tests locally:

```js
const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000
```

Great job! If all the specs are passing and everything looks good, move on to
the next phase!