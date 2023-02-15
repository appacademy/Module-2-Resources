## Bonus Phase 5: Testing

Imagine you have a company structured like this:

| Name     | Salary  | Title      | Boss   |
| -------- | ------- | ---------- | ------ |
| Hobbes   | 1000000 | Founder    | null   |
| Calvin   | 130000  | Director   | Hobbes |
| Susie    | 100000  | TA Manager | Calvin |
| Lily     | 90000   | TA         | Susie  |
| Clifford | 90000   | TA         | Susie  |

If Hobbes gets a bonus multiplier of 0.05, their bonus will be $70,500.

If Calvin gets a bonus multiplier of 0.05, their bonus will be $20,500.

If Susie gets a bonus multiplier of 0.05, their bonus will be $14,000.

If Lily gets a bonus multiplier of 0.05, their bonus will be $4,500.

If Clifford gets a bonus multiplier of 0.05, their bonus will be $4,500.

Create a new file called __test.js__. Create the scenario above and make sure
you get the correct bonuses for each employee.