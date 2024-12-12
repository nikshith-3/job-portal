import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job,JOBS} from './jobs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  // // private jobs: Job[] = JOBS; 
  // constructor(private jobService: JobService) { }

  // ngOnInit(): void {
  //   this.loadJobs();
  // }

  // loadJobs(): void {
  //   this.jobService.getJobs().subscribe(
  //     (data: Job[]) => this.jobs = data,
  //     (error) => console.error('Error fetching jobs', error)
  //   );
  // }

  // applyForJob(jobId: number): void {
  //   alert(`Applied for job with ID: ${jobId}`); // Replace with actual apply logic
  // }
  private jobs: Job[]=[
    { id: 1, title: 'Software Engineer', description: 'Develop and maintain software applications.',location:'Remote' },
    { id: 2, title: 'Product Manager', description: 'Manage product development and strategy',location:'Remote'},
    { id: 3, title: 'UX Designer', description: 'Design and enhance user experiences for products',location:'Remote'},
    { id: 4, title: 'Data Scientist', description: 'Analyze complex data to help companies make informed decisions',location:'Remote'},
    { id: 5, title: 'DevOps Engineer', description: 'Automate and improve development and deployment processes',location:'Remote'},
    { id: 6, title: 'Front-End Developer', description: 'Build and maintain the user interface of web applications',location:'Remote'},
    { id: 7, title: 'Back-End Developer', description: 'Develop server-side logic and databases for web applications',location:'Remote'},
    { id: 8, title: 'Full Stack Developer', description: 'Work on both the front-end and back-end of web applications',location:'Remote'},
    { id: 9, title: 'Marketing Specialist', description: 'Create and implement marketing strategies to promote products',location:'Remote'},
    { id: 10, title: 'Customer Support Representative', description: 'Assist customers with inquiries and issues related to products and services',location:'Remote'},
    { id: 11, title: 'Sales Manager', description: 'Lead and manage the sales team to achieve sales targets',location:'Remote'},
    { id: 12, title: 'Business Analyst', description: 'Identify business needs and propose solutions to improve efficiency',location:'Remote'},
    { id: 13, title: 'Quality Assurance Engineer', description: 'Test software to ensure it meets quality standards and specifications',location:'Remote'},
    { id: 14, title: 'Network Administrator', description: 'Manage and maintain network systems to ensure reliable connectivity',location:'Remote'},
    { id: 15, title: 'HR Manager', description: 'Oversee recruitment, employee relations, and HR policies',location:'Remote'},
    { id: 16, title: 'Content Writer', description: 'Create engaging and relevant content for various platforms',location:'Remote'},
    { id: 17, title: 'Project Manager', description: 'Plan, execute, and close projects efficiently and within budget',location:'Remote'},
    { id: 18, title: 'Graphic Designer', description: 'Design visual content for marketing materials and digital platforms',location:'Remote'},
    { id: 19, title: 'Systems Analyst', description: 'Analyze and design information systems to meet business needs',location:'Remote'},
    { id: 20, title: 'Financial Analyst', description: 'Analyze financial data to help guide business decisions',location:'Remote'}
  ];
  constructor(private http:HttpClient){}
  


  getJobs(): Observable<{ id: number, title: string, description: string,location:string }[]> {
    return of(this.jobs);
  }
  getjobs(): Observable<Job[]> {
    return of(JOBS);
  }

  // Fetch a single job by ID
  getJobById(id: number): Observable<Job | undefined> {
    const job = this.jobs.find(job => job.id === id);
     return of(job);
  }

  // Add a new job
  addjob(newjob:any)
  {
return this.http.post('https://localhost:4300/add',newjob,{responseType:'text'})
  }
  updateJob(updatedJob: Job): Observable<Job[]> {
    const index = JOBS.findIndex((job:any)=> job.id === updatedJob.id);
    if (index !== -1) {
      JOBS[index] = updatedJob;
    }
    return of(JOBS);
  }

  // Delete a job by ID
  deleteJob(id: number): Observable<Job[]> {
    const index = JOBS.findIndex((job:any) => job.id === id);
    if (index !== -1) {
      JOBS.splice(index, 1);
    }
    return of(JOBS);
  }


  getlength(){
    return this.jobs.length;
  }
  private apiUrl = 'https://your-api-url.com/api/jobs';
// gettotaljobs(){
//   let totalappliedjobs=this.joblist.reduce((p:any,x:any)=>p+x.price,0);
//   return totalappliedjobs
// }

// jobslength(){
//   return this.joblist.length;
// }
// addjobs(JOBS:Job){
//   this.joblist.push(JOBS);
//   return "Job added successfully";
// }
  
}
