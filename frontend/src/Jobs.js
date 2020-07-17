import React, { useState, useEffect } from 'react';
import JoblyAPI from './JoblyAPI';
import CardList from './CardList';
import Search from './Search';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getEveryJob() {
      let res = await JoblyAPI.getAllJobs();
      setJobs(res);
    }
    getEveryJob();
  }, []);

  const search = async (search) => {
    let res = await JoblyAPI.getJobs(search);
    setJobs(res);
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div className='Jobs'>
      <h1>Jobs!</h1>
      <Search lookFor={search} />
      <CardList res={jobs} />
    </div>
  );
};

export default Jobs;
