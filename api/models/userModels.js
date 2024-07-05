const mongoose=require('mongoose');
const userShema=new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   isAdmin:{
      type:Boolean,
      default:false,
   },
   isDoctor:{
      type:Boolean,
      default:false,
   },
   notifcation:{
      type:Array,
      default:[],
   },
   seennotification:{
      type:Array,
      default:[],
   }
},
{
   timestamps:true,
})

const userModel=mongoose.model('users', userShema);

module.exports=userModel