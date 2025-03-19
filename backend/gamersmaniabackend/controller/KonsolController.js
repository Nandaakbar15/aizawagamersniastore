const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllKonsol = async(req, res) => {
    try {
        const konsol = await prisma.konsol.findMany();

        res.status(200).json({
            statusCode: 200,
            data: konsol
        });
    } catch(error) {
        console.log("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Could not retrieve the data!"
        });
    }
}

exports.getAllKonsolById = async(req, res) => {
    try {
        const parsed_idKonsol = parseInt(req.params.id_konsol);

        if(!parsed_idKonsol) {
            res.status(400).json({
                statusCode: 400,
                message: `The ID Konsol with ${parsed_idKonsol} is not found!`
            });
        }

        const konsol = await prisma.konsol.findUnique({where: {id_konsol: parsed_idKonsol}});

        res.status(200).json({
            statusCode: 200,
            data: konsol
        });
    } catch(error) {
        console.log("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Could not find the data with that ID!"
        });
    }
}

exports.addDataKonsol = async(req, res) => {
    try {
        const {nama_konsol, pengembang, harga, stok} = req.body;
        const parsed_harga = parseInt(harga);
        const parsed_stok = parseInt(stok);
        const gambar = req.file ? req.file.filename : null;

        await prisma.konsol.create({
            data: {
                nama_konsol,
                pengembang,
                harga: parsed_harga,
                stok: parsed_stok,
                gambar
            }
        });

        res.status(200).json({
            statusCode: 200,
            message: "New Data successfully added!"
        });
    } catch(error) {
        console.log("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Could not add the data!"
        });
    }
}

exports.updateKonsol = async(req, res) => {
    try {
        const parsedIdKonsol = parseInt(req.params.id_konsol);

        if(!parsedIdKonsol) {
            res.status(400).json({
                statusCode: 400,
                message: `The ID Konsol with ${parsedIdKonsol} is not found!`
            });
        }

        const {nama_konsol, pengembang, harga, stok} = req.body;
        const parsed_harga = parseInt(harga);
        const parsed_stok = parseInt(stok);
        const gambar = req.file ? req.file.filename : null

        const updateData = {
            nama_konsol,
            pengembang,
            harga: parsed_harga,
            stok: parsed_stok,
            gambar
        }

        if(updateData) {
            updateData.gambar
        }

        await prisma.konsol.update({
            where: {id_konsol: parsedIdKonsol},
            data: updateData
        });

        res.status(200).json({
            statusCode: 200,
            message: "Data successfully updated!"
        });
        
    } catch(error) {
        console.log("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Could not update the data!"
        });
    }
}

exports.deleteKonsol = async(req, res) => {
    try {
        const parsedIdKonsol = parseInt(req.params.id_konsol);

        if(!parsedIdKonsol) {
            res.status(400).json({
                statusCode: 400,
                message: `The ID Konsol with ${parsedIdKonsol} is not found!`
            });
        }

        await prisma.konsol.delete({where: {id_konsol: parsedIdKonsol}});

        res.status(200).json({
            statusCode: 200,
            message: "Data successfully delete!"
        });
    } catch(error) {
        console.log("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Could not delete the data!"
        });
    }
}

