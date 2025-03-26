/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CardAksesories() {
    const [aksesoris, setAksesoris] = useState("");

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
        <div className="card" style="width: 18rem;">
        {aksesoris.map((data) => (
            <div key={data.id_aksesoris}>
                <img className="card-img-top" src={`http://localhost:3000/images/${data.gambar}`} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{data.nama_aksesoris}</h5>
                    <p className="card-text">{data.harga}</p>
                    <p className="card-text">{data.stok}</p>
                    <Link to={`/detailaksesoris/${data.id_aksesoris}`} className='btn btn-primary'>Detail Aksesoris</Link>
                </div>
            </div>
        ))}
        </div>
    );
}