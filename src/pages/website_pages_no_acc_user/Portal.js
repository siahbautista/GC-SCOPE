
import React, {useState} from "react";
import './css_pages/Portal.css';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
function Portal() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="login_page_container">
            <div class="left_section"></div>
            <div class="right_section"> {
                currentForm === "login" ? <LoginForm onFormSwitch={toggleForm}/> : <RegisterForm onFormSwitch={toggleForm}/>
            }
            </div>
        </div>
    );
}

export default Portal;