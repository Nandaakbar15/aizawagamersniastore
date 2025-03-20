/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// interface Game {
//     id_game: number;
//     nama_game: string;
//     tanggal_rilis: string;
//     publisher: string;
//     harga: number;
//     deskripsi: string;
//     platform: string;
//     stok: number;
//     gambar: string;
// }

export default function Datagame() {
    const [games, setAllGames] = useState([]);

    useEffect(() => {
        getAllGame();
    }, []);

    const getAllGame = async() => {
        const response = await axios.get("http://localhost:3000/api/admin/datagame");
        // console.log("API Response:", response.data); 
        setAllGames(Object.values(response.data.data)); // Akses 'data' bukan 'games'
    };

    return (
        <div className="container mt-5">
            <h1>Data Game</h1>

            <h2><Link to={`/tambahdatagame`} className="btn btn-primary">Tambah data game</Link></h2>
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Gambar</th>
                    <th scope="col">Nama Game</th>
                    <th scope="col">Tanggal Rilis</th>
                    <th scope="col">Publisher</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Deskripsi</th>
                    <th scope="col">Platform</th>
                    <th scope="col">Stok</th>
                    <th scope="col">Aksi</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game) => (
                <tr key={game.id_game}>
                    <td><img src={`http://localhost:3000/images/${game.gambar}`} width="100" /></td>
                    <td>{game.nama_game}</td>
                    <td>{game.tgl_rilis}</td>
                    <td>{game.deskripsi}</td>
                    <td>{game.publisher}</td>
                    <td>{game.harga}</td>
                    <td>{game.platform}</td>
                    <td>{game.stok}</td>
                    <td>
                        <Link to={`ubahdatagame/${game.id_game}`} className="btn btn-primary">Edit</Link>
                    </td>
                    <td>
                        <Link to={`deletedatagame/${game.id_game}`} className="btn btn-danger">Hapus</Link>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}