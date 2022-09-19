class Invoice {
  constructor(invoiceNumber, client) {
    this.invoiceNumber = invoiceNumber;
    this.client = client;
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


module.exports = {
  Invoice, Receipt
};
