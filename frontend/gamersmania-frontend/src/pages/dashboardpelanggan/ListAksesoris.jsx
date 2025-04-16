/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar";
import CardAksesories from "../../components/CardAksesoris";
import PageTitle from "../../components/PageTitle";

export default function ListAksesoris() {
    return (
        <>
            <PageTitle title="List Aksesoris"/>
            <div className="container mt-5">
                <div className="row">
                    <Navbar/>
                    <CardAksesories/>
                </div>
            </div>  
        </>
    );
}