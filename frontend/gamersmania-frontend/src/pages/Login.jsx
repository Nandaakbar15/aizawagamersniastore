/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BtnLogin } from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [alert, setAlertType] = useState("");
    const [message, setMessage] = useState("");
    const [role, setRole] = useState("pelanggan");
    
    const Login = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/login", {
                email: email,
                password: password
            });
    
            const token = response.data.token;
            localStorage.setItem("token", token); // Simpan token di localStorage
    
            // Decode token untuk mendapatkan role
            const payload = JSON.parse(atob(token.split(".")[1])); 
            setRole(payload.role);
    
            if (payload.role === 'admin') {
                navigate("/admin/dashboardadmin");
            } else {
                navigate("/pelanggan/dashboardpelanggan");
            }
        } catch(error) { 
            setAlertType("danger");
            setMessage("Error! Could not login!");
            console.error("Error : ", error);
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="card">
                    {message && (
                        <div className={`alert alert-${alert}`} role="alert">
                            {message}
                        </div>
                    )}
                    <div className="card-header">
                        <div className="card-title">Login</div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <form onSubmit={Login}>
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
                                        <BtnLogin/>
                                    </div>
                                </form>
                            </div>
                            <Link to="/register">Belum punya akun? Register aja!</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}