// Define a TypeScript interface for Job
export interface Job {
[x: string]: any;
    id: number;
    title: string;
    description: string;
    location:string;
    
    
    
  }
  
  // Example array of jobs (can be used for mock data)
  export const JOBS: Job[] = [
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
  