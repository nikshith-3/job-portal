var mongoose=require('mongoose');
var userSchema=new mongoose.Schema({
    username:String,
        password: String,
        email:String,
        phone:String,
        role:String
    
})
var User=mongoose.model('User',userSchema);
module.exports=User;