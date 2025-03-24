const express = require("express");
const router = express();
const upload = require("../config/upload");

// controller untuk admin atau master data
const {getAllGame, addDataGame, getAllGameById, updateGame, deleteGame} = require("../controller/GameController");
const {getAllKonsol, addDataKonsol, getAllKonsolById, updateKonsol, deleteKonsol} = require("../controller/KonsolController");
const {getAllAksesoris, getAllAksesorisById, addAksesoris, updateAksesoris, deleteAksesoris} = require("../controller/AksesorisController");

// controller untuk pelanggan (non-admin)
const {listgame, listkonsol, listaksesoris, detailGames, detailKonsol, detailAksesoris} = require("../controller/PelangganController"); 

// middleware
const {validateRegister, validateCreateGame, validateKonsol, validateAksesoris, validateUpdateGame} = require("../middleware/validationmiddleware");
const {authMiddleware} = require("../middleware/auth");


const {register} = require("../controller/RegisterController");
const {login, logout} = require("../controller/LoginController");

// default route
router.get("/", (req, res) => {
    res.status(200).json({
        statusCode: 200,
        message: "Aizawa Gamersmania shop"
    })
});

// route login sama register
router.post("/api/login", login);
router.get("/api/logout", logout);

router.post("/api/register", validateRegister, register);

// route untuk admin
router.get("/api/admin/datagame", getAllGame);

router.post("/api/admin/tambahdatagame", upload.single("gambar"), addDataGame);

router.put("/api/admin/ubahdatagame/:id_game", upload.single("gambar"), updateGame);

router.get("/api/admin/datagame/:id_game", getAllGameById);

router.delete("/api/admin/deletegame/:id_game", deleteGame);

// route data konsol (admin)
router.get("/api/admin/datakonsol", getAllKonsol);

router.get("/api/admin/datakonsol/:id_konsol", getAllKonsolById);

router.post("/api/admin/tambahdatakonsol", upload.single("gambar"), validateKonsol, addDataKonsol);

router.put("/api/admin/ubahdataKonsol/:id_konsol", upload.single("gambar"), updateKonsol);

router.delete("/api/admin/deleteKonsol/:id_konsol", deleteKonsol);

// route data aksesoris (admin)
router.get("/api/admin/data_aksesoris", getAllAksesoris);

router.get("/api/admin/data_aksesoris/:id_aksesoris", getAllAksesorisById);

router.post("/api/admin/tambah_aksesoris", upload.single("gambar"), addAksesoris);

router.put("/api/admin/update_aksesoris/:id_aksesoris", upload.single("gambar"), validateAksesoris, updateAksesoris);

router.delete("/api/admin/deleteAksesoris/:id_aksesoris", deleteAksesoris);

// route untuk pelanggan
router.get("/api/pelanggan/games", listgame);

router.get("/api/pelanggan/games/detailgame/:id_game", detailGames);

router.get("/api/pelanggan/konsol", listkonsol);

router.get("/api/pelanggan/konsol/detailKonsol/:id_konsol", detailKonsol);

router.get("/api/pelanggan/aksesoris", listaksesoris);

router.get("/api/pelanggan/aksesoris/detailAksesoris/:id_aksesoris", detailAksesoris);


module.exports = router;