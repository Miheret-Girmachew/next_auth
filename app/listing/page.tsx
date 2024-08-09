"use client"; 

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { fetchJobs } from '../../lib/api'; 
import JobCard from '../../components/JobCard'; 
import { JobPost } from '../../types/index'; 
import Cookie from 'js-cookie';


const ListingPage = () => {
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
      const loadJobs = async () => {
        try {
          const fetchedJobs = await fetchJobs(); 
          setJobs(fetchedJobs); 
        } catch (error) {
          console.error('Failed to load jobs:', error); 
        }
      };

      loadJobs(); 
    }
  )
  ;

  return (
    <div className="w-[80%] pl-24 py-8 font-Epilogue">
      <div className="flex justify-between">
        <div className="pl-8">
          <h1 className="text-black-100 text-2xl font-black font-poppins">
            Opportunities
          </h1>
          <h2 className="font-normal font-epilogue text-base text-custom-gray">
            Showing {jobs.length} results
          </h2>
        </div>

        <div className="flex items-center gap-2 pr-16">
          <p className="text-[#7C8493] cursor-pointer">
            Sort by:{" "}
            <span className="text-[#25324B] font-semibold">
              Most relevant{" "}
            </span>
          </p>
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 5.66663L8 10.3333L3.33333 5.66663" stroke="#4640DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6667 5.66663L8 10.3333L3.33333 5.66663" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6667 5.66663L8 10.3333L3.33333 5.66663" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <p className="text-[#7C8493]"> | </p>
        </div>
      </div>

      <div>
        {jobs.length > 0 ? (
          jobs.map(job => (
            <Link 
              key={job.id} 
              href={`/jobs/${encodeURIComponent(job.id)}`} 
              passHref
            >
              <div className="flex border-solid p-6 mb-7 gap-2">
                <JobCard job={job} /> 
              </div>
            </Link>
          ))
        ) : (

          <p>
No jobs available</p> 
        )}
      </div>
    </div>
  );
};

export default ListingPage;
