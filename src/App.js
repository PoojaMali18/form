import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailValidated, setEmailValidated] = useState(false);
    const [passwordValidated, setPasswordValidated] = useState(false);
    const [confirmPasswordValidated, setConfirmPasswordValidated] = useState(false);

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmail(value);
        setEmailValidated(emailRegex.test(value));
    };

    const validatePassword = (value) => {
        setPassword(value);
        setPasswordValidated(value.length >= 8);
    };

    const validateConfirmPassword = (value) => {
        setConfirmPassword(value);
        setConfirmPasswordValidated(value === password);
    };

    const handleSubmit = () => {
        if (emailValidated && passwordValidated && confirmPasswordValidated) {
            alert('Form submitted successfully!');
        } else {
            alert("Can't submit the form");
        }
    };

    return (
         <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
        <div className="main">
            <form>
                <div>
                    <label>Email:</label>
                    <input
                        className="email"
                        type="email"
                        value={email}
                        onChange={(e) => validateEmail(e.target.value)}
                        style={{ border: emailValidated ? '2px solid green' : '2px solid red' }}
                    />
                    {!emailValidated}
                </div>
                <div >
                    <label>Password:</label>
                    <input
                    className="password"
                        type="password"
                        value={password}
                        onChange={(e) => validatePassword(e.target.value)}
                        style={{ border: passwordValidated ? '2px solid green' : '2px solid red' }}
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                    className="cp"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => validateConfirmPassword(e.target.value)}
                        style={{ border: confirmPasswordValidated ? '2px solid green' : '2px solid red' }}
                    />
                </div>
                <button type="button" className="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
        </div>
    );
};
export default App;