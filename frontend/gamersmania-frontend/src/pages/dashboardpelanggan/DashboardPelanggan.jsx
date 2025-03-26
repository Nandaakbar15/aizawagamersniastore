/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";

export default function DashboardPelanggan() {
    return (
        <div className="container mt-5">
            <div className="row">
                <Navbar/>
                <Banner/>
                <h1>Dashboard Pelanggan</h1>
            </div>
        </div>
    );
}