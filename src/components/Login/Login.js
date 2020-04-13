import React, {Component} from 'react';
import './Login.css';

class Login extends Component
{
    onEmailChange(event)
    {
        this.setState({email:event.target.value})
    }

    onPasswordChange(event)
    {
        this.setState({name:event.target.value})
    }
    
    

    render()
    {
        return(
            <form className="login_form_ah" action ='' method='POST'>
                    <label className="login_item_ah"><div className="login_item_text_ah">Email<br /></div> 
                    <input type ="mail" name="username" placeholder="Email" onChange={this.onEmailChange.bind(this)} required/>
                    </label>
                    
                    <label className="login_item_ah"><div className="login_item_text_ah">Password<br /></div>
                        <input type="password" name="password" placeholder="Password" onChange={this.onPasswordChange.bind(this)} required/>
                    </label>
                    <label className="login_item_ah" id="login_btn_ah"> 
                        <button type="submit" id ="login_btn_self_ah">Log In</button>
                    </label>
                </form>

        );
    }
}
export default Login;