'use strict';

//todo 005 Constructor Functions and the new Operator
const Person = function (fName, bYear) {
  // Instance Properties
  this.fName = fName;
  this.bYear = bYear;

  // Instance Methods (BAD PRACTICE)
  // this.calcAge = function () {
  //   console.log(2024 - this.bYear);
  // };
};

// Instance Methods
Person.prototype.calcAge = function () {
  console.log(2024 - this.bYear);
};

const john = new Person('John', 1994);
const mini = new Person('Mini', 1997);

console.log(`🚀  john =>`, john);
console.log(`🚀  mini =>`, mini);

const jay = {
  fName: 'Jay',
  bYear: 2000,
};
console.log(jay instanceof Person); //False
console.log(john instanceof Person); //True

john.calcAge();
