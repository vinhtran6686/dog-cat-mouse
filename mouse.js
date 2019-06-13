function mouse(name) {
    this.name = name;
    this.Dead = false
}
mouse.prototype.die = function () {
    this.Dead = true;
}
mouse.prototype.run = function () {
    console.log('Run');
}
mouse.prototype.sleep = function () {
    console.log("sleeping...");
}

module.exports = mouse;