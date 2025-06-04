import React, { use, useState } from 'react';
import './Signup.css';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter, faApple } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { app } from '../firebase';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const Login = ({ onSwitch }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [showPsw, setShowPsw] = useState(false);

    let loginData = (e) => {

        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                setUsername(user.displayName);
                setErrorMsg("");

                setEmail("");
                setPassword("");
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
                setErrorMsg("The account login was incorrect. Please check your email and password.");
            });
    }

    let loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(token);
                console.log(user);

                setSuccessMsg("Login successful..!");
                setErrorMsg("");
                setTimeout(() => setSuccessMsg(""), 4000);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode);
                console.log(errorMessage);
                console.log(email);
                console.log(credential);
                setErrorMsg("Something went wrong");
            });
    }

    let loginWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const user = result.user;
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                console.log(user);
                console.log(accessToken);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = FacebookAuthProvider.credentialFromError(error);
                console.log(errorCode);
                console.log(errorMessage);
                console.log(email);
                console.log(credential);
            });
    }

    return (
        <>
            <div className="bubble-background">
                <div className="top-bubbles"></div>
                {successMsg && <p className='success-message'>{successMsg}</p>}
                {username && <h3 className='welcome-msg'>Welcome, {username}</h3>}
                <div className="signup-container">
                    <h2>Welcome Back</h2>
                    <form onSubmit={loginData}>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <div className="password-input">
                            <input
                                type={showPsw ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span onClick={() => setShowPsw(!showPsw)} className="eye-icon">
                                <FontAwesomeIcon icon={showPsw ? faEyeSlash : faEye} />
                            </span>
                        </div>


                        {errorMsg && <p className="error-message">{errorMsg}</p>}

                        <div className="forgot-password">
                            <a href="#">Forgot Password?</a>
                        </div>

                        <button type="submit">Log In</button>

                        <div className="or-divider">
                            <span>OR</span>
                        </div>

                        <div className="social-icons">
                            <div className="social-icon" onClick={loginWithGoogle}><FontAwesomeIcon icon={faGoogle} className="icon google" /></div>
                            <div className="social-icon" onClick={loginWithFacebook}><FontAwesomeIcon icon={faFacebook} className="icon facebook" /></div>
                            <div className="social-icon"><FontAwesomeIcon icon={faTwitter} className="icon twitter" /></div>
                            <div className="social-icon"><FontAwesomeIcon icon={faApple} className="icon apple" /></div>
                        </div>

                        <p className="login-link">
                            Don’t have an account?
                            <span onClick={onSwitch} style={{ paddingLeft: "5px", cursor: 'pointer', fontWeight: '600', color: '#ffaad4' }}>
                                Sign Up
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
