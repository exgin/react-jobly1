import React from 'react';
import './Card.css';
import { Button, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './JobCard.css';

const JobCard = ({ item = {} }) => {
  return (
    <Col sm='2'>
      <Card className='JobCard'>
        <CardBody>
          <CardTitle>{item.title}</CardTitle>
          <CardText>Salary: {item.salary}</CardText>
          <Button>Apply</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JobCard;
