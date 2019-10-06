var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [
    {
      body: String,
      date: Date
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

var Blog = mongoose.model('Blog', blogSchema);

// define a schema
var animalSchema = new Schema({
  name: String,
  type: String
});

// assign a function to the "methods" object of our animalSchema
animalSchema.methods.findSimilarTypes = function(cb) {
  return this.model('Animal').find(
    {
      type: this.type
    },
    cb
  );
};

// assign a function to the "statics" object of our animalSchema
animalSchema.statics.findByName = function(name, cb) {
  return this.find(
    {
      name: new RegExp(name, 'i')
    },
    cb
  );
};

var Animal = mongoose.model('Animal', animalSchema);
var dog = new Animal({
  type: 'dog',
  name: 'Naonao'
});

dog.findSimilarTypes(function(err, dogs) {
  console.log(dogs); // woof
});
