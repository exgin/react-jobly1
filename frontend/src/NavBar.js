import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import Context from './Context';

const NavBar = () => {
  // get our current user
  const { currUser, handleLogout } = useContext(Context);

  console.log(`current user:`, currUser);

  const loggedIn = () => {
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
              <NavLink onClick={handleLogout} to='/'>
                Logout
              </NavLink>
            </NavItem>
          </Nav>

          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink to='/profile'>Profile</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  };

  const loggedOut = () => {
    return (
      <div>
        <Navbar expand='sm'>
          <NavLink exact to='/' className='navbar-brand'>
            Jobly
          </NavLink>

          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink to='/login'>Login</NavLink>
            </NavItem>
          </Nav>
          {/* end login */}
        </Navbar>
        {/* end logout */}
      </div>
    );
  };

  return <>{currUser ? loggedIn() : loggedOut()}</>;
};

export default NavBar;
