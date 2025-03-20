/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import axios from "axios";

import { BtnTambah } from "../../../components/Button"; 


export default function FormTambahGame() {
    const [namaGame, setNamaGame] = useState("");
    const [tanggalRilis, setTglRilis] = useState("");
    const [publisher, setPublisher] = useState("");
    const [harga, setHarga] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [platform, setPlatform] = useState("");
    const [gambar, setGambar] = useState("");
    const [stok, setStok] = useState("");

    const addDataGame = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("nama_game", namaGame);
            formData.append("tgl_rilis", tanggalRilis);
            formData.append("publisher", publisher);
            formData.append("harga", harga);
            formData.append("deskripsi", deskripsi);
            formData.append("platform", platform);
            formData.append("stok", stok);
            formData.append("gambar", gambar);  // Tambahkan file gambar ke formData
    
            await axios.post("http://localhost:3000/api/admin/tambahgame", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
    
            alert("Game berhasil ditambahkan!");
    
            // Reset form setelah submit
            setNamaGame("");
            setTglRilis("");
            setPublisher("");
            setHarga("");
            setDeskripsi("");
            setPlatform("");
            setStok("");
            setGambar(null);
        } catch (error) {
            console.error("Error : ", error);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Form Tambah Data Game</h1>
            <form onSubmit={addDataGame}>
                <div className="mb-3">
                    <label htmlFor="nama_game" className="form-label">Nama Game</label>
                    <input type="text" className="form-control" id="nama_game" name="nama_game" value={namaGame} onChange={(e) => setNamaGame(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tgl_rilis" className="form-label">Tanggal Rilis</label>
                    <input type="date" className="form-control" id="tgl_rilis" name="tgl_rilis" value={tanggalRilis} onChange={(e) => setTglRilis(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="publisher" className="form-label">Publisher</label>
                    <input type="date" className="form-control" id="publisher" name="publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="harga" className="form-label">Harga</label>
                    <input type="number" className="form-control" id="harga" name="harga" value={harga} onChange={(e) => setHarga(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="deskripsi" className="form-label">Deskripsi</label>
                    <input type="text" className="form-control" id="deskripsi" name="deskripsi" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="platform" className="form-label">Platform</label>
                    <input type="text" className="form-control" id="platform" name="platform" value={platform} onChange={(e) => setPlatform(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="stok" className="form-label">Stok</label>
                    <input type="text" className="form-control" id="stok" name="stok" value={stok} onChange={(e) => setStok(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="gambar" className="form-label">Gambar</label>
                    <input type="file" className="form-control" id="gambar" name="gambar" value={gambar} onChange={(e) => setGambar(e.target.value)}/>
                </div>
                <BtnTambah/>
            </form>
        </div>
    );
}