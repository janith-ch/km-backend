/*
  Warnings:

  - You are about to drop the column `disease` on the `patients` table. All the data in the column will be lost.
  - You are about to drop the `appoinment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `appoinment` DROP FOREIGN KEY `appoinment_doctor_id_fkey`;

-- DropForeignKey
ALTER TABLE `appoinment` DROP FOREIGN KEY `appoinment_patient_id_fkey`;

-- AlterTable
ALTER TABLE `patients` DROP COLUMN `disease`;

-- DropTable
DROP TABLE `appoinment`;

-- CreateTable
CREATE TABLE `appointment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NULL,
    `disease` VARCHAR(191) NULL,
    `patient_id` INTEGER NOT NULL,
    `doctor_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `appointment` ADD CONSTRAINT `appointment_patient_id_fkey` FOREIGN KEY (`patient_id`) REFERENCES `Patients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `appointment` ADD CONSTRAINT `appointment_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `Doctors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
