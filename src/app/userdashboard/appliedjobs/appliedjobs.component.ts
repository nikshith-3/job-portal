import { Component, OnInit} from '@angular/core';
import { JobService } from '../../service/job.service';
import { ActivatedRoute } from '@angular/router';
import { AppliedjobsService } from '../../service/appliedjobs.service';
@Component({
  selector: 'app-applied-jobs',
  templateUrl: './appliedjobs.component.html',
  styleUrls: ['./appliedjobs.component.css']
})

export class AppliedJobsComponent implements OnInit {
  totalJobs: number = 20;
  usersOnline: number = 10;
  totalEmails: number = 6;
  totalNotifications: number = 10;

  constructor(private appliedjobsservice: AppliedjobsService) { }
  ngOnInit(): void {
    this.loadappliedjobsData(); 
  }
  loadappliedjobsData(): void { 
    this.appliedjobsservice.getappliedCounts().subscribe(data => {
      this.totalJobs = data.totalJobs;
      this.usersOnline = data.usersOnline;
      this.totalEmails = data.totalEmails;
      this.totalNotifications = data.totalNotifications;
    }, error => {
      console.error('Error fetching applied jobs data', error);
    });
  }
  

  
}
