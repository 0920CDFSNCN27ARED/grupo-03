insert into payment_method (id, method) values (1, 'cash');
insert into payment_method (id, method) values (2, 'debitCard');
insert into payment_method (id, method) values (3, 'mercadoPago');
insert into payment_method (id, method) values (4, 'creditCard');

insert into category_users (id, type) values (1, 'buyer');
insert into category_users (id, type) values (2, 'admin');

insert into users (id, firstName, lastName, email, user, image, password, categoryId) values (1, 'Chrysler', 'Millsom', 'cmillsom0@mac.com', 'cmillsom0', 'image', 'OSGd5V', 1);
insert into users (id, firstName, lastName, email, user, image, password, categoryId) values (2, 'Holly-anne', 'Frankiewicz', 'hfrankiewicz1@nih.gov', 'hfrankiewicz1', 'image', 'gmnQGu2uTU', 1);
insert into users (id, firstName, lastName, email, user, image, password, categoryId) values (3, 'Cherrita', 'Taye', 'ctaye2@squidoo.com', 'ctaye2', 'image', 'TS9tTpIxIv', 1);
insert into users (id, firstName, lastName, email, user, image, password, categoryId) values (4, 'Amie', 'Duckers', 'aduckers3@biblegateway.com', 'aduckers3', 'image', 'r2QtH8E', 1);
insert into users (id, firstName, lastName, email, user, image, password, categoryId) values (5, 'Brigit', 'Srutton', 'bsrutton4@nih.gov', 'bsrutton4', 'image', 'Qudygy', 1);
insert into users (id, firstName, lastName, email, user, image, password, categoryId) values (6, 'Daisie', 'Gribbell', 'dgribbell5@amazon.com', 'dgribbell5', 'image', 'BKzMrEIL', 1);
insert into users (id, firstName, lastName, email, user, image, password, categoryId) values (7, 'Colene', 'Debrett', 'cdebrett6@liveinternet.ru', 'cdebrett6', 'image', 'afaj1gkHy', 1);
insert into users (id, firstName, lastName, email, user, image, password, categoryId) values (8, 'Yul', 'Woolcocks', 'ywoolcocks7@shutterfly.com', 'ywoolcocks7', 'image', 'tlsm6b', 1);
insert into users (id, firstName, lastName, email, user, image, password, categoryId) values (9, 'Devon', 'Batty', 'dbatty8@buzzfeed.com', 'dbatty8', 'image', 'BnqJYo5LHf', 1);
insert into users (id, firstName, lastName, email, user, image, password, categoryId) values (10, 'Temple', 'Loveard', 'tloveard9@google.fr', 'tloveard9', 'image', '5oqrXdg', 1);
insert into users (id, firstName, lastName, email, user, image, password, categoryId) values (11, 'Melisenda', 'Baudinot', 'mbaudinota@globo.com', 'mbaudinota', 'image', 'HScnsF9QHbhA', 1);
insert into users (id, firstName, lastName, email, user, image, password, categoryId) values (12, 'Kyle', 'Lammert', 'klammertb@nih.gov', 'klammertb', 'image', 'foeIBknMZ', 1);
insert into users (id, firstName, lastName, email, user, image, password, categoryId) values (13, 'Bernardo', 'Slayton', 'bslaytonc@opera.com', 'bslaytonc', 'image', 'L7OBXSqYlm', 1);
insert into users (id, firstName, lastName, email, user, image, password, categoryId) values (14, 'Tobiah', 'Bravington', 'tbravingtond@smugmug.com', 'tbravingtond', 'image', 'KGmiNmT', 1);
insert into users (id, firstName, lastName, email, user, image, password, categoryId) values (15, 'Trent', 'Orrum', 'torrume@ow.ly', 'torrume', 'image', 'FI3Ek5D1Ru8', 1);

insert into product_category (id, name) values (1, 'Cabello');
insert into product_category (id, name) values (2, 'Cuerpo');
insert into product_category (id, name) values (3, 'Rostro');
insert into product_category (id, name) values (4, 'Manos');
insert into product_category (id, name) values (5, 'Kits');
insert into product_category (id, name) values (6, 'Higiene');
insert into product_category (id, name) values (7, 'Pies');
insert into product_category (id, name) values (8, 'Accesorios');

insert into sales (id, date, userId, payMethodId) values (1, '2020-06-26', 12, 3);
insert into sales (id, date, userId, payMethodId) values (2, '2020-05-18', 1, 1);
insert into sales (id, date, userId, payMethodId) values (3, '2020-02-27', 11, 3);
insert into sales (id, date, userId, payMethodId) values (4, '2020-07-27', 14, 4);
insert into sales (id, date, userId, payMethodId) values (5, '2020-07-24', 4, 2);

