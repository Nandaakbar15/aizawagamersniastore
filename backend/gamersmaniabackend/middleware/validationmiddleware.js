const {check, body, validationResult} = require("express-validator");

exports.validateRegister = [
    check("username")
        .notEmpty().withMessage("Username is required"),

    check("email")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Invalid email format"),

    check("password")
        .notEmpty().withMessage("Password is required"),
        // .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),

    (req, res, next) => {
        // console.log("Request Body:", req.body); 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                statusCode: 400,
                errors: errors.array()
            });
        }
        next();
    }
];

exports.validateLogin = [
    check("email")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Invalid email format"),

    check("password")
        .notEmpty().withMessage("Password is required"),
        // .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),

    (req, res, next) => {
        // console.log("Request Body:", req.body); 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                statusCode: 400,
                errors: errors.array()
            });
        }
        next();
    }
];

exports.validateCreateGame = [
    body("nama_game").notEmpty().withMessage("Field Nama Game harus di isi!"),
    body("tgl_rilis").notEmpty().withMessage("Field Tanggal Rilis harus di isi!").isDate(),
    body("publisher").notEmpty().withMessage("Field Publisher harus di isi!"),
    body("harga").notEmpty().withMessage("Field Harga harus di isi!").isInt(),
    body("deskripsi").notEmpty().withMessage("Field Deskripsi harus di isi!"),
    body("platform").notEmpty().withMessage("Field Platform harus di isi!"),
    body("stok").notEmpty().withMessage("Field Stok harus di isi!").isInt(),
    
    (req, res, next) => {
        const errors = validationResult(req);

        if (!req.file) {
            return res.status(400).json({
                statusCode: 400,
                errors: [{ path: "gambar", msg: "Field Gambar tidak boleh kosong!" }]
            });
        }

        if (!errors.isEmpty()) {
            return res.status(400).json({
                statusCode: 400,
                errors: errors.array()
            });
        }
        next();
    }
];

exports.validateUpdateGame = [
    body("nama_game").notEmpty().withMessage("Field Nama Game harus di isi!"),
    body("tgl_rilis").notEmpty().withMessage("Field Tanggal Rilis harus di isi!").isDate(),
    body("publisher").notEmpty().withMessage("Field Publisher harus di isi!"),
    body("harga").notEmpty().withMessage("Field Harga harus di isi!").isInt(),
    body("deskripsi").notEmpty().withMessage("Field Deskripsi harus di isi!"),
    body("platform").notEmpty().withMessage("Field Platform harus di isi!"),
    body("stok").notEmpty().withMessage("Field Stok harus di isi!").isInt(),

    (req, res, next) => {
        const errors = validationResult(req);

        // Gambar tidak wajib saat update, jadi tidak ada pengecekan req.file

        if (!errors.isEmpty()) {
            return res.status(400).json({
                statusCode: 400,
                errors: errors.array()
            });
        }
        next();
    }
];


exports.validateKonsol = [
    body("nama_konsol").notEmpty().withMessage("Field Nama Konsol harus di isi").isString().withMessage("Field Nama Konsol harus berupa String!"),
    body("pengembang").notEmpty().withMessage("Field Pengembang tidak boleh kosong!").isString().withMessage("Field Pengembang harus berupa String!"),
    body("harga").notEmpty().withMessage("Field Harga harus di isi!").isInt().withMessage("Field Harga harus berupa angka atau Integer!"),
    body("stok").notEmpty().withMessage("Field Stok harus di isi!").isInt().withMessage("Field Stok harus berupa angka atau Integer!"),
    
    (req, res, next) => {
        const errors = validationResult(req);

        if (!req.file) {
            return res.status(400).json({
                statusCode: 400,
                errors: [{ path: "gambar", msg: "Field Gambar tidak boleh kosong!" }]
            });
        }

        if (!errors.isEmpty()) {
            return res.status(400).json({
                statusCode: 400,
                errors: errors.array()
            });
        }
        next();
    }
];

exports.validateAksesoris = [
    body("nama_aksesoris").notEmpty().withMessage("Field Nama Aksesoris harus di isi!").isString().withMessage("Field Aksesoris harus berupa String!"),
    body("category").notEmpty().withMessage("Field Category harus di isi!").isString().withMessage("Field Category harus String!"),
    body("stok").notEmpty().withMessage("Field Stok harus di isi!").isInt().withMessage("Field Stok harus berupa angka atau Integer!"),
    
    (req, res, next) => {
        const errors = validationResult(req);

        if (!req.file) {
            return res.status(400).json({
                statusCode: 400,
                errors: [{ path: "gambar", msg: "Field Gambar tidak boleh kosong!" }]
            });
        }

        if (!errors.isEmpty()) {
            return res.status(400).json({
                statusCode: 400,
                errors: errors.array()
            });
        }
        next();
    }
];