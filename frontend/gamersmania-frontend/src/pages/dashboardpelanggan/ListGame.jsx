/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar";
import CardGames from "../../components/CardGame";
import PageTitle from "../../components/PageTitle";

export default function ListGame() {
    return (
        <>
            <PageTitle title="List Games"/>
            <div className="container mt-5">
                <div className="row">
                    <Navbar/>
                    <CardGames/>
                </div>
            </div>
        </>
    );
}