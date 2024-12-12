import { Component, OnInit } from '@angular/core';
import { JobService } from '../../service/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})

export class JobsComponent implements OnInit {
p: any;
appliedjobs(arg0: any) {
throw new Error('Method not implemented.');
}
  jobs: { id: number, title: string, description: string }[] = [];

  constructor(private jobService: JobService, private router:Router) { }
  len:any;
  ngOnInit(): void {
    this.loadJobs();
    

  }

  loadJobs(): void {
    this.jobService.getJobs().subscribe(
      data => this.jobs = data,
      error => console.error('Error fetching jobs', error)
    );
  }

}
  

