import React from 'react';
import Card from './Card';
import { v4 as uuid } from 'uuid';
import { Row } from 'reactstrap';

// res is our data from our backend server
const CardList = ({ res = [] }) => {
  return (
    <div className='CardList'>
      <Row>
        {res.map((resData) => (
          <Card item={resData} key={uuid()} />
        ))}
      </Row>
    </div>
  );
};

export default CardList;
