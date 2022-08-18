abstract class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }

  public abstract makeSound(): void;
}

class Dog extends Animal {

  // Note: No constructor is specified for this class, so the "super"
  // constructor is used (i.e. the parent class).

  public makeSound(): void {
    console.log('Woof! Woof!');
  }

  public greet(): void {
    console.log(`I'm ${this.name}. I'm a talking dog!`);
  }
}

// const animal = new Animal('Mittens'); <-- Can't do this!

const dog = new Dog('Scruffy');

dog.makeSound();
dog.greet();

