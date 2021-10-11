const sales = require('./sales');
const { Invoice, Receipt } = require('./accounting');

const client = new sales.Client('Big Business, Inc.', '1 Corporate Drive.');
const invoice = new Invoice('111-R1-20', client);
const receipt = new Receipt(4, '4/6/21')
console.log(receipt)

console.log(invoice.getClientName());
