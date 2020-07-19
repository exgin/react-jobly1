import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import JoblyAPI from './JoblyAPI';
import CardList from './CardList';
import Context from './Context';

const Company = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState([]);
  const { currUser } = useContext(Context);

  useEffect(() => {
    async function getCompanyAndJobs() {
      const { jobs } = currUser;
      let company = await JoblyAPI.getCompany(handle);

      const jobsAppliedTo = new Set(jobs.map((job) => job.id));

      // set apply btn to applied, if applied by the user
      company.jobs = company.jobs.map((job) => ({ ...job, state: jobsAppliedTo.has(job.id) ? 'applied' : null }));
      setCompany(company);
    }
    getCompanyAndJobs();
  }, [handle, currUser]); // re-render when the handle changes & when the currUser changes

  const apply = async (idx) => {
    if (company && Array.isArray(company.jobs) && idx < company.jobs.length) {
      let jobId = company.jobs[idx].id;
      let msg = await JoblyAPI.applyToJob(jobId);

      setCompany((company) => {
        let newCom = { ...company };
        newCom.jobs = newCom.jobs.map((job) => (job.id === jobId ? { ...job, state: msg } : job));
        return newCom;
      });
    }
  };

  return (
    <div className='Companies'>
      <h4 className='Companies-name'>Comapny: {company.name}</h4>
      <p>{company.description}</p>
      <CardList res={company.jobs} apply={apply} />
    </div>
  );
};

export default Company;
