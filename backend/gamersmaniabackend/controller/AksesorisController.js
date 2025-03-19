const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllAksesoris = async (req, res) => {
    try {
        const aksesoris = await prisma.aksesoris.findMany();

        res.status(200).json({
            statusCode: 200,
            data: aksesoris
        });
    } catch(error) {
        console.log("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Could not retrieve the data!"
        });
    }
}

exports.getAllAksesorisById = async (req, res) => {
    try {
        const parsedIdAksesoris = parseInt(req.params.id_aksesoris);

        if(!parsedIdAksesoris) {
            res.status(400).json({
                statusCode: 400,
                message: `The ID aksesoris with ${parsedIdAksesoris} is not found!`
            });
        }

        const aksesoris = await prisma.aksesoris.findUnique({
            where: {id_aksesoris: parsedIdAksesoris}
        });

        res.status(200).json({
            statusCode: 200,
            data: aksesoris
        });
    } catch(error) {
        console.log("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Could not retrieve the data with that ID!"
        });
    }
}   

exports.addAksesoris = async (req, res) => {
    try {
        const {nama_aksesoris, category, deskripsi, stok} = req.body;
        const parsedStok = parseInt(stok);
        const gambar = req.file ? req.file.filename : null;

        await prisma.aksesoris.create({
            data: {
                nama_aksesoris,
                category,
                deskripsi,
                stok: parsedStok,
                gambar
            }
        });

        res.status(200).json({
            statusCode: 200,
            message: "New data added successfully!"
        });
    } catch(error) {
        console.log("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Could not add the data!"
        });
    }
} 

exports.updateAksesoris = async(req, res) => {
    try {
        const parsedIdAksesoris = parseInt(req.params.id_aksesoris);

        if(!parsedIdAksesoris) {
            res.status(400).json({
                statusCode: 400,
                message: `The ID Aksesoris with ${parsedIdAksesoris} is not found!`
            });
        }

        const {nama_aksesoris, category, deskripsi, stok} = req.body;
        const parsed_stok = parseInt(stok);
        const gambar = req.file ? req.file.filename : null;
        const updateData = {
            nama_aksesoris,
            category,
            deskripsi,
            stok: parsed_stok,
            gambar
        }

        if(gambar) {
            updateData.gambar;
        } 

        await prisma.aksesoris.update({
            where: {id_aksesoris: parsedIdAksesoris},
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

exports.deleteAksesoris = async(req, res) => {
    try {
        const parsedIdAksesoris = parseInt(req.params.id_aksesoris);
        
        if(!parsedIdAksesoris) {
            res.status(400).json({
                statusCode: 400,
                message: `The ID Aksesoris with ${parsedIdAksesoris} is not found!`
            });
        }

        await prisma.aksesoris.delete({where: {id_aksesoris: parsedIdAksesoris}});

        res.status(200).json({
            statusCode: 200,
            message: "Data deleted successfully!"
        });
    } catch(error) {
        console.log("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Could not delete the data!"
        });
    }
}