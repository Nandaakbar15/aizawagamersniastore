/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function CardAksesories() {
    const [aksesoris, setAksesoris] = useState([]);

    useEffect(() => {
        getAksesoris();
    }, [])

    const getAksesoris = async() => {
        try {
            const response = await axios.get("http://localhost:3000/api/pelanggan/aksesoris");
            setAksesoris(Object.values(response.data.data));
        } catch(error) {
            console.error("Error : ", error);
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    {aksesoris.map((data) => (
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4' key={data.id_aksesoris}>
                            <div className="card shadow-sm">
                                <Link to={`/pelanggan/aksesoris/detailAksesoris/${data.id_aksesoris}`}><img src={`http://localhost:3000/images/${data.gambar}`}  className="img-fluid card-img-top" alt={data.nama_aksesoris} /></Link>
                                <div className="card-body text-center">
                                    <h6 className="card-title">{data.nama_aksesoris}</h6>
                                    <p className="text-muted">{data.category}</p>
                                    <div className="d-flex justify-content-between">
                                        <small>Stok : {data.stok}</small>
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