type Habitat = 'land' | 'water';
type AnimalType = 'cat' | 'dog' | 'shark';

// With plain JS objects
/* ---------------------------------------- */
interface IAnimal {
  type: AnimalType;
}

function getAnimalHabitat(animal: IAnimal): Habitat {
  if (animal.type === 'shark') {
    return 'water';
  }

  return 'land';
}

function printAnimal(animal: IAnimal): void {
  console.log(`I am a ${animal.type}. I live in/on ${getAnimalHabitat(animal)}.`);
}

const dog: IAnimal = {
  type: 'dog',
};
const cat: IAnimal = {
  type: 'cat',
};
const shark: IAnimal = {
  type: 'shark',
};

printAnimal(dog);
printAnimal(cat);
printAnimal(shark);

// With classes
/* ---------------------------------------- */

class Animal {
  public type: string;

  constructor(type: string) {
    this.type = type;
  }

  public getHabitat(): Habitat {
    if (this.type === 'shark') {
      return 'water';
    }

    return 'land';
  }

  public print(): void {
    console.log(`I am a ${this.type}. I live in/on ${this.getHabitat()}.`);
  }
}

const dog_c = new Animal('dog');
const cat_c = new Animal('cat');
const shark_c = new Animal('shark');

dog_c.print();
cat_c.print();
shark_c.print();
