drop database if exists byhdhbawhabi2j3grqnb;
create database byhdhbawhabi2j3grqnb;
use byhdhbawhabi2j3grqnb;


create table alimentos(
id_alim int auto_increment primary key not null,
nomb_alim nvarchar(100),
fecha_cad date,
id_punto int,
imagen nvarchar(500),
costo decimal(10, 2),
cantidad int,
tipo nvarchar(25));

select * from compra_hog;

create table puntos_colecta (
id_punto int auto_increment primary key not null,
nomb_punto nvarchar(255),
latitud decimal(10,6),
longitud decimal(10,6),
responsable nvarchar(255),
almacenamiento decimal(10,2),
horario time,
fecha_de_creacion date,
estado nvarchar(10),
valcod nvarchar(20),
descripcion TEXT)
;

create table donaciones(
id_dona nvarchar(100) primary key not null,
catn_adon int,
nomb_alim_dona nvarchar(100),
fecha_cad_dona date,
estatus nvarchar(15),
nombUserH nvarchar(15),
id_punto int
);

CREATE TABLE compra_hog (
    id_compra INT AUTO_INCREMENT PRIMARY KEY,
    folio VARCHAR(50),
    id_carrito INT,
    estatus boolean,
    cantidad INT,
    FOREIGN KEY (id_carrito) REFERENCES carrito(id_carrito)
);


create table usuario_hogar(
id_hog int auto_increment primary key not null,
nombre_hog nvarchar(20),
apellido_mat nvarchar(20),
apellido_pat nvarchar(20),
fecha_nac date,
correo_hog nvarchar (50),
contra_hog nvarchar (25),
desc_hog nvarchar(100),
genero nvarchar(20),
nombUserH nvarchar(15),
codigoPostal int(8),
fotoH text,
numDonaciones int(5));


create table compra_hog(
id_compra int auto_increment primary key not null,
folio nvarchar(50),
id_carrito int,
estatus boolean,
cantidad int,
foreign key (id_carrito) references carrito (id_carrito) on delete cascade on update cascade
);


create table administrador(
id_admin int primary key not null,
correo_admin nvarchar(50),
contra_admin nvarchar(20),
nombre_admin nvarchar(30));

insert into administrador values 
(1, "reyna.juarez.javier@gmail.com","javi","Javier"),
(2, "ruiz.lopez.victormanuelr@gmail.com","vic","Victor"),
(3, "molina.fernandez.cristopherian@gmial.com","cris","Cris"),
(4, "jara.hernandez.carlossebastian@gmail.com","jara","Sebastian");


create table hogar_don(
id_hog int,
id_dona nvarchar(100),
foreign key (id_hog) references usuario_hogar (id_hog) on delete cascade on update cascade,
foreign key (id_dona) references donaciones (id_dona) on delete cascade on update cascade
);

create table punto_don(
id_punto int,
id_dona nvarchar(100),
foreign key (id_punto) references puntos_colecta (id_punto) on delete cascade on update cascade,
foreign key (id_dona) references donaciones (id_dona) on delete cascade on update cascade
);

create table punto_admin(
id_punto int,
id_admin int,
foreign key (id_punto) references puntos_colecta (id_punto) on delete cascade on update cascade,
foreign key (id_admin) references administrador (id_admin) on delete cascade on update cascade
);

create table mensajes(
id_mens int auto_increment primary key not null,
mensaje text,
hora_men datetime,
usuario_envia nvarchar(50),
tipo_usuario nvarchar(20),
id_hog int,
id_admin int,
foreign key (id_hog) references usuario_hogar (id_hog) on delete cascade on update cascade,
foreign key (id_admin) references administrador (id_admin) on delete cascade on update cascade
);

create table carrito(
id_carrito int auto_increment primary key not null,
id_hog int,
id_alim int,
estatus nvarchar(20),
foreign key (id_hog) references usuario_hogar (id_hog) on delete cascade on update cascade,
foreign key (id_alim) references alimentos (id_alim) on delete cascade on update cascade
);



