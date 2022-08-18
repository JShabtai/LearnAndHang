interface Printable {
  // What happens if we change the signature of this method?
  print(verbose: boolean): void;
  prefix: string;
  // What happens if we add another field or method here?
}

class Transaction implements Printable {
  // Make this private to prevent outside code from modifying it
  private amount: number;
  public prefix: string = '--';


  // TODO: Track dates of transactions because Bill is tired of searching through logs

  constructor(amount: number) {
    this.amount = amount;
  }

  public getAmount(): number {
    return this.amount;
  }

  public print(): void {
    const type = this.amount > 0 ? 'Deposit' : 'Withdrawal';

    console.log(`${this.prefix}${type}:\t${Math.abs(this.amount)}`);
  }
}

class BankAccount implements Printable {
  // Note: All fields have a default value, so no constructor is needed
  private balance: number = 0;
  private transactions: Transaction[] = [];
  public prefix: string = '';

  public getBalance(): number {
    return this.balance;
  }

  // Add a transaction to this account, and return the new balance
  public addTransaction(transaction: Transaction): number {
    this.transactions.push(transaction);
    this.balance += transaction.getAmount();

    return this.balance;
  }

  public print() {
    console.log(`Current account balance is: ${this.balance}`);
  }
}

const b = new BankAccount();
b.addTransaction(new Transaction(5));
b.print()
const t = new Transaction(5);
t.print();

function foo() {
  let x = 8;
  function bar() {
    console.log(x)
  }

  x = 5

  return bar;
}

let bar = foo()
bar();

// Questions:
// Why use an interface instead of inheritance?
