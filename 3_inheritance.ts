class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Dog extends Animal {

  // Note: No constructor is specified for this class, so the "super"
  // constructor is used (i.e. the parent class).

  public woof(): void {
    console.log('Woof! Woof!');
  }

  public greet(): void {
    console.log(`I'm ${this.name}. I'm a talking dog!`);
  }
}

const animal = new Animal('Mittens');
const dog = new Dog('Scruffy');

animal.greet();

dog.woof();
dog.greet();
