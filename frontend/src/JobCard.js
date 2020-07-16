import React from 'react';
import './Card.css';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const JobCard = ({ item = {} }) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{item.title}</CardTitle>
          <CardText>Salary: {item.salary}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobCard;
