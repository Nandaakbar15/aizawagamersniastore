/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar";
import CardGames from "../../components/CardGame";
import PageTitle from "../../components/PageTitle";

export default function ListGame() {
    return (
        <>
            <PageTitle title="List Games"/>
            <Navbar/>
            <div className="container mt-5">
                <div className="row">
                    <CardGames/>
                </div>
            </div>
        </>
    );
}