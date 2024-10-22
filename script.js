'use strict';

//todo 005 Constructor Functions and the new Operator
// const Person = function (fName, bYear) {
// Instance Properties
// this.fName = fName;
// this.bYear = bYear;

// Instance Methods (BAD PRACTICE)
// this.calcAge = function () {
//   console.log(2024 - this.bYear);
// };
// };

// Instance Methods
// Person.prototype.calcAge = function () {
//   console.log(2024 - this.bYear);
// };

// const john = new Person('John', 1994);
// const mini = new Person('Mini', 1997);

// console.log(`🚀  john =>`, john);
// console.log(`🚀  mini =>`, mini);

// const jay = {
//   fName: 'Jay',
//   bYear: 2000,
// };
// console.log(jay instanceof Person); //False
// console.log(john instanceof Person); //True

// console.log(Person.prototype);
// console.log(john.__proto__);
// console.log(Person.prototype === john.__proto__); //True
// console.log(Person.prototype.isPrototypeOf(john)); //True
// console.log(Person.prototype.isPrototypeOf(mini)); //True
// console.log(Person.prototype.isPrototypeOf(Person)); //False
// john.calcAge();

// Person.prototype.species = 'Homo Sapiens';
// console.log(john, mini);
// console.log(john.species, mini.species);

// console.log(john.hasOwnProperty('fName')); //true
// console.log(john.hasOwnProperty('bYear')); //true
// console.log(john.hasOwnProperty('species')); //false
// ===================================================
// ===================================================

// Object.prototype (top of prototype chain)
/* 
console.log(john.__proto__);
console.log(john.__proto__.__proto__);
console.log(john.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2, 3, 4, 5, 6, 7];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__ === Array.prototype); //True

// Don't do this!
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
 */

//todo 009 Coding Challenge #1
/* 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} Current Speed = ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} Current Speed = ${this.speed}km/h`);
};

const bmw = new Car('BMW', 120);
const mer = new Car('Mercedes', 95);

// Results
console.log(`🚀  bmw =>`, bmw);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();
console.log(`===================`);
console.log(`🚀  mer =>`, mer);
mer.accelerate();
mer.accelerate();
mer.brake();
mer.accelerate();
mer.accelerate(); */

//todo 010 ES6 Classes
class PersonCl {
  constructor(fName, bYear) {
    this.fName = fName;
    this.bYear = bYear;
  }

  // Methods will be added to the prototype properties
  caclAge() {
    console.log(2024 - this.bYear);
  }

  getName() {
    console.log(`My name is: ${this.fName}`);
  }

  greet() {
    console.log(`Hello ${this.fName}`);
  }
}

const john = new PersonCl('John Ho', 1994);
console.log(`🚀  john =>`, john);
john.getName();
john.caclAge();
console.log(john.__proto__ === PersonCl.prototype); //True
console.log(john.__proto__);
console.log(PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hello ${this.fName}`);
// };

john.greet();
