
var cat = require('./cat');
var dog = require('./dog');
var mouse = require('./mouse');

var cat = new cat();
var dog = new dog();
var mouse = new mouse('Mickey');

try{
    cat.eat(mouse);
}
catch (error){
    console.log('Cat can eat dog');
}
console.log(cat);
