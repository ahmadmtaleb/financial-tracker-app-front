import React, {Component} from "react";
import "./Register.css";

class Register extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            name:'',
            email: '',
            password: '',
            currency:''
        }
    }
    onNameChange(event)
    {
        this.setState({name:event.target.value})
    }
    onNameClickHanlder (event)
    {
        var popup = document.getElementById("namePopup");
        popup.classList.toggle("show");
    }
    onEmailChange(event)
    {
        this.setState({email:event.target.value})
    }
    onEmailClickHanlder (event)
    {
        var popup = document.getElementById("emailPopup");
        popup.classList.toggle("show");
    }
    onPasswordChange(event)
    {
        this.setState({password:event.target.value})
    }
    onPasswordlClickHanlder (event)
    {
        var popup = document.getElementById("passwordPopup");
        popup.classList.toggle("show");
    }
    onRePasswordlClickHanlder (event)
    {
        var popup = document.getElementById("repasswordPopup");
        popup.classList.toggle("show");
    }
    /* onAreaChange functon will set the state of the currency in order to save what the user entered */
    onCurrencyChange(event)
    {
        this.setState({currency:event.target.value})
    }
        
    async handleSubmit(event)
    {
        event.preventDefault();
        
        try 
        {
            const response = await fetch(`http://127.0.0.1:8000/api/register/?name=${this.state.name}&email=${this.state.email}&password=${this.state.password}&currency_id=${JSON.parse(this.state.currency_id)}`);
            const result = await response.json();
            if (result.success) 
            {
                console.log("done")
                alert("You account has been created! \n You can Log In!");
            } 
            else 
            {
                console.log("error")
            }
        } 
        catch (err) 
        {
            console.log(err);
            alert("\t\tYour account has not been created! \n Please re-register with all the exact information.");
        } 
    
    }

    render()
    {
        return(
            <div className="register_body_container">

                <div className="register_form_text">
                    <h2>Create an account <div><br /> Sign Up and control your expenses for free.</div></h2>
                </div>

                <form id="register_form_container" onSubmit={this.handleSubmit.bind(this)} method="POST">

                    <div className="register_form_group">
                        <label htmlFor="name" className="popup">
                            <input id="name" type="text" placeholder="Name" className="register_form_group_item" value={this.state.name} onChange={this.onNameChange.bind(this)} onClick={this.onNameClickHanlder} required/>
                            <span class="namepopuptext" id="namePopup">What's your name?</span>
                            </label>
                    </div>
                        
                    <div className="register_form_group">
                        <label htmlFor="email" className="popup">
                            <input id="email" type="email" aria-describedby="emailHelp" placeholder="Email address" className="register_form_group_item" required onClick={this.onEmailClickHanlder}/>
                            <span class="emailpopuptext" id="emailPopup">You'll use this when you log in and if you ever need to reset your password.</span>
                            </label>
                    </div>

                    <div className="register_form_group">
                        <label htmlFor="password" className="popup">
                            <input id="passwor" type="password" aria-describedby="password" placeholder="Password" className="register_form_group_item" required onClick={this.onPasswordlClickHanlder}/>
                            <span class="passwordpopuptext" id="passwordPopup">Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &).</span>
                        </label>
                    </div>
                    
                    <div className="register_form_group">
                        <label htmlFor="re-password" className="popup">
                            <input id="re-password" type="password" aria-describedby="password" placeholder="Re-enter password" className="register_form_group_item" required onClick={this.onRePasswordlClickHanlder}/>
                            <span class="repasswordpopuptext" id="repasswordPopup">Re-enter the same password</span>
                        </label>
                    </div>    
                    
                    <div className="register_form_group">
                        <label for="currency_form_area"></label>
                            <select id="currency_form_area" name="currency" value={this.state.currency} onChange={this.onCurrencyChange.bind(this)} className="register_form_group_item" required>
                                <option value="">Choose your currency</option>
                                <option value="USD">USD</option>
                            </select>
                    </div>
                    <div className="register_form_group">
                        <p className="register_form_group_item">
                            By clicking Sign Up, you agree to our<div><br /></div> <a href="#" target="_blank" className="register_form_links">Terms</a>, <a href="#" target="_blank" className="register_form_links">Data Policy</a> and <a href="#" target="_blank" className="register_form_links">Cookie Policy</a>.
                        </p>
                    </div>
                        <button type="submit" id ="register_submit_btn">Sign Up</button>
                    <div>
                        <p className="register_form_slogan"> Grow <div><br /></div>Financially</p>
                    </div>
                </form>
                
            </div>
        );
    }
}

export default Register;