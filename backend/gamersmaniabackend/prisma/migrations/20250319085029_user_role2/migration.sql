-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('admin', 'pelanggan') NOT NULL DEFAULT 'pelanggan';
