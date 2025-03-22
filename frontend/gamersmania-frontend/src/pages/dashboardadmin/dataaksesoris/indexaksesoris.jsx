/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";

export default function DataAksesorisAdmin() {
    const [aksesoris, setAksesoris] = useState([]);
    const [message, setMessage] = useState("");
    const [alert, setAlertType] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getAllAksesoris();
    }, [])

    const getAllAksesoris = async() => {
        const response = await axios.get("http://localhost:3000/api/admin/data_aksesoris");
        setAksesoris(Object.values(response.data.data));
    }

    return (
        <>
            <div className="wrapper">
                <Sidebar/>
                <div className="container mt-5">
                    <h1>Data Aksesoris</h1>
                    {message && (
                        <div className={`alert alert-${alert}`} role="alert">
                            {message}
                        </div>
                    )}
                    <h2><Link to="/tambah_aksesoris" className="btn btn-primary">Tambah Aksesoris</Link></h2>

                    <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Gambar</th>
                            <th scope="col">Nama Aksesoris</th>
                            <th scope="col">Category</th>
                            <th scope="col">Deskripsi</th>
                            <th scope="col">Stok</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {aksesoris.map((data) => (
                        <tr key={data.id_aksesoris}>
                            <td><img src={`http://localhost:3000/images/${data.gambar}`} alt="" width="100"/></td>
                            <td>{data.nama_aksesoris}</td>
                            <td>{data.category}</td>
                            <td>{data.deskripsi}</td>
                            <td>{data.stok}</td>
                            <td>
                                <Link to={`/ubahdataaksesoris/${data.id_aksesoris}`} className="btn btn-primary">Edit</Link>
                            </td>
                            <td>
                                <button className="btn btn-danger">Hapus</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}