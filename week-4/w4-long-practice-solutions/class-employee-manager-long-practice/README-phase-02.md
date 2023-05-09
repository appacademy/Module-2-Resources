# Phase 2: Define the `Manager` class that extends `Employee`

With your `Employee` module behaving as expected you can now move on to your 
`Manager` module.

## Instructions

In this phase you will create a `Manager` class that inherits from the 
`Employee` class you just made. Run the test specs using 
`npm test test/02-create-manager-spec.js`. Once the specs pass, use the local 
tests provided below to see your app in action.

Begin by creating a __manager.js__ file and requiring your `Employee` module. 
Next, you will define your `Manager` class as a child of the `Employee` class
that inherits all of the same properties. 

> **Note**: A `Manager` may be under another `Manager` because
>`Manager`s might report to higher-level `Manager`s.

You will need an additional `employees` property that holds an array of all 
`Employee`s assigned to the `Manager`.


If you run the following in node:
```js
const splinter = new Manager('Splinter', 100000, 'Sensei');
console.log(splinter);
```

You should see something like this:
```bash
Manager {
  name: 'Splinter',
  salary: 100000,
  title: 'Sensei',
  manager: null, 
  employees: []
}
```

Create an instance method named `addEmployee(employee)`. This method should add
an `Employee` instance to a `Manager` instance's `employees` array. 

In addition to passing the test specs, you should set up some more local tests 
to ensure your method is working properly.

```js
const splinter = new Manager('Splinter', 100000, 'Sensai');
console.log('Before: ', splinter);

const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

splinter.addEmployee(leo);
splinter.addEmployee(mikey);
splinter.addEmployee(donnie);
splinter.addEmployee(raph);

console.log('After: ', splinter);
```

When you run the above code, your terminal output should look something like 
this:

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
>__Note:__ _The `[Circular]` value you see attached to the `manager` key is just
>a cleaner way of saying that the `manager` key points back to the `Manager` you
>are currently looking at._

So your method works, but it would be a little painstaking to manually create 
each `Employee` and then add them to their prospective`Manager`'s `employees`
list.

In the next phase, you will tackle handling this task dynamically. You will 
refactor your code so that when you instantiate an `Employee`, they will add 
themselves to their `Manager`'s `employees` list.