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
        <div className="card" style="width: 18rem;">
        {konsols.map((konsol) => (
            <div key={konsol.id_konsol}>
                <div className="card-body">
                    <img className="card-img-top" src={`http://localhost:3000/images/${konsol.gambar}`} alt="Card image cap" />
                    <h5 className="card-title">{konsol.nama_konsol}</h5>
                    <p className="card-text">{konsol.stok}</p>
                    <p className="card-text">{konsol.harga}</p>
                    <Link to={`/detailkonsol/${konsol.id_konsol}`} className='btn btn-primary'>Detail Konsol</Link>
                </div>
            </div>
        ))}
        </div>
    );
}