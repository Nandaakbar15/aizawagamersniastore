/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BtnTambah } from '../../../components/Button';

export default function FormUbahAksesoris() {
    const {id_aksesoris} = useParams();
    const [namaAksesoris, setNamaAksesoris] = useState("");
    const [category, setCategory] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [stock, setStock] = useState("");
    const [gambar, setGambar] = useState(null);

    useEffect(() => {
        const getDataAksesorisById = async() => {
            try {
                const response = axios.get(`http://localhost:3000/api/admin/data_aksesoris/${id_aksesoris}`);
                const {nama_aksesoris, category, deskripsi, stok, gambar} = response.data.data;

                setNamaAksesoris(nama_aksesoris);
                setCategory(category);
                setDeskripsi(deskripsi);
                setStock(stok);
                setGambar(null);

            } catch(error) {
                console.error("Error : ", error);
            }
        }

        getDataAksesorisById();
    }, [id_aksesoris]);
    
    return (
        <>
            <div className="wrapper">
                <div className="container mt-5">
                    <Sidebar/>
                    <h1>Form Halaman Ubah Data Aksesoris</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nama_aksesoris" className="form-label">Nama Aksesoris</label>
                            <input type="text" className="form-control" id="nama_aksesoris" name="nama_aksesoris" value={namaAksesoris}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <input type="text" className="form-control" id="category" name="category" value={category}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="deskripsi" className="form-label">Deskrispi</label>
                            <input type="text" className="form-control" id="deskripsi" name="deskripsi" value={deskripsi}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="stok" className="form-label">Stok</label>
                            <input type="text" className="form-control" id="stok" name="stok" value={stock}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gambar" className="form-label">Gambar</label>
                            <input type="file" className="form-control" id="gambar" name="gambar" value={gambar}/>
                        </div>
                        <BtnTambah/>
                    </form>
                </div>
            </div>
        
        </>
    );
}