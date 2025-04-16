/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { BtnKembali, BtnTambah } from '../../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar';
import PageTitle from '../../../components/PageTitle';

export default function FormTambahKonsol() {
    const [namaKonsol, setNamaKonsol] = useState("");
    const [pengembang, setPengembang] = useState("");
    const [harga, setHarga] = useState("");
    const [stok, setStok] = useState("");
    const [gambar, setGambar] = useState(null);
    const [alert, setAlertType] = useState('primary');
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const addDataKonsol = async(e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("nama_konsol", namaKonsol);
            formData.append("pengembang", pengembang);
            formData.append("harga", harga);
            formData.append("stok", stok);
            formData.append("gambar", gambar);

            const response = await axios.post("http://localhost:3000/api/admin/tambahdatakonsol", formData, {
                header: {
                    "Content-Type": "multipart/form-data"
                }
            });

            setAlertType('success');
            setMessage(response.data.message);

            setNamaKonsol("");
            setPengembang("");
            setHarga("");
            setStok("");
            setGambar(null);

             // Alihkan ke halaman tabel setelah 2 detik
             setTimeout(() => {
                navigate("/admin/datakonsol");  // Ganti dengan rute tabel game
            }, 2000);

        } catch(error) {
            console.error("Error : ", error);
        }
    }

    return (
        <>
            <PageTitle title="Form Tambah Data Konsol Admin"/>
            <div className="wrapper">
                <Sidebar/>
                <div className="container mt-5">
                    {message && (
                        <div className={`alert alert-${alert}`} role="alert">
                            {message}
                        </div>
                    )}
                    <h1>Form Tambah Data konsol</h1>
                    <form onSubmit={addDataKonsol}>
                    <div className="mb-3">
                        <label htmlFor="nama_konsol" className="form-label">Nama Konsol</label>
                        <input type="text" className="form-control" id="nama_konsol" name='nama_konsol' onChange={(e) => setNamaKonsol(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pengembang" className="form-label">Pengembang</label>
                        <input type="text" className="form-control" id="pengembang" name="pengembang" onChange={(e) => setPengembang(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="harga" className="form-label">Harga</label>
                        <input type="number" className="form-control" id="harga" name="harga" onChange={(e) => setHarga(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stok" className="form-label">Stok</label>
                        <input type="text" className="form-control" id="stok" name="stok" onChange={(e) => setStok(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gambar" className="form-label">Gambar</label>
                        <input type="file" className="form-control" id="gambar" name="gambar" onChange={(e) => setGambar(e.target.files[0])}/>
                    </div>
                    <div className="mb-3">
                        <BtnTambah/> 
                    </div>
                    
                    <Link to="/admin/datakonsol"><BtnKembali/></Link>
                    </form>
                </div>
            </div>
        </>
    );
}