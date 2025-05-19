/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar";
import CardKonsol from "../../components/CardKonsol";
import PageTitle from "../../components/PageTitle";

export default function ListKonsol() {
    return (
        <>
            <PageTitle title="List Konsol"/>
            <Navbar/>
            <div className="container mt-5">
                <div className="row">
                    <CardKonsol/>
                </div>
            </div>
        </>
    );
}