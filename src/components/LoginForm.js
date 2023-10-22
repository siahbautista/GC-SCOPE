import React, { Component } from 'react'
import logo from "../assets/logos/gc-logo.png";
import "./css-components/LoginForm.css";

export class LoginForm extends Component {
  render() {
    return (
        <div className="login_form_container">
            <form className='login_form'>
                <img src={logo} alt="GC Logo" />
                <h1>Welcome Students!</h1>
                <div className="form_inputs">
                    <input id="username" type="text" name="username" className="form_input" placeholder="Username">
                    </input>
                </div>
                <div className="form_inputs">
                    <input id="password" type="password" name="password" className="form_input" placeholder="Password">
                    </input>
                </div>
                <div className="form_input_fpassword">
                    <a href="#">Forgot Password</a>
                </div>
                <button className="login_btn" type="submit">Login</button>
                <hr className="hr_line"/>
                <div className="form_input_register">Don't have an account? Click register.</div>
                <button className="register_btn" type="submit">Register</button>
            </form>
        </div>
    )
  }
}

export default LoginForm