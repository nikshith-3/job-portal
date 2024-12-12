var mongoose=require('mongoose')
// const jobSchema=mongoose.Schema({
//     job_id:Number,
//     job_name:String,
//     job_description:String,
//     job_location:String,
//     job_type:String,
//     job_salary:Number,
//     job_experience:String,
//     job_skills:String
// });
// var job=mongoose.model("jobs",jobSchema);
// module.exports=job;
const jobSchema = new mongoose.Schema({
    jobId:Number,
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number },
    //postedDate: { type: Date, default: Date.now },
  });
  var job=mongoose.model("job",jobSchema);
  module.exports=job;  