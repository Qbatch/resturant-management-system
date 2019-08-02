var mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  
  _id: { type:String,required: true },
  name: { type: String },
  price: { type: Number },
  details: { type: String },
  image: { type: String },
  
  created : {type : Date},
  updated : {type : Date}
});

// const item = mongoose.model('item' , itemSchema );
// module.export = item


module.exports  = mongoose.model('item' , itemSchema ); 