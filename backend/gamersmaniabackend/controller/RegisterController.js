const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Cek apakah email sudah digunakan
        const existingUser = await prisma.user.findUnique({
            where: { email: email }
        });

        if (existingUser) {
            return res.status(400).json({
                statusCode: 400,
                message: "Email already exists!"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Buat user baru dengan role pelanggan secara default
        await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                // role: "pelanggan"
            }
        });

        res.status(201).json({
            statusCode: 201,
            message: "Register successfully!"
        });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            statusCode: 500,
            message: "Internal Server Error"
        });
    }
};