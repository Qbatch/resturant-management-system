import mongoose from 'mongoose';

const order = new mongoose.Schema({
  status: {type:String,required: true },
  Total_Price : {type: Number},
  completed_Time: { type: Date},
  created : {type : Date},
  updated : {type : Date}
});

export default mongoose.model('order', order);
