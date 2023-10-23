import React, { useState } from 'react'
import logo from "../assets/logos/gc-logo.png";
import "./css-components/LoginForm.css";

export const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPass(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="login_form_container">
            <form className='login_form' onSubmit={handleSubmit}>
                <img src={logo} alt="GC Logo" />
                <h1>Welcome Students!</h1>
                <div className="form_inputs">
                    <input value={email} onChange={handleEmailChange} type="email" className="form_input" placeholder="Email">
                    </input>
                </div>
                <div className="form_inputs">
                    <input value={password} onChange={handlePasswordChange} type="password" className="form_input" placeholder="Password">
                    </input>
                </div>
                <div className="form_input_fpassword">
                    <a href="#">Forgot Password?</a>
                </div>
                <button className="login_btn" type="submit">Login</button>
                <hr className="hr_line"/>
                <div className="form_input_register">Don't have an account? Click register.</div>
                <button className="register_btn" onClick={() => props.onFormSwitch('register')}>Register</button>
            </form>
        </div>
    )
}

export default LoginForm