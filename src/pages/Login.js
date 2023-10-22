
import React, { Component } from "react";
import './Login.css';
import LoginForm from '../components/LoginForm';

export class Login extends Component {
    render() {
        return (
            <div className="login_page_container">
                <div class="left_section"></div>
                <div class="right_section">
                    <LoginForm/>
                </div>
            </div>
        );
    }
}

export default Login;