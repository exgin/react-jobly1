import React, { useEffect, useContext, useState } from 'react';
import JoblyAPI from './JoblyAPI';
import Context from './Context';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Profile = () => {
  const { currUser, setCurrUser } = useContext(Context);

  const [formData, setFormData] = useState({
    username: currUser.username,
    password: currUser.password || '',
    first_name: currUser.first_name || '',
    last_name: currUser.last_name || '',
    email: currUser.email || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  return (
    <div>
      <h1>Your Profile</h1>
      <Form>
        <FormGroup>
          <Label for='username'>Username</Label>
          <Input type='text' name='username' id='username' value={formData.username} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for='password'>Change Password</Label>
          <Input type='text' name='password' id='password' value={formData.password} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for='first_name'>first_name</Label>
          <Input type='text' name='first_name' id='first_name' value={formData.first_name} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for='last_name'>last_name</Label>
          <Input type='text' name='last_name' id='last_name' value={formData.last_name} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for='email'>email</Label>
          <Input type='text' name='email' id='email' value={formData.email} onChange={handleChange} />
        </FormGroup>

        <Button>Change Information</Button>
      </Form>
    </div>
  );
};

export default Profile;
