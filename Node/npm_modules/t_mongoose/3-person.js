var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    n: {
        type: String,
        // Now accessing `name` will get you the value of `n`, and setting `n` will set the value of `name`
        alias: 'name'
    }
});

var Person = mongoose.model('Person', personSchema);

// Setting `name` will propagate to `n`
var person = new Person({
    name: 'Val'
});
console.log(person); // { n: 'Val' }
console.log(person.toObject({
    virtuals: true
})); // { n: 'Val', name: 'Val' }
console.log(person.name); // "Val"

person.name = 'Not Val';
console.log(person); // { n: 'Not Val' }