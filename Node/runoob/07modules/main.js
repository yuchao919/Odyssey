var hello = require('./hello');
hello.world();

var Hello = require('./helloModule');
var hellObj = new (require('./helloModule'))();
hellObj.setName('leslie');
hellObj.sayHello();