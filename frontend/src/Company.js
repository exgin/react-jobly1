import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyAPI from './JoblyAPI';
import CardList from './CardList';

const Company = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState([]);

  useEffect(() => {
    async function getOneCompany() {
      let res = await JoblyAPI.getCompany(handle);
      setCompany(res);
    }
    getOneCompany();
  }, []);

  return (
    <div className='Companies'>
      <h4 className='Companies-name'>Comapny: {company.name}</h4>
      <p>{company.description}</p>
      <CardList res={company.jobs} />
    </div>
  );
};

export default Company;
