const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.listgame = async(req, res) => {
    try {
        const game = await prisma.games.findMany();

        res.status(200).json({
            statusCode: 200,
            data: game
        });
    } catch(error) {
        console.error("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Error! Could not fetch the data!"
        });
    }
}

exports.detailGames = async(req, res) => {
    try {
        const parsedIdGame = parseInt(req.params.id_game);
        const games = await prisma.games.findUnique({
            where: {id_game: parsedIdGame}
        });

        res.status(200).json({
            statusCode: 200,
            data: games
        });
    } catch(error) {
        console.error("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Error! Could find the data with that ID!"
        })
    }
}

exports.listkonsol = async(req, res) => {
    try {
        const konsol = await prisma.konsol.findMany();

        res.status(200).json({
            statusCode: 200,
            data: konsol    
        });
    } catch(error) {
        console.error("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Error! Could not fetch the data!"
        });
    }
}

exports.detailKonsol = async(req, res) => {
    try {
        const parsedIdKonsol = parseInt(req.params.id_konsol);
        const konsol = await prisma.konsol.findUnique({
            where: {id_konsol: parsedIdKonsol}
        });

        res.status(200).json({
            statusCode: 200,
            data: konsol
        });
    } catch(error) {
        console.error("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Error! Could find the data with that ID!"
        });
    }
} 

exports.listaksesoris = async(req, res) => {
    try {
        const aksesoris = await prisma.aksesoris.findMany();

        res.status(200).json({
            statusCode: 200,
            data: aksesoris
        }); 
    } catch(error) {
        console.error("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Error! Could not fetch the data!"
        });
    }
}

exports.detailAksesoris = async(req, res) => {
    try {   
        const parsedIdAksesoris = parseInt(req.params.id_aksesoris);
        const aksesoris = await prisma.aksesoris.findUnique({
            where: {id_aksesoris: parsedIdAksesoris}
        });

        res.status(200).json({
            statusCode: 200,
            data: aksesoris
        });
    } catch(error) {
        console.error("Error :  ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Error! Could not find the data with that ID!"
        })
    }
}