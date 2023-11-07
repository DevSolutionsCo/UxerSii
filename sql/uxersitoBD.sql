drop database if exists uxersii;
create database uxersii;
use uxersii;

create table eventos(
id_eve int auto_increment primary key not null,
nombre_eve nvarchar (50),
fecha_eve date,
desc_eve text,
cp_eve nvarchar(6),
tipo_eve nvarchar(30),
num_asist int
);

create table chatbot(
id_pryre int auto_increment primary key not null,
preg text,
resp text);

create table alimentos(
id_alim int auto_increment primary key not null,
nomb_alim nvarchar(100),
fecha_cad date,
cantidad int);

create table donaciones(
id_dona int auto_increment primary key not null,
catn_adon int,
nomb_alim_dona nvarchar(100),
fecha_Cad_dona date,
estatus boolean
);

create table usuario_hogar(
id_hog int auto_increment primary key not null,
nombre_hog nvarchar(20),
apellido_mat nvarchar(20),
apellido_pat nvarchar(20),
fecha_nac date,
correo_hog nvarchar (50),
contra_hog nvarchar (25),
desc_hog text,
genero nvarchar(15),
nombUserH nvarchar(15),
codigoPostal int(8),
id_eve int,
id_alim int,
id_pryre int,
id_dona int,
foreign key (id_eve) references eventos (id_eve) on delete cascade on update cascade,
foreign key (id_alim) references alimentos (id_alim) on delete cascade on update cascade,
foreign key (id_pryre) references chatbot (id_pryre) on delete cascade on update cascade,
foreign key (id_dona) references donaciones (id_dona) on delete cascade on update cascade
);

create table hogar_eve(
id_eve int,
id_hog int,
foreign key (id_eve) references eventos (id_eve) on delete cascade on update cascade,
foreign key (id_hog) references usuario_hogar (id_hog) on delete cascade on update cascade
);

create table hogar_alim(
id_hog int,
id_alim int,
foreign key (id_hog) references usuario_hogar (id_hog) on delete cascade on update cascade,
foreign key (id_alim) references alimentos (id_alim) on delete cascade on update cascade
);

create table hogar_pryre(
id_hog int,
id_pryre int,
foreign key (id_hog) references usuario_hogar (id_hog) on delete cascade on update cascade,
foreign key (id_pryre) references chatbot (id_pryre) on delete cascade on update cascade
);

create table hogar_dona(
id_hog int,
id_dona int,
foreign key (id_hog) references usuario_hogar (id_hog) on delete cascade on update cascade,
foreign key (id_dona) references donaciones (id_dona) on delete cascade on update cascade
);

create table usuario_establecimiento(
id_est int auto_increment primary key not null,
nombre_est nvarchar(50),
cp_est nvarchar(6),
contra_est nvarchar(25),
correo_est nvarchar(50),
tel_est nvarchar(20),
desc_est text,
tipo_redest nvarchar(12),
link_redest nvarchar(250),
id_eve int,
id_alim int,
id_pryre int,
id_dona int,
foreign key (id_eve) references eventos (id_eve) on delete cascade on update cascade,
foreign key (id_alim) references alimentos (id_alim) on delete cascade on update cascade,
foreign key (id_pryre) references chatbot (id_pryre) on delete cascade on update cascade,
foreign key (id_dona) references donaciones (id_dona) on delete cascade on update cascade
);

create table estable_eve(
id_est int,
id_eve int,
foreign key (id_est) references usuario_establecimiento (id_est) on delete cascade on update cascade,
foreign key (id_eve) references eventos (id_eve) on delete cascade on update cascade
);

create table estable_alim(
id_est int,
id_alim int,
foreign key (id_est) references usuario_establecimiento (id_est) on delete cascade on update cascade,
foreign key (id_alim) references alimentos (id_alim) on delete cascade on update cascade
);

create table estable_dona(
id_est int,
id_dona int,
foreign key (id_est) references usuario_establecimiento (id_est) on delete cascade on update cascade,
foreign key (id_dona) references donaciones (id_dona) on delete cascade on update cascade
);

create table estable_pryre(
id_est int,
id_pryre int,
foreign key (id_est) references usuario_establecimiento (id_est) on delete cascade on update cascade,
foreign key (id_pryre) references chatbot (id_pryre) on delete cascade on update cascade
);

