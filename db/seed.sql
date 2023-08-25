\c cars_db_05jk
INSERT INTO makes (make_name, make_image)
VALUES('Nissan','nissan.png'),
('Mitsubishi','mitsubishi.png'),
('Toyota','toyota.png'),
('Ferrari','ferrari.png'),
('Lamborghini','lamborghini.png'),
('McLaren','mclaren.png'),
('Porsche','porsche.png');
INSERT INTO cars (make, model, year,chassis, horsepower, image, is_favorite)
VALUES
    (3, 'Supra', 2023,'A90', 382, '2023supra.png', false),
   (1, 'GT-R', 2023,'CBA-R35', 600, '2023gtr.png', true),
    (1, 'Skyline GT-R', 2002,'BNR34', 276, '2002gtr.png', true),
    (3, 'Supra', 2002,'MKIV', 280, '2002supra.png', false),
     (2, 'Evolution X', 2015,'CZ4A', 303, '2015evo.png', false),
     (2, 'Evolution IX', 2007,'CT9A', 286, '2007evo.png', true),
     (2, 'Evolution VIII', 2005,'CT9A', 276, '2005evo.png', true),
     (3, 'Supra', 1993,'A70', 231, '1993supra.png', false),
     (4, 'SF90', 2023,'F173', 780, '2023sf90.png', true),
     (4, 'Enzo', 2004,'F140', 650, '2004enzo.png', false),
     (4, '458', 2015,'F142', 570, '2015458.png', true),
     (5, 'Sesto Elemento', 2012,'', 562, '2012sesto.png', true),
     (5, 'Huracán LP 640-4 Performante', 2018,'', 631, '2018huracan.png', true),
     (5, 'Gallardo', 2014,'', 570, '2014gallardo.png', true),
     (6, 'P1', 2013,'', 903, '2013p1.png', true),
     (6, '720S', 2023,'', 710, '2023720s.png', true),
     (6, '570S', 2023,'', 561, '2023570s.png', false),
     (7, '911 GT3 RS', 2023,'', 518, '2023gt3rs.png', true),
     (7, 'Carrera GT', 2005,'', 603, '2005carrera.png', false),
     (7, '918 Spyder', 2015,'', 875, '2015918.png', true);




