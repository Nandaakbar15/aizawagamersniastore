/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export default function CardAdmin() {
    return(
        <div className="card">
            <div className="card-header">
                Products
            </div>
            <div className="card-body">
                <h5 className="card-title">Order</h5>
                <p className="card-text">Products Sell</p>
                <Link href="#" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    );
}