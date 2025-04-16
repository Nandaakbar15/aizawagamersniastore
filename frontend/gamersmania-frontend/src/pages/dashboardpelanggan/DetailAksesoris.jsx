/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { BtnKembali } from "../../components/Button";
import PageTitle from "../../components/PageTitle";

export default function DetailAksesoris() {
    const {id_aksesoris} = useParams();
    const [namaAksesoris, setNamaAksesoris] = useState("");
    const [category, setCategory] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [stock, setStock] = useState("");
    const [gambar, setGambar] = useState("");

    useEffect(() => {
        const getAksesorisById = async() => {
            try {
                const response = await axios.get(`http://localhost:3000/api/pelanggan/aksesoris/detailAksesoris/${id_aksesoris}`);
                const {nama_aksesoris, category, deskripsi, stok, gambar} = response.data.data;
                setNamaAksesoris(nama_aksesoris);
                setCategory(category);
                setDeskripsi(deskripsi);
                setStock(stok);
                setGambar(gambar);

            } catch(error) {
                console.error("Error : ", error);
            }
        }

        getAksesorisById();
    }, [id_aksesoris])

    return (
        <>
            <PageTitle title="Detail Aksesoris"/>
            <div className="container mt-5">
                <div className="row">
                <Navbar/>
                    <div className="card mb-3 mt-4" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={`http://localhost:3000/images/${gambar}`} className="img-fluid rounded-start" alt={namaAksesoris} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{namaAksesoris}</h5>
                                    <p className="card-text">Category: {category}</p>
                                    <p className="card-text">Deskripsi: {deskripsi}</p>
                                    <p className="card-text"><small className="text-body-secondary">Stok: {stock}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={"/pelanggan/listaksesoris"}>
                    <BtnKembali/>
                </Link>
            </div>
        </>
    );
}