INSERT INTO puntos_colecta (nomb_punto, latitud, longitud, responsable, almacenamiento, horario, fecha_de_creacion, estado, descripcion, valcod)
VALUES 
  ('Centro Histórico - Zócalo', 19.4326, -99.1332, 'Responsable1', 100.00, '08:00:00', '2023-11-27', 'Activo', 'Un lugar céntrico y muy transitado.', 'P@ssw0rd'),
  ('Cerca de la Universidad Nacional Autónoma de México (UNAM)', 19.3228, -99.1866, 'Responsable2', 150.50, '09:00:00', '2023-11-27', 'Activo', 'Una zona con alta población estudiantil.', 'Qwerty12'),
  ('Iztapalapa - Cerca del Metro Constitución de 1917', 19.3742, -99.0721, 'Responsable3', 80.75, '10:00:00', '2023-11-27', 'Activo', 'Una zona con alta densidad poblacional.', '12345AbcdE'),
  ('Ecatepec - Cerca de la estación de metro Ciudad Azteca', 19.5345, -99.0279, 'Responsable4', 120.25, '11:00:00', '2023-11-27', 'Activo', 'Para servir a las áreas más alejadas del centro.', 'XyZ9876543'),
  ('Santa Fe - Parque La Mexicana', 19.3598, -99.2713, 'Responsable5', 200.00, '12:00:00', '2023-11-27', 'Activo', 'Un área con muchas oficinas y flujo de personas.', '0OoLlIi98'),
  ('Parque de los Venados', 19.3800, -99.1556, 'Responsable6', 90.50, '13:00:00', '2023-11-27', 'Activo', 'Un parque popular en la delegación Benito Juárez.', 'Pa$$w0rd!'),
  ('Plaza Universidad', 19.3622, -99.1677, 'Responsable7', 180.75, '14:00:00', '2023-11-27', 'Activo', 'Un centro comercial grande y muy frecuentado.', 'AaBbCcDdEe'),
  ('Centro Comercial Santa Fe', 19.3599, -99.2780, 'Responsable8', 250.00, '15:00:00', '2023-11-27', 'Activo', 'En una de las zonas de negocios más importantes de la ciudad.', '1qaz2wsx3e'),
  ('Bosque de Chapultepec', 19.4200, -99.1919, 'Responsable9', 130.25, '16:00:00', '2023-11-27', 'Activo', 'Un área verde extensa y muy visitada.', '!@#abc1234'),
  ('Plaza de las Tres Culturas, Tlatelolco', 19.4550, -99.1320, 'Responsable10', 160.50, '17:00:00', '2023-11-27', 'Activo', 'Un lugar histórico y de gran importancia cultural.', 'P4ssW0rd$'),
  ('Reforma - Ángel de la Independencia', 19.4255, -99.1669, 'Responsable11', 140.00, '08:30:00', '2023-11-27', 'Activo', 'Una ubicación icónica en la ciudad.', 'PaSsWoRd123'),
  ('Polanco - Parque Lincoln', 19.4334, -99.1942, 'Responsable12', 190.50, '09:30:00', '2023-11-27', 'Activo', 'Una zona residencial de alta clase.', 'qwerty12345'),
  ('Coyoacán - Jardín Hidalgo', 19.3579, -99.1624, 'Responsable13', 110.75, '10:30:00', '2023-11-27', 'Activo', 'Un lugar histórico y cultural.', 'abc123ABC'),
  ('Condesa - Parque México', 19.4144, -99.1777, 'Responsable14', 170.25, '11:30:00', '2023-11-27', 'Activo', 'Un parque emblemático de la ciudad.', 'p@ssword!'),
  ('Roma - Plaza Río de Janeiro', 19.4179, -99.1675, 'Responsable15', 220.00, '12:30:00', '2023-11-27', 'Activo', 'Una plaza con arquitectura única.', '123456789'),
  ('Xochimilco - Embarcadero Nuevo Nativitas', 19.2483, -99.1020, 'Responsable16', 80.50, '13:30:00', '2023-11-27', 'Activo', 'Una zona famosa por sus trajineras.', 'password123'),
  ('Chapultepec - Museo de Arte Moderno', 19.4223, -99.1810, 'Responsable17', 200.75, '14:30:00', '2023-11-27', 'Activo', 'Un museo de arte contemporáneo.', '987654321'),
  ('Azcapotzalco - Parque Tezozómoc', 19.5038, -99.2033, 'Responsable18', 130.00, '15:30:00', '2023-11-27', 'Activo', 'Un gran parque con lago artificial.', 'passw0rd!'),
  ('Tlalpan - Parque Nacional Fuentes Brotantes', 19.2635, -99.2093, 'Responsable19', 160.50, '16:30:00', '2023-11-27', 'Activo', 'Un parque con manantiales naturales.', 'qwe123rty'),
  ('San Ángel - Plaza San Jacinto', 19.3557, -99.1861, 'Responsable20', 240.25, '17:30:00', '2023-11-27', 'Activo', 'Un lugar con arte y cultura.', '987654321qwerty');


INSERT INTO alimentos (nomb_alim, fecha_cad, id_punto, cantidad, costo) VALUES ('Arroz', '2024-02-20', 1, 10, 100.50);

    
insert into usuario_hogar(correo_hog, nombre_hog, apellido_pat, apellido_mat, fecha_nac, genero, contra_hog, nombUserH, codigoPostal) values
("javisrey26@gmail.com", "Javier", "Reyna", "Juarez", "2006-03-26", "Masculino", "holamoon", "corcho", 54954),
("cris26@gmail.com", "Cris", "Molina", "Fernandez", "2006-03-26", "Masculino", "holamoon", "crisito", 54954),
("vic26@gmail.com", "Vic", "Ruiz", "Lopez", "2006-03-26", "Masculino", "holamoon", "vicsito", 54954),
("jara26@gmail.com", "Jara", "Hernandez", "Carlos", "2006-03-26", "Masculino", "holamoon", "jarita", 54954);




