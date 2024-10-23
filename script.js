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
/* 
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

  get age() {
    return 2024 - this.bYear;
  }

  // Set properties already exists
  set fName(name) {
    if (name.includes(' ')) this._fName = name;
    else alert(`${name} is not a full name!`);
  }

  get fName() {
    return this._fName;
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
console.log(`john.age: `, john.age);
console.log(`🚀  john =>`, john);

const walter = new PersonCl('Walter White', 1990);
console.log(`🚀  walter =>`, walter);
console.log(walter.fName);

// NOTED:
//  * 1. Classes are NOT hoisted
//  * 2. Classes are first-class citizens
//  * 3. Classes are executed in strict mode
 */

/* console.log(`=======================`);
//todo 011 Setters and Getters
const acc = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(acc);
console.log(acc.latest);
acc.latest = 5000;
console.log(acc.movements); */
/* 
//todo 012 Static Methods
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Instance Methods
  this.calcAge = function () {
    console.log(2024 - this.birthYear);
  };
};

const john = new Person('John', 1994);
console.log(`🚀  john =>`, john);
john.calcAge();

// Static Methods
Person.hey = function () {
  console.log(`Hi there 🤣🤣🤣`);
  console.log(this);
};
Person.hey(); */

/* 
//todo 013 Object.create
const PersonProto = {
  calcAge() {
    console.log(`calcAge: `, 2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.bYear = 1990;

console.log(`🚀  steven =>`, steven);
steven.calcAge();
console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1997);
console.log(`🚀  sarah =>`, sarah);
sarah.calcAge();
 */

/* 
const PersonPrototype = {
  init(fName, bYear) {
    this.fName = fName;
    this.bYear = bYear;
  },

  countAge() {
    console.log(`Your age is: `, 2024 - this.bYear);
  },
};

const mini = Object.create(PersonPrototype);
mini.init('Nguyen Thi Lan Mai', 1997);
console.log(`🚀  mini =>`, mini);
mini.countAge(); */

/* 
//todo 014 Coding Challenge #2
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} Current Speed = ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} Current Speed = ${this.speed}km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
}

// Data: Ford 120
const ford = new Car('Ford', 120);
console.log(`🚀  ford =>`, ford);
console.log(`🚀speedUS ${ford.speedUS}mi/h`);
ford.speedUS = 50;
console.log(`🚀  ford =>`, ford); */

//todo 015 Inheritance Between Classes Constructor Functions
/* 
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(`Result calcAge: `, 2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}!`);
};

const mike = new Student('Mike', 2020, 'Computer');
// console.log(`🚀  mike =>`, mike);
mike.introduce();
mike.calcAge();
console.log(`===============================`);
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); */

//todo 016 Coding Challenge #3
/* 
// =>Parent
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} Current Speed = ${this.speed}km/h`);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} Current Speed = ${this.speed}km/h`);
};

// =>Child
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Linking Prototype
EV.prototype = Object.create(Car.prototype);

// Create Instance Methods
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(`🚀  tesla =>`, tesla);

tesla.brake();
tesla.accelerate();
 */

//todo 017 Inheritance Between Classes ES6 Classes
/* 
class PersonCl {
  constructor(fName, bYear) {
    this.fName = fName;
    this.bYear = bYear;
  }

  init(firstName, birthYear) {
    this.fName = firstName;
    this.bYear = birthYear;
  }

  calcAge() {
    console.log(`calcAge: `, 2024 - this.bYear);
  }

  greet() {
    console.log(`Hello ${this.fName}`);
  }
}

class StudentCl extends PersonCl {
  constructor(fName, bYear, course) {
    super(fName, bYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `My name is ${this.fName}, I am ${2024 - this.bYear} & I studying ${
        this.course
      }`
    );
  }

  calcAge() {
    console.log(`I am ${2024 - this.bYear} years old now!`);
  }
}

const student = new StudentCl('John', 1994, 'Fullstacks Web Developer');
console.log(`🚀  student =>`, student);
student.introduce();
student.calcAge(); */

//todo 018 Inheritance Between Classes Object.create
/* 
const PersonProto = {
  init(fName, bYear) {
    this.fName = fName;
    this.bYear = bYear;
  },

  caclAge() {
    console.log(2024 - this.bYear);
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (fName, bYear, course) {
  PersonProto.init.call(this, fName, bYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(
    `My name is ${this.fName} and I am ${
      2024 - this.bYear
    } years old. I am studying ${this.course}`
  );
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2000, 'Computer Science');
console.log(`🚀  jay =>`, jay);
jay.introduce();
jay.caclAge(); */

//todo 019 Another Class Example
/* 
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1); */

//todo 020 Encapsulation Protected Properties and Methods
//todo 021 Encapsulation Private Class Fields and Methods
//todo 022 Chaining Methods
//todo 023 ES6 Classes Summary

class Person {
  //1) Public fields (instances)
  _phone = '0935664313';
  _address = 'Thua Thien Hue';
  _balance = [];

  //2) Private fields
  #username;
  #pin;

  constructor(fName, bYear, username, pin) {
    this._fName = fName;
    this._bYear = bYear;
    this.#username = username;
    this.#pin = pin;
  }

  // Public methods
  getFullName() {
    console.log(`My name's ${this._fName}`);
  }

  getAge() {
    console.log(`I am ${2024 - this._bYear} years old!`);
  }

  getAccount() {
    console.log(`Your username: `, this.#username);
    console.log(`Your pin: `, this.#pin);
  }

  deposit(value) {
    this._balance.push(value);
    return this;
  }

  withdraw(value) {
    this._balance.push(-value);
    return this;
  }

  // Private methods
  #getPhoneNumber() {
    console.log(`Your phone number is: `, this._phone);
  }
}

const john = new Person('John', 1994, 'john', 1111);
// john.getAccount();

/* Private fields (Can't access!)
john.#username;
john.#pin; */

/* Can't access cause getPhoneNumber is Private Method
john.getPhoneNumber(); */

// Chain
john
  .deposit(100)
  .deposit(200)
  .deposit(300)
  .withdraw(400)
  .withdraw(500)
  .withdraw(600);

console.log(`🚀  john =>`, john);
