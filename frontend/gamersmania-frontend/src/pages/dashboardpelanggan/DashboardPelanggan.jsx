/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import PageTitle from "../../components/PageTitle";

export default function DashboardPelanggan() {
    return (
        <>
            <PageTitle title="Dashboard Pelanggan" />
            <div className="container mt-5">
                <div className="row">
                    <Navbar />
                    <Banner />
                    <h1>Dashboard Pelanggan</h1>
                    <p>Apakah kamu gamer? Nah, website ini adalah tempat yang pas buat kamu yang lagi cari game, konsol sama aksesoris!</p>
                </div>
            </div>
        </>
    );
}