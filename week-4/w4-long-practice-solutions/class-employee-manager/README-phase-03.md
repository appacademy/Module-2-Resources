# Phase 3: Dynamically adding employees

Now that you have an `addEmployee(employee)` method, you should think about a 
way to call it such that whenever an `Employee` is instantiated with a 
`manager` in its arguments, the `Employee` is automatically added to the 
`Manager`'s `employees` array. 

## Instructions

Take a few minutes to discuss this with your partner. Read over the above 
paragraph a few times and try to truly understand what the problem is asking
of you. Use the specs provided by running 
`npm test test/03-dynamic-add-employee-spec.js` to help guide your development.

If you find you are stuck for longer than 15 minutes, check out the hint at the
bottom of this page. 

If everything is working, you no longer need to run `addEmployee(employee)` on
each instance you created. You have successfully handled this problem 
dynamically!

If you replace your local tests in __manager.js__ with:

```js
const splinter = new Manager('Splinter', 100000, 'Sensei');
console.log('Before: ', splinter);

const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

console.log('After: ', splinter);
```

You should get the same output as before:

```bash
Before:  Manager {
  name: 'Splinter',
  salary: 100000,
  title: 'Sensei',
  manager: null,
  employees: []
}


After:  Manager {
  name: 'Splinter',
  salary: 100000,
  title: 'Sensei',
  manager: null,
  employees: [
    Employee {
      name: 'Leonardo',
      salary: 90000,
      title: 'Ninja',
      manager: [Circular]
    },
    Employee {
      name: 'Michelangelo',
      salary: 90000,
      title: 'Ninja',
      manager: [Circular]
    },
    Employee {
      name: 'Donatello',
      salary: 90000,
      title: 'Ninja',
      manager: [Circular]
    },
    Employee {
      name: 'Raphael',
      salary: 90000,
      title: 'Ninja',
      manager: [Circular]
    }
  ]
}
```

Great work, team! While it may seem like you only save 4 lines of code here, 
imagine if you had hundreds or thousands of employees. This small refactor saves
you a ton of work down the road. 

Now that you can keep track of all of your `Employees` and `Managers`, you need to
figure out the most important part. The bonuses! Move on to Phase 4 whenever 
you are ready.

## Hint

The key to solving this problem is understanding that you want 
`addEmployee(employee)` to run **upon instantiation** of a new Employee.This 
means you want to somehow call the method inside of your Employee constructor. 
Remember that the `manager` argument that you are passing in will be an 
instance of a `Manager`. This means you can access its `addEmployee(employee)`
method without the need to import the `Manager` module. Simply check if the 
`manager` parameter is truthy, if so call `manager.addEmployee(?)`. 

What should you pass `addEmployee(?)` as an argument here? What represents the 
`employee`?


