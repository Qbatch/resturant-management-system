var mongoose = require('mongoose');

const order = new mongoose.Schema({

  _id: {type: String, required: true},
  status: {type:String,required: true },
  total: {type:Number},
  
  created : {type : Date},
  updated : {type : Date},
  completed : {type : Date}
});

module.export = mongoose.model('orders', order);
