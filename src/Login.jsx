import React, { useState } from "react";
import "./Login.css";

import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push("/");
                }
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push("/");
                }
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    return (
        <div className="login">
            <Link to="/home">
                <img
                    className="login__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="login__signinButton" onClick={signIn}>
                        Sign in
                    </button>
                </form>
                <p>
                    By signing-in you agree to the Amazon fake Clone terms and
                    condition.
                </p>
                <button className="login__registerButton" onClick={register}>
                    Create your Amazon Account.
                </button>
            </div>
        </div>
    );
}

export default Login;
