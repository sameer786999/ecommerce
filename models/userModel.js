import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    
  name: {
    type: String,
    required: true,
    trim: true,
  },


  email: {
    type: String,
    required: true,
    unique: true,
  },


  password: {
    required: true,
    type: String,
  },


  phone: {
    required: true,
    type: String,
  },

  address: {
    required: true,
    type: String,
  },


  role: {
    type:String,
    default:0
  },
},{timestamps:true});

export default mongoose.model('users',userSchema);