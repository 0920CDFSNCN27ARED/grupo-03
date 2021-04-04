USE `cala_db`;
insert into payment_methods (id, method) values (1, 'cash');
insert into payment_methods (id, method) values (2, 'debitCard');
insert into payment_methods (id, method) values (3, 'mercadoPago');
insert into payment_methods (id, method) values (4, 'creditCard');

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
insert into users (id, firstName, lastName, email, user, image, password, categoryId) values (16, 'admin', 'admin', 'admin@gmail.com', 'admin01', 'image-1616623671707.png', '$2b$10$EO0mXahLfGmbDQXdCvRtyeqvqMjBAefrVdzuSHSq3CnetF6Bu5A6a', 2);

insert into product_categories (id, name) values (1, 'Cabello');
insert into product_categories (id, name) values (2, 'Cuerpo');
insert into product_categories (id, name) values (3, 'Rostro');
insert into product_categories (id, name) values (4, 'Manos');
insert into product_categories (id, name) values (5, 'Kits');
insert into product_categories (id, name) values (6, 'Higiene');
insert into product_categories (id, name) values (7, 'Pies');
insert into product_categories (id, name) values (8, 'Accesorios');

insert into sales (id, date, userId, payMethodId) values (1, '2020-06-26', 12, 3);
insert into sales (id, date, userId, payMethodId) values (2, '2020-05-18', 1, 1);
insert into sales (id, date, userId, payMethodId) values (3, '2020-02-27', 11, 3);
insert into sales (id, date, userId, payMethodId) values (4, '2020-07-27', 14, 4);
insert into sales (id, date, userId, payMethodId) values (5, '2020-07-24', 4, 2);

