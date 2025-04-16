/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { BtnKembali } from "../../components/Button";
import PageTitle from "../../components/PageTitle";

export default function DetailKonsol() {
    const {id_konsol} = useParams();
    const [namaKonsol, setNamaKonsol] = useState("");
    const [pengembang, setPengembang] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [gambar, setGambar] = useState("");

    useEffect(() => {
        const getKonsolById = async() => {
            try {
                const response = await axios.get(`http://localhost:3000/api/pelanggan/konsol/detailKonsol/${id_konsol}`);
                const {nama_konsol, pengembang, harga, stok, gambar} = response.data.data;

                setNamaKonsol(nama_konsol);
                setPengembang(pengembang);
                setPrice(harga);
                setStock(stok);
                setGambar(gambar);

            } catch(error) {
                console.error("Error : ", error);
            }
        }

        getKonsolById();
    }, [id_konsol])

    return (
        <>
            <PageTitle title="Detail Konsol"/>
            <div className="container mt-5">
                <div className="row">
                    <Navbar/>
                    <div className="card mb-3 mt-4" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={`http://localhost:3000/images/${gambar}`} className="img-fluid rounded-start" alt={namaKonsol} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{namaKonsol}</h5>
                                    <p className="card-text">Pengembang: {pengembang}</p>
                                    <p className="card-text"><small className="text-body-secondary">Rp. {price}</small></p>
                                    <p className="card-text"><small className="text-body-secondary">Stok: {stock}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={"/pelanggan/listkonsol"}>
                    <BtnKembali/>
                </Link>
            </div>
        </>
    );
}