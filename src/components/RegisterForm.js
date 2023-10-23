import React, { useState } from 'react'
import "./css-components/RegisterForm.css";

export const RegisterForm = (props) => {
    const [first_name, setFname] = useState('');
    const [last_name, setLname] = useState('');
    const [student_id, setStudentId] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [department, setDepartment] = useState('');
    const [course, setCourse] = useState('');
    const [password, setPass] = useState('');
    const [confirm_password, setConfirmPass] = useState('');


    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPass(e.target.value);
    const handlePasswordConfirmationChange = (e) => setConfirmPass(e.target.value);
    const handleFirstNameChange = (e) => setFname(e.target.value);
    const handleLastNameChange = (e) => setLname(e.target.value);
    const handleStudentIdChange = (e) => setStudentId(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);
    const handleBirthdateChange = (e) => setBirthdate(e.target.value);
    const handleDepartmentChange = (e) => setDepartment(e.target.value);
    const handleCourseChange = (e) => setCourse(e.target.value);
    

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
  }

    return (
      <div className="register_form_container">
          <form className='register_form' onSubmit={handleSubmit}>
              <h1>Register</h1>
              <div className="form2_inputs">
                  <input value={first_name} onChange={handleFirstNameChange} type="text" className="form2_input" placeholder="First Name">
                  </input>
              </div>
              <div className="form2_inputs">
                  <input value={last_name} onChange={handleLastNameChange} type="text" className="form2_input" placeholder="Last Name">
                  </input>
              </div>
              <div className="form2_inputs">
                  <input value={student_id} onChange={handleStudentIdChange} type="text" className="form2_input" placeholder="Student ID">
                  </input>
              </div>
              <div className="form2_inputs">
                  <input value={email} onChange={handleEmailChange} type="email" className="form2_input" placeholder="Email">
                  </input>
              </div>
              <div className="form2_inputs">
                  <input value={gender} onChange={handleGenderChange} type="text" className="form2_input" placeholder="Gender">
                  </input>
              </div>
              <div className="form2_inputs">
                  <input value={birthdate} onChange={handleBirthdateChange} type="date" className="form2_input" placeholder="Birthdate">
                  </input>
              </div>
              <div className="form2_inputs">
                  <input value={department} onChange={handleDepartmentChange} type="text" className="form2_input" placeholder="Department">
                  </input>
              </div>
              <div className="form2_inputs">
                  <input value={course} onChange={handleCourseChange} type="text" className="form2_input" placeholder="Course">
                  </input>
              </div>
              <div className="form2_inputs">
                  <input value={password} onChange={handlePasswordChange} type="password" className="form2_input" placeholder="Password">
                  </input>
              </div>
              <div className="form2_inputs">
                  <input value={confirm_password} onChange={handlePasswordConfirmationChange} type="password" className="form2_input" placeholder="Confirm Password">
                  </input>
              </div>
              <button className="register2_btn" type="submit">Register</button>
              <div className="form2_input_login">Already have an account? <a className="login_link" onClick={() => props.onFormSwitch('login')}>Click here.</a></div>
          </form>
      </div>
  )
}

export default RegisterForm