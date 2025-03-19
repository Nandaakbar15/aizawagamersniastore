const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
// const path = require("path");

exports.getAllGame = async(req, res) => {
    try {
        const game = await prisma.games.findMany();
        res.status(200).json({
            statusCode: 200,
            data: game
        });
    } catch(error) {
        console.log("Error ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Error! Could not retrieve the data!"
        });
    }
}

exports.addDataGame = async(req, res)  => {
    try {
        const {nama_game, tgl_rilis, publisher, harga, deskripsi, platform, stok} = req.body;
        const parsedHarga = parseInt(harga);
        const parsedStok = parseInt(stok);
        const gambar = req.file ? req.file.filename : null;
        const parsed_tgl_rilis = new Date(tgl_rilis);

        await prisma.games.create({
            data: {
                nama_game,
                tgl_rilis: parsed_tgl_rilis,
                publisher,
                harga: parsedHarga,
                deskripsi,
                platform,
                stok: parsedStok,
                gambar
            }
        });

        res.status(200).json({
            statusCode: 200,
            message: "New Data Added successfully!"
        });
    } catch(error) {
        console.log("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Error! Could not add the data!"
        });
    }
}

exports.getAllGameById = async(req, res) => {
    try {
        const id_game = parseInt(req.params.id_game);

        if(!id_game) {
            res.status(400).json({
                statusCode: 400,
                message: `The ID game with ${id_game} is not found!`
            });
        }

        const game = await prisma.games.findUnique({
            where: {id_game: id_game}
        });

        res.status(200).json({
            statusCode: 200,
            data: game
        });
    } catch(error) {
        console.log("Error!", error);
        res.status(404).json({
            statusCode: 404,
            message: "Could not find the data with that ID!"
        });
    }
}

exports.updateGame = async(req, res) => {
    try {
        const id_game = parseInt(req.params.id_game);

        if(!id_game) {
            res.status(400).json({
                statusCode: 400,
                message: `The ID game with  ${id_game} is not found!`
            });
        }

        const {nama_game, tgl_rilis, publisher, harga, deskripsi, platform, stok} = req.body;
        const parsedHarga = parseInt(harga);
        const parsedStok = parseInt(stok);
        const gambar = req.file ? req.file.filename : null;
        const parsed_tgl_rilis = tgl_rilis ? new Date(tgl_rilis) : new Date();

        const updateData = {
            nama_game,
            tgl_rilis: parsed_tgl_rilis,
            publisher,
            harga: parsedHarga,
            deskripsi,
            platform,
            stok: parsedStok,
            gambar
        }

        if(updateData) {
            updateData.gambar
        }

        await prisma.games.update({
            where: {id_game: id_game},
            data: updateData
        });

        res.status(200).json({
            statusCode: 200,
            message: "Data updated successfully!"
        });
    } catch(error) {
        console.log("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Could not update the data!"
        });
    }
}

exports.deleteGame = async(req, res) => {
    try {
        const id_game = parseInt(req.params.id_game);

        if(!id_game) {
            res.status(400).json({
                statusCode: 400,
                message: `The ID game with  ${id_game} is not found!`
            });
        }

        await prisma.games.delete({where: {id_game: id_game}});

        res.status(200).json({
            statusCode: 200,
            message: "Data successfully deleted!"
        });
    } catch(error) {
        console.log("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Could not delete the data!"
        });
    }
}