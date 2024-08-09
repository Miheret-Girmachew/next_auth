import { JobPost, JobPostingsProps } from '../types';

export const fetchJobById = async (id: string): Promise<JobPost[]> => {
    const response = await fetch(`https://akil-backend.onrender.com/opportunities/${id}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const result: JobPostingsProps = await response.json();
    return result.data 
};

export const fetchJobs = async (): Promise<JobPost[]> => {
    const response = await fetch('https://akil-backend.onrender.com/opportunities/search');
    if (!response.ok) throw new Error('Network response was not ok');
    const result: JobPostingsProps = await response.json();
    return result.data;
  
};