import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar expand='sm'>
        <NavLink exact to='/' className='navbar-brand'>
          Jobly
        </NavLink>

        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink to='/companies'>Companies</NavLink>
          </NavItem>
        </Nav>

        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink to='/jobs'>Jobs</NavLink>
          </NavItem>
        </Nav>

        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink to='/login'>Login</NavLink>
          </NavItem>
        </Nav>

        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink to='/profile'>Profile</NavLink>
          </NavItem>
        </Nav>

        {/* <Nav className='m1-auto' navbar>
          <NavItem>
            <NavLink to='/register'>Register</NavLink>
          </NavItem>
        </Nav> */}
      </Navbar>
    </div>
  );
};

export default NavBar;
