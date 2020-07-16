import React, { useState, useEffect } from 'react';
import JoblyAPI from './JoblyAPI';
import CardList from './CardList';

/** Card list of all companies
 * When you click on a company card, you go to that specific company
 * Now you see all of the job cards that company has to offer
 */

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getAllCompanies() {
      let res = await JoblyAPI.getAllCompanies();
      setCompanies(res);
    }
    getAllCompanies();
  }, []);

  return (
    <div className='Companies'>
      <CardList res={companies} />
    </div>
  );
};

export default Companies;
