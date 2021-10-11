class Wallet {
	constructor(startAmount, cards=[]) {
		this.balance = startAmount;
		this.cards = cards;
		this.color = red;
	}

	addMoney(amount) {
		this.balance += amount;
	}
	
	removeMoney(amount) {
		this.balance -= amount;
	}
	
	getBalance() {
		return this.balance;
	}
	
	getCardCount() {
		return this.cards.length;
	}
	
	putCardIn(card) {
		this.cards.push(card);
	}
	
	getCardOut(name) {
		const index = this.cards.findIndex(x => x.name === name);
		if (index === -1) return null;
		const card = this.cards[index];
		this.cards.splice(index, 1);
		return card;
	}
}



console.log('Create a wallet with $101 in it.');
const wallet = new Wallet(101);

console.log('Balance:', wallet.getBalance());
console.log('my cards', wallet.cards)
// console.log();
// console.log('Add $32');
// wallet.addMoney(32);
// console.log('Balance:', wallet.getBalance());
// console.log();
// console.log('Spend $98');
// wallet.removeMoney(98);
// console.log('Balance:', wallet.getBalance());
// console.log();
console.log('Put an AMEX in the wallet');

const card = {
	name: 'AMEX',
	number: '3524 100098 11223'
};

wallet.putCardIn(card);
console.log("my cards", wallet.cards);

// console.log('Card count:', wallet.getCardCount());
// console.log();
// console.log('Get Visa:', wallet.getCardOut('Visa'));
// console.log('Card count:', wallet.getCardCount());
// console.log();
// console.log('Get AMEX:', wallet.getCardOut('AMEX'));
// console.log('Card count:', wallet.getCardCount());
// console.log();

// const curtisWallet = new Wallet(100, []);
// const bartsWallet = new Wallet(324, [{
// 	name: 'Visa',
// 	number: '0000 0000 0000 0000',
// }]);


// curtisWallet.addMoney(15);
// bartsWallet.addMoney(16);

// console.log(curtisWallet.getBalance());
// console.log(bartsWallet.getBalance());
// console.log(curtisWallet.getCardCount());
// console.log(bartsWallet.getCardCount());