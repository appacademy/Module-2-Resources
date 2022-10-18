class Invoice {
  constructor(invoiceNumber, client) {
    this.invoiceNumber = invoiceNumber;
    this.client = client;
    this.reference = [];
  }

  addReference(ref) {
    this.reference = ref;
  }

  getClientName() {
    return this.client.name;
  }
}
class Receipt {
  constructor(receiptNum, date) {
    this.receiptNum = receiptNum;
    this.date = date
  }
}

const invoice = new Invoice(1046, 'shane')
console.log(invoice)
invoice.addReference(104958)
console.log(invoice)

console.log(invoice.getClientName())

module.exports = {
  Invoice, Receipt
};
