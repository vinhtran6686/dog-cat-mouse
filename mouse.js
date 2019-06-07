function mouse(name) {
    this.name = name;
    this.Dead = false
}
mouse.prototype.die = function () {
    this.Dead = true;
}
module.exports = mouse;