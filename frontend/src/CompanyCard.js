import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import defLogo from './default-image.png';

const CompanyCard = ({ item = {} }) => {
  return (
    <NavLink className='CompanyCard-link' to={`/companies/${item.handle}`}>
      <div>
        <Card>
          <img className='CompanyCard-img' src={item.logo_url || defLogo} alt='logo' />
          <CardBody>
            <CardTitle>
              <b>{item.name}</b>
            </CardTitle>
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </div>
    </NavLink>
  );
};

export default CompanyCard;
