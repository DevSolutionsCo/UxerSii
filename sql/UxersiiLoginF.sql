-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema uxersii
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema uxersii
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `uxersii` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `uxersii` ;

-- -----------------------------------------------------
-- Table `uxersii`.`establecimiento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `uxersii`.`establecimiento` (
  `id_Esta` INT NOT NULL AUTO_INCREMENT,
  `nombreEstablecimiento` VARCHAR(255) NULL DEFAULT NULL,
  `ubicacionE` VARCHAR(255) NULL DEFAULT NULL,
  `correoE` VARCHAR(255) NULL DEFAULT NULL,
  `contactosE` VARCHAR(255) NULL DEFAULT NULL,
  `redesE` VARCHAR(255) NULL DEFAULT NULL,
  `descripE` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id_Esta`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `uxersii`.`hogar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `uxersii`.`hogar` (
  `id_Hogar` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  `apellidoPaterno` VARCHAR(255) NULL DEFAULT NULL,
  `apellidoMaterno` VARCHAR(255) NULL DEFAULT NULL,
  `fechaNacimiento` DATE NULL DEFAULT NULL,
  `correoH` VARCHAR(255) NULL DEFAULT NULL,
  `contrasenaH` VARCHAR(255) NULL DEFAULT NULL,
  `genero` VARCHAR(255) NULL DEFAULT NULL,
  `descripH` TEXT NULL DEFAULT NULL,
  `codigoPostal` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id_Hogar`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `uxersii`.`organizacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `uxersii`.`organizacion` (
  `id_Org` INT NOT NULL AUTO_INCREMENT,
  `nombreOrganizacion` VARCHAR(255) NULL DEFAULT NULL,
  `ubicacionO` VARCHAR(255) NULL DEFAULT NULL,
  `correoO` VARCHAR(255) NULL DEFAULT NULL,
  `contrasenaO` VARCHAR(255) NULL DEFAULT NULL,
  `contactosO` VARCHAR(255) NULL DEFAULT NULL,
  `redesO` VARCHAR(255) NULL DEFAULT NULL,
  `id_oficial` VARCHAR(20) NULL DEFAULT NULL,
  `descripO` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id_Org`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
