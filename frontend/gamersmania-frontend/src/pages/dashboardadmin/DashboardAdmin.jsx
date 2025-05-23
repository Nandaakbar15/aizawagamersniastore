/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../../components/Sidebar";
import PageTitle from "../../components/PageTitle";
import CardAdmin from "../../components/CardAdmin";


export default function DashboardAdmin() {
    return (
        <> 
            <PageTitle title="Dashboard Admin"/>
            <div className="wrapper">
                <Sidebar/>
                <div className="container mt-5">
                    <div className="page-inner">
                        <div className="page-header">
                            <h3 className="fw-bold mb-3">Selamat Datang Admin</h3>
                        </div>
                    </div>
                    <CardAdmin/>
                </div>
            </div>
        </>
    );
}