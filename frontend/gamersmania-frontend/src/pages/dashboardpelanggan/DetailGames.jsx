/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { BtnKembali } from "../../components/Button";

export default function DetailGames() {
    const {id_game} = useParams();
    const [namaGame, setNamaGame] = useState("");
    const [tanggalRilis, setTglRilis] = useState("");
    const [publisher, setPublisher] = useState("");
    const [price, setPrice] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [platform, setPlatform] = useState("");
    const [stock, setStok] = useState("");
    const [gambar, setGambar] = useState("");

    useEffect(() => {
        const getGamesbyId = async() => {
            try {
                const response = await axios.get(`http://localhost:3000/api/pelanggan/games/detailgame/${id_game}`);
                const {nama_game, tgl_rilis, publisher, harga, deskripsi, platform, stok, gambar} = response.data.data;

                setNamaGame(nama_game);
                setTglRilis(tgl_rilis.split("T")[0]);
                setPublisher(publisher);
                setPrice(harga);
                setDeskripsi(deskripsi);
                setPlatform(platform);
                setStok(stok);
                setGambar(gambar);
            } catch(error) {
                console.error("Error : ", error);
            }
        }

        getGamesbyId();
    }, [id_game]);
    
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                <Navbar/>
                    <div className="card mb-3 mt-4" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={`http://localhost:3000/images/${gambar}`} className="img-fluid rounded-start" alt={namaGame} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Nama Game: {namaGame}</h5>
                                    <p className="card-text"><b>Tanggal Rilis: {tanggalRilis}</b></p>
                                    <p className="card-text"><b>Publisher: {publisher}</b></p>
                                    <p className="card-text">{deskripsi}</p>
                                    <p className="card-text"><small className="text-body-secondary">{platform}</small></p>
                                    <p className="card-text"><small className="text-body-secondary">Rp. {price}</small></p>
                                    <p className="card-text"><small className="text-body-secondary">Stok: {stock}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={'/pelanggan/listgame'}>
                        <BtnKembali/>
                    </Link>
                </div>
            </div>
        </>
    );
}