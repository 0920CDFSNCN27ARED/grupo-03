
USE `cala_db`;

CREATE TABLE `category_users`(
`id` int unsigned NOT NULL AUTO_INCREMENT,
`type` varchar(20) NOT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE `users`(
`id` int unsigned NOT NULL AUTO_INCREMENT,
`firstName` varchar(45) NOT NULL ,
`lastName` varchar(45) NOT NULL,
`email` varchar(45) NOT NULL UNIQUE,
`user`varchar(16) NOT NULL UNIQUE,
`image` varchar(255) DEFAULT NULL,
`password` varchar(255),
`categoryId` int unsigned NOT NULL,
PRIMARY KEY (`id`),
KEY `users_category_users_id_foreign` (`categoryId`),
CONSTRAINT `users_category_users_id_foreign` FOREIGN KEY (`categoryId`) REFERENCES `category_users` (`id`)
);

CREATE TABLE `product_category`(
`id`int unsigned NOT NULL AUTO_INCREMENT,
`name`varchar(20) NOT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE `products`(
`id`int unsigned NOT NULL AUTO_INCREMENT,
`name` varchar(45) NOT NULL,
`description` varchar(255) NOT NULL,
`price`decimal unsigned NOT NULL,
`image`varchar(255) DEFAULT NULL,
`categoryId`int unsigned NOT NULL,
`discount` int unsigned DEFAULT NULL,
`color` varchar(20) DEFAULT NULL,
PRIMARY KEY (`id`),
KEY `products_product_category_id_foreign` (`categoryId`),
CONSTRAINT `products_product_category_id_foreign` FOREIGN KEY (`categoryId`) REFERENCES `product_category` (`id`)
);

CREATE TABLE `payment_method`(
`id`int unsigned NOT NULL AUTO_INCREMENT,
`method` varchar(20) NOT NULL,
PRIMARY KEY (`id`)
);


CREATE TABLE `sales`(
`id`int unsigned NOT NULL AUTO_INCREMENT,
`date` DATETIME NOT NULL , 
`userId` int unsigned NOT NULL,
`payMethodId` int unsigned NOT NULL ,
PRIMARY KEY (`id`),
KEY `sales_users_id_foreign` (`userId`),
CONSTRAINT `sales_users_id_foreign` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
KEY `sales_payment_method_id_foreign` (`payMethodId`),
CONSTRAINT `sales_payment_method_id_foreign` FOREIGN KEY (`payMethodId`) REFERENCES `payment_method` (`id`)
);

CREATE TABLE `product_sale`(
`id`int unsigned NOT NULL AUTO_INCREMENT,
`productId` int unsigned NOT NULL,
`saleId`int unsigned NOT NULL,
`quantity` int unsigned NOT NULL,
`salePrice` decimal unsigned NOT NULL,
PRIMARY KEY (`id`),
KEY `product_sale_products_id_foreign` (`productId`),
CONSTRAINT `product_sale_products_id_foreign` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
KEY `product_sale_sales_id_foreign` (`saleId`),
CONSTRAINT `product_sales_products_id_foreign` FOREIGN KEY (`saleId`) REFERENCES `sales` (`id`)
);

--ROLLOUT
--DROP TABLE IF EXISTS users
--DROP TABLE IF EXISTS category_users
--DROP TABLE IF EXISTS products
--DROP TABLE IF EXISTS product_category
--DROP TABLE IF EXISTS sales
--DROP TABLE IF EXISTS payment_method
--DROP TABLE IF EXISTS product_sale