import React, {Component} from "react";
import "./Register.css";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';


const options = [
    { value: 'Dollars', label: 'USD' },
    { value: 'Euro', label: 'Euro' },
    { value: 'Lebanese Pounds', label: 'LBP' }
  ];

class Register extends Component

{
    render()
    {
        return(
            <div>
                <div>
                    <h2>Create an account.</h2>
                    <p>Sign Up and control your expenses for free.</p>
                </div>
                <FormGroup>
                <Form className="in"><Label  >Name:</Label>
                    <Input type="text" placeholder="Name"></Input>
                   </Form>
                   <Form className="in"> <Label  >Email:</Label>
                    <Input type="email" placeholder="Email"></Input>
                   </Form>
                   <Form className="in"> <Label >Password:</Label>
                    <Input type="text" placeholder="Password"></Input>
                    </Form>
                   <Form className="in"> <Label >Re-enter:</Label>
                    <Input type="text" placeholder="Re-enter Password"></Input>
                    </Form>
                   <Form className="in"> <Label> Currency</Label>
                    <Select options={options}>
   
            
                    </Select></Form>
                    
                        <Form className="Signup"><Label>By clicking Sign Up, you agree to our Terms  </Label>
                    
                   
                        <Button color="success" className="bt">SignUp</Button>{''}
                   
                        </Form>
                </FormGroup>
            </div>
        );
    }
}
export default Register;