create table usuario_organizacion(
id_ofc nvarchar (15) primary key not null,
nombre_org nvarchar(50),
cp_org nvarchar(6),
contra_org nvarchar(20),
correo_org nvarchar(50),
desc_org text,
tel_org nvarchar(20),
tipo_redorg nvarchar(12),
link_org nvarchar(250),
id_eve int,
id_alim int,
id_dona int,
foreign key (id_eve) references eventos (id_eve) on delete cascade on update cascade,
foreign key (id_alim) references alimentos (id_alim) on delete cascade on update cascade,
foreign key (id_dona) references donaciones (id_dona) on delete cascade on update cascade
);


insert into usuario_organizacion (id_ofc) values 
('CC502'),
('CC628'),
('CC700'),
('CC645'),
('CC340'),
('CC412'),
('CC672'),
('CC357'),
('CC211'),
('CC361'),
('CC325'),
('CC448'),
('CC072'),
('CC324'),
('CC443'),
('CC639'),
('CC491'),
('CC538'),
('CC264'),
('CC189'),
('CC536'),
('CC250'),
('CC116'),
('CC063'),
('CC563'),
('CC697'),
('CC698'),
('CC105'),
('CC050'),
('CC669'),
('CC702'),
('CC453'),
('CC217'),
('CC011'),
('CC707'),
('CC403'),
('CC152'),
('CC689'),
('CC070'),
('CC537'),
('CC626'),
('CC300'),
('CC259'),
('CC642'),
('CC608'),
('CC019'),
('CC609'),
('CC261'),
('CC432'),
('CC627'),
('CC488'),
('CC245'),
('CC301'),
('CC705'),
('CC414'),
('CC025'),
('CC576'),
('CC296'),
('CC674'),
('CC144'),
('CC681'),
('CC668'),
('CC709'),
('CC231'),
('CC567'),
('CC328'),
('CC348'),
('CC641'),
('CC680'),
('CC021'),
('CC703'),
('CC665'),
('CC423'),
('CC691'),
('CC052'),
('CC706'),
('CC273'),
('CC484'),
('CC347'),
('CC091'),
('CC092'),
('CC095'),
('CC388'),
('CC140'),
('CC122'),
('CC147'),
('CC390'),
('CC406'),
('CC407'),
('CC525'),
('CC634'),
('CC617'),
('CC682'),
('CC181'),
('CC214'),
('CC512'),
('CC359'),
('CC590'),
('CC167'),
('CC589'),
('CC679'),
('CC643'),
('CC305'),
('CC588'),
('CC470'),
('CC586'),
('CC688'),
('CC119'),
('CC169'),
('CC196'),
('CC207'),
('CC086'),
('CC350'),
('CC380'),
('CC549'),
('CC630'),
('CC699'),
('CC476'),
('CC294'),
('CC276'),
('CC067'),
('CC280'),
('CC481'),
('CC544'),
('CC346'),
('CC336'),
('CC437'),
('CC582'),
('CC553'),
('CC435'),
('CC405'),
('CC629'),
('CC632'),
('CC005'),
('CC417'),
('CC507'),
('CC286'),
('CC053'),
('CC399'),
('CC015'),
('CC513'),
('CC602'),
('CC696'),
('CC428'),
('CC556'),
('CC398'),
('CC631'),
('CC533'),
('CC194'),
('CC633'),
('CC704'),
('CC272'),
('CC159'),
('CC592'),
('CC449'),
('CC422'),
('CC291'),
('CC068'),
('CC163'),
('CC166'),
('CC370'),
('CC686'),
('CC373'),
('CC650'),
('CC497'),
('CC494'),
('CC509'),
('CC653'),
('CC362'),
('CC510'),
('CC064'),
('CC010'),
('CC246'),
('CC215'),
('CC693'),
('CC598'),
('CC501'),
('CC613'),
('CC546'),
('CC505'),
('CC247'),
('CC411'),
('CC089'),
('CC593'),
('CC479'),
('CC611'),
('CC141'),
('CC401'),
('CC154'),
('CC109'),
('CC678'),
('CC266'),
('CC486'),
('CC117'),
('CC172'),
('CC424'),
('CC149'),
('CC257'),
('CC485'),
('CC652'),
('CC193'),
('CC508'),
('CC433'),
('CC687'),
('CC425'),
('CC263'),
('CC351'),
('CC234'),
('CC447'),
('CC008'),
('CC415'),
('CC659'),
('CC236'),
('CC337'),
('CC244'),
('CC342'),
('CC145'),
('CC205'),
('CC452'),
('CC480'),
('CC400'),
('CC394'),
('CC383'),
('CC382'),
('CC667'),
('CC499'),
('CC684'),
('CC441'),
('CC558'),
('CC003'),
('CC284'),
('CC277'),
('cc310'),
('CC378'),
('CC302'),
('CC298'),
('CC341'),
('CC575'),
('CC514'),
('CC459'),
('CC114'),
('CC692'),
('CC523'),
('CC694'),
('CC535'),
('CC354'),
('CC182'),
('CC430'),
('CC413'),
('CC663'),
('CC571'),
('CC594'),
('CC031'),
('CC402'),
('CC666'),
('CC385'),
('CC289'),
('CC468'),
('CC018'),
('CC001'),
('CC439'),
('CC344'),
('CC475'),
('CC478'),
('CC644'),
('CC409'),
('CC269'),
('CC662'),
('CC622'),
('CC368'),
('CC583'),
('CC198'),
('CC133'),
('CC124'),
('CC016'),
('CC069'),
('CC543'),
('CC640'),
('CC520'),
('CC474'),
('CC339'),
('CC660'),
('CC288'),
('CC360'),
('CC075'),
('CC677'),
('CC349'),
('CC285'),
('CC381'),
('CC303'),
('CC372'),
('CC202'),
('CC039'),
('CC223'),
('CC434'),
('CC256'),
('CC047'),
('CC625'),
('CC701'),
('CC410'),
('CC267'),
('CC139'),
('CC233'),
('CC386'),
('CC248'),
('CC134'),
('CC387'),
('CC321'),
('CC420'),
('CC466'),
('CC323'),
('CC389'),
('CC066'),
('CC279'),
('CC173'),
('CC482'),
('CC529'),
('CC636'),
('CC530'),
('CC293'),
('CC557'),
('CC162'),
('CC606'),
('CC511'),
('CC569'),
('CC607'),
('CC397'),
('CC391'),
('CC375'),
('CC708'),
('CC371'),
('CC572'),
('CC365'),
('CC366'),
('CC577'),
('CC138'),
('CC465'),
('CC464'),
('CC057'),
('CC358'),
('CC578'),
('CC176'),
('CC616'),
('CC623'),
('CC461'),
('CC228'),
('CC492'),
('CC515'),
('CC183'),
('CC551'),
('CC085'),
('CC283'),
('CC153'),
('CC034'),
('CC683'),
('CC107'),
('CC603'),
('CC055'),
('CC426'),
('CC251'),
('CC297'),
('CC534');


