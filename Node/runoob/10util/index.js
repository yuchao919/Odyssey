var util = require('util');

function Base() {
    this.name = 'Base';
    this.age = 27;
    this.sayHello = function () {
        console.log('hello ' + this.name);
    }
}

Base.prototype.showName = function () {
    console.log('name is ' + this.name);
}

function Sub(arguments) {
    this.name = 'Sub';
}

util.inherits(Sub, Base);

var base = new Base();
base.sayHello();
base.showName();

var sub = new Sub();
// sub.sayHello();
sub.showName();


function Person() {
    this.name = 'John';
    this.toString = function () {
        return this.name;
    }
    this.info = {
        base: {
            gender: 'male'
        }
    }
}

var person = new Person();
console.log(util.inspect(person));
console.log(util.inspect(person, true, null, true));