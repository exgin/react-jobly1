import React from 'react';
import Card from './Card';
import { v4 as uuid } from 'uuid';

// res is our data from our backend server
const CardList = ({ res = [] }) => {
  return (
    <div className='CardList'>
      {res.map((resData) => (
        <Card item={resData} key={uuid()} />
      ))}
    </div>
  );
};

export default CardList;
