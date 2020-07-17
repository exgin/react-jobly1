import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import JoblyAPI from './JoblyAPI';
import Alert from './Alert';

const Login = ({ setToken }) => {
  const history = useHistory();
  const INT_STATE = { username: '', password: '', first_name: '', last_name: '', email: '', errors: [] };
  const [formData, setFormData] = useState(INT_STATE);
  const [activeForm, setActiveForm] = useState('login');

  const toggleLogin = () => setActiveForm('login');
  const toggleSignup = () => setActiveForm('signup');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;
    let token;

    if (activeForm === 'signup') {
      data = {
        username: formData.username,
        password: formData.password,
        first_name: formData.first_name || undefined,
        last_name: formData.last_name || undefined,
        email: formData.email || undefined,
      };

      // by how the backend is setup, when we register, we return a JWT. Extract that token
      try {
        token = await JoblyAPI.register(data);
      } catch (errors) {
        return setFormData((d) => ({ ...d, errors }));
      }
    } else {
      // login
      data = {
        username: formData.username,
        password: formData.password,
      };

      try {
        token = await JoblyAPI.login(data);
      } catch (errors) {
        return setFormData((d) => ({ ...d, errors }));
      }
    }

    setToken(token);
    history.push('/companies');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  let login = (
    <div className='Login'>
      <Button onClick={toggleLogin}>Login</Button>
      <Button onClick={toggleSignup}>SignUp</Button>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for='username'>Username</Label>
          <Input type='text' name='username' id='username' value={formData.username} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for='password'>Password</Label>
          <Input type='password' min={5} name='password' id='password' value={formData.password} onChange={handleChange} />
        </FormGroup>
        {formData.errors.length ? <Alert messages={formData.errors} /> : null}

        <Button>Submit</Button>
      </Form>
    </div>
  );

  let reg = (
    <div className='Register'>
      <Button onClick={toggleLogin}>Login</Button>
      <Button onClick={toggleSignup}>SignUp</Button>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for='username'>Username</Label>
          <Input type='text' name='username' id='username' value={formData.username} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for='password'>Password</Label>
          <Input type='password' name='password' id='password' value={formData.password} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for='first_name'>First name</Label>
          <Input type='first_name' name='first_name' id='first_name' value={formData.first_name} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for='last_name'>Last name</Label>
          <Input type='last_name' name='last_name' id='last_name' value={formData.last_name} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for='email'>Email</Label>
          <Input type='email' name='email' id='email' value={formData.email} onChange={handleChange} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );

  if (activeForm === 'login') {
    return login;
  } else {
    return reg;
  }
};

export default Login;
