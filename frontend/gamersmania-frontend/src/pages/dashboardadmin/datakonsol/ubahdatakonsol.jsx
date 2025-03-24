/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BtnKembali, BtnUbah } from '../../../components/Button';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar';

export default function FormUbahDataKonsol() {
    const {id_konsol} = useParams();
    const [namaKonsol, setNamaKonsol] = useState("");
    const [pengembang, setPengembang] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [gambar, setGambar] = useState(null);
    const [alert, setAlertType] = useState("");
    const [message, setMessage] = useState("");
    const [preview, setPreview] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getAllKonsolById = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/admin/datakonsol/${id_konsol}`);
                const { nama_konsol, pengembang, harga, stok, gambar } = response.data.data;
                
                setNamaKonsol(nama_konsol);
                setPrice(harga);
                setPengembang(pengembang);
                setStock(stok);
                setGambar(null); // Reset gambar agar user harus upload ulang
                setPreview(gambar ? `http://localhost:3000/images/${gambar}` : null);

                // setAlertType("success");
                // setMessage("Data berhasil dimuat!");
            } catch (error) {
                console.error("Error:", error);
                setAlertType("danger");
                setMessage("Error! Tidak bisa mengambil data.");
            }
        };

        getAllKonsolById();
    }, [id_konsol]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setGambar(file);
        setPreview(URL.createObjectURL(file)); // Membuat preview dari file yang dipilih
    };

    const updateKonsol = async(e) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append("nama_konsol", namaKonsol);
            formData.append("pengembang", pengembang);
            formData.append("harga", price);
            formData.append("stok", stock);
            if(gambar) {
                formData.append("gambar", gambar);
            }

            const response = await axios.put(`http://localhost:3000/api/admin/ubahdataKonsol/${id_konsol}`, formData, {
                header: {
                    "Content-Type" : "multipart/form-data"
                }
            });

            setAlertType("success");
            setMessage(response.data.message);
            navigate('/admin/datakonsol');
        } catch(error) {
            console.error("Error : ", error);
        }
    }
 
    return (
        <>
            <div className="wrapper">
                <Sidebar/>
                <div className="container">
                <h1>Form Ubah Data konsol</h1>
                {message && (
                    <div className={`alert alert-${alert}`} role="alert">
                        {message}
                    </div>
                )}
                <form onSubmit={updateKonsol}>
                    <div className="mb-3">
                        <label htmlFor="nama_konsol" className="form-label">Nama Konsol</label>
                        <input type="text" className="form-control" id="nama_konsol" name='nama_konsol' value={namaKonsol} onChange={(e) => setNamaKonsol(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pengembang" className="form-label">Pengembang</label>
                        <input type="text" className="form-control" id="pengembang" name='pengembang' value={pengembang} onChange={(e) => setPengembang(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="harga" className="form-label">Harga</label>
                        <input type="text" className="form-control" id="harga" name='harga' value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stok" className="form-label">Stok</label>
                        <input type="text" className="form-control" id="stok" name='stok' value={stock} onChange={(e) => setStock(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gambar" className="form-label">Gambar</label>
                        {preview && (
                            <div>
                                <img src={preview} alt="" style={{width: "150px",height: "150px",objectFit: "cover", display: "block", marginBottom: "10px",}}/>
                                <input type="file" className='form-control' id='gambar' name='gambar' onChange={handleFileChange}/>
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        <BtnUbah/>
                    </div>

                    <Link to="/admin/datakonsol">
                        <BtnKembali/>
                    </Link>
                </form>
                </div>
            </div>
        </>
    );
}