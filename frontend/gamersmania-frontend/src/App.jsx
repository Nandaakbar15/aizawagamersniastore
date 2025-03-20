import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Datagame from './pages/dashboardadmin/datagame/indexgame'
import FormTambahGame from './pages/dashboardadmin/datagame/tambahgame'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Datagame/>}></Route>
        <Route path="/tambahdatagame" element={<FormTambahGame/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
