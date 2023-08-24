\c cars_db
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
     (3, 'Supra', 1993,'A70', 231, '1993supra.png', false);




