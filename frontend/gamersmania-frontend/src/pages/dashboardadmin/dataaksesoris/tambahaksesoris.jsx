/* eslint-disable no-unused-vars */
import React from 'react';
import Sidebar from '../../../components/Sidebar';
import axios from 'axios';
import { BtnKembali, BtnTambah } from '../../../components/Button';
import { Link } from 'react-router-dom';

export default function FormTambahAksesoris() {
    return (
        <>
            <div className="wrapper">
                <Sidebar/>
                <div className="container mt-5">
                    <h1>Form Tambah Aksesoris</h1>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="nama_aksesoris" className="form-label">Nama Aksesoris</label>
                            <input type="text" className="form-control" id="nama_aksesoris" name='nama_aksesoris' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <input type="text" className="form-control" id="category" name='category'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="stok" className="form-label">Stok</label>
                            <input type="text" className="form-control" id="stok" name='stok'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="deskripsi" className="form-label">Deskripsi</label>
                            <input type="text" className="form-control" id="deskripsi" name='deskripsi'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gambar" className="form-label">Category</label>
                            <input type="file" className="form-control" id="gambar" name='gambar'/>
                        </div>
                        <div className="mb-3">
                            <BtnTambah/>
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