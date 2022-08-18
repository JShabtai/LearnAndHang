class Transaction {
  // Make this private to prevent outside code from modifying it
  private readonly amount: number;

  // TODO: Track dates of transactions because Bill in accounting is tired of searching through logs

  constructor(amount: number) {
    this.amount = amount;
  }

  public getAmount(): number {
    return this.amount;
  }

  public print(): void {
    const type = this.amount > 0 ? 'Deposit' : 'Withdrawal';

    console.log(`${type}:\t${Math.abs(this.amount)}`);
  }
}

class BankAccount {
  // Note: All fields have a default value, so no constructor is needed
  private balance: number = 0;
  private transactions: Transaction[] = [];

  public getBalance(): number {
    return this.balance;
  }

  public transactionIsValid(transaction: Transaction): boolean {
    const amount = transaction.getAmount();

    if (amount < 0 && Math.abs(amount) > this.balance) {
      return false;
    }

    return true;
  }

  // Add a transaction to this account, and return the new balance
  public addTransaction(transaction: Transaction): number {
    if (!this.transactionIsValid(transaction)) {
      console.log(`Cannot perform transaction for ${transaction.getAmount()} with balance of ${this.balance}`)
      return this.balance;
    }

    this.transactions.push(transaction);
    this.balance += transaction.getAmount();

    console.log(`Account updated with transaction for ${transaction.getAmount()}. New balance is ${this.balance}`);

    return this.balance;
  }

  public printTransactions(): void {
    for (const transaction of this.transactions) {
      transaction.print();
    }
  }
}

const account = new BankAccount();

account.addTransaction(new Transaction(10));
account.addTransaction(new Transaction(-20));
account.addTransaction(new Transaction(20));
account.addTransaction(new Transaction(-5));

account.printTransactions();

// Forbidden!
// account.balance = 99999;
// account.transactions.push(new Transaction(99999));
