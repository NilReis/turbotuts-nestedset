-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.30 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Copiando estrutura para tabela turbotuts-nestedset.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `_lft` int unsigned NOT NULL DEFAULT '0',
  `_rgt` int unsigned NOT NULL DEFAULT '0',
  `parent_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categories__lft__rgt_parent_id_index` (`_lft`,`_rgt`,`parent_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela turbotuts-nestedset.categories: ~21 rows (aproximadamente)
INSERT IGNORE INTO `categories` (`id`, `name`, `_lft`, `_rgt`, `parent_id`, `created_at`, `updated_at`) VALUES
	(1, 'Code', 1, 22, NULL, '2022-08-15 01:01:25', '2022-08-15 01:01:25'),
	(2, 'PHP', 2, 13, 1, '2022-08-15 01:01:25', '2022-08-15 01:01:25'),
	(3, 'Vanila', 3, 4, 2, '2022-08-15 01:01:25', '2022-08-15 01:01:25'),
	(4, 'Laravel', 5, 10, 2, '2022-08-15 01:01:25', '2022-08-15 01:01:25'),
	(5, 'Packages', 11, 12, 2, '2022-08-15 01:01:25', '2022-08-15 01:01:25'),
	(6, 'Python', 14, 21, 1, '2022-08-15 01:01:25', '2022-08-15 01:01:25'),
	(7, 'Vanila', 15, 16, 6, '2022-08-15 01:01:25', '2022-08-15 01:01:25'),
	(8, 'Django', 17, 18, 6, '2022-08-15 01:01:25', '2022-08-15 01:01:25'),
	(9, 'Packages', 19, 20, 6, '2022-08-15 01:01:25', '2022-08-15 01:01:25'),
	(10, '3D', 23, 38, NULL, '2022-08-15 01:01:25', '2022-08-15 01:01:25'),
	(11, 'Sketchup', 24, 29, 10, '2022-08-15 01:01:25', '2022-08-15 01:01:25'),
	(12, 'Geral', 25, 26, 11, '2022-08-15 01:01:25', '2022-08-15 01:01:25'),
	(13, 'Plugins', 27, 28, 11, '2022-08-15 01:01:25', '2022-08-15 01:01:25'),
	(14, 'Blender', 30, 35, 10, '2022-08-15 01:01:25', '2022-08-15 01:01:25'),
	(15, 'Geral', 31, 32, 14, '2022-08-15 01:01:25', '2022-08-15 01:01:25'),
	(16, 'Plugins', 33, 34, 14, '2022-08-15 01:01:25', '2022-08-15 01:01:25'),
	(17, 'Geral', 6, 7, 4, '2022-08-15 01:09:12', '2022-08-15 01:09:12'),
	(18, 'Packages', 8, 9, 4, '2022-08-15 01:10:33', '2022-08-15 01:10:33'),
	(19, 'Impressora 3D', 36, 37, 10, '2022-08-15 18:06:55', '2022-08-15 18:06:55'),
	(20, 'Culinaria', 39, 40, NULL, '2022-10-24 16:08:22', '2022-10-24 16:08:22'),
	(21, 'Marcenaria', 41, 42, NULL, '2022-10-24 16:08:48', '2022-10-24 16:08:48');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
