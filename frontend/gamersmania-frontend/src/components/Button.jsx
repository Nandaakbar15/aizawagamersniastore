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
            <button type="submit" className="btn btn-primary">Tambah!</button>
        </div>
    );
}

export function BtnKembali() {
    return (
        <div className="button-back">
            <button className="btn btn-success">Kembali</button>
        </div>
    );
}

export function BtnUbah() {
    return (
        <div className="button-success">
            <button type="submit" className="btn btn-primary">Ubah!</button>
        </div>
    );  
}

export function BtnDelete() {
    return (
        <div className="button-danger">
            <button className="btn btn-danger">Hapus!</button>
        </div>
    );
}