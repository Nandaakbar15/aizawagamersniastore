/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { BtnKembali, BtnUbah } from "../../../components/Button";

export default function FormUbahAksesoris() {
    const { id_aksesoris } = useParams();
    const [namaAksesoris, setNamaAksesoris] = useState("");
    const [category, setCategory] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [stock, setStock] = useState("");
    const [gambar, setGambar] = useState(null);
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        const getDataAksesorisById = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/admin/data_aksesoris/${id_aksesoris}`
                );
                const { nama_aksesoris, category, deskripsi, stok, gambar } =
                    response.data.data;

                setNamaAksesoris(nama_aksesoris);
                setCategory(category);
                setDeskripsi(deskripsi);
                setStock(stok);
                setGambar(gambar); // Set gambar dari API
                setPreview(gambar ? `http://localhost:3000/images/${gambar}` : null);
            } catch (error) {
                console.error("Error : ", error);
            }
        };

        getDataAksesorisById();
    }, [id_aksesoris]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setGambar(file);
        setPreview(URL.createObjectURL(file)); // Membuat preview dari file yang dipilih
    };

    return (
        <>
            <div className="wrapper">
                <div className="container mt-5">
                    <Sidebar />
                    <h1>Form Halaman Ubah Data Aksesoris</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nama_aksesoris" className="form-label">
                                Nama Aksesoris
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nama_aksesoris"
                                name="nama_aksesoris"
                                value={namaAksesoris}
                                onChange={(e) => setNamaAksesoris(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">
                                Category
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="category"
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="deskripsi" className="form-label">
                                Deskripsi
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="deskripsi"
                                name="deskripsi"
                                value={deskripsi}
                                onChange={(e) => setDeskripsi(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="stok" className="form-label">
                                Stok
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="stok"
                                name="stok"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                            />
                        </div>

                        {/* Preview Gambar */}
                        <div className="mb-3">
                            <label htmlFor="gambar" className="form-label">
                                Gambar
                            </label>
                            {preview && (
                                <div>
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        style={{
                                            width: "150px",
                                            height: "150px",
                                            objectFit: "cover",
                                            display: "block",
                                            marginBottom: "10px",
                                        }}
                                    />
                                </div>
                            )}
                            <input
                                type="file"
                                className="form-control"
                                id="gambar"
                                name="gambar"
                                onChange={handleFileChange}
                            />
                        </div>

                        <div className="mb-3">
                            <BtnUbah/>
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
