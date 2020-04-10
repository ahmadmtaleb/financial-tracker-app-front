import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';


class Login extends Component
{
  render()
  { 
    return (
      <div className="forum"> 
        <Form inline className="Login">
          <FormGroup>
            <Label for="exampleEmail" hidden>Email</Label>
            <Input type="email" name="email" id="iEmail" placeholder="Email" />
          </FormGroup>
          {' '}
          <FormGroup >
            <Label for="examplePassword" hidden>Password</Label>
            <Input type="password" name="password" id="iEmail" placeholder="Password" />
            
          </FormGroup>
          {' '}
          <Button  color="success">Login</Button>
          <div className="fp"><a href="#" target="_blank">Forgotten account?</a></div>
        </Form>

      </div>
    );
  }
}

export default Login;
