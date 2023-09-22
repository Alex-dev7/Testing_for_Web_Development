const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validator = function(value) {
  return value <= 10;
};

const DinosaurSchema = new Schema(
  {
    name: {type: String, required: true},
    count: {
      type: Number,
      max: [10, 'Cannot hold more than 10 dinosaurs.']
    },
    risk: {type: String}
  }
);

// method .findByName
DinosaurSchema.statics.findByName = function(name, callback) {
  return this.findOne({ name: name }, callback);
};

// method .breed
DinosaurSchema.methods.breed = function(arg){
  this.count =this.count + 1
}


module.exports = mongoose.model('Dinosaur', DinosaurSchema);