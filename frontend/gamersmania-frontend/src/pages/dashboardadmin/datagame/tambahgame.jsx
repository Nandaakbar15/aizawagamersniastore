/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom"; 

import { BtnTambah } from "../../../components/Button"; 
import Sidebar from "../../../components/Sidebar";



export default function FormTambahGame() {
    const [namaGame, setNamaGame] = useState("");
    const [tanggalRilis, setTglRilis] = useState("");
    const [publisher, setPublisher] = useState("");
    const [harga, setHarga] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [platform, setPlatform] = useState("");
    const [gambar, setGambar] = useState(null);
    const [stok, setStok] = useState("");
    const [alert, setAlertType] = useState("");
    const [message, setMessage] = useState("primary");
    const navigate = useNavigate();

    const addDataGame = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("nama_game", namaGame);
            formData.append("tgl_rilis", new Date(tanggalRilis).toISOString().split("T")[0]);
            formData.append("publisher", publisher);
            formData.append("harga", harga);
            formData.append("deskripsi", deskripsi);
            formData.append("platform", platform);
            formData.append("stok", stok);
            formData.append("gambar", gambar);  // Tambahkan file gambar ke formData
    
            const response = await axios.post("http://localhost:3000/api/admin/tambahdatagame", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
    
            setAlertType(response.data.message);
            setMessage("success");
            
            // Reset form setelah submit
            setNamaGame("");
            setTglRilis("");
            setPublisher("");
            setHarga("");
            setDeskripsi("");
            setPlatform("");
            setStok("");
            setGambar(null);

            // Alihkan ke halaman tabel setelah 2 detik
            setTimeout(() => {
                navigate("/");  // Ganti dengan rute tabel game
            }, 2000);

        } catch (error) {
            console.error("Error : ", error);
            setMessage("Error! Could not add the data!");
            setAlertType("danger");
        }
    };

    return (
        <>
        <div className="wrapper">
            <Sidebar/>
            <div className="container mt-5">
                <h1>Form Tambah Data Game</h1>

                {message && (
                    <div className={`alert alert-${alert}`} role="alert">
                        {message}
                    </div>
                )}

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
                        <input type="text" className="form-control" id="publisher" name="publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)}/>
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
                        <input type="file" className="form-control" id="gambar" name="gambar" onChange={(e) => setGambar(e.target.files[0])}/>
                    </div>
                    <BtnTambah/>
                </form>
            </div>
        </div>
        </>
    );
}