create table org_eve(
id_ofc nvarchar (15),
id_eve int,
foreign key (id_ofc) references usuario_organizacion (id_ofc) on delete cascade on update cascade,
foreign key (id_eve) references eventos (id_eve) on delete cascade on update cascade
);

create table org_alim(
id_ofc nvarchar (15),
id_alim int,
foreign key (id_ofc) references usuario_organizacion (id_ofc) on delete cascade on update cascade,
foreign key (id_alim) references alimentos (id_alim) on delete cascade on update cascade
);

create table org_dona(
id_ofc nvarchar (15),
id_dona int,
foreign key (id_ofc) references usuario_organizacion (id_ofc) on delete cascade on update cascade,
foreign key (id_dona) references donaciones (id_dona) on delete cascade on update cascade
);

create table insignias(
id_ins int auto_increment primary key not null,
tipo_ins nvarchar(100)
);

create table obtiene_hog(
id_ins int,
id_hog int,
foreign key (id_ins) references insignias (id_ins) on delete cascade on update cascade,
foreign key (id_hog) references usuario_hogar (id_hog) on delete cascade on update cascade
);

create table obtiene_est(
id_ins int,
id_est int,
foreign key (id_ins) references insignias (id_ins) on delete cascade on update cascade,
foreign key (id_est) references usuario_establecimiento (id_est) on delete cascade on update cascade
);

create table compra_hog(
id_alim int,
id_hog int,
foreign key (id_hog) references usuario_hogar (id_hog) on delete cascade on update cascade,
foreign key (id_alim) references alimentos (id_alim) on delete cascade on update cascade
);

create table compra_org(
id_alim int,
id_ofc nvarchar (15),
foreign key (id_ofc) references usuario_organizacion (id_ofc) on delete cascade on update cascade,
foreign key (id_alim) references alimentos (id_alim) on delete cascade on update cascade
);

create table venta_est(
id_alim int,
id_est int,
foreign key (id_est) references usuario_establecimiento (id_est) on delete cascade on update cascade,
foreign key (id_alim) references alimentos (id_alim) on delete cascade on update cascade
);