insert into products (id, name, description, price, image, categoryId, discount, color) values (1, 'CEPILLO DE DIENTES DE BAMBU VEGANO', 'Tanto el mango de los cepillos (97% del total del producto) como sus cajas son biodegradables.', 250, 'product_17.jpg', 6, 37, 'Mauv');
insert into products (id, name, description, price, image, categoryId, discount, color) values (2, 'PERFUME SÓLIDO', 'Se trata de un perfume en crema que podrás llevar siempre en el bolso para retocarte a lo largo del día. Es una fórmula sin alcohol, perfecta para pieles sensibles.', 470, 'product_7.jpg', 2, 7, 'Pink');
insert into products (id, name, description, price, image, categoryId, discount, color) values (3, 'BÁLSAMO LABIAL LAVANDA', 'Bálsamo labial nutritivo e hidratante.', 440, 'product_40.jpg', 3, 2, 'Puce');
insert into products (id, name, description, price, image, categoryId, discount, color) values (4, 'JABONERAS DE PINO AL NATURAL', 'Son curadas con productos naturales evitando el uso de barnices tóxicos.', 340, 'product_16.jpg', 8, 10, 'Crimson');
insert into products (id, name, description, price, image, categoryId, discount, color) values (5, 'DESODORANTE EN CREMA', 'Este desodorante en crema permite la natural y necesaria transpiración y la hace inolora gracias a sus ingredientes.', 570, 'product_8.jpg', 6, 4, 'Orange');
insert into products (id, name, description, price, image, categoryId, discount, color) values (6, 'SERUM CAPILAR', 'Los aceites vegetales otorgan las propiedades necesarias para mantener el pelo hidratado, brilloso y con fuerza.', 610, 'product_11.jpg', 1, 13, 'Turquoise');
insert into products (id, name, description, price, image, categoryId, discount, color) values (7, 'KIT PARA EMPEZAR', 'Incluye: Sampoo sólido a elección, Acondicionador sólido, Desodorante.', 2200, 'product_15.jpg', 5, 7, 'Yellow');
insert into products (id, name, description, price, image, categoryId, discount, color) values (8, 'KIT CAPILAR', 'Incluye: Sampoo sólido a elección, Acondicionador sólido, Serum capilar, Jabonera, Peine de madera.', 3100, 'product_41.jpg', 5, 5, 'Goldenrod');
insert into products (id, name, description, price, image, categoryId, discount, color) values (9, 'PASTA DENTAL', 'Es antiséptica, desinflamante y apta para encías sensibles.', 399.99, 'product_10.jpg', 6, 15, 'Mauv');
insert into products (id, name, description, price, image, categoryId, discount, color) values (10, 'SHAMPOO SÓLIDO LAVANDA', 'Para una rutina de belleza que marque la diferencia ayudando en la reparación del cabello dañado y opaco.', 879.91, 'product_12.jpg', 1, 9, 'Crimson');
insert into products (id, name, description, price, image, categoryId, discount, color) values (11, 'BALSAMO MIEL', 'Domina las cejas, resalta tus pómulos y dale a tus labios un brillo hermoso.', 678.53, 'product_42.jpg', 3, 8, 'Mauv');
insert into products (id, name, description, price, image, categoryId, discount, color) values (12, 'SHAMPOO SÓLIDO CABELLO GRASO', 'Con aceite de pepitas de uva, aceite de coco y hojas de salvia officinalis que le agrega fuerza, brillo y ayuda a evitar la caída del cabello.', 870, 'product_2.jpg', 1, 15, 'Fuscia');
insert into products (id, name, description, price, image, categoryId, discount, color) values (13, 'HISOPOS DE MADERA', 'Cotonetes fabricados en madera y algodón. Perfectos para una rutina de higiene personal o maquillaje en equilibrio con la naturaleza.', 310.72, 'product_31.jpg', 6, 5, 'Indigo');
insert into products (id, name, description, price, image, categoryId, discount, color) values (14, 'PEINE DE MADERA', 'Material recuperado multilaminado de excelente resistencia, no generan electricidad estática al peinar como los peines de plástico comunes, deslizandose suavemente y dando un aspecto sano y natural sin frizz a corto plazo.', 485.64, 'product_43.jpg', 8, 2, 'Goldenrod');
insert into products (id, name, description, price, image, categoryId, discount, color) values (15, 'CREMA CORPORAL CASTAÑAS', 'Protege, hidrata y realimenta la piel. Rica en omega 6 y 9, con textura cremosa y suave.', 865.07, 'product_38.jpg', 2, 25, 'Orange');
insert into products (id, name, description, price, image, categoryId, discount, color) values (16, 'LABIAL CHOCOLATE', 'La manteca de karité y la manteca de cacao aportan suavidad a los labios y los regenera. Además, protege de los rayos UV.La manteca de karité y la manteca de cacao aportan suavidad a los labios y los regenera. Además, protege de los rayos UV.', 341.94, 'product_44.jpg', 3, 5, 'Crimson');
insert into products (id, name, description, price, image, categoryId, discount, color) values (17, 'KIT HIGIENE', 'Incluye: Sampoo sólido a elección, Acondicionador sólido, Desodorante, Barra corporal', 2500, 'product_24.jpg', 5, 2, 'Purple');
insert into products (id, name, description, price, image, categoryId, discount, color) values (18, 'ACONDICIONADOR SÓLIDO', 'Nutritivo, hidratante, reparador, desenredante.', 820.15, 'product_1.jpg', 1, 15, 'Blue');
insert into products (id, name, description, price, image, categoryId, discount, color) values (19, 'CREMA PARA MANOS', 'Combina las cualidades restauradoras del aceite esencial absoluto de semilla de escaramujo (Rosa canina), prensada en frío, con los extractos florales sedantes de la rosa damascena para revitalizar la piel irritada o cuarteada por el frío.', 510.92, 'product_30.jpg', 4, 5, 'Green');
insert into products (id, name, description, price, image, categoryId, discount, color) values (20, 'CREMA PARA PIES', 'Crema Humectante y Nutritiva con Caléndula. A base de componentes naturales, con Aloe Vera y Alfalfa. Por su acción antiséptica y astringente, es ideal para paspaduras, piel seca y sensible.', 673.11, 'product_45.jpg', 7, 18, 'Green');
insert into products (id, name, description, price, image, categoryId, discount, color) values (21, 'SHAMPOO SÓLIDO CABELLO SECO', 'La manteca de cacao da nueva vitalidad, haciendo que el cabello sea suave, brillante y sedoso. El aceite de palta repara el cabello dañado y lo nutre en profundidad. Las flores de hibiscus previene la caída y las puntas quebradizas.', 870, 'product_4.jpg', 1, 15, 'Black');
insert into products (id, name, description, price, image, categoryId, discount, color) values (22, 'SHAMPOO SÓLIDO GERANIO', 'Hecho con aceites nutritivos de coco orgánico y de oliva, así como emolientes hidratantes como la manteca de karité orgánica y la manteca de cacao. Con aceite esencial de geranio órganico es ideal para todo tipo de cabello.', 870, 'product_18.jpg', 1, 15, 'White');


insert into product_sale (id, productId, saleId, quantity, salePrice) values (1, 19, 1, 8, 250.2);
insert into product_sale (id, productId, saleId, quantity, salePrice) values (2, 19, 1, 2, 890.07);
insert into product_sale (id, productId, saleId, quantity, salePrice) values (3, 8, 2, 3, 499.47);
insert into product_sale (id, productId, saleId, quantity, salePrice) values (4, 18, 4, 2, 534.39);
insert into product_sale (id, productId, saleId, quantity, salePrice) values (5, 7, 4, 9, 932.14);

select * from users