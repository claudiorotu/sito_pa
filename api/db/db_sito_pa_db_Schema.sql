--
-- Database: `sito_pa_db`
--

CREATE DATABASE IF NOT EXISTS `sito_pa_db`;
USE `sito_pa_db`;


-- ENTITIES

--
-- Struttura della tabella `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
	`cat_title` varchar(40) ,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `link`
--

CREATE TABLE IF NOT EXISTS `link` (
	`link` varchar(40) ,
	`link_desc` varchar(40) ,
	`link_order` numeric ,
	`link_type` varchar(40) ,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `menu`
--

CREATE TABLE IF NOT EXISTS `menu` (
	`menu_data` date ,
	`menu_link` varchar(40) ,
	`menu_ordine` numeric ,
	`menu_padre` numeric ,
	`menu_voce` varchar(40) ,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
	`category_id` int ,
	`post_author` varchar(40) ,
	`post_content` varchar(40) ,
	`post_date` date ,
	`post_image` varchar(40) ,
	`post_status` bool ,
	`post_title` varchar(40) ,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(40) ,
	`name` varchar(40) ,
	`password` varchar(40)  NOT NULL,
	`roles` varchar(40) ,
	`surname` varchar(40) ,
	`username` varchar(40)  NOT NULL,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

INSERT INTO `sito_pa_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '1a1dc91c907325c69271ddf0c944bc72', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `sito_pa_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);






