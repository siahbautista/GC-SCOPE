import React, { Component } from "react";
import './css_pages/Login.css';
import logo from "../assets/logos/gc-logo.png";
import LoginForm from '../components/LoginForm';

export class Login extends Component {
    render() {
        return (
            <div className="login_row">
                <div className="form_container">
                    <div className="form_content_left"><img src={logo} alt="GC Logo" /></div>
                    <div className="form_content_right">
                    <LoginForm/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
