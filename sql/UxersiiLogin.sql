create database if not exists Uxersii;
use Uxersii;
-- Crear la tabla Hogar
CREATE TABLE Hogar (
    id_Hogar INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    apellidoPaterno VARCHAR(255),
    apellidoMaterno VARCHAR(255),
    fechaNacimiento DATE,
    correoH VARCHAR(255),
    contrasenaH VARCHAR(255),
    genero VARCHAR(255),
    descripH TEXT,
    codigoPostal VARCHAR(10)
);

-- Crear la tabla Organizacion
CREATE TABLE Organizacion (
    id_Org INT AUTO_INCREMENT PRIMARY KEY,
    nombreOrganizacion VARCHAR(255),
    ubicacionO VARCHAR(255),
    correoO VARCHAR(255),
    contrasenaO VARCHAR(255),
    contactosO VARCHAR(255),
    redesO VARCHAR(255),
    id_oficial varchar(20),
    descripO TEXT
);

-- Crear la tabla Establecimiento
CREATE TABLE Establecimiento (
    id_Esta INT AUTO_INCREMENT PRIMARY KEY,
    nombreEstablecimiento VARCHAR(255),
    ubicacionE VARCHAR(255),
    correoE VARCHAR(255),
    contactosE VARCHAR(255),
    redesE VARCHAR(255),
    descripE TEXT
);
