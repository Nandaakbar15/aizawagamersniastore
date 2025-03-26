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
        <div className="card" style="width: 18rem;">
        {games.map((game) => (
            <div key={game.id_game}>
                <img className="card-img-top" src={`http://localhost:3000/images/${game.gambar}`} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{game.nama_game}</h5>
                    <p className="card-text">{game.platform}</p>
                    <p className="card-text">{game.stok}</p>
                    <p className="card-text">{game.harga}</p>
                    <Link to={`/detailgames/${game.id_game}`} className='btn btn-primary'>Detail</Link>
                </div>
            </div>
        ))}    
        </div>
    );
}