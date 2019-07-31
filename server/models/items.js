import mongoose from 'mongoose';

const item = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  details: { type: String },
  image: { type: String },
  
  created : {type : Date},
  updated : {type : Date}
});

export default mongoose.model('item' , item );
