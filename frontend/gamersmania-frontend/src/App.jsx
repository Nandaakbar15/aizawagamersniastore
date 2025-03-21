/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Datagame from './pages/dashboardadmin/datagame/indexgame'
import FormTambahGame from './pages/dashboardadmin/datagame/tambahgame'
import FormUbahGame from './pages/dashboardadmin/datagame/ubahgame'
import DashboardAdmin from './pages/dashboardadmin/DashboardAdmin';
import DataKonsolAdmin from './pages/dashboardadmin/datakonsol/indexkonsol';
import FormTambahKonsol from './pages/dashboardadmin/datakonsol/tambahdatakonsol';
import FormUbahDataKonsol from './pages/dashboardadmin/datakonsol/ubahdatakonsol';
import DataAksesorisAdmin from './pages/dashboardadmin/dataaksesoris/indexaksesoris';
import FormTambahAksesoris from './pages/dashboardadmin/dataaksesoris/tambahaksesoris';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardAdmin/>}></Route>
        <Route path="/admin/datagame" element={<Datagame/>}></Route>
        <Route path="/admin/datakonsol" element={<DataKonsolAdmin/>}></Route>
        <Route path="/admin/dataaksesoris" element={<DataAksesorisAdmin/>}></Route>
        <Route path="/tambahdatagame" element={<FormTambahGame/>}></Route>
        <Route path="/tambahdatakonsol" element={<FormTambahKonsol/>}></Route>
        <Route path="/tambah_aksesoris" element={<FormTambahAksesoris/>}></Route>
        <Route path="/ubahdatagame/:id_game" element={<FormUbahGame/>}></Route>
        <Route path="/ubahdatakonsol/:id_konsol" element={<FormUbahDataKonsol/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
