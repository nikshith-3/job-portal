import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrl: './manage-jobs.component.css'
})
export class ManageJobsComponent {
openEditModal(_t6: { id: number; title: string; description: string; location: string; }) {
throw new Error('Method not implemented.');
}

jobs = [
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

editingJobId: number | null = null;
editJobTitle: string = '';
editJobDescription: string = '';
  jobService: any;

constructor(private router: Router) {}

applyForJob(jobId: number) {
  
  this.router.navigate(['/user-dashboard'], { queryParams: { jobId: jobId } });
}

// editJob(jobId: number) {
  
//   const job = this.jobs.find(job => job.id === jobId);
//   if (job) {
//     this.editingJobId = jobId;
//     this.editJobTitle = job.title;
//     this.editJobDescription = job.description;
//   }
// }
 // Edit Job: Set the job details to the form
 editJob(jobId: number) {
  const job = this.jobs.find(job => job.id === jobId);
  if (job) {
    this.editingJobId = jobId; // Mark the job being edited
    this.editJobTitle = job.title;
    this.editJobDescription = job.description;
  }
}
populateEditForm(job: any): void {
  this.editingJobId = job.id;
  this.editJobTitle = job.title;
  this.editJobDescription = job.description;
}


// updateJob() {
//   if (this.editingJobId !== null) {
//     const job = this.jobs.find(job => job.id === this.editingJobId);
//     if (job) {
//       job.title = this.editJobTitle;
//       job.description = this.editJobDescription;
//     }
//     this.cancelEdit();
//   }
// }
// Update Job: Update the job with new details and reset form
updateJob() {
  if (this.editingJobId !== null) {
    const updatedJob = {
      id: this.editingJobId,
      title: this.editJobTitle,
      description: this.editJobDescription,
      location: '' // Adjust as needed for your data structure
    };

    this.jobService.updateJob(updatedJob).subscribe(() => {
      // Update the local jobs array after successful update
      const index = this.jobs.findIndex(job => job.id === this.editingJobId);
      if (index !== -1) {
        this.jobs[index] = updatedJob;
      }
      this.cancelEdit();
    }, (error: any) => {
      console.error('Error updating job:', error);
    });
  }
}

deleteJob(jobId: number) {
  this.jobs = this.jobs.filter(job => job.id !== jobId);
}
 // Cancel Edit: Reset the form and close the edit state
 cancelEdit() {
  this.editingJobId = null;
  this.editJobTitle = '';
  this.editJobDescription = '';
}
}

