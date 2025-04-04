/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Datagame from './pages/dashboardadmin/datagame/indexgame'
import FormTambahGame from './pages/dashboardadmin/datagame/tambahgame'
import FormUbahGame from './pages/dashboardadmin/datagame/ubahgame'
import DashboardAdmin from './pages/dashboardadmin/DashboardAdmin';
import DataKonsolAdmin from './pages/dashboardadmin/datakonsol/indexkonsol';
import FormTambahKonsol from './pages/dashboardadmin/datakonsol/tambahdatakonsol';
import FormUbahDataKonsol from './pages/dashboardadmin/datakonsol/ubahdatakonsol';
import DataAksesorisAdmin from './pages/dashboardadmin/dataaksesoris/indexaksesoris';
import FormTambahAksesoris from './pages/dashboardadmin/dataaksesoris/tambahaksesoris';
import FormUbahAksesoris from './pages/dashboardadmin/dataaksesoris/ubahdata_aksesoris';
import LoginPage from './pages/Login';
import DashboardPelanggan from './pages/dashboardpelanggan/DashboardPelanggan';
import RegisterPage from './pages/Register';
import ListGame from './pages/dashboardpelanggan/ListGame';
import ListAksesoris from './pages/dashboardpelanggan/ListAksesoris';
import ListKonsol from './pages/dashboardpelanggan/ListKonsol';
import DetailGames from './pages/dashboardpelanggan/DetailGames';
import DetailAksesoris from './pages/dashboardpelanggan/DetailAksesoris';
import DetailKonsol from './pages/dashboardpelanggan/DetailKonsol';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace/>}/>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/admin/dashboardadmin" element={<DashboardAdmin/>}></Route>
        <Route path="/admin/datagame" element={<Datagame/>}></Route>
        <Route path="/admin/datakonsol" element={<DataKonsolAdmin/>}></Route>
        <Route path="/admin/dataaksesoris" element={<DataAksesorisAdmin/>}></Route>
        <Route path="/tambahdatagame" element={<FormTambahGame/>}></Route>
        <Route path="/tambahdatakonsol" element={<FormTambahKonsol/>}></Route>
        <Route path="/tambah_aksesoris" element={<FormTambahAksesoris/>}></Route>
        <Route path="/ubahdatagame/:id_game" element={<FormUbahGame/>}></Route>
        <Route path="/ubahdatakonsol/:id_konsol" element={<FormUbahDataKonsol/>}></Route>
        <Route path="/ubahdataaksesoris/:id_aksesoris" element={<FormUbahAksesoris/>}></Route>
        <Route path="/pelanggan/dashboardpelanggan" element={<DashboardPelanggan/>}></Route>
        <Route path="/pelanggan/listgame" element={<ListGame/>}></Route>
        <Route path="/pelanggan/listaksesoris" element={<ListAksesoris/>}></Route>
        <Route path="/pelanggan/listkonsol" element={<ListKonsol/>}></Route>
        <Route path="/pelanggan/games/detailgame/:id_game" element={<DetailGames/>}></Route>
        <Route path="/pelanggan/konsol/detailkonsol/:id_konsol" element={<DetailKonsol/>}></Route>
        <Route path="/pelanggan/aksesoris/detailAksesoris/:id_aksesoris" element={<DetailAksesoris/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
