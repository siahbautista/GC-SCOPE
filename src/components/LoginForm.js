import React, { Component } from 'react'
import "./css-components/LoginForm.css";
import logo from "../assets/logos/gc-logo.png";

export class LoginForm extends Component {
  render() {
    return (
        <div className="login_form_container">
            <form className="login_form">
                <img src={logo}></img>
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
                    <a href="#">Forgot Password?</a>
                </div>
                <button className="login_btn" type="submit">Login</button>
                <hr className="hr_line"/>
                <div className="form_input_register">Don't have an account? Register here.</div>
                <button className="register_btn" type="submit">Sign Up</button>
            </form>
        </div>
    )
  }
}

export default LoginForm