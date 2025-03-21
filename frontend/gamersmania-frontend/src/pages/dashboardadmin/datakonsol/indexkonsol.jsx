/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function DataKonsolAdmin() {
    const [konsols, setKonsol] = useState([]);

    useEffect(() => {
        getAllKonsol()
    }, []);

    const getAllKonsol = async() => {
        const response = await axios.get("http://localhost:3000/api/admin/datakonsol");
        setKonsol(Object.values(response.data.data));
    }

    return (
        <>
            <div className="wrapper">
                <Sidebar/>
                <div className="container mt-5">
                    <h1>Data Konsol</h1>

                    <h2><Link to={`/tambahdatakonsol`} className="btn btn-primary">Tambah Data konsol</Link></h2>
                    <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Gambar</th>
                            <th scope="col">Nama Konsol</th>
                            <th scope="col">Pengembang</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Stok</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {konsols.map((konsol) => (
                        <tr key={konsol.id_konsol}>
                            <td><img src={`http://localhost:3000/images/${konsol.gambar}`} width='100'/></td>
                            <td>{konsol.nama_konsol}</td>
                            <td>{konsol.pengembang}</td>
                            <td>{konsol.harga}</td>
                            <td>{konsol.stok}</td>
                            <td>
                                <Link to={`/ubahdatakonsol/${konsol.id_konsol}`} className="btn btn-primary">Edit</Link>
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