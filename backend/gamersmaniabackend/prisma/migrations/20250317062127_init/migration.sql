-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Games` (
    `id_game` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_game` VARCHAR(191) NOT NULL,
    `tgl_rilis` DATETIME(3) NOT NULL,
    `publisher` VARCHAR(191) NOT NULL,
    `harga` INTEGER NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `platform` VARCHAR(191) NOT NULL,
    `stok` INTEGER NOT NULL,
    `gambar` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_game`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Konsol` (
    `id_konsol` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_konsol` VARCHAR(191) NOT NULL,
    `pengembang` VARCHAR(191) NOT NULL,
    `harga` INTEGER NOT NULL,
    `stok` INTEGER NOT NULL,
    `gambar` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_konsol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aksesoris` (
    `id_aksesoris` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_aksesoris` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `stok` INTEGER NOT NULL,
    `gambar` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_aksesoris`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
