/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CardGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getAllGames();
    }, [])

    const getAllGames = async() => {
        try {
            const response = await axios.get("http://localhost:3000/api/pelanggan/games");
            setGames(Object.values(response.data.data));
        } catch(error) {
            console.error("Error : ", error);
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    {games.map((game) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={game.id_game}>
                        <div className="card shadow-sm" style={{ maxWidth: "18rem" }}>
                        <Link to={`/pelanggan/games/detailgame/${game.id_game}`}><img src={`http://localhost:3000/images/${game.gambar}`} className="img-fluid card-img-top" alt={game.nama_game} /></Link>
                        <div className="card-body text-center">
                            <h6 className="card-title">{game.nama_game}</h6>
                            <p className="text-muted">{game.publisher}</p>
                            <div className="d-flex justify-content-between">
                                <small>Stok : {game.stok}</small>
                                <small>Rp. {game.harga}</small>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
}