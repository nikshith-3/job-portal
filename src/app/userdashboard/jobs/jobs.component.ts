import { Component } from '@angular/core';
import { JobService } from '../../service/job.service';
import { Job } from '../../service/jobs';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {

  constructor(private jobService: JobService,private service:ServiceService) { }
len:any;
jobss:any;

  ngOnInit() {
    this.service.getjobs().subscribe((data)=>{
      this.jobss=data;
      console.log(data)
    })
   
  }

  loadJobs(): void {
    this.jobService.getJobs().subscribe(
      (data) => this.jobss = data,
      (error) => console.error('Error fetching jobs', error)
    );
  }

  applyForJob(jobId: number): void {
    alert(`Applied for job with ID: ${jobId}`); 
  }
}
