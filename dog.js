var chalk = require('chalk');
function Dog(name) {
    this.name = name;
    this.stomach = [];
}
Dog.prototype.Eat = function (cat) {
    this.stomach.push(cat);
}
Dog.prototype.Say = function () {
    console.log('I am  a Dog, Name: ' + chalk.bgBlue(this.name));
}

module.exports = Dog;