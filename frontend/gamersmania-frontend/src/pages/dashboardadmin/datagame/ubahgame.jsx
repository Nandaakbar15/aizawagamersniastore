/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BtnUbah } from "../../../components/Button";

export default function FormUbahGame() {
    const { id_game } = useParams();
    const [nama_game, setNamaGame] = useState("");
    const [tanggalRilis, setTglRilis] = useState("");
    const [publisher, setPublisher] = useState("");
    const [harga, setHarga] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [platform, setPlatform] = useState("");
    const [stok, setStok] = useState("");
    const [gambar, setGambar] = useState(null);
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [alert, setAlertType] = useState("");

    useEffect(() => {
        const getAllGameById = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/admin/datagame/${id_game}`);
                const { nama_game, tgl_rilis, publisher, harga, deskripsi, platform, stok, gambar } = response.data.data;
                
                setNamaGame(nama_game);
                setTglRilis(tgl_rilis.split("T")[0]);
                setPublisher(publisher);
                setHarga(harga);
                setDeskripsi(deskripsi);
                setPlatform(platform);
                setStok(stok);
                setGambar(null); // Reset gambar agar user harus upload ulang

                setAlertType("success");
                setMessage("Data berhasil dimuat!");
            } catch (error) {
                console.error("Error:", error);
                setAlertType("danger");
                setMessage("Error! Tidak bisa mengambil data.");
            }
        };

        getAllGameById();
    }, [id_game]);

    const updateGame = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("nama_game", nama_game);
            formData.append("tgl_rilis", new Date(tanggalRilis).toISOString().split("T")[0]);
            formData.append("publisher", publisher);
            formData.append("harga", harga);
            formData.append("deskripsi", deskripsi);
            formData.append("platform", platform);
            formData.append("stok", stok);
            if (gambar) {
                formData.append("gambar", gambar);
            }
    
            // Debugging: Cek isi formData
            for (let pair of formData.entries()) {
                console.log(pair[0] + ": " + pair[1]);
            }
    
            await axios.put(`http://localhost:3000/api/admin/ubahdatagame/${id_game}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
    
            setAlertType("success");
            setMessage("Data berhasil diperbarui!");
            navigate("/");
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error);
            setAlertType("danger");
            setMessage("Gagal memperbarui data.");
        }
    };

    return (
        <div className="container mt-5">
            <h1>Form Ubah Data Game</h1>

            {message && (
                <div className={`alert alert-${alert}`} role="alert">
                    {message}
                </div>
            )}

            <form onSubmit={updateGame}>
                <div className="mb-3">
                    <label htmlFor="nama_game" className="form-label">Nama Game</label>
                    <input type="text" className="form-control" id="nama_game" name="nama_game" value={nama_game} onChange={(e) => setNamaGame(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tgl_rilis" className="form-label">Tanggal Rilis</label>
                    <input type="date" className="form-control" id="tgl_rilis" name="tgl_rilis" value={tanggalRilis} onChange={(e) => setTglRilis(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="publisher" className="form-label">Publisher</label>
                    <input type="text" className="form-control" id="publisher" name="publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="harga" className="form-label">Harga</label>
                    <input type="number" className="form-control" id="harga" name="harga" value={harga} onChange={(e) => setHarga(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="deskripsi" className="form-label">Deskripsi</label>
                    <input type="text" className="form-control" id="deskripsi" name="deskripsi" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="platform" className="form-label">Platform</label>
                    <input type="text" className="form-control" id="platform" name="platform" value={platform} onChange={(e) => setPlatform(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="stok" className="form-label">Stok</label>
                    <input type="text" className="form-control" id="stok" name="stok" value={stok} onChange={(e) => setStok(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="gambar" className="form-label">Gambar</label>
                    <input type="file" className="form-control" id="gambar" name="gambar" onChange={(e) => setGambar(e.target.files[0])} />
                </div>
                <BtnUbah />
            </form>
        </div>
    );
}
