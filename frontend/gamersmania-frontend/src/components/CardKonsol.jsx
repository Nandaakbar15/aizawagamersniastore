/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CardKonsol() {
    const [konsols, setKonsol] = useState([]);

    useEffect(() => {
        getKonsol();
    }, [])

    const getKonsol = async() => {
        try {
            const response = await axios.get("http://localhost:3000/api/pelanggan/konsol");
            setKonsol(Object.values(response.data.data));
        } catch(error) {
            console.error("Error : ", error);
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    {konsols.map((konsol) => (
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4' key={konsol.id_konsol}>
                            <div className="card shadow-sm" style={{ maxWidth: "18rem" }}>
                            <div className="card-body text-center">
                                <Link to={`/pelanggan/konsol/detailkonsol/${konsol.id_konsol}`}><img src={`http://localhost:3000/images/${konsol.gambar}`} className="img-fluid card-img-top" alt={konsol.nama_konsol} /></Link>
                                <h6 className="card-title">{konsol.nama_konsol}</h6>
                                <p className="text-muted">{konsol.pengembang}</p>
                                <div className="d-flex justify-content-between">
                                    <small>Stok : {konsol.stok}</small>
                                    <small>Rp. {konsol.harga}</small>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}