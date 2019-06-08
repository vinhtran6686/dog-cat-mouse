var Dog = require('./Dog');
var cat = require('./cat');

var dog = new Dog('tom');
dog.Say();
var MEO  = new cat();
dog.Eat(MEO);
console.log(dog);