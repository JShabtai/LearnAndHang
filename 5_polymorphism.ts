// 
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
  public makeSound(): void {
    console.log('Woof! Woof!');
  }

  public fetch(): void {
    console.log('Fetch! Good boy...');
  }
}

class Cat extends Animal {
  public makeSound(): void {
    console.log('Meow');
  }

  public giveYarn(): void {
    console.log('Here, have a ball of yarn');
  }
}

function playWithAnimal(animal: Animal) {
  if (animal instanceof Dog) {
    animal.fetch();
  }
  else if (animal instanceof Cat) {
    animal.giveYarn();
  }
}

// const animal = new Animal('Kyle'); <--- Not allowed!!!

const dog = new Dog('Scruffy');
dog.makeSound();

const cat = new Cat('Mittens');
cat.makeSound();

playWithAnimal(cat);


