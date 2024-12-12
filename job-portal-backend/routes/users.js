var express = require('express');
var User=require('../models/user');
var bcrypt=require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv').config();
var router = express.Router();
var mailer=require('nodemailer');
const { text } = require('body-parser');
router.post("/registration",(req,res)=>{
  User.findOne({username:req.body.username})
  .then(async(dbuser)=>{
    if(dbuser!=null){
      res.send({status:"user already existed"})
    }
    else{
      console.log(dbuser)
      var newuser=new User({
        username:req.body.username,
        password: await bcrypt.hash(req.body.password,10),
        email:req.body.email,
        phone:req.body.phone,
        role:req.body.role
      })
      newuser.save()
      .then((result)=>{
        var transporter=mailer.createTransport({
          host:"smtp.gmail.com",
          auth:{
            user:"devarasettinikshith9@gmail.com",
            pass:"kujs lsvv hjpj tbap"
          }
        })
        var mailOptions={
          from:"devarasettinikshith9@gmail.com",
          to:req.body.email,
          subject:"Registration succesfully on this websiteee ",
          text:"Hello"+ req.body.username+ "you have succesfully on this websiteee "
        }
        transporter.sendMail(mailOptions,(err,info)=>{
          console.log(mailOptions)
          if(err){
            console.log(err)
          }
          else{
            console.log("Email sent: "+info.response)
          }
        })
      })
      .then((result)=>{res.send({status:"user registered successfully",response:result})})
      .catch((err)=>console.log((err)))
    }
  })
  .catch((err)=>console.log(err))
})
router.post("/login",(req,res)=>{
  User.findOne({username:req.body.username})
  .then(async(dbuser)=>{
    if(dbuser!=null){
      if(await bcrypt.compare(req.body.password,dbuser.password)){
        const token=jwt.sign({username:dbuser.username},process.env.JWT_secret,{expiresIn:'1h'})
        res.send({result:"login successfully",jwttoken:token,response:dbuser})
      }
      else{
        res.send({result:"username  or password invalid"})
      }
    }
    else{
     res.send({result:"user not found"})   
    }
  })
  .catch((err)=>res.send({result:"something went wrong"}))

});
module.exports = router;
// kujs lsvv hjpj tbap
