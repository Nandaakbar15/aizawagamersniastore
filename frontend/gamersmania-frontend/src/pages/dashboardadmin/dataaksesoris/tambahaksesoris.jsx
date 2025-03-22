/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import axios from 'axios';
import { BtnKembali, BtnTambah } from '../../../components/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function FormTambahAksesoris() {
    const [namaAksesoris, setNamaAksesoris] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [gambar, setGambar] = useState(null);
    const [message, setMessage] = useState("");
    const [alert, setAlertType] = useState("");
    const navigate = useNavigate();

    const addDataAksesoris = async(e) => {
        try {
            e.preventDefault();
            const formData = new FormData();

            formData.append("nama_aksesoris", namaAksesoris);
            formData.append("category", category);
            formData.append("stok", stock);
            formData.append("deskripsi", deskripsi);

            if(gambar) {
                formData.append("gambar", gambar);
            }

            const response = await axios.post("http://localhost:3000/api/admin/tambah_aksesoris", formData, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            });

            setNamaAksesoris("");
            setCategory("");
            setStock("");
            setDeskripsi("");
            setGambar(null);

            setTimeout(() => {
                setAlertType("success");
                setMessage(response.data.message);
                navigate("/admin/dataaksesoris");
            }, 2000);
        } catch(error) {
            console.error("Error : ", error);
            setAlertType("danger");
            setMessage("Could not add the data!");
        }
    }
    return (
        <>
            <div className="wrapper">
                <Sidebar/>
                <div className="container mt-5">
                    <h1>Form Tambah Aksesoris</h1>
                    {message && (
                        <div className={`alert alert-${alert}`} role="alert">
                            {message}
                        </div>
                    )}
                    <form onSubmit={addDataAksesoris}>
                        <div className="mb-3">
                            <label htmlFor="nama_aksesoris" className="form-label">Nama Aksesoris</label>
                            <input type="text" className="form-control" id="nama_aksesoris" name='nama_aksesoris' onChange={(e) => setNamaAksesoris(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <input type="text" className="form-control" id="category" name='category' onChange={(e) => setCategory(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="stok" className="form-label">Stok</label>
                            <input type="number" className="form-control" id="stok" name='stok' onChange={(e) => setStock(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="deskripsi" className="form-label">Deskripsi</label>
                            <input type="text" className="form-control" id="deskripsi" name='deskripsi' onChange={(e) => setDeskripsi(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gambar" className="form-label">Gambar</label>
                            <input type="file" className="form-control" id="gambar" name='gambar' onChange={(e) => setGambar(e.target.files[0])}/>
                        </div>
                        <div className="mb-3">
                            <BtnTambah/>
                        </div>

                        <Link to="/admin/dataaksesoris">
                            <BtnKembali/>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}