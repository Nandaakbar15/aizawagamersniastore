/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar";
import CardAksesories from "../../components/CardAksesoris";

export default function ListAksesoris() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <Navbar/>
                    <CardAksesories/>
                </div>
            </div>  
        </>
    );
}