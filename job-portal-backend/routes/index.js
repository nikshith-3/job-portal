var express = require('express');
const job=require('../models/jobs');
const User = require('../models/user');
var router = express.Router();


/*get jobs */
router.get("/jobs",(req,res)=>{
  job.find({})
  .then((data)=>res.send(data))
  .catch((err)=>console.log(err))
})
/*add job */
router.post('/add',(req,res)=>{
  var newjob=new job(req.body);
  newjob.save()
  .then(()=>{res.send("job added")})
  .catch((err)=>console.log(err))
  })
  /* Adding many products in a single time*/ 
router.post("/addmany",(req,res)=>{
  job.insertMany(req.body)
  .then(()=>{res.send("array of jobs added")}) 
  .catch((err)=>console.log(err))
  })
/*get jobs by id */
router.get("/job/:id",(req,res)=>{
  job.findOne({job_id:req.params.id})
  .then((docs)=>res.send(docs))
  .catch((err)=>console.log(err))
})
/*update the job */
router.put("/update/:id",(req,res)=>{
  job.findByIdAndUpdate(req.params.id,req.body)
  .then(()=>{res.send("success")})
  .catch((err)=>console.log(err))
})
/*delete the job */
router.delete("/delete/:id",(req,res)=>{
  job.findByIdAndRemove(req.params.id)
  .then(()=>{res.send("deleted")})
  .catch((err)=>console.log(err))
  })
  /*get api users*/
  router.get("/users",(req,res)=>{
    User.find({})
    .then((dataa)=>res.send(dataa))
    .catch((err)=>console.log(err))
  });
  

module.exports = router;
