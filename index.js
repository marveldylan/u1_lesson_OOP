// Look at the car object below: 
// Related properties and methods are packaged together.
// Fewer global variables.
// Readability.


// const car = {
//     make: 'Honda',
//     model: 'Civic',
//     color: 'red',
//     drive() {
//       console.log('vroom vroom');
//     },
//     gps(location) {
//       console.log(`Beep boop, driving to ${location}`);
//     },
//     paint(newColor) {
//       console.log(`Your car has been painted ${newColor}`);
//       this.color = newColor;
//     },
//   };

// Object-oriented programming (OOP) provides us with opportunities to clean up our procedural code and model it more-closely to the external world.

// OOP helps us to achieve the following...

// Abstraction: hiding all but the relevant data about an object in order to reduce complexity and increase efficiency
// Encapsulation: is the process of combining data and functions into a single unit
// Inheritance: Enables new objects to receive or inherit the properties and methods of existing objects
// Polymorphism: Allows for many forms of the same type of object through inheritance

// guitar characteristics
// color
// string <number>
// neck count
// electric or acoustic
// ==================
// play ---> produce a sound
// genre ---> what genre does the guitar play
// turnUpVolume --->

// this is a class function that makes guitars - class names are capitalized in js:
// class and constructor are reserved keywords in js and must be used in these ways:

class Guitar {
    constructor(make, model, color, type, strings, volume) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.type = type;
        this.strings = strings;
        this.volume = volume;
    }
// play is a function defined inside the guitar class, scope is only for things in the Guitar class.

    play() {
        console.log('this guitar is being played');
    }

    turnItUp() {
        this.volume +=5
        console.log(this.volume);
    }
}

// Use new and className(argument1, argument2, etc..) to create new instance of the class:

let blueGuitar = new Guitar('Fender', 'Stratocaster', 'blue', 'electric', 6, 0);
let blackGuitar = new Guitar('Kramer', 'Pacer', 'black', 'electric', 0, 0);
let tele = new Guitar('Fender', 'Telecaster', 'white', 'electric', 6, 0);
let evh = new Guitar('EVH', 'EVH', 'striped', 'eletric', 6, 0);

// console.log(blueGuitar);
// console.log(blackGuitar);
// console.log(tele);
// console.log(evh);
  
let bensGuitars = {
    blueGuitar,
    blackGuitar,
    tele,
    evh
}

// tele.play();
// tele.turnItUp();

// Inheritance

class Animal {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.diet = [];
    }

    eat(food) {
        this.diet.push(food);
        console.log(this.diet);
    }
}

// const dog = new Animal('Freddy', 'Chihuahua-Papillon-Mix');
// dog.eat('treatsies');
// console.log(dog);

// Check out this class inheritance yo, you can have classes inherit from other classes:
// extends and super are also reserved keywords - extends means current class is taking from parent class. Super says which traits to take.

class Dog extends Animal {
    // constructor must include all arguments taken from parent (from super), PLUS any extras specific to child class
    constructor(name, breed, tail) {
        // Super arguments name and breed (below) are taken from parent class Animal. Tail is new and specific only to Dog class.
        super(name, breed);
        this.waggingTail = tail;
    }

    //if  you want to modify a function from the parent, just redefine in the parent (will not transfer to siblings, obvi):
    eat(food) {
        this.diet.push(food);
        console.log(`Dogs love ${food}!`)
    }

    bark() {
        return `Bark! Hello, this is dog. My name is ${this.name}`
    }
}

class Cat extends Animal {
    constructor(name, breed, numLives) {
        super(name, breed);
        this.numLives = numLives;
    }

    meow() {
        return `Meow! Hello, I'm a cat. My name is ${this.name}`
    }
}

let freddie = new Dog ('Freddy', 'Chihuahua', true);
console.log(freddie);

// Child inherits any methods from parent class:
freddie.eat('treatsies');

console.log(freddie);

let garfield = new Cat ('Garfield,', 'Tabby', 9);

garfield.eat('Lasagna');

console.log(garfield);

// Takeaways:
// Classes are similar to objects. Class names are capitalized. Classes are built with the class and constructor keyword.
// keywords: class, constructor, inheritance: super, extends