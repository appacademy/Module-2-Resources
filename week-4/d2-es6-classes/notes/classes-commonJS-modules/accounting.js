class Invoice {
  constructor(invoiceNumber, client) {
    this.invoiceNumber = invoiceNumber;
    this.client = client;
  }

  getClientName() {
    console.log(this)
    return this.client;
  }
}
class Receipt {
  constructor(receiptNum, date) {
    this.receiptNum = receiptNum;
    this.date = date
  }
}

let invoice1 = new Invoice(123, 'shane');
let invoice2 = new Invoice(345, 'nick');
console.log(invoice1.getClientName())
console.log(invoice2.getClientName())

module.exports = {
  Invoice, Receipt
};
