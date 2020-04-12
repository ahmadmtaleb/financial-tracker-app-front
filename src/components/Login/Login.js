import React, {Component} from 'react';
import './Login.css';

class Login extends Component
{
    render()
    {
        return(
            <form className="login_form" action ='' method=''>
                    <label className="login_item"><div className="login_item_text">Email<br /></div> 
                    <input type ="mail" name="username" placeholder="Email"/>
                    </label>
                    
                    <label className="login_item"><div className="login_item_text">Password<br /></div>
                        <input type="password" name="password" placeholder="Password"/>
                    </label>
                    <label className="login_item" id="login_btn"> 
                        <button type="submit" id ="login_btn_self">Log In</button>
                    </label>
                </form>

        );
    }
}
export default Login;