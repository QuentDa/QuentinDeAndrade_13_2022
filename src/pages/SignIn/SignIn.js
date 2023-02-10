import React, { useState } from "react";
import { connectToLogin } from "../../service/Api";
import { useDispatch } from "react-redux";
import { updateUsername, updatePassword, authRequest, authSuccess, authError } from "../../store/features/authSlice";
import './SignIn.css'

export default function SignIn() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password
        }
        dispatch(authRequest());
        connectToLogin(data)
            .then((response) => {
                dispatch(updateUsername(response.data.username));
                dispatch(updatePassword(response.data.password));
                dispatch(authSuccess());
            })
            .catch((error) => {
                dispatch(authError(error.message));
            });
    }

    return (
        <div>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                                value={username}
                                onChange={(e) => {
                                        setUsername(e.target.value);
                                        dispatch(updateUsername(e.target.value));
                                    }
                                }
                                type="text"
                                id="username"
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    dispatch(updatePassword(e.target.value));
                                  }}
                                type="password"
                                id="password"
                            />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                            >Remember me</label
                            >
                        </div>

                        <button type="submit" className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
        </div>
    );
}