insert into products (id, name, description, price, image, categoryId, discount, color) values (1, 'CEPILLO DE DIENTES DE BAMBU VEGANO', 'description of product', 1306.55, 'image', 8, 37, 'Mauv');
insert into products (id, name, description, price, image, categoryId, discount, color) values (2, 'PERFUME SÓLIDO', 'description of product', 1210.05, 'image', 4, 7, 'Pink');
insert into products (id, name, description, price, image, categoryId, discount, color) values (3, 'BÁLSAMO LABIAL LAVANDA', 'description of product', 1127.21, 'image', 8, 2, 'Puce');
insert into products (id, name, description, price, image, categoryId, discount, color) values (4, 'JABONERAS DE PINO AL NATURAL', 'description of product', 269.77, 'image', 4, 41, 'Crimson');
insert into products (id, name, description, price, image, categoryId, discount, color) values (5, 'DESODORANTE EN CREMA', 'description of product', 2210.12, 'image', 6, 4, 'Orange');
insert into products (id, name, description, price, image, categoryId, discount, color) values (6, 'SERUM CAPILAR', 'description of product', 711.39, 'image', 5, 13, 'Turquoise');
insert into products (id, name, description, price, image, categoryId, discount, color) values (7, 'KIT AVANZADO', 'description of product', 408.33, 'image', 7, 7, 'Yellow');
insert into products (id, name, description, price, image, categoryId, discount, color) values (8, 'KIT CAPILAR', 'description of product', 1667.07, 'image', 7, 48, 'Goldenrod');
insert into products (id, name, description, price, image, categoryId, discount, color) values (9, 'PASTA DENTAL', 'description of product', 939.28, 'image', 8, 15, 'Mauv');
insert into products (id, name, description, price, image, categoryId, discount, color) values (10, 'SHAMPOO LAVANDA', 'description of product', 1173.91, 'image', 1, 9, 'Crimson');
insert into products (id, name, description, price, image, categoryId, discount, color) values (11, 'BALSAMO MIEL', 'description of product', 1662.53, 'image', 2, 33, 'Mauv');
insert into products (id, name, description, price, image, categoryId, discount, color) values (12, 'SHAMPOO CABELLO GRASO', 'description of product', 257.71, 'image', 3, 25, 'Fuscia');
insert into products (id, name, description, price, image, categoryId, discount, color) values (13, 'HISOPOS DE MADERA', 'description of product', 1926.72, 'image', 1, 25, 'Indigo');
insert into products (id, name, description, price, image, categoryId, discount, color) values (14, 'PEINE DE BAMBU', 'description of product', 2031.64, 'image', 6, 2, 'Goldenrod');
insert into products (id, name, description, price, image, categoryId, discount, color) values (15, 'CREMA UN LITRO', 'description of product', 2283.07, 'image', 1, 22, 'Orange');
insert into products (id, name, description, price, image, categoryId, discount, color) values (16, 'LABIAL CHOCOLATE', 'description of product', 317.94, 'image', 7, 37, 'Crimson');
insert into products (id, name, description, price, image, categoryId, discount, color) values (17, 'KIT HIGIENE', 'description of product', 1846.03, 'image', 8, 2, 'Purple');
insert into products (id, name, description, price, image, categoryId, discount, color) values (18, 'SERUM ALOE VERA', 'description of product', 2150.15, 'image', 6, 50, 'Blue');
insert into products (id, name, description, price, image, categoryId, discount, color) values (19, 'CREMA PARA MANOS', 'description of product', 1806.92, 'image', 2, 5, 'Green');
insert into products (id, name, description, price, image, categoryId, discount, color) values (20, 'CREMA PARA PIES', 'description of product', 211.11, 'image', 1, 18, 'Green');

insert into product_sale (id, productId, saleId, quantity, salePrice) values (1, 19, 1, 8, 250.2);
insert into product_sale (id, productId, saleId, quantity, salePrice) values (2, 19, 1, 2, 890.07);
insert into product_sale (id, productId, saleId, quantity, salePrice) values (3, 8, 2, 3, 499.47);
insert into product_sale (id, productId, saleId, quantity, salePrice) values (4, 18, 4, 2, 534.39);
insert into product_sale (id, productId, saleId, quantity, salePrice) values (5, 7, 4, 9, 932.14);

