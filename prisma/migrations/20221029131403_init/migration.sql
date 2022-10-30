-- CreateTable
CREATE TABLE `Doctors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `nic` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `specialist` VARCHAR(191) NULL,
    `contact` VARCHAR(191) NULL,
    `date_joined` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT '1',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Patients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `nic` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `check_in` VARCHAR(191) NULL,
    `check_out` VARCHAR(191) NULL,
    `contact` VARCHAR(191) NULL,
    `disease` VARCHAR(191) NULL,
    `room_no` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT '1',
    `doctor_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `staff` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `nic` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `contact` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT '1',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `doctor_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `appoinment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NULL,
    `details` VARCHAR(191) NULL,
    `patient_id` INTEGER NOT NULL,
    `doctor_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Patients` ADD CONSTRAINT `Patients_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `Doctors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `staff` ADD CONSTRAINT `staff_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `Doctors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `appoinment` ADD CONSTRAINT `appoinment_patient_id_fkey` FOREIGN KEY (`patient_id`) REFERENCES `Patients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `appoinment` ADD CONSTRAINT `appoinment_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `Doctors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
