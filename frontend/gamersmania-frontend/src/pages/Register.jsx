/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { BtnRegister } from '../components/Button';


export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [alert, setAlertType] = useState("");
    const navigate = useNavigate();


    const register = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/register", {
                username: username,
                email: email,
                password: password
            });

            setAlertType("success");
            setMessage(response.data.message);
            navigate("/");
        } catch(error) {
            setAlertType("danger");
            setMessage("Error! Could not register!");
            console.error("Error : ", error);
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title">Register</div>
                        </div>
                        <div className="card-body">
                            {message && (
                                <div className={`alert alert-${alert}`} role="alert">
                                    {message}
                                </div>
                            )}
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                <form onSubmit={register}>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            name="username"
                                            placeholder="Enter Username"
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email2">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Enter Email"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name='password'
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="card-action">
                                        <BtnRegister/>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <Link to="/login">Udah Punya akun? Login aja!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}