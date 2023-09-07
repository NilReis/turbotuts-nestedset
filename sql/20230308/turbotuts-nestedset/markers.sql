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

-- Copiando estrutura para tabela turbotuts-nestedset.markers
CREATE TABLE IF NOT EXISTS `markers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `time` double(8,2) NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `video_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `markers_video_id_foreign` (`video_id`),
  CONSTRAINT `markers_video_id_foreign` FOREIGN KEY (`video_id`) REFERENCES `videos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela turbotuts-nestedset.markers: ~42 rows (aproximadamente)
INSERT IGNORE INTO `markers` (`id`, `time`, `label`, `video_id`, `created_at`, `updated_at`) VALUES
	(1, 532.31, 'composer create-project --prefer-dist laravel/laravel hdcevents', 57, '2022-11-17 04:11:34', '2022-11-17 04:11:34'),
	(2, 581.09, 'php artisan serve', 57, '2022-11-17 04:11:57', '2022-11-17 04:11:57'),
	(3, 292.65, 'Route::get(\'/\', function ()', 58, '2022-11-17 04:13:44', '2022-11-17 04:13:44'),
	(4, 324.63, 'Rota contact', 58, '2022-11-17 04:14:06', '2022-11-17 04:14:06'),
	(5, 449.86, 'Rota produtos', 58, '2022-11-17 04:14:25', '2022-11-17 04:14:25'),
	(6, 218.33, 'if', 59, '2022-11-17 04:14:52', '2022-11-17 04:14:52'),
	(7, 332.31, '{{ }}', 59, '2022-11-17 04:15:14', '2022-11-17 04:15:14'),
	(8, 523.26, 'retorno array fixo', 59, '2022-11-17 04:16:04', '2022-11-17 04:16:04'),
	(9, 26.95, 'fasdfa', 4, '2022-11-19 15:46:34', '2022-11-19 15:46:34'),
	(10, 113.68, 'Instalação', 3, '2022-11-19 15:49:26', '2022-11-19 15:49:26'),
	(11, 81.16, 'Enter name', 5, '2022-11-19 17:10:01', '2022-11-19 17:10:01'),
	(12, 247.50, 'vcredis', 3, '2022-11-19 17:42:08', '2022-11-19 17:42:08'),
	(13, 18.48, 'steste', 2, '2022-11-20 01:08:11', '2022-11-20 01:08:11'),
	(14, 0.00, 'afsdaasd', 2, '2022-11-20 02:42:07', '2022-11-20 02:42:07'),
	(15, 93.48, 'sbc', 1, '2022-11-20 02:43:40', '2022-11-20 02:43:40'),
	(16, 2.24, 'O criador foi rasmus lerdorf', 1, '2023-02-19 01:35:34', '2023-02-19 01:35:34'),
	(17, 58.30, 'Php hyper preprocessor', 1, '2023-02-19 01:41:39', '2023-02-19 01:41:39'),
	(18, 72.30, 'teste', 1, '2023-02-19 01:42:24', '2023-02-19 01:42:24'),
	(19, 72.30, 'abc', 1, '2023-02-19 01:46:22', '2023-02-19 01:46:22'),
	(20, 56.24, 'fdghdgh', 1, '2023-02-19 01:57:41', '2023-02-19 01:57:41'),
	(21, 84.24, 'fasdfsd', 1, '2023-02-19 02:02:51', '2023-02-19 02:02:51'),
	(22, 38.55, 'sdfsadf', 1, '2023-02-19 02:31:53', '2023-02-19 02:31:53'),
	(23, 38.55, 'gasdfasdsasf', 1, '2023-02-19 02:32:51', '2023-02-19 02:32:51'),
	(24, 38.55, 'fasggafsdgsfsdfaasfd', 1, '2023-02-19 02:33:46', '2023-02-19 02:33:46'),
	(25, 74.55, '6465654541sadfasdfasd', 1, '2023-02-19 02:38:31', '2023-02-19 02:38:31'),
	(26, 88.55, '54654546', 1, '2023-02-19 02:43:31', '2023-02-19 02:43:31'),
	(27, 1.58, 'teste1', 56, '2023-02-19 17:46:05', '2023-02-19 17:46:05'),
	(28, 351.96, 'Estrurtura for ', 60, '2023-02-19 18:24:38', '2023-02-19 18:24:38'),
	(29, 457.96, 'adicionando PHP puro', 60, '2023-02-19 18:25:39', '2023-02-19 18:25:39'),
	(30, 110.63, 'arquivos estaticos na pasta public', 61, '2023-02-19 18:28:37', '2023-02-19 18:28:37'),
	(31, 246.43, 'adicionando CSS', 61, '2023-02-19 18:29:35', '2023-02-19 18:29:35'),
	(32, 349.77, 'adiconando um banner da pasta public/img', 61, '2023-02-19 18:31:07', '2023-02-19 18:31:07'),
	(33, 138.89, 'reaproventamento de codigo // mesmo header e footer', 62, '2023-02-19 18:55:05', '2023-02-19 18:55:05'),
	(34, 180.51, 'criando a pasta layouts', 62, '2023-02-19 18:56:29', '2023-02-19 18:56:29'),
	(35, 272.36, '@yield(\'content\') é uma diretiva Blade usada para definir uma seção em uma view que pode ser preenchida com conteúdo de outras views.', 62, '2023-02-19 18:58:28', '2023-02-19 18:58:28'),
	(36, 406.98, 'Definindo uma view com os layouts', 62, '2023-02-19 19:04:28', '2023-02-19 19:04:28'),
	(37, 530.73, 'incluindo um fonte google', 62, '2023-02-19 19:06:00', '2023-02-19 19:06:00'),
	(38, 12.34, 'adicionado parametros a uma rota; Ao definir a rota deveos colocar o parâmetro desta maneira: {id}; Podemos ter parâmetros opcionais também, adicionando um ?; O Laravel aceita também query paramentres, utilizando a seguinte sintaxa: ?nome=Matheus&idade=29', 63, '2023-02-19 19:10:26', '2023-02-19 19:10:26'),
	(39, 213.16, 'Defininado a rota protudos com {id}', 63, '2023-02-19 19:12:08', '2023-02-19 19:12:08'),
	(40, 277.86, 'Exibindo o {id} na pasta Protudos', 63, '2023-02-19 19:14:04', '2023-02-19 19:14:04'),
	(41, 340.03, 'Rota com funcção anonima', 63, '2023-02-19 19:15:10', '2023-02-19 19:15:10'),
	(42, 480.23, '?search=camisa', 63, '2023-02-19 19:29:22', '2023-02-19 19:29:22'),
	(43, 571.55, 'Retornando o resultado da busca', 63, '2023-02-19 19:39:40', '2023-02-19 19:39:40'),
	(44, 775.55, 'Definindo CCS', 63, '2023-02-19 19:42:09', '2023-02-19 19:42:09');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
