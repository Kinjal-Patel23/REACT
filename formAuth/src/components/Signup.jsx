import React, { useState } from 'react';
import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from '../firebase';

const auth = getAuth(app);

const Signup = ({ onSwitch }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPsw, setConfirmPsw] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const [showPsw, setShowPsw] = useState(false);
    const [showConfirmPsw, setShowConfirmPsw] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const signup = (e) => {

        e.preventDefault();

        if (!email.trim().match(emailRegex)) {
            setErrorMsg("This email is invalid. Make sure it's written like example@email.com");
            return;
        }

        if (!password.match(passwordRegex)) {
            setErrorMsg("Password must be at least 8 characters, include uppercase, lowercase, number, and special character.");
            return;
        }

        if (password !== confirmPsw) {
            setErrorMsg("Passwords do not match");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: name
                }).then(() => {
                    console.log("Username:", user.displayName);

                    setSuccessMsg("Account created successfully..!");
                    setErrorMsg("");
                    setTimeout(() => {
                        setSuccessMsg("");
                        onSwitch();
                    }, 4000)

                    setName("");
                    setEmail("");
                    setPassword("");
                    setConfirmPsw("");
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
                setErrorMsg(error.message)
            });
    };

    return (
        <>
            <div className="bubble-background">
                <div className="top-bubbles"></div>
                {successMsg && <p className='success-message'>{successMsg}</p>}
                <div className="signup-container">
                    <h2>Create Your Account</h2>
                    {errorMsg && <p className="error-message">{errorMsg}</p>}
                    <form onSubmit={signup}>
                        <input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} required />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <div className="password-input">
                            <input
                                type={showPsw ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span onClick={() => setShowPsw(!showPsw)}>
                                <FontAwesomeIcon icon={showPsw ? faEyeSlash : faEye} />
                            </span>
                        </div>
                        <div className="password-input">
                            <input
                                type={showConfirmPsw ? "text" : "password"}
                                placeholder="Confirm Password"
                                value={confirmPsw}
                                onChange={(e) => setConfirmPsw(e.target.value)}
                                required
                            />
                            <span onClick={() => setShowConfirmPsw(!showConfirmPsw)}>
                                <FontAwesomeIcon icon={showConfirmPsw ? faEyeSlash : faEye} />
                            </span>
                        </div>
                        <button type="submit">Sign Up</button>

                        <p className="login-link">
                            Already have an account?
                            <span onClick={onSwitch} style={{ paddingLeft: "5px", cursor: 'pointer', fontWeight: '600', color: '#ffaad4' }}>
                                Log In
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
