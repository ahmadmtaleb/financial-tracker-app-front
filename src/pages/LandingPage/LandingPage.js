import React, {Component} from 'react';
import './LandingPage.css';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

class LandingPage extends Component
{
    render()
    {
        return(
            <div>
                <Login />
                <div className="LandingPage_main">
                    <Register />
                </div>
            </div>
        );
    }
}
export default LandingPage;