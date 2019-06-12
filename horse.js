function Horse(){
}

Horse.prototype.jump = function(){
    console.log("Jump...");
}


Horse.prototype.run = function(){
    console.log('running!');
}

module.exports = Horse;