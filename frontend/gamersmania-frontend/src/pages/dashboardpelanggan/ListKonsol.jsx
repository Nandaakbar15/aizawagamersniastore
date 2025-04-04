/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar";
import CardKonsol from "../../components/CardKonsol";

export default function ListKonsol() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <Navbar/>
                    <CardKonsol/>
                </div>
            </div>
        </>
    );
}