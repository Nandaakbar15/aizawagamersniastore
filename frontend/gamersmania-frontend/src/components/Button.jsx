/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Button({children}) {
    return (
        <div className="button-body">
            {children}
        </div>
    );
}

export function BtnTambah() {
    return (
        <div className="button-success">
            <button type="button" className="btn btn-primary">Tambah!</button>
        </div>
    );
}

export function BtnUbah() {
    return (
        <div className="button-success">
            <button type="button" className="btn btn-primary">Ubah!</button>
        </div>
    );  
}