import React, { useState, useEffect } from 'react';
import JoblyAPI from './JoblyAPI';
import CardList from './CardList';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      let res = await JoblyAPI.getAllJobs();
      setJobs(res);
    }
    getJobs();
  }, []);

  return (
    <div className='Jobs'>
      <h1>Jobs!</h1>
      <CardList res={jobs} />
    </div>
  );
};

export default Jobs;
