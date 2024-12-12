import { Component } from '@angular/core';
import { Job, JOBS} from '../../service/jobs';
import { JobService } from '../../service/job.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrl: './add-jobs.component.css'
})
export class AddJobsComponent {
  // newjob: Job = { id: 0, title: 'any', description: 'any', location:'any'}
  // constructor( private router:Router,private jobService: JobService) { }
  // addJob(): void {
  //   if (this.newjob.title==='any' && this.newjob.description) {
  //     this.jobService.getJobs().subscribe(jobs => {
  //       const maxId = jobs.length > 0 ? Math.max(...jobs.map(job => job.id)) : 0;
  //       this.newjob.id = maxId + 1;
  //       this.jobService.addJob(this.newjob).subscribe(
  //         () => {
  //           alert('Job added successfully!');
  //           this.resetForm();
  //         },
  //         error => console.error('Error adding job', error)
  //       );
  //     });
  //   } else {
  //     alert('Please provide job title and description.');
  //   }
  // }
  // resetForm(): void {
  //   this.newjob = { id: 0, title: 'any', description: 'any', location:'any' };
  // }
  
  // addme(){
  //   console.log(this.newjob);
  //   let res=this.jobService.addjobs(this.newjob);
  //   this.route.navigateByUrl('admin/jobs1')
  // }


  addjobform:FormGroup=new FormGroup({})
  constructor( private fb:FormBuilder,private jobService: JobService) {
    this.addjobform=this.fb.group({
      JobTitle:['',Validators.required],
    JobDescription:['',Validators.required],
    JobLocation:['',Validators.required],
    JobSalary:['',Validators.required]
    })
  }
  result:any;
  addJob(){
    this.jobService.addjob(this.addjobform.value).subscribe((data)=>{
      this.result=data;
      console.log(this.result);
      alert(this.result)
    })
  }

}
