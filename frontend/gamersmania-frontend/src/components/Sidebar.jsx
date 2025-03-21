/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar" data-background-color="dark">
            <div className="sidebar-wrapper scrollbar scrollbar-inner">
            <div className="sidebar-content mt-5">
                <ul className="nav nav-secondary">
                <li className="nav-item">
                    <a
                    data-bs-toggle="collapse"
                    href="/admin/dashboard"
                    className="collapsed"
                    aria-expanded="false"
                    >
                    <i className="fas fa-home"></i>
                    <p>Dashboard</p>
                    <span className="caret"></span>
                    </a>
                </li>
                <li className="nav-item">
                    <Link to="/admin/datauser">
                        <i className="fas fa-th-list"></i>
                        <p>Data User</p>
                        <span className="caret"></span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/datagame">
                        <i className="fas fa-th-list"></i>
                        <p>Data Game</p>
                        <span className="caret"></span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/datakonsol">
                        <i className="fas fa-th-list"></i>
                        <p>Data Konsol</p>
                        <span className="caret"></span>
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </div>
    );
}