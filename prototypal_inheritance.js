// Function.prototype.inherits = function(){
//     function Surrogate(){}
//     Surrogate.prototype = arguments[0].prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// }



//using Object.create
Function.prototype.inherits = function () {
    this.prototype = Object.create(arguments[0].prototype);
    this.prototype.constructor = this;
}

function MovingObject(name) { 
    this.name = name;
}

MovingObject.prototype.move = function(){
    console.log('Moving');
}

function Ship(name) { 
    MovingObject.call(this, name);
}
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);

