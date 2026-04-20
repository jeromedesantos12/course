-- MySQL dump 10.16  Distrib 10.1.25-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: dandan
-- ------------------------------------------------------
-- Server version	10.1.25-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `dandan`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `dandan` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `dandan`;

--
-- Table structure for table `app`
--

DROP TABLE IF EXISTS `app`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app` (
  `id_app` char(20) NOT NULL,
  `versi` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_app`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app`
--

LOCK TABLES `app` WRITE;
/*!40000 ALTER TABLE `app` DISABLE KEYS */;
INSERT INTO `app` VALUES ('APP-010','V.2012.12.12'),('APP-011','V.2012.12.12.1'),('APP-012','V.2018.10.2');
/*!40000 ALTER TABLE `app` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `belanja`
--

DROP TABLE IF EXISTS `belanja`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `belanja` (
  `no_item` int(11) NOT NULL,
  `kode_produk` char(20) NOT NULL,
  `item` int(11) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `disc` int(11) DEFAULT NULL,
  `bon` varchar(30) NOT NULL,
  PRIMARY KEY (`no_item`),
  KEY `fk_belanja1` (`kode_produk`),
  KEY `fk_belanja2` (`bon`),
  CONSTRAINT `fk_belanja1` FOREIGN KEY (`kode_produk`) REFERENCES `produk` (`kode_produk`) ON UPDATE CASCADE,
  CONSTRAINT `fk_belanja2` FOREIGN KEY (`bon`) REFERENCES `struk` (`bon`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `belanja`
--

LOCK TABLES `belanja` WRITE;
/*!40000 ALTER TABLE `belanja` DISABLE KEYS */;
INSERT INTO `belanja` VALUES (1,'A-ACC-001',2,24900,44820,'01-8A4-201-0312MVM'),(2,'B-MAKE-002',3,50000,135000,'01-8A4-201-0312MVM'),(3,'B-MAKE-003',2,24700,44460,'01-8A4-201-0312MVM'),(4,'B-MAKE-004',4,47500,171000,'01-8A4-201-0312MVM'),(5,'B-MAKE-005',4,45000,162000,'01-8A4-201-0312MVM'),(6,'B-MAKE-006',3,35000,94500,'01-8A4-201-0312MVM'),(7,'B-MAKE-007',4,49000,176400,'01-8A4-201-0312MVM'),(8,'B-MAKE-008',3,50000,135000,'01-8A4-201-0312MVM'),(9,'B-MAKE-009',2,140000,252000,'01-8A4-201-0312MVM'),(10,'B-MAKE-010',3,45000,121500,'01-8A4-201-0312MVM'),(11,'C-SKIN-016',2,25600,46080,'01-8A4-201-0312MVM'),(12,'C-SKIN-017',4,49400,177840,'01-8A4-201-0312MVM'),(13,'C-SKIN-018',2,21500,38700,'01-8A4-201-0312MVM'),(14,'C-SKIN-019',3,35700,96390,'01-8A4-201-0312MVM'),(15,'C-SKIN-020',3,15000,40500,'01-8A4-201-0312MVM'),(16,'C-SKIN-021',3,10100,27270,'01-8A4-201-0312MVM'),(17,'C-SKIN-022',3,50800,137160,'01-8A4-201-0312MVM'),(18,'C-SKIN-023',2,57800,104040,'01-8A4-201-0312MVM'),(19,'C-SKIN-024',2,12700,22860,'01-8A4-201-0312MVM'),(20,'C-SKIN-025',3,12900,34830,'01-8A4-201-0312MVM'),(21,'E-HAIR-001',1,84000,75600,'01-8A4-201-0312MVM'),(22,'E-HAIR-002',1,21700,19530,'01-8A4-201-0312MVM'),(23,'E-HAIR-003',1,20600,18540,'01-8A4-201-0312MVM'),(24,'E-HAIR-004',1,20500,18450,'01-8A4-201-0312MVM'),(25,'E-HAIR-005',1,72500,65250,'01-8A4-201-0312MVM'),(26,'A-ACC-001',2,24900,44820,'02-7A9-201-0312MVM'),(27,'B-MAKE-002',3,50000,135000,'02-7A9-201-0312MVM'),(28,'B-MAKE-003',2,24700,44460,'02-7A9-201-0312MVM'),(29,'B-MAKE-004',4,47500,171000,'02-7A9-201-0312MVM'),(30,'B-MAKE-005',4,45000,162000,'02-7A9-201-0312MVM'),(31,'B-MAKE-006',3,35000,94500,'02-7A9-201-0312MVM'),(32,'B-MAKE-007',4,49000,176400,'02-7A9-201-0312MVM'),(33,'B-MAKE-008',3,50000,135000,'02-7A9-201-0312MVM'),(34,'B-MAKE-009',2,140000,252000,'02-7A9-201-0312MVM'),(35,'B-MAKE-010',3,45000,121500,'02-7A9-201-0312MVM'),(36,'C-SKIN-016',2,25600,46080,'02-7A9-201-0312MVM'),(37,'C-SKIN-017',4,49400,177840,'02-7A9-201-0312MVM'),(38,'C-SKIN-018',2,21500,38700,'02-7A9-201-0312MVM'),(39,'C-SKIN-019',3,35700,96390,'02-7A9-201-0312MVM'),(40,'C-SKIN-020',3,15000,40500,'02-7A9-201-0312MVM'),(41,'C-SKIN-021',3,10100,27270,'02-7A9-201-0312MVM'),(42,'C-SKIN-022',3,50800,137160,'02-7A9-201-0312MVM'),(43,'C-SKIN-023',2,57800,104040,'02-7A9-201-0312MVM'),(44,'C-SKIN-024',2,12700,22860,'02-7A9-201-0312MVM'),(45,'C-SKIN-025',3,12900,34830,'02-7A9-201-0312MVM'),(46,'E-HAIR-001',1,84000,75600,'02-7A9-201-0312MVM'),(47,'E-HAIR-002',1,21700,19530,'02-7A9-201-0312MVM'),(48,'E-HAIR-003',1,20600,18540,'02-7A9-201-0312MVM'),(49,'E-HAIR-004',1,20500,18450,'02-7A9-201-0312MVM'),(50,'E-HAIR-005',1,72500,65250,'02-7A9-201-0312MVM'),(51,'A-ACC-001',2,24900,2490,'03-6A49-201-0312MVM'),(52,'C-SKIN-002',3,21000,2100,'03-6A49-201-0312MVM'),(53,'C-SKIN-003',2,21000,2100,'03-6A49-201-0312MVM'),(54,'C-SKIN-004',4,27200,2720,'03-6A49-201-0312MVM'),(55,'C-SKIN-005',4,17700,1770,'03-6A49-201-0312MVM'),(56,'C-SKIN-006',3,93500,9350,'03-6A49-201-0312MVM'),(57,'C-SKIN-007',4,27200,2720,'03-6A49-201-0312MVM'),(58,'C-SKIN-008',3,40500,4050,'03-6A49-201-0312MVM'),(59,'C-SKIN-009',2,5800,580,'03-6A49-201-0312MVM'),(60,'C-SKIN-010',3,38000,3800,'03-6A49-201-0312MVM'),(61,'D-BODY-001',2,31000,3100,'03-6A49-201-0312MVM'),(62,'D-BODY-002',4,17000,1700,'03-6A49-201-0312MVM'),(63,'D-BODY-003',2,17000,1700,'03-6A49-201-0312MVM'),(64,'D-BODY-004',3,15800,1580,'03-6A49-201-0312MVM'),(65,'D-BODY-005',3,46000,4600,'03-6A49-201-0312MVM'),(66,'E-HAIR-001',3,84000,8400,'03-6A49-201-0312MVM'),(67,'E-HAIR-002',3,21700,2170,'03-6A49-201-0312MVM'),(68,'E-HAIR-003',2,20600,2060,'03-6A49-201-0312MVM'),(69,'E-HAIR-004',2,20500,2050,'03-6A49-201-0312MVM'),(70,'E-HAIR-005',3,72500,7250,'03-6A49-201-0312MVM'),(71,'F-PHAR-001',1,30000,3000,'03-6A49-201-0312MVM'),(72,'F-PHAR-002',1,15900,1590,'03-6A49-201-0312MVM'),(73,'F-PHAR-003',1,67600,6760,'03-6A49-201-0312MVM'),(74,'F-PHAR-004',1,13500,1350,'03-6A49-201-0312MVM'),(75,'F-PHAR-005',1,18000,1800,'03-6A49-201-0312MVM'),(76,'A-ACC-001',2,24900,2490,'04-A49-201-0312MVM'),(77,'C-SKIN-002',3,21000,2100,'04-A49-201-0312MVM'),(78,'C-SKIN-003',2,21000,2100,'04-A49-201-0312MVM'),(79,'C-SKIN-004',4,27200,2720,'04-A49-201-0312MVM'),(80,'C-SKIN-005',4,17700,1770,'04-A49-201-0312MVM'),(81,'C-SKIN-006',3,93500,9350,'04-A49-201-0312MVM'),(82,'C-SKIN-007',4,27200,2720,'04-A49-201-0312MVM'),(83,'C-SKIN-008',3,40500,4050,'04-A49-201-0312MVM'),(84,'C-SKIN-009',2,5800,580,'04-A49-201-0312MVM'),(85,'C-SKIN-010',3,38000,3800,'04-A49-201-0312MVM'),(86,'D-BODY-001',2,31000,3100,'04-A49-201-0312MVM'),(87,'D-BODY-002',4,17000,1700,'04-A49-201-0312MVM'),(88,'D-BODY-003',2,17000,1700,'04-A49-201-0312MVM'),(89,'D-BODY-004',3,15800,1580,'04-A49-201-0312MVM'),(90,'D-BODY-005',3,46000,4600,'04-A49-201-0312MVM'),(91,'E-HAIR-001',3,84000,8400,'04-A49-201-0312MVM'),(92,'E-HAIR-002',3,21700,2170,'04-A49-201-0312MVM'),(93,'E-HAIR-003',2,20600,2060,'04-A49-201-0312MVM'),(94,'E-HAIR-004',2,20500,2050,'04-A49-201-0312MVM'),(95,'E-HAIR-005',3,72500,7250,'04-A49-201-0312MVM'),(96,'F-PHAR-001',1,30000,3000,'04-A49-201-0312MVM'),(97,'F-PHAR-002',1,15900,1590,'04-A49-201-0312MVM'),(98,'F-PHAR-003',1,67600,6760,'04-A49-201-0312MVM'),(99,'F-PHAR-004',1,13500,1350,'04-A49-201-0312MVM'),(100,'F-PHAR-005',1,18000,1800,'04-A49-201-0312MVM'),(101,'A-ACC-001',2,24900,2490,'05-A49-201-0312MVM'),(102,'C-SKIN-002',3,21000,2100,'05-A49-201-0312MVM'),(103,'C-SKIN-003',2,21000,2100,'05-A49-201-0312MVM'),(104,'C-SKIN-004',4,27200,2720,'05-A49-201-0312MVM'),(105,'C-SKIN-005',4,17700,1770,'05-A49-201-0312MVM'),(106,'C-SKIN-006',3,93500,9350,'05-A49-201-0312MVM'),(107,'C-SKIN-007',4,27200,2720,'05-A49-201-0312MVM'),(108,'C-SKIN-008',3,40500,4050,'05-A49-201-0312MVM'),(109,'C-SKIN-009',2,5800,580,'05-A49-201-0312MVM'),(110,'C-SKIN-010',3,38000,3800,'05-A49-201-0312MVM'),(111,'D-BODY-001',2,31000,3100,'05-A49-201-0312MVM'),(112,'D-BODY-002',4,17000,1700,'05-A49-201-0312MVM'),(113,'D-BODY-003',2,17000,1700,'05-A49-201-0312MVM'),(114,'D-BODY-004',3,15800,1580,'05-A49-201-0312MVM'),(115,'D-BODY-005',3,46000,4600,'05-A49-201-0312MVM'),(116,'E-HAIR-001',3,84000,8400,'05-A49-201-0312MVM'),(117,'E-HAIR-002',3,21700,2170,'05-A49-201-0312MVM'),(118,'E-HAIR-003',2,20600,2060,'05-A49-201-0312MVM'),(119,'E-HAIR-004',2,20500,2050,'05-A49-201-0312MVM'),(120,'E-HAIR-005',3,72500,7250,'05-A49-201-0312MVM'),(121,'F-PHAR-001',1,30000,3000,'05-A49-201-0312MVM'),(122,'F-PHAR-002',1,15900,1590,'05-A49-201-0312MVM'),(123,'F-PHAR-003',1,67600,6760,'05-A49-201-0312MVM'),(124,'F-PHAR-004',1,13500,1350,'05-A49-201-0312MVM'),(125,'F-PHAR-005',1,18000,1800,'05-A49-201-0312MVM'),(126,'A-ACC-001',2,24900,0,'06-A49-201-0312MVM'),(127,'B-MAKE-002',3,50000,0,'06-A49-201-0312MVM'),(128,'B-MAKE-003',2,24700,0,'06-A49-201-0312MVM'),(129,'B-MAKE-004',4,47500,0,'06-A49-201-0312MVM'),(130,'B-MAKE-005',4,45000,0,'06-A49-201-0312MVM'),(131,'B-MAKE-006',3,35000,0,'06-A49-201-0312MVM'),(132,'B-MAKE-007',4,49000,0,'06-A49-201-0312MVM'),(133,'B-MAKE-008',3,50000,0,'06-A49-201-0312MVM'),(134,'B-MAKE-009',2,140000,0,'06-A49-201-0312MVM'),(135,'B-MAKE-010',3,45000,0,'06-A49-201-0312MVM'),(136,'E-HAIR-001',2,84000,0,'06-A49-201-0312MVM'),(137,'E-HAIR-002',4,21700,0,'06-A49-201-0312MVM'),(138,'E-HAIR-003',2,20600,0,'06-A49-201-0312MVM'),(139,'E-HAIR-004',3,20500,0,'06-A49-201-0312MVM'),(140,'E-HAIR-005',3,72500,0,'06-A49-201-0312MVM'),(141,'C-SKIN-006',3,93500,0,'06-A49-201-0312MVM'),(142,'C-SKIN-007',3,27200,0,'06-A49-201-0312MVM'),(143,'C-SKIN-008',2,40500,0,'06-A49-201-0312MVM'),(144,'C-SKIN-009',2,5800,0,'06-A49-201-0312MVM'),(145,'C-SKIN-010',3,38000,0,'06-A49-201-0312MVM'),(146,'F-PHAR-001',1,30000,0,'06-A49-201-0312MVM'),(147,'F-PHAR-002',1,15900,0,'06-A49-201-0312MVM'),(148,'F-PHAR-003',1,67600,0,'06-A49-201-0312MVM'),(149,'F-PHAR-004',1,13500,0,'06-A49-201-0312MVM'),(150,'F-PHAR-005',1,18000,0,'06-A49-201-0312MVM'),(151,'A-ACC-001',2,24900,0,'07-A49-201-0312MVM'),(152,'B-MAKE-002',3,50000,0,'07-A49-201-0312MVM'),(153,'B-MAKE-003',2,24700,0,'07-A49-201-0312MVM'),(154,'B-MAKE-004',4,47500,0,'07-A49-201-0312MVM'),(155,'B-MAKE-005',4,45000,0,'07-A49-201-0312MVM'),(156,'B-MAKE-006',3,35000,0,'07-A49-201-0312MVM'),(157,'B-MAKE-007',4,49000,0,'07-A49-201-0312MVM'),(158,'B-MAKE-008',3,50000,0,'07-A49-201-0312MVM'),(159,'B-MAKE-009',2,140000,0,'07-A49-201-0312MVM'),(160,'B-MAKE-010',3,45000,0,'07-A49-201-0312MVM'),(161,'E-HAIR-001',2,84000,0,'07-A49-201-0312MVM'),(162,'E-HAIR-002',4,21700,0,'07-A49-201-0312MVM'),(163,'E-HAIR-003',2,20600,0,'07-A49-201-0312MVM'),(164,'E-HAIR-004',3,20500,0,'07-A49-201-0312MVM'),(165,'E-HAIR-005',3,72500,0,'07-A49-201-0312MVM'),(166,'C-SKIN-006',3,93500,0,'07-A49-201-0312MVM'),(167,'C-SKIN-007',3,27200,0,'07-A49-201-0312MVM'),(168,'C-SKIN-008',2,40500,0,'07-A49-201-0312MVM'),(169,'C-SKIN-009',2,5800,0,'07-A49-201-0312MVM'),(170,'C-SKIN-010',3,38000,0,'07-A49-201-0312MVM'),(171,'F-PHAR-001',1,30000,0,'07-A49-201-0312MVM'),(172,'F-PHAR-002',1,15900,0,'07-A49-201-0312MVM'),(173,'F-PHAR-003',1,67600,0,'07-A49-201-0312MVM'),(174,'F-PHAR-004',1,13500,0,'07-A49-201-0312MVM'),(175,'F-PHAR-005',1,18000,0,'07-A49-201-0312MVM');
/*!40000 ALTER TABLE `belanja` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data_pribadi`
--

DROP TABLE IF EXISTS `data_pribadi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `data_pribadi` (
  `no_data` int(11) NOT NULL,
  `member` varchar(50) DEFAULT NULL,
  `no_ktp` varchar(50) DEFAULT NULL,
  `telp` char(30) DEFAULT NULL,
  `hp` char(30) DEFAULT NULL,
  `alamat` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`no_data`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_pribadi`
--

LOCK TABLES `data_pribadi` WRITE;
/*!40000 ALTER TABLE `data_pribadi` DISABLE KEYS */;
INSERT INTO `data_pribadi` VALUES (1,'Karyono Setyo','30.28.8.235.789.34.53','021-552-3876',NULL,'Jl. Merdeka  No. 5, Pasarbaru, Tangerang'),(2,'Hendi Hendarman','30.20.8.432.732.34.54','021-562-3877',NULL,'Jl. Merdeka  No. 10, Pasarbaru, Tangerang'),(3,'Kristanto Gunawan','23.44.8.265.349.14.55','021-562-3878','0895-3432-3425','Jl. Merdeka  No. 1, Pasarbaru Tangerang'),(4,'Toni PL','67.19.8.564.786.24.56','021-562-3879','0895-5332-3426','Jl. Kencana Indah  No. 21,  Permata, Tangerang'),(5,'Soni Kasiran','12.20.8.464.349.44.57',NULL,'0895-5342-3427','Jl. Sedang Rejo  No. 11 , Permata, Tangerang'),(6,'Barry Prima','30.39.8.323.659.45.58','021-572-4881','0895-5634-3428','Jl. Unggaran  No. 41, Permata, Tangerang'),(7,'Lely Utoyo','32.23.8.545.289.22.59','021-561-3882','0895-5622-3429','Jl. Sedang Putri No. 1, Permata, Tangerang'),(8,'Amar Fikri','34.22.3.167.623.89.34','021-562-3883',NULL,'Jl. Kalisidi  No. 13, Regency Tangerang'),(9,'Fifi Atmaja','44.22.3.114.423.32.32','021-563-3884',NULL,'Jl. Bringin Raya  No. 9, Regency, Tangerang'),(10,'Septian Saputra','34.34.3.535.522.21.22',NULL,'0895-6762-3458','Jl. Bringin Raya  No. 10, Regency, Tangerang'),(11,'Andi Belauk','23.34.3.522.233.23.23','021-542-3886','0895-6672-3459','Jl. Kenaga  No. 8, Kutabumi, Tangerang'),(12,'Winoto Usman','14.34.3.121.233.34.24','021-562-3887','0895-6342-3460','Jl. Merbabu  No. 23, Kutabumi, Tangerang'),(13,'Harris Prastyo','56.12.6.997.789.34.99',NULL,'0895-5634-3435','Jl. Merbabu  No. 51 Kutabumi, Tangerang'),(14,'Lily Setejo','38.29.8.465.789.56.46','021-562-3889',NULL,'Jl. Perum BUMN  No. 6, Kutabumi, Tangerang'),(15,'Kristianto Gunawan','14.29.8.465.789.24.47','021-562-3890',NULL,'Jl. Mercon Sakti  No. 6, Kutabumi, Tangerang'),(16,'Ricki Fernando','31.29.8.465.789.65.48',NULL,'0895-5622-3438','Jl. Kucen Utara  No. 32, Kutabumi, Tangerang'),(17,'Howard Hou','38.29.8.465.789.34.49','021-562-5880','0895-5622-3439','Jl. Karang Jati  No. 14, Kutabumi, Tangerang'),(18,'Santoso Raharjo','38.29.8.465.789.34.50','021-543-3423','0895-4322-3432','Jl. Krakatau  No. 8, Kutabumi, Tangerang'),(19,'Jeremy Santoso','38.29.8.667.789.34.51','021-542-4424','0895-4322-3433','Jl. Krakatau  No. 8, Kutabumi, Tangerang'),(20,'Renaldi Budiman','38.29.8.892.789.34.52','021-563-5425','0895-4212-3433','Jl. Perumahan Graha Teluk No. 7, Kutabumi , Tangerang'),(21,'Fitriyani Nabila','38.12.6.356.789.34.87','021-533-5426',NULL,'Jl. Porttabu  No. 8, Regency, Tangerang'),(22,'I Gusti Made','38.12.6.493.289.33.88','021-543-5427',NULL,'Jl. Kerinci No. 19, Regency, Tangerang'),(23,'Yanto Padang','38.12.6.237.139.24.89','021-583-5428',NULL,'Jl. Kedondong  No. 19, Ceper, Tangerang'),(24,'Andi Malangraeng','38.12.6.432.289.55.90','021-553-5429',NULL,'Jl. Kedondong  No. 20, Ceper, Tangerang'),(25,'Marinar Nababan','38.12.6.122.389.34.91','021-534-5430',NULL,'Jl. Kedondong  No. 38, Ceper, Tangerang'),(26,'Mice Susanto','34.22.3.921.213.32.42','021-542-5431',NULL,'Jl  .Kedondong  No. 54, Ceper, Tangerang'),(27,'Benny Noya','34.22.3.943.423.76.33','021-562-5432',NULL,'Jl. Kucen Utara  No. 9, Ceper, Tangerang'),(28,'Sami Simorangkir','34.22.3.167.623.87.34','021-554-6533','0895-6263-4557','Jl. Kucen Utara  No. 23, Ceper, Tangerang'),(29,'Sutrismo Bahar','44.22.3.124.423.34.32','021-562-5674','0823-6762-3458','Jl. Kucen Utara  No. 69, Ceper, Tangerang'),(30,'Aswin Bahar','34.34.3.535.522.21.22','021-562-5755','0833-3672-3459','Jl. Batu Ceper Permai No. 1,  Ceper,.Tangerang'),(31,'Tohir Lawang Sewu','23.34.3.525.233.21.23','021-562-6736','0825-4342-7660','Jl. Cendana Loka No. 37, Serpong, Tangerang'),(32,'Ade Kurniawan','14.34.3.125.233.21.24','021-542-5437','0875-3634-3435','Jl. Imam Bonjol No. 6, Gang Bansin, Tangerang'),(33,'Pepeng Siptohadi','57.12.6.997.789.34.99','021-565-5768',NULL,'Jl. Moh. Toha Blok A No. 9, Global Mansion Tangerang '),(34,'Cakra Sanjaya','28.76.4.326.423.74.16','021-565-5769',NULL,'Jl. Karet Raya No. 75, Malabar,Tangerang'),(35,'Silvester Winarto','28.76.4.326.423.74.17','021-525-5770','0875-2134-5432','Jl. Taman Alfa Indah No. 1, Kebon Jeruk, Jakarta Barat'),(36,'Toti Nangolan','28.76.4.326.423.74.18','021-565-5321','0823-2231-2136','Jl. Pejuangan No. 1, Kebon Jeruk, Jakarta Barat'),(37,'Mohhamad Nazarudin','28.76.4.326.423.74.19','021-591-5772','0854-4324-4554','Jl. Pejuangan No. 10, Kebon Jeruk, Jakarta Barat'),(38,'Rami Malek','22.34.3.244.327.33.88','021-565-5232','0855-2434-4545','Jl. Pejuangan No. 23, Kebon Jeruk, Jakarta Barat'),(39,'Wiwiek','16.76.4.226.233.21.23','021-565-4374',NULL,'Jl. Pacuan Kuda No. 2,  Cempaka.Jakarta Timur'),(40,'Titik Sandora','34.33.3.25.323.23.23','021-565-5435',NULL,'Jl. Meruya Illir Raya No 12, Kebon Jeruk, Jakarta Barat'),(41,'Muksin Alatas','31.39.8.265.289.24.32','021-565-5776','0895-6762-3456','Jl. Meruya Illir Raya No 10, Kebon Jeruk, Jakarta Barat'),(42,'Sahali Daeli','21.22.2.442.664.33.22','021-535-3277','0895-6762-3457','Jl. Meruya Illir Raya No 1, Kebon Jeruk, Jakarta Barat'),(43,'Petrus Simanjuntak','34.14.1.115.313.10.41','021-523-3778',NULL,'Jl. Anggur No. 10, Bojong, Jakarta Barat'),(44,'Rafali Daeli','16.23.2.297.722.14.12','021-534-1779','0845-6454-3456','Jl. Anggur No. 18, Bojong, Jakarta Barat'),(45,'Indra Bustami','60.49.0.504.706.04.29','021-541-2180','0845-3454-1237','Jl. Anggur No. 5, Bojong, Jakarta Barat'),(46,'Muhidin Salim','11.31.1.221.231.17.11','021-524-3281',NULL,'Jl. Jend. A.Yani Kav.78, Lippo Cikarang, Bekasi'),(47,'Memet Ponki','10.30.0.023.059.05.22','021-545-5482','0895-2342-3436','Jl. Jend. A.Yani Kav.79, Lippo Cikarang, Bekasi'),(48,'Rudi Harianto','40.08.0.035.709.30.50','021-534-3433','0895-5872-3437','Jl. Pajajaran Kav. 8, Lippo Cikarang, Bekasi'),(49,'Sianyo Aliandoe','20.24.0.309.707.24.54','021-533-3344','0895-5622-3423','Jl. Cipaku Indah No. 1, Cipaku, Bogor'),(50,'Nonik Nina Riana','11.11.0.909.717.10.05','021-535-5445','0895-5622-3424','Jl. Cipaku Indah No. 20 Cipaku, Bogor');
/*!40000 ALTER TABLE `data_pribadi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discount`
--

DROP TABLE IF EXISTS `discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `discount` (
  `no_disc` int(11) NOT NULL,
  `kode_produk` char(20) NOT NULL,
  `kode_prov` char(20) NOT NULL,
  `disc_satuan` int(11) DEFAULT NULL,
  PRIMARY KEY (`no_disc`),
  KEY `fk_discount1` (`kode_produk`),
  KEY `fk_discount2` (`kode_prov`),
  CONSTRAINT `fk_discount1` FOREIGN KEY (`kode_produk`) REFERENCES `produk` (`kode_produk`) ON UPDATE CASCADE,
  CONSTRAINT `fk_discount2` FOREIGN KEY (`kode_prov`) REFERENCES `provinsi` (`kode_prov`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discount`
--

LOCK TABLES `discount` WRITE;
/*!40000 ALTER TABLE `discount` DISABLE KEYS */;
INSERT INTO `discount` VALUES (1,'A-ACC-001','01-BA',2490),(2,'B-MAKE-002','01-BA',5000),(3,'B-MAKE-003','01-BA',2470),(4,'B-MAKE-004','01-BA',4750),(5,'B-MAKE-005','01-BA',4500),(6,'B-MAKE-006','01-BA',3500),(7,'B-MAKE-007','01-BA',4900),(8,'B-MAKE-008','01-BA',5000),(9,'B-MAKE-009','01-BA',14000),(10,'B-MAKE-010','01-BA',4500),(11,'C-SKIN-016','01-BA',2560),(12,'C-SKIN-017','01-BA',4940),(13,'C-SKIN-018','01-BA',2150),(14,'C-SKIN-019','01-BA',3570),(15,'C-SKIN-020','01-BA',1500),(16,'C-SKIN-021','01-BA',1010),(17,'C-SKIN-022','01-BA',5080),(18,'C-SKIN-023','01-BA',5780),(19,'C-SKIN-024','01-BA',1270),(20,'C-SKIN-025','01-BA',1290),(21,'E-HAIR-001','01-BA',8400),(22,'E-HAIR-002','01-BA',2170),(23,'E-HAIR-003','01-BA',2060),(24,'E-HAIR-004','01-BA',2050),(25,'E-HAIR-005','01-BA',7250),(26,'A-ACC-001','02-JB',2490),(27,'C-SKIN-002','02-JB',2100),(28,'C-SKIN-003','02-JB',2100),(29,'C-SKIN-004','02-JB',2720),(30,'C-SKIN-005','02-JB',1770),(31,'C-SKIN-006','02-JB',9350),(32,'C-SKIN-007','02-JB',2720),(33,'C-SKIN-008','02-JB',4050),(34,'C-SKIN-009','02-JB',580),(35,'C-SKIN-010','02-JB',3800),(36,'D-BODY-001','02-JB',3100),(37,'D-BODY-002','02-JB',1700),(38,'D-BODY-003','02-JB',1700),(39,'D-BODY-004','02-JB',1580),(40,'D-BODY-005','02-JB',4600),(41,'E-HAIR-001','02-JB',8400),(42,'E-HAIR-002','02-JB',2170),(43,'E-HAIR-003','02-JB',2060),(44,'E-HAIR-004','02-JB',2050),(45,'E-HAIR-005','02-JB',7250),(46,'F-PHAR-001','02-JB',3000),(47,'F-PHAR-002','02-JB',1590),(48,'F-PHAR-003','02-JB',6760),(49,'F-PHAR-004','02-JB',1350),(50,'F-PHAR-005','02-JB',1800),(51,'A-ACC-001','03-DKI',2490),(52,'B-MAKE-002','03-DKI',5000),(53,'B-MAKE-003','03-DKI',2470),(54,'B-MAKE-004','03-DKI',4750),(55,'B-MAKE-005','03-DKI',4500),(56,'B-MAKE-006','03-DKI',3500),(57,'B-MAKE-007','03-DKI',4900),(58,'B-MAKE-008','03-DKI',5000),(59,'B-MAKE-009','03-DKI',14000),(60,'B-MAKE-010','03-DKI',4500),(61,'E-HAIR-001','03-DKI',0),(62,'E-HAIR-002','03-DKI',0),(63,'E-HAIR-003','03-DKI',0),(64,'E-HAIR-004','03-DKI',0),(65,'E-HAIR-005','03-DKI',0),(66,'C-SKIN-006','03-DKI',0),(67,'C-SKIN-007','03-DKI',0),(68,'C-SKIN-008','03-DKI',0),(69,'C-SKIN-009','03-DKI',0),(70,'C-SKIN-010','03-DKI',0),(71,'F-PHAR-001','03-DKI',0),(72,'F-PHAR-002','03-DKI',0),(73,'F-PHAR-003','03-DKI',0),(74,'F-PHAR-004','03-DKI',0),(75,'F-PHAR-005','03-DKI',0);
/*!40000 ALTER TABLE `discount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `harga`
--

DROP TABLE IF EXISTS `harga`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `harga` (
  `no_harga` int(11) NOT NULL,
  `kode_produk` char(20) NOT NULL,
  `kode_prov` char(20) NOT NULL,
  `harga_satuan` int(11) DEFAULT NULL,
  PRIMARY KEY (`no_harga`),
  KEY `fk_harga1` (`kode_produk`),
  KEY `fk_harga2` (`kode_prov`),
  CONSTRAINT `fk_harga1` FOREIGN KEY (`kode_produk`) REFERENCES `produk` (`kode_produk`) ON UPDATE CASCADE,
  CONSTRAINT `fk_harga2` FOREIGN KEY (`kode_prov`) REFERENCES `provinsi` (`kode_prov`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `harga`
--

LOCK TABLES `harga` WRITE;
/*!40000 ALTER TABLE `harga` DISABLE KEYS */;
INSERT INTO `harga` VALUES (1,'A-ACC-001','01-BA',24900),(2,'B-MAKE-002','01-BA',50000),(3,'B-MAKE-003','01-BA',24700),(4,'B-MAKE-004','01-BA',47500),(5,'B-MAKE-005','01-BA',45000),(6,'B-MAKE-006','01-BA',35000),(7,'B-MAKE-007','01-BA',49000),(8,'B-MAKE-008','01-BA',50000),(9,'B-MAKE-009','01-BA',140000),(10,'B-MAKE-010','01-BA',45000),(11,'C-SKIN-016','01-BA',25600),(12,'C-SKIN-017','01-BA',49400),(13,'C-SKIN-018','01-BA',21500),(14,'C-SKIN-019','01-BA',35700),(15,'C-SKIN-020','01-BA',15000),(16,'C-SKIN-021','01-BA',10100),(17,'C-SKIN-022','01-BA',50800),(18,'C-SKIN-023','01-BA',57800),(19,'C-SKIN-024','01-BA',12700),(20,'C-SKIN-025','01-BA',12900),(21,'E-HAIR-001','01-BA',84000),(22,'E-HAIR-002','01-BA',21700),(23,'E-HAIR-003','01-BA',20600),(24,'E-HAIR-004','01-BA',20500),(25,'E-HAIR-005','01-BA',72500),(26,'A-ACC-001','02-JB',24900),(27,'C-SKIN-002','02-JB',21000),(28,'C-SKIN-003','02-JB',21000),(29,'C-SKIN-004','02-JB',27200),(30,'C-SKIN-005','02-JB',17700),(31,'C-SKIN-006','02-JB',93500),(32,'C-SKIN-007','02-JB',27200),(33,'C-SKIN-008','02-JB',40500),(34,'C-SKIN-009','02-JB',5800),(35,'C-SKIN-010','02-JB',38000),(36,'D-BODY-001','02-JB',31000),(37,'D-BODY-002','02-JB',17000),(38,'D-BODY-003','02-JB',17000),(39,'D-BODY-004','02-JB',15800),(40,'D-BODY-005','02-JB',46000),(41,'E-HAIR-001','02-JB',84000),(42,'E-HAIR-002','02-JB',21700),(43,'E-HAIR-003','02-JB',20600),(44,'E-HAIR-004','02-JB',20500),(45,'E-HAIR-005','02-JB',72500),(46,'F-PHAR-001','02-JB',30000),(47,'F-PHAR-002','02-JB',15900),(48,'F-PHAR-003','02-JB',67600),(49,'F-PHAR-004','02-JB',13500),(50,'F-PHAR-005','02-JB',18000),(51,'A-ACC-001','03-DKI',24900),(52,'B-MAKE-002','03-DKI',50000),(53,'B-MAKE-003','03-DKI',24700),(54,'B-MAKE-004','03-DKI',47500),(55,'B-MAKE-005','03-DKI',45000),(56,'B-MAKE-006','03-DKI',35000),(57,'B-MAKE-007','03-DKI',49000),(58,'B-MAKE-008','03-DKI',50000),(59,'B-MAKE-009','03-DKI',140000),(60,'B-MAKE-010','03-DKI',45000),(61,'E-HAIR-001','03-DKI',84000),(62,'E-HAIR-002','03-DKI',21700),(63,'E-HAIR-003','03-DKI',20600),(64,'E-HAIR-004','03-DKI',20500),(65,'E-HAIR-005','03-DKI',72500),(66,'C-SKIN-006','03-DKI',93500),(67,'C-SKIN-007','03-DKI',27200),(68,'C-SKIN-008','03-DKI',40500),(69,'C-SKIN-009','03-DKI',5800),(70,'C-SKIN-010','03-DKI',38000),(71,'F-PHAR-001','03-DKI',30000),(72,'F-PHAR-002','03-DKI',15900),(73,'F-PHAR-003','03-DKI',67600),(74,'F-PHAR-004','03-DKI',13500),(75,'F-PHAR-005','03-DKI',18000);
/*!40000 ALTER TABLE `harga` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jam_buka`
--

DROP TABLE IF EXISTS `jam_buka`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jam_buka` (
  `no_jam` int(11) NOT NULL,
  `kode_prov` char(20) NOT NULL,
  `jam_buka` time DEFAULT NULL,
  `jam_tutup` time DEFAULT NULL,
  PRIMARY KEY (`no_jam`),
  KEY `fk_jam1` (`kode_prov`),
  CONSTRAINT `fk_jam1` FOREIGN KEY (`kode_prov`) REFERENCES `provinsi` (`kode_prov`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jam_buka`
--

LOCK TABLES `jam_buka` WRITE;
/*!40000 ALTER TABLE `jam_buka` DISABLE KEYS */;
INSERT INTO `jam_buka` VALUES (1,'01-BA','09:00:00','22:00:00'),(2,'02-JB','09:00:00','22:00:00'),(3,'03-DKI','00:00:00','24:00:00');
/*!40000 ALTER TABLE `jam_buka` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `karyawan`
--

DROP TABLE IF EXISTS `karyawan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `karyawan` (
  `kode_karyawan` char(20) NOT NULL,
  `karyawan` varchar(50) DEFAULT NULL,
  `pekerjaan` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`kode_karyawan`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `karyawan`
--

LOCK TABLES `karyawan` WRITE;
/*!40000 ALTER TABLE `karyawan` DISABLE KEYS */;
INSERT INTO `karyawan` VALUES ('KAR-001','Sela Sel','Kasir'),('KAR-002','Ida Sur','Kasir'),('KAR-003','Royani','Kasir'),('KAR-004','Peni C','Kasir'),('KAR-005','Pipin','Kasir'),('KAR-006','Anto P','Kasir'),('KAR-007','Toni','Kasir'),('KAR-008','Selah','Penjaga Toko'),('KAR-009','Niko','Penjaga Toko'),('KAR-010','Norman','Penjaga Toko'),('KAR-011','Anton H','Penjaga Toko'),('KAR-012','Tono S','Penjaga Toko'),('KAR-013','Hani','Penjaga Toko'),('KAR-014','Citra','Penjaga Toko'),('KAR-015','Didin T','Staff Gudang'),('KAR-016','Pompi','Staff Gudang'),('KAR-017','Prasetyo','Staff Gudang'),('KAR-018','Ridwan','Staff Gudang'),('KAR-019','Eni K','Staff Gudang'),('KAR-020','Ratna','Staff Gudang'),('KAR-021','Indah','Staff Gudang');
/*!40000 ALTER TABLE `karyawan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `member` (
  `id_member` char(20) NOT NULL,
  `no_data` int(11) NOT NULL,
  `total_poin` int(11) DEFAULT NULL,
  `poin` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_member`),
  KEY `fk_member1` (`no_data`),
  CONSTRAINT `fk_member1` FOREIGN KEY (`no_data`) REFERENCES `data_pribadi` (`no_data`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES ('PONTA-001',1,4564,88),('PONTA-002',2,68,23),('PONTA-003',3,435,90),('PONTA-004',4,113,99),('PONTA-005',5,234,0),('PONTA-006',6,68,0),('PONTA-007',7,1231,0),('PONTA-008',8,322,0),('PONTA-009',9,1222,0),('PONTA-010',10,982,0),('PONTA-011',11,56,0),('PONTA-012',12,670,0),('PONTA-013',13,200,0),('PONTA-014',14,567,0),('PONTA-015',15,445,0),('PONTA-016',16,33,0),('PONTA-017',17,234,0),('PONTA-018',18,2955,0),('PONTA-019',19,5000,0),('PONTA-020',20,398,0),('PONTA-021',21,12,0),('PONTA-022',22,232,0),('PONTA-023',23,345,0),('PONTA-024',24,453,0),('PONTA-025',25,2113,0),('PONTA-026',26,2423,0),('PONTA-027',27,2312,0),('PONTA-028',28,5656,0),('PONTA-029',29,5643,0),('PONTA-030',30,5645,0),('PONTA-031',31,2342,0),('PONTA-032',32,78234,0),('PONTA-033',33,67567,0),('PONTA-034',34,3423,0),('PONTA-035',35,3456,0),('PONTA-036',36,265478,0),('PONTA-037',37,843424,0),('PONTA-038',38,732545,0),('PONTA-039',39,78534,0),('PONTA-040',40,92300,0),('PONTA-041',41,45300,0),('PONTA-042',42,231800,0),('PONTA-043',43,8758767,0),('PONTA-044',44,765654,0),('PONTA-045',45,487934,0),('PONTA-046',46,243964,0),('PONTA-047',47,897456,0),('PONTA-048',48,54789,0),('PONTA-049',49,64964,0),('PONTA-050',50,3528,0);
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `merek`
--

DROP TABLE IF EXISTS `merek`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `merek` (
  `id_merek` char(20) NOT NULL,
  `merek` varchar(50) DEFAULT NULL,
  `id_penjual` varchar(50) NOT NULL,
  PRIMARY KEY (`id_merek`),
  KEY `fk_merek1` (`id_penjual`),
  CONSTRAINT `fk_merek1` FOREIGN KEY (`id_penjual`) REFERENCES `penjual` (`id_penjual`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `merek`
--

LOCK TABLES `merek` WRITE;
/*!40000 ALTER TABLE `merek` DISABLE KEYS */;
INSERT INTO `merek` VALUES ('01-DD','Dan+Dan','01-SIL'),('02-MA','Maybelline','02-LMI'),('03-LO','L\'Oreal','02-LMI'),('04-POND','POND\'S','03-UNI'),('05-HIJ','Hijab Fresh','03-UNI'),('06-EM','Emina','04-PTI'),('07-MKE','Make Over Perfect Cover Two Way Cake','04-PTI'),('08-WAR','Wardah','04-PTI'),('09-CC','C&C','04-PTI'),('10-VIVA','Viva','05-VPM'),('11-SKN','Skin Aqua','06-RLI'),('12-AC','Acnes','06-RLI'),('13-ROH','Rohto','06-RLI'),('14-HADA','Hada Labo','06-RLI'),('15-PUR','Purbasari ','07-GOC'),('16-INE','Inez','08-KSI'),('17-SILK','Silky Girl','09-ALC'),('18-BDL','BDL','09-ALC'),('19-LT','LT Pro','10-REM'),('20-FV','FrienVita','11-COP'),('21-SARI','Sari Ayu','12-MB'),('22-GIZI','Gizi','13-GZI'),('23-JF','JF','14-GPL'),('24-KOJI','Kojiesan S','15-UCI'),('25-CAR','Carmed','16-SML'),('26-NEO','Neo Rheumacyl','17-TSP'),('27-HER','Hermaviton','17-TSP'),('28-NIV','Nivea','18-BI'),('29-FELI','Felinz','19-CDM'),('30-HOLL','Holly','20-SC'),('31-AYU','Ayudya','21-MR'),('32-MUS','Mustika Ratu','21-MR'),('33-NR','NR','22-IP'),('34-MAKA','Makarizo','23-AWI'),('35-ELL','Ellips','24-KI'),('36-CUL','Cultusia','25-AFL'),('37-MOR','Morris','26-APL'),('38-INT','Intense','27-SA'),('39-VIG','Vigel','28-KPL'),('40-TRAN','Transpulmin','29-TMI'),('41-DUR','Durex','30-LBC'),('42-SAFE','Safe Care','31-GSC'),('43-MAG','Magic Power','32-ESP'),('44-WOD','Woods','33-KF'),('45-CUR','Curcuma Plus','34-SGH'),('46-SUP','Super Magic','35-DLI'),('47-CAP','Cap Lang','36-EIP');
/*!40000 ALTER TABLE `merek` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `penjual`
--

DROP TABLE IF EXISTS `penjual`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `penjual` (
  `id_penjual` char(20) NOT NULL,
  `penjual` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_penjual`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `penjual`
--

LOCK TABLES `penjual` WRITE;
/*!40000 ALTER TABLE `penjual` DISABLE KEYS */;
INSERT INTO `penjual` VALUES ('01-SIL','PT. Sumber Indah Lestari'),('02-LMI','PT. Loreal Manufacturing Indonesia'),('03-UNI','PT. Unilever Indonesia Tbk.'),('04-PTI','PT. Paragon Technology and Innovation'),('05-VPM','PT VivaPHARM'),('06-RLI','PT. Rohto Laboratories Indonesia'),('07-GOC','PT. Gloria Origita Cosmetics'),('08-KSI','PT. Kosmetikatama Super Indah'),('09-ALC','PT. Allience Cosmetics'),('10-REM','PT. Rembaka'),('11-COP','PT.Ckd Otto Pharmaceuticals'),('12-MB','PT. Martina Berto Tbk.'),('13-GZI','PT. Gizi Indonesia'),('14-GPL','PT. Galenium Pharmasi Laboratories'),('15-UCI','PT. UICCP Indonesia'),('16-SML','PT. Surya Dermato Medica Laboratories'),('17-TSP','PT. Tempo Scan Pasific'),('18-BI','PT. Beiersdorf Indonesia'),('19-CDM','PT. Cakra Daya Makmur'),('20-SC','CV. Sekawan Cosmetics'),('21-MR','PT. Mustika Ratu  Tbk.'),('22-IP','PT. Ikapharmindo Putramas'),('23-AWI','PT. Akasha Wira International'),('24-KI','PT.Kino Industrindo'),('25-AFL','PT. Anugrah Familindo Lestari'),('26-APL','PT. Aroma Prima Livindo'),('27-SA','PT. Sinar Atjol'),('28-KPL','PT. Konimex Pharmaceutical Laboratories'),('29-TMI','PT. Transfarma Medica Indah'),('30-LBC','The London Rubber Company '),('31-GSC','PT. Global Success Chain'),('32-ESP','PT. Etica Sari Pratama'),('33-KF','PT. Kalbe Farma Tbk.'),('34-SGH','PT. SOHO Global Health'),('35-DLI','PT. Dua Lima Industries'),('36-EIP','PT. Eagle Indo Pharma');
/*!40000 ALTER TABLE `penjual` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perusahaan`
--

DROP TABLE IF EXISTS `perusahaan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perusahaan` (
  `id_perusahaan` varchar(30) NOT NULL,
  `nama_perusahaan` varchar(50) DEFAULT NULL,
  `alamat_perusahaan` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_perusahaan`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perusahaan`
--

LOCK TABLES `perusahaan` WRITE;
/*!40000 ALTER TABLE `perusahaan` DISABLE KEYS */;
INSERT INTO `perusahaan` VALUES ('22.001.202.45.1.1','PT. Sumber Indah Lestari','Komplek Perkantoran ALFA GROUP Gedung A  Lantai 3 Jl. Thamrin No.9 Cikokol  Tangerang,Banten 15117');
/*!40000 ALTER TABLE `perusahaan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produk`
--

DROP TABLE IF EXISTS `produk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produk` (
  `kode_produk` char(20) NOT NULL,
  `produk` varchar(100) DEFAULT NULL,
  `id_merek` char(20) NOT NULL,
  `gol_tipe_produk` char(20) NOT NULL,
  PRIMARY KEY (`kode_produk`),
  KEY `fk_produk2` (`gol_tipe_produk`),
  KEY `fk_produk1` (`id_merek`),
  CONSTRAINT `fk_produk1` FOREIGN KEY (`id_merek`) REFERENCES `merek` (`id_merek`) ON UPDATE CASCADE,
  CONSTRAINT `fk_produk2` FOREIGN KEY (`gol_tipe_produk`) REFERENCES `tipe_produk` (`gol_tipe_produk`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produk`
--

LOCK TABLES `produk` WRITE;
/*!40000 ALTER TABLE `produk` DISABLE KEYS */;
INSERT INTO `produk` VALUES ('A-ACC-001','D\'Spade Clutch - Dompet Wanita','01-DD','A'),('A-ACC-002','Radysa Daily Bag Organizer - Merah','01-DD','A'),('A-ACC-003','Remax Original RT-L01 Beauty Mirror with Lampu LED - Pink','01-DD','A'),('A-ACC-004','Hello Kitty Paket Dandan Jam Tangan Wanita','01-DD','A'),('A-ACC-005','Mini\'s Travel Sling Bag','01-DD','A'),('B-MAKE-001','Maybelline Color Sensational Powder Matte Lipstick - Mauve It Up','02-MA','B'),('B-MAKE-002','Maybelline Color Sensational Powder Matt+B66:D74e Lipstick - Touch of Nude','02-MA','B'),('B-MAKE-003','POND\'S Angel Face Pinkish White Glow Face Powder [50 g]','04-POND','B'),('B-MAKE-004','Emina Creamatte Lip Cream - 03 Mauvelous','06-EM','B'),('B-MAKE-005','Maybelline Color Sensational The Powder Mattes Lipstick - Almond Pink','02-MA','B'),('B-MAKE-006','Viva Eyebrow - Brown (135452)','10-VIVA','B'),('B-MAKE-007','Skin Aqua 402872 UV Moisture Gel Pelembab Wajah [40g]','11-SKN','B'),('B-MAKE-008','Maybelline Color Sensational Powder Matte Lipstick - Plum Perfection','02-MA','B'),('B-MAKE-009','Make Over Perfect Cover Two Way Cake - 04 Desert (400338)','07-MKE','B'),('B-MAKE-010','Maybelline Color Sensational The Powder Mattes Lipstick - Toasted Brown','02-MA','B'),('B-MAKE-011','Purbasari Color Matte 89 Lipstik (321857)','15-PUR','B'),('B-MAKE-012','Wardah Exclusive Matte Lip Cream - 05 Speachless [4 g] (404017)','08-WAR','B'),('B-MAKE-013','Emina Creamatte Lip Cream - 06 Jelly Bean','06-EM','B'),('B-MAKE-014','Inez Compact Powder - Natural Glow (320203)','16-INE','B'),('B-MAKE-015','Make Over Perfect Cover Two Way Cake - 01 Lace (400317)','07-MKE','B'),('B-MAKE-016','Purbasari Color Matte 90 Lipstik (321858)','15-PUR','B'),('B-MAKE-017','Silky Girl Big Eye Collagen Water Proof Maskara (144900)','17-SILK','B'),('B-MAKE-018','LT Pro 06 Long Lasting Matte Lip Cream [8 mL]','19-LT','B'),('B-MAKE-019','Purbasari Color Matte 86 Lipstik (321854)','15-PUR','B'),('B-MAKE-020','Viva Pensil Alis - Hitam (56204)','10-VIVA','B'),('B-MAKE-021','Maybelline Color Sensational Powder Matte Lipstick - Honey Chery','02-MA','B'),('B-MAKE-022','Wardah 144158 WonderShine Lip Gloss - 01 Cinnamon Red [4,5 mL]','08-WAR','B'),('B-MAKE-023','Make Over 400205 Blush On - 01 Pink Fantasi','07-MKE','B'),('B-MAKE-024','Inez Face Powder - Natural Glow (320213)','16-INE','B'),('C-SKIN-001','FrienVita Whitening Filtering Yuja Vita C Mask','20-FV','C'),('C-SKIN-002','FrienVita Pore Filtering Volcanic-ash Vita F Mask','20-FV','C'),('C-SKIN-003','FrienVita Propolis Vita A Mask','20-FV','C'),('C-SKIN-004','Wardah Pore Tightening Face Toner [100 mL] (320188)','08-WAR','C'),('C-SKIN-005','Acnes 114384 Sealing Jell Obat Jerawat [9 g]','12-AC','C'),('C-SKIN-006','Wardah 321313 White Secret Day Cream [30 g]','08-WAR','C'),('C-SKIN-007','Acnes Creamy Wash Pembersih Wajah [100 g]','12-AC','C'),('C-SKIN-008','Hada Labo Gokujyun Ultimate Moisturizing Face Wash [100 g] (126149)','14-HADA','C'),('C-SKIN-009','Viva Bengkoang Face Mask [30 g]','10-VIVA','C'),('C-SKIN-010','Silkygirl 321007 Pure Fresh All In One Gel Make Up Remover [150 mL]','17-SILK','C'),('C-SKIN-011','POND\'S 400444 Acne Solution Gel [20g]','14-HADA','C'),('C-SKIN-012','Hada Labo 126108 Ultimate Moist Cleanser [50 g]','14-HADA','C'),('C-SKIN-013','Sariayu 228815 White Aromatic Pembersih Wajah [150 mL]','21-SARI','C'),('C-SKIN-014','Gizi Essential White With Temulawak Day Cream - Tube [18 g] (406509)','22-GIZI','C'),('C-SKIN-015','Gizi Super Cream Daily Nutrition Cream UV Protection With SPF 18 [18 g] (320753)','22-GIZI','C'),('C-SKIN-016','C&C 110208 Oil Control Film Pembersih Wajah [60 Sheet]','09-CC','C'),('C-SKIN-017','Hada Labo 126107 Whitening Lotion [100 mL]','14-HADA','C'),('C-SKIN-018','Gizi Super Cream Daily Nutrition Cream UV Protection With SPF 18 [18 g] (320753)','22-GIZI','C'),('C-SKIN-019','Hada Labo Gokujyun Alpha Starter Pack (144676)','14-HADA','C'),('C-SKIN-020','Gizi Temulawak Night Cream [18 g]','22-GIZI','C'),('C-SKIN-021','JF 807767 Acne Care Wet Wipes 10S','23-JF','C'),('C-SKIN-022','Maybelline Makeup Remover Eye [143606]','02-MA','C'),('C-SKIN-023','Inez 320208 Everynight Lightening Moisturizing Cream [28 g]','16-INE','C'),('C-SKIN-024','BDL Papaya Day Cream [20 g]','18-BDL','C'),('C-SKIN-025','Viva Clean Emo [200 ml]','10-VIVA','C'),('D-BODY-001','Kojiesan S,Whitening Soap [135 g/ 128985]','24-KOJI','D'),('D-BODY-002','Purbasari Lulur Pemutih Body Scrub [235 g]','15-PUR','D'),('D-BODY-003','Purbasari 404166 Lulur Zaitun [235 mL]','15-PUR','D'),('D-BODY-004','Kojiesan Skin Lightening Soap [65 g/ 320057]','24-KOJI','D'),('D-BODY-005','Skin Aqua UV Whitening Milk Body Lotion (144531)','11-SKN','D'),('D-BODY-006','Hijab Fresh 406847 Pureline Hijab Extra Moisture Hand Body Lotion [100 mL]','05-HIJ','D'),('D-BODY-007','Kojiesan 320058 Dream White Anti Aging Sabun Mandi [135 g]','24-KOJI','D'),('D-BODY-008','Carmed Moisturizing Lotion [100 mL]','25-CAR','D'),('D-BODY-009','Purbasari HBL Zaitun Hand & Body Lotion [220 mL] (404167)','15-PUR','D'),('D-BODY-010','Wardah Shine Body Lotion [200 mL] (406615)','08-WAR','D'),('D-BODY-011','Neo Rheumacyl Anti Inflammation Gel [30 g]','26-NEO','D'),('D-BODY-012','Nivea Body Lotion Whitening [200 mL]','28-NIV','D'),('D-BODY-013','Felinz 406404 Nourishing Hand Mask','29-FELI','D'),('D-BODY-014','Felinz 406405 Exfoliating Foot Mask','29-FELI','D'),('D-BODY-015','Nivea 403386 White Firming SPF 15 Body Lotion [100 mL]','28-NIV','D'),('D-BODY-016','Wardah Innocence Body Lotion [200 mL] (406618)','08-WAR','D'),('D-BODY-017','Holly Sabun Hijau [200 g]','30-HOLL','D'),('D-BODY-018','Ayudya 403378 Lulur Putih [300 g]','31-AYU','D'),('D-BODY-019','Viva White Mulberry Body Butter [200g / 404932]','10-VIVA','D'),('D-BODY-020','Wardah Flame Body Lotion (406617)','08-WAR','D'),('D-BODY-021','VIVA White Body Butter Rose [200g]','10-VIVA','D'),('D-BODY-022','Viva 404933 White Body Butter Olive [200g]','10-VIVA','D'),('E-HAIR-001','NR 320375 Hair Tonic [200 mL]','33-NR','E'),('E-HAIR-002','Mustika Ratu Daun Bayam Shampoo [10346/ 175 mL]','32-MUS','E'),('E-HAIR-003','Makarizo He Ft Hair Aloe & Melon Shampoo [170 mL] (321974)','34-MAKA','E'),('E-HAIR-004','Mustika Ratu 10886 MR Penyubur Rambut [175 mL]','32-MUS','E'),('E-HAIR-005','Makarizo Hair Energy Fibertherapy Royal Jelly Extract [500 gr] (400918)','34-MAKA','E'),('E-HAIR-006','Ellips Hair Vit Pro Keratin Smooth & Silky 6S Vitamin Rambut','35-ELL','E'),('E-HAIR-007','Makarizo Hair Energy Fibertherapy Aloe Melon Extract [500 gr] (400919)','34-MAKA','E'),('E-HAIR-008','Mustika Ratu 190 10885 Cem Ceman Hair Oil [175 mL]','32-MUS','E'),('E-HAIR-009','Mustika Ratu 10350 MR SHP Merang Shampoo [175 mL]','32-MUS','E'),('E-HAIR-010','Ellips Volume Miracle Hair Mask [20 g]','35-ELL','E'),('E-HAIR-011','Makarizo Hair Energy Scensations Morning Dew [100 mL] (321286)','34-MAKA','E'),('E-HAIR-012','L\'Oreal 406830 Extra Oil Colored Hair 50 Serum Rambut','03-LO','E'),('E-HAIR-013','NR Citrone Shampoo [200 mL]','33-NR','E'),('E-HAIR-014','Cultusia 405059 Hair Mask Olive Oil [25 mL]','36-CUL','E'),('E-HAIR-015','Morris Pomade Glamour Perawatan Rambut - Silver [80 g] (400138)','37-MOR','E'),('E-HAIR-016','Makarizo Hair Energy Scensations Cherry Blossom [100 mL] (321287)','34-MAKA','E'),('E-HAIR-017','NR EL Shampoo [200 mL]','33-NR','E'),('E-HAIR-018','BEAU Ellips Treatment Hair Mask [20g]','35-ELL','E'),('E-HAIR-019','Intense Hair Tonic [35 mL]','38-INT','E'),('E-HAIR-020','Ellips Vitality Vitamin Rambut [6\'S]','35-ELL','E'),('E-HAIR-021','Makarizo Hair Energy Scensations Ocean Breeze [100 mL] (400917)','34-MAKA','E'),('E-HAIR-022','L\'Oreal 143506 Excellence Cream Pewarna Rambut - 3 Natural Dark Brown','03-LO','E'),('E-HAIR-023','Sariayu Hijab Hair Tonic Lotion (320075)','21-SARI','E'),('E-HAIR-024','Ellips Hair Mask Smooth Masker Rambut','35-ELL','E'),('F-PHAR-001','Vigel Lubricant Gel [60 g]','39-VIG','F'),('F-PHAR-002','Vigel Lubricant Gel [30 gr]','39-VIG','F'),('F-PHAR-003','Transpulmin Balsam [20 gr]','40-TRAN','F'),('F-PHAR-004','Rohto Obat Tetes Mata Steril [7 mL]','13-ROH','F'),('F-PHAR-005','Durex Strawberry Condom [3\'S]','41-DUR','F'),('F-PHAR-006','Safe Care 30 406390 Aromatherapy Telon','42-SAFE','F'),('F-PHAR-007','Safe Care 10 406389 Aromatherapy Telon','42-SAFE','F'),('F-PHAR-008','Magic Power Wet Tissue - Black [6 Sheet]','43-MAG','F'),('F-PHAR-009','Woods Peppermint Expectorant Obat Batuk [100 mL]','44-WOD','F'),('F-PHAR-010','Curcuma Plus F&V Blackcurrant Multivitamin [100 mL]','45-CUR','F'),('F-PHAR-011','Purbasari 321072 Manja White Sabun Sirih [125 mL]','15-PUR','F'),('F-PHAR-012','Curcuma Plus Jeruk Go Talz Th Multivitamin & Suplemen [20 Tablet]','45-CUR','F'),('F-PHAR-013','Magic Power Wet Crimson Desire Antiseptic Tissue [6\'S]','43-MAG','F'),('F-PHAR-014','Hemaviton Cardio Suplemen Kesehatan [10 Kaplet]','27-HER','F'),('F-PHAR-015','Curcuma Plus Grow Emulsion Multivitamin - Jeruk [200 mL]','45-CUR','F'),('F-PHAR-016','Curcuma Plus Gold 406516 Jeruk Suplemen [100 mL]','45-CUR','F'),('F-PHAR-017','Curcuma Plus Fruit & Veggie Org Multivitamin [100 mL]','45-CUR','F'),('F-PHAR-018','Super Magic Cassanova 6S Kesehatan Seksual','46-SUP','F'),('F-PHAR-019','Magic Power Wet Tissue Crimson Desire Antiseptic Kesehatan Seksual [6\'S]','43-MAG','F'),('F-PHAR-020','Curcuma Plus Grow Emulsion Multivitamin - Strawberry [200 mL]','45-CUR','F'),('F-PHAR-021','Cap Lang Minyak Kayu Putih [60 mL]','47-CAP','F'),('F-PHAR-022','Cap Lang Lavender Minyak Ekaliptus Aromatherapy [120 mL]','47-CAP','F'),('F-PHAR-023','Woods Herbal Cough Syrup Obat Batuk [60 mL]','44-WOD','F');
/*!40000 ALTER TABLE `produk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `produk_terlaris`
--

DROP TABLE IF EXISTS `produk_terlaris`;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `produk_terlaris` (
  `Kode` tinyint NOT NULL,
  `Produk` tinyint NOT NULL,
  `Qty` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `produk_terlaris_banten`
--

DROP TABLE IF EXISTS `produk_terlaris_banten`;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_banten`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `produk_terlaris_banten` (
  `Kode` tinyint NOT NULL,
  `Produk` tinyint NOT NULL,
  `Qty` tinyint NOT NULL,
  `Provinsi` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `produk_terlaris_dandan_bintaro`
--

DROP TABLE IF EXISTS `produk_terlaris_dandan_bintaro`;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_dandan_bintaro`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `produk_terlaris_dandan_bintaro` (
  `Kode` tinyint NOT NULL,
  `Produk` tinyint NOT NULL,
  `Qty` tinyint NOT NULL,
  `Toko` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `produk_terlaris_dandan_cikunir`
--

DROP TABLE IF EXISTS `produk_terlaris_dandan_cikunir`;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_dandan_cikunir`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `produk_terlaris_dandan_cikunir` (
  `Kode` tinyint NOT NULL,
  `Produk` tinyint NOT NULL,
  `Qty` tinyint NOT NULL,
  `Toko` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `produk_terlaris_dandan_curug_raya`
--

DROP TABLE IF EXISTS `produk_terlaris_dandan_curug_raya`;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_dandan_curug_raya`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `produk_terlaris_dandan_curug_raya` (
  `Kode` tinyint NOT NULL,
  `Produk` tinyint NOT NULL,
  `Qty` tinyint NOT NULL,
  `Toko` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `produk_terlaris_dandan_kota_wisata`
--

DROP TABLE IF EXISTS `produk_terlaris_dandan_kota_wisata`;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_dandan_kota_wisata`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `produk_terlaris_dandan_kota_wisata` (
  `Kode` tinyint NOT NULL,
  `Produk` tinyint NOT NULL,
  `Qty` tinyint NOT NULL,
  `Toko` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `produk_terlaris_dandan_pondok_duta`
--

DROP TABLE IF EXISTS `produk_terlaris_dandan_pondok_duta`;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_dandan_pondok_duta`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `produk_terlaris_dandan_pondok_duta` (
  `Kode` tinyint NOT NULL,
  `Produk` tinyint NOT NULL,
  `Qty` tinyint NOT NULL,
  `Toko` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `produk_terlaris_dandan_taman_kota`
--

DROP TABLE IF EXISTS `produk_terlaris_dandan_taman_kota`;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_dandan_taman_kota`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `produk_terlaris_dandan_taman_kota` (
  `Kode` tinyint NOT NULL,
  `Produk` tinyint NOT NULL,
  `Qty` tinyint NOT NULL,
  `Toko` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `produk_terlaris_dandan_villa_tomang_baru`
--

DROP TABLE IF EXISTS `produk_terlaris_dandan_villa_tomang_baru`;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_dandan_villa_tomang_baru`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `produk_terlaris_dandan_villa_tomang_baru` (
  `Kode` tinyint NOT NULL,
  `Produk` tinyint NOT NULL,
  `Qty` tinyint NOT NULL,
  `Toko` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `produk_terlaris_jakarta`
--

DROP TABLE IF EXISTS `produk_terlaris_jakarta`;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_jakarta`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `produk_terlaris_jakarta` (
  `Kode` tinyint NOT NULL,
  `Produk` tinyint NOT NULL,
  `Qty` tinyint NOT NULL,
  `Provinsi` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `produk_terlaris_jawa_barat`
--

DROP TABLE IF EXISTS `produk_terlaris_jawa_barat`;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_jawa_barat`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `produk_terlaris_jawa_barat` (
  `Kode` tinyint NOT NULL,
  `Produk` tinyint NOT NULL,
  `Qty` tinyint NOT NULL,
  `Provinsi` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `provinsi`
--

DROP TABLE IF EXISTS `provinsi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provinsi` (
  `kode_prov` char(20) NOT NULL,
  `prov` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`kode_prov`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provinsi`
--

LOCK TABLES `provinsi` WRITE;
/*!40000 ALTER TABLE `provinsi` DISABLE KEYS */;
INSERT INTO `provinsi` VALUES ('01-BA','Banten'),('02-JB','Jawa Barat'),('03-DKI','DKI Jakarta');
/*!40000 ALTER TABLE `provinsi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stok`
--

DROP TABLE IF EXISTS `stok`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stok` (
  `no_stok` int(11) NOT NULL,
  `kode_produk` char(20) NOT NULL,
  `stok` int(11) DEFAULT NULL,
  PRIMARY KEY (`no_stok`),
  KEY `fk_stok1` (`kode_produk`),
  CONSTRAINT `fk_stok1` FOREIGN KEY (`kode_produk`) REFERENCES `produk` (`kode_produk`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stok`
--

LOCK TABLES `stok` WRITE;
/*!40000 ALTER TABLE `stok` DISABLE KEYS */;
INSERT INTO `stok` VALUES (1,'A-ACC-001',20000),(2,'A-ACC-002',10000),(3,'A-ACC-003',50000),(4,'A-ACC-004',50000),(5,'A-ACC-005',10000),(6,'B-MAKE-001',15000),(7,'B-MAKE-002',55000),(8,'B-MAKE-003',10000),(9,'B-MAKE-004',20000),(10,'B-MAKE-005',30000),(11,'B-MAKE-006',40000),(12,'B-MAKE-007',20000),(13,'B-MAKE-008',10000),(14,'B-MAKE-009',25000),(15,'B-MAKE-010',30000),(16,'B-MAKE-011',30000),(17,'B-MAKE-012',20000),(18,'B-MAKE-013',15000),(19,'B-MAKE-014',30000),(20,'B-MAKE-015',10000),(21,'B-MAKE-016',20000),(22,'B-MAKE-017',10000),(23,'B-MAKE-018',21000),(24,'B-MAKE-019',32000),(25,'B-MAKE-020',15000),(26,'B-MAKE-021',30000),(27,'B-MAKE-022',12300),(28,'B-MAKE-023',20000),(29,'B-MAKE-024',30000),(30,'C-SKIN-001',20000),(31,'C-SKIN-002',40000),(32,'C-SKIN-003',300000),(33,'C-SKIN-004',50000),(34,'C-SKIN-005',30000),(35,'C-SKIN-006',20000),(36,'C-SKIN-007',20000),(37,'C-SKIN-008',40000),(38,'C-SKIN-009',7000),(39,'C-SKIN-010',9000),(40,'C-SKIN-011',10000),(41,'C-SKIN-012',30000),(42,'C-SKIN-013',30500),(43,'C-SKIN-014',5000),(44,'C-SKIN-015',30000),(45,'C-SKIN-016',20000),(46,'C-SKIN-017',30000),(47,'C-SKIN-018',40000),(48,'C-SKIN-019',30000),(49,'C-SKIN-020',20000),(50,'C-SKIN-021',30000),(51,'C-SKIN-022',30500),(52,'C-SKIN-023',20500),(53,'C-SKIN-024',30200),(54,'C-SKIN-025',20300),(55,'D-BODY-001',23000),(56,'D-BODY-002',10500),(57,'D-BODY-003',12000),(58,'D-BODY-004',14000),(59,'D-BODY-005',15000),(60,'D-BODY-006',10000),(61,'D-BODY-007',10000),(62,'D-BODY-008',20000),(63,'D-BODY-009',20000),(64,'D-BODY-010',40000),(65,'D-BODY-011',30000),(66,'D-BODY-012',20000),(67,'D-BODY-013',45000),(68,'D-BODY-014',20000),(69,'D-BODY-015',10000),(70,'D-BODY-016',20500),(71,'D-BODY-017',20000),(72,'D-BODY-018',10500),(73,'D-BODY-019',10000),(74,'D-BODY-020',20000),(75,'D-BODY-021',25500),(76,'D-BODY-022',20000),(77,'E-HAIR-001',51000),(78,'E-HAIR-002',9900),(79,'E-HAIR-003',30000),(80,'E-HAIR-004',9000),(81,'E-HAIR-005',9000),(82,'E-HAIR-006',10000),(83,'E-HAIR-007',14000),(84,'E-HAIR-008',10500),(85,'E-HAIR-009',10000),(86,'E-HAIR-010',15000),(87,'E-HAIR-011',20000),(88,'E-HAIR-012',20000),(89,'E-HAIR-013',40000),(90,'E-HAIR-014',30000),(91,'E-HAIR-015',20000),(92,'E-HAIR-016',4500),(93,'E-HAIR-017',20000),(94,'E-HAIR-018',10000),(95,'E-HAIR-019',15000),(96,'E-HAIR-020',30000),(97,'E-HAIR-021',12300),(98,'E-HAIR-022',20000),(99,'E-HAIR-023',30000),(100,'E-HAIR-024',20000),(101,'F-PHAR-001',40000),(102,'F-PHAR-002',30000),(103,'F-PHAR-003',50000),(104,'F-PHAR-004',30000),(105,'F-PHAR-005',20000),(106,'F-PHAR-006',10000),(107,'F-PHAR-007',5000),(108,'F-PHAR-008',5000),(109,'F-PHAR-009',10000),(110,'F-PHAR-010',15000),(111,'F-PHAR-011',55000),(112,'F-PHAR-012',10000),(113,'F-PHAR-013',20000),(114,'F-PHAR-014',30000),(115,'F-PHAR-015',40000),(116,'F-PHAR-016',20000),(117,'F-PHAR-017',10000),(118,'F-PHAR-018',25000),(119,'F-PHAR-019',30000),(120,'F-PHAR-020',30000),(121,'F-PHAR-021',20000),(122,'F-PHAR-022',15000),(123,'F-PHAR-023',30000);
/*!40000 ALTER TABLE `stok` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `struk`
--

DROP TABLE IF EXISTS `struk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `struk` (
  `bon` varchar(30) NOT NULL,
  `kode_karyawan` char(20) NOT NULL,
  `total_item` int(11) DEFAULT NULL,
  `total_harga` int(11) DEFAULT NULL,
  `total_disc` int(11) DEFAULT NULL,
  `donasi_ku` int(11) DEFAULT NULL,
  `total_belanja` int(11) DEFAULT NULL,
  `tunai` int(11) DEFAULT NULL,
  `kembalian` int(11) DEFAULT NULL,
  `ppn` int(11) DEFAULT NULL,
  `tgl` date DEFAULT NULL,
  `pkl` time DEFAULT NULL,
  `kode_thn` char(20) DEFAULT NULL,
  `id_member` char(20) DEFAULT NULL,
  `id_app` char(20) NOT NULL,
  `npwp` varchar(30) NOT NULL,
  PRIMARY KEY (`bon`),
  KEY `fk_struk1` (`kode_karyawan`),
  KEY `fk_struk2` (`id_member`),
  KEY `fk_struk3` (`id_app`),
  KEY `fk_struk4` (`npwp`),
  KEY `fk_struk0` (`kode_thn`),
  CONSTRAINT `fk_struk0` FOREIGN KEY (`kode_thn`) REFERENCES `tahun` (`kode_thn`) ON UPDATE CASCADE,
  CONSTRAINT `fk_struk1` FOREIGN KEY (`kode_karyawan`) REFERENCES `karyawan` (`kode_karyawan`) ON UPDATE CASCADE,
  CONSTRAINT `fk_struk2` FOREIGN KEY (`id_member`) REFERENCES `member` (`id_member`) ON UPDATE CASCADE,
  CONSTRAINT `fk_struk3` FOREIGN KEY (`id_app`) REFERENCES `app` (`id_app`) ON UPDATE CASCADE,
  CONSTRAINT `fk_struk4` FOREIGN KEY (`npwp`) REFERENCES `toko` (`npwp`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Harga sudah termasuk (PPN)';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `struk`
--

LOCK TABLES `struk` WRITE;
/*!40000 ALTER TABLE `struk` DISABLE KEYS */;
INSERT INTO `struk` VALUES ('01-8A4-201-0312MVM','KAR-001',62,1021900,102190,90,2259810,2300000,40190,1173,'2017-12-01','09:00:00','Y-001','PONTA-001','APP-012','31.020.069.7-416.000'),('02-7A9-201-0312MVM','KAR-002',62,1021900,102190,90,2259810,2300000,40190,1173,'2017-12-12','09:00:00','Y-001','PONTA-002','APP-012','32.021.069.7-416.010'),('03-6A49-201-0312MVM','KAR-003',62,807900,80790,90,1873890,2000000,126210,1173,'2017-12-12','12:00:00','Y-001','PONTA-003','APP-012','33.026.1-416.10262.6'),('04-A49-201-0312MVM','KAR-004',62,807900,80790,90,1873890,2000000,126210,1173,'2017-12-12','20:00:00','Y-001','PONTA-004','APP-012','34.028.1-416.03556.6'),('05-A49-201-0312MVM','KAR-005',62,807900,80790,90,1873890,2000000,126210,1173,'2018-12-22','03:00:00','Y-002',NULL,'APP-012','35.043.8-416.54398.7'),('06-A49-201-0312MVM','KAR-006',62,1080400,0,90,2773990,3000000,226010,1173,'2018-12-24','03:00:00','Y-002',NULL,'APP-012','36.045.8-416.54510.7'),('07-A49-201-0312MVM','KAR-007',62,1080400,0,90,2773990,3000000,226010,1173,'2018-12-31','00:00:00','Y-002',NULL,'APP-012','37.050.8-616.55455.7');
/*!40000 ALTER TABLE `struk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tahun`
--

DROP TABLE IF EXISTS `tahun`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tahun` (
  `kode_thn` char(20) NOT NULL,
  `thn` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`kode_thn`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tahun`
--

LOCK TABLES `tahun` WRITE;
/*!40000 ALTER TABLE `tahun` DISABLE KEYS */;
INSERT INTO `tahun` VALUES ('Y-001','2017'),('Y-002','2018');
/*!40000 ALTER TABLE `tahun` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipe_produk`
--

DROP TABLE IF EXISTS `tipe_produk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipe_produk` (
  `gol_tipe_produk` char(20) NOT NULL,
  `tipe_produk` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`gol_tipe_produk`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipe_produk`
--

LOCK TABLES `tipe_produk` WRITE;
/*!40000 ALTER TABLE `tipe_produk` DISABLE KEYS */;
INSERT INTO `tipe_produk` VALUES ('A','Accecories'),('B','Makeup'),('C','Skin Care'),('D','Body Care'),('E','Hair Care'),('F','Pharmacy');
/*!40000 ALTER TABLE `tipe_produk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `toko`
--

DROP TABLE IF EXISTS `toko`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `toko` (
  `id_perusahaan` varchar(30) NOT NULL,
  `nama_toko` varchar(50) DEFAULT NULL,
  `alamat_toko` varchar(100) DEFAULT NULL,
  `kode_prov` char(20) NOT NULL,
  `npwp` varchar(30) NOT NULL,
  PRIMARY KEY (`npwp`),
  KEY `fk_toko1` (`id_perusahaan`),
  KEY `fk_toko2` (`kode_prov`),
  CONSTRAINT `fk_toko1` FOREIGN KEY (`id_perusahaan`) REFERENCES `perusahaan` (`id_perusahaan`) ON UPDATE CASCADE,
  CONSTRAINT `fk_toko2` FOREIGN KEY (`kode_prov`) REFERENCES `provinsi` (`kode_prov`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `toko`
--

LOCK TABLES `toko` WRITE;
/*!40000 ALTER TABLE `toko` DISABLE KEYS */;
INSERT INTO `toko` VALUES ('22.001.202.45.1.1','DAN+DAN Villa Tomang Baru','Ruko Tomang Baru Square Jl. VI - Kec. Pasar Kemis','01-BA','31.020.069.7-416.000'),('22.001.202.45.1.1','DAN+DAN Bintaro Sektor 5','Bintaro Utama Raya 5, Blok EA 15 No. 17, RT 001/ RW 01','01-BA','32.021.069.7-416.010'),('22.001.202.45.1.1','DAN+DAN Kota Wisata','Ruko Corcodia Blok SRA No.2 & 3 ','02-JB','33.026.1-416.10262.6'),('22.001.202.45.1.1','DAN+DAN Cikunir','Jl. Ratna Taman Perum Permata Cikunir Ruko Fresh Market No.1,2,3','02-JB','34.028.1-416.03556.6'),('22.001.202.45.1.1','DAN+DAN Pondok Duta','Jl. Metro Duta Raya, Blok AA1 No.1 RT.001/ RW 023','02-JB','35.043.8-416.54398.7'),('22.001.202.45.1.1','DAN+DAN Curug Raya','JL Curug Raya Permata timur, Blok A No 25.Rt.007/RW.008 ','03-DKI','36.045.8-416.54510.7'),('22.001.202.45.1.1','DAN+DAN Taman Kota','Jl. Taman Kota Blok A IV - 26 RT 04 / RW 05 ','03-DKI','37.050.8-616.55455.7');
/*!40000 ALTER TABLE `toko` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `dandan`
--

USE `dandan`;

--
-- Final view structure for view `produk_terlaris`
--

/*!50001 DROP TABLE IF EXISTS `produk_terlaris`*/;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `produk_terlaris` AS select `produk`.`kode_produk` AS `Kode`,`produk`.`produk` AS `Produk`,sum(`belanja`.`item`) AS `Qty` from (`produk` join `belanja` on((`belanja`.`kode_produk` = `produk`.`kode_produk`))) group by `produk`.`kode_produk` order by sum(`belanja`.`item`) desc limit 20 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `produk_terlaris_banten`
--

/*!50001 DROP TABLE IF EXISTS `produk_terlaris_banten`*/;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_banten`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `produk_terlaris_banten` AS select `produk`.`kode_produk` AS `Kode`,`produk`.`produk` AS `Produk`,sum(`belanja`.`item`) AS `Qty`,`provinsi`.`prov` AS `Provinsi` from ((((`produk` join `belanja` on((`belanja`.`kode_produk` = `produk`.`kode_produk`))) join `struk` on((`struk`.`bon` = `belanja`.`bon`))) join `toko` on((`toko`.`npwp` = `struk`.`npwp`))) join `provinsi` on((`provinsi`.`kode_prov` = `toko`.`kode_prov`))) where (`provinsi`.`kode_prov` = '01-BA') group by `produk`.`kode_produk` order by sum(`belanja`.`item`) desc limit 20 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `produk_terlaris_dandan_bintaro`
--

/*!50001 DROP TABLE IF EXISTS `produk_terlaris_dandan_bintaro`*/;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_dandan_bintaro`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `produk_terlaris_dandan_bintaro` AS select `produk`.`kode_produk` AS `Kode`,`produk`.`produk` AS `Produk`,sum(`belanja`.`item`) AS `Qty`,`toko`.`nama_toko` AS `Toko` from ((((`produk` join `belanja` on((`belanja`.`kode_produk` = `produk`.`kode_produk`))) join `struk` on((`struk`.`bon` = `belanja`.`bon`))) join `toko` on((`toko`.`npwp` = `struk`.`npwp`))) join `provinsi` on((`provinsi`.`kode_prov` = `toko`.`kode_prov`))) where (`toko`.`npwp` = '32.021.069.7-416.010') group by `produk`.`kode_produk` order by sum(`belanja`.`item`) desc limit 20 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `produk_terlaris_dandan_cikunir`
--

/*!50001 DROP TABLE IF EXISTS `produk_terlaris_dandan_cikunir`*/;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_dandan_cikunir`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `produk_terlaris_dandan_cikunir` AS select `produk`.`kode_produk` AS `Kode`,`produk`.`produk` AS `Produk`,sum(`belanja`.`item`) AS `Qty`,`toko`.`nama_toko` AS `Toko` from ((((`produk` join `belanja` on((`belanja`.`kode_produk` = `produk`.`kode_produk`))) join `struk` on((`struk`.`bon` = `belanja`.`bon`))) join `toko` on((`toko`.`npwp` = `struk`.`npwp`))) join `provinsi` on((`provinsi`.`kode_prov` = `toko`.`kode_prov`))) where (`toko`.`npwp` = '34.028.1-416.03556.6') group by `produk`.`kode_produk` order by sum(`belanja`.`item`) desc limit 20 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `produk_terlaris_dandan_curug_raya`
--

/*!50001 DROP TABLE IF EXISTS `produk_terlaris_dandan_curug_raya`*/;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_dandan_curug_raya`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `produk_terlaris_dandan_curug_raya` AS select `produk`.`kode_produk` AS `Kode`,`produk`.`produk` AS `Produk`,sum(`belanja`.`item`) AS `Qty`,`toko`.`nama_toko` AS `Toko` from ((((`produk` join `belanja` on((`belanja`.`kode_produk` = `produk`.`kode_produk`))) join `struk` on((`struk`.`bon` = `belanja`.`bon`))) join `toko` on((`toko`.`npwp` = `struk`.`npwp`))) join `provinsi` on((`provinsi`.`kode_prov` = `toko`.`kode_prov`))) where (`toko`.`npwp` = '36.045.8-416.54510.7') group by `produk`.`kode_produk` order by sum(`belanja`.`item`) desc limit 20 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `produk_terlaris_dandan_kota_wisata`
--

/*!50001 DROP TABLE IF EXISTS `produk_terlaris_dandan_kota_wisata`*/;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_dandan_kota_wisata`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `produk_terlaris_dandan_kota_wisata` AS select `produk`.`kode_produk` AS `Kode`,`produk`.`produk` AS `Produk`,sum(`belanja`.`item`) AS `Qty`,`toko`.`nama_toko` AS `Toko` from ((((`produk` join `belanja` on((`belanja`.`kode_produk` = `produk`.`kode_produk`))) join `struk` on((`struk`.`bon` = `belanja`.`bon`))) join `toko` on((`toko`.`npwp` = `struk`.`npwp`))) join `provinsi` on((`provinsi`.`kode_prov` = `toko`.`kode_prov`))) where (`toko`.`npwp` = '33.026.1-416.10262.6') group by `produk`.`kode_produk` order by sum(`belanja`.`item`) desc limit 20 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `produk_terlaris_dandan_pondok_duta`
--

/*!50001 DROP TABLE IF EXISTS `produk_terlaris_dandan_pondok_duta`*/;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_dandan_pondok_duta`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `produk_terlaris_dandan_pondok_duta` AS select `produk`.`kode_produk` AS `Kode`,`produk`.`produk` AS `Produk`,sum(`belanja`.`item`) AS `Qty`,`toko`.`nama_toko` AS `Toko` from ((((`produk` join `belanja` on((`belanja`.`kode_produk` = `produk`.`kode_produk`))) join `struk` on((`struk`.`bon` = `belanja`.`bon`))) join `toko` on((`toko`.`npwp` = `struk`.`npwp`))) join `provinsi` on((`provinsi`.`kode_prov` = `toko`.`kode_prov`))) where (`toko`.`npwp` = '35.043.8-416.54398.7') group by `produk`.`kode_produk` order by sum(`belanja`.`item`) desc limit 20 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `produk_terlaris_dandan_taman_kota`
--

/*!50001 DROP TABLE IF EXISTS `produk_terlaris_dandan_taman_kota`*/;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_dandan_taman_kota`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `produk_terlaris_dandan_taman_kota` AS select `produk`.`kode_produk` AS `Kode`,`produk`.`produk` AS `Produk`,sum(`belanja`.`item`) AS `Qty`,`toko`.`nama_toko` AS `Toko` from ((((`produk` join `belanja` on((`belanja`.`kode_produk` = `produk`.`kode_produk`))) join `struk` on((`struk`.`bon` = `belanja`.`bon`))) join `toko` on((`toko`.`npwp` = `struk`.`npwp`))) join `provinsi` on((`provinsi`.`kode_prov` = `toko`.`kode_prov`))) where (`toko`.`npwp` = '37.050.8-616.55455.7') group by `produk`.`kode_produk` order by sum(`belanja`.`item`) desc limit 20 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `produk_terlaris_dandan_villa_tomang_baru`
--

/*!50001 DROP TABLE IF EXISTS `produk_terlaris_dandan_villa_tomang_baru`*/;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_dandan_villa_tomang_baru`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `produk_terlaris_dandan_villa_tomang_baru` AS select `produk`.`kode_produk` AS `Kode`,`produk`.`produk` AS `Produk`,sum(`belanja`.`item`) AS `Qty`,`toko`.`nama_toko` AS `Toko` from ((((`produk` join `belanja` on((`belanja`.`kode_produk` = `produk`.`kode_produk`))) join `struk` on((`struk`.`bon` = `belanja`.`bon`))) join `toko` on((`toko`.`npwp` = `struk`.`npwp`))) join `provinsi` on((`provinsi`.`kode_prov` = `toko`.`kode_prov`))) where (`toko`.`npwp` = '31.020.069.7-416.000') group by `produk`.`kode_produk` order by sum(`belanja`.`item`) desc limit 20 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `produk_terlaris_jakarta`
--

/*!50001 DROP TABLE IF EXISTS `produk_terlaris_jakarta`*/;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_jakarta`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `produk_terlaris_jakarta` AS select `produk`.`kode_produk` AS `Kode`,`produk`.`produk` AS `Produk`,sum(`belanja`.`item`) AS `Qty`,`provinsi`.`prov` AS `Provinsi` from ((((`produk` join `belanja` on((`belanja`.`kode_produk` = `produk`.`kode_produk`))) join `struk` on((`struk`.`bon` = `belanja`.`bon`))) join `toko` on((`toko`.`npwp` = `struk`.`npwp`))) join `provinsi` on((`provinsi`.`kode_prov` = `toko`.`kode_prov`))) where (`provinsi`.`kode_prov` = '03-DKI') group by `produk`.`kode_produk` order by sum(`belanja`.`item`) desc limit 20 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `produk_terlaris_jawa_barat`
--

/*!50001 DROP TABLE IF EXISTS `produk_terlaris_jawa_barat`*/;
/*!50001 DROP VIEW IF EXISTS `produk_terlaris_jawa_barat`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `produk_terlaris_jawa_barat` AS select `produk`.`kode_produk` AS `Kode`,`produk`.`produk` AS `Produk`,sum(`belanja`.`item`) AS `Qty`,`provinsi`.`prov` AS `Provinsi` from ((((`produk` join `belanja` on((`belanja`.`kode_produk` = `produk`.`kode_produk`))) join `struk` on((`struk`.`bon` = `belanja`.`bon`))) join `toko` on((`toko`.`npwp` = `struk`.`npwp`))) join `provinsi` on((`provinsi`.`kode_prov` = `toko`.`kode_prov`))) where (`provinsi`.`kode_prov` = '02-JB') group by `produk`.`kode_produk` order by sum(`belanja`.`item`) desc limit 20 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-08 23:23:25

DROP PROCEDURE IF EXISTS lihat_bon;

delimiter //
CREATE PROCEDURE lihat_bon(IN bon varchar(30))
BEGIN
SELECT

struk.bon AS 'BON',
karyawan.karyawan AS 'Kasir',
struk.total_item AS 'Total Qty',
struk.total_harga AS 'Total Harga',
struk.total_disc AS 'Total Disc',
struk.donasi_ku AS 'Donasi',
struk.total_belanja AS 'Total Belanja',
struk.tunai AS 'Tunai',
struk.kembalian AS 'Kembalian',
struk.ppn AS 'Ppn',
struk.tgl AS 'Tanggal',
struk.pkl AS 'Pukul',
tahun.thn AS 'Tahun',
data_pribadi.member AS 'Member',
data_pribadi.no_ktp AS 'KTP',
data_pribadi.telp AS 'Telepon',
data_pribadi.hp AS 'Hp',
data_pribadi.alamat AS 'Alamat Member',
member.total_poin AS 'Total Poin',
member.poin AS 'Poin',
app.versi AS 'Versi',
perusahaan.id_perusahaan AS 'NPWP Perusahaan',
perusahaan.nama_perusahaan AS 'Nama Perusahaan',
perusahaan.alamat_perusahaan AS 'Alamat Perusahaan',
toko.nama_toko AS 'Nama Toko',
toko.alamat_toko AS 'Alamat Toko',
provinsi.prov AS 'Provinsi',
jam_buka.jam_buka AS 'Jam Buka',
jam_buka.jam_tutup AS 'Jam Tutup',
toko.npwp AS 'NPWP'

FROM struk

LEFT OUTER JOIN karyawan ON karyawan.kode_karyawan = struk.kode_karyawan
LEFT OUTER JOIN belanja ON belanja.bon = struk.bon
LEFT OUTER JOIN toko ON toko.npwp = struk.npwp
LEFT OUTER JOIN member ON member.id_member = struk.id_member
LEFT OUTER JOIN tahun ON tahun.kode_thn = struk.kode_thn
LEFT OUTER JOIN app ON app.id_app = struk.id_app

LEFT OUTER JOIN produk ON produk.kode_produk = belanja.kode_produk

LEFT OUTER JOIN harga ON harga.kode_produk = produk.kode_produk
LEFT OUTER JOIN discount ON discount.kode_produk = produk.kode_produk
LEFT OUTER JOIN stok ON stok.kode_produk = produk.kode_produk

LEFT OUTER JOIN tipe_produk ON tipe_produk.gol_tipe_produk = produk.gol_tipe_produk
LEFT OUTER JOIN merek ON merek.id_merek = produk.id_merek

LEFT OUTER JOIN penjual ON penjual.id_penjual = merek.id_penjual

LEFT OUTER JOIN perusahaan ON perusahaan.id_perusahaan = toko.id_perusahaan
LEFT OUTER JOIN provinsi ON provinsi.kode_prov = toko.kode_prov

LEFT OUTER JOIN jam_buka ON jam_buka.kode_prov = provinsi.kode_prov

LEFT OUTER JOIN data_pribadi ON data_pribadi.no_data = member.no_data

WHERE struk.bon = bon
GROUP BY struk.bon;

END//
delimiter ;

DROP PROCEDURE IF EXISTS lihat_belanja;

delimiter //
CREATE PROCEDURE lihat_belanja(IN bon varchar(30))
BEGIN

SELECT
belanja.no_item AS 'No.',
belanja.kode_produk AS 'Kode',
produk.produk AS 'Produk',
merek.merek AS 'Merek',
penjual.penjual AS 'Penjual',
tipe_produk.tipe_produk AS 'Tipe',
stok.stok AS 'Stok',
harga.harga_satuan AS 'Harga',
discount.disc_satuan AS 'Discount',
belanja.item AS 'Qty',
belanja.harga AS 'Total Harga',
belanja.disc AS 'Total Discount',
belanja.bon AS 'Bon'

FROM belanja

JOIN produk ON produk.kode_produk = belanja.kode_produk
JOIN harga ON harga.kode_produk = produk.kode_produk
JOIN discount ON discount.kode_produk = produk.kode_produk
JOIN stok ON stok.kode_produk = produk.kode_produk

JOIN tipe_produk ON tipe_produk.gol_tipe_produk = produk.gol_tipe_produk
JOIN merek ON merek.id_merek = produk.id_merek
JOIN penjual ON penjual.id_penjual = merek.id_penjual


WHERE belanja.bon = bon
GROUP BY no_item;
END//
delimiter ;

DROP PROCEDURE IF EXISTS lihat_toko_income_terbesar_tahun;

delimiter //
CREATE PROCEDURE lihat_toko_income_terbesar_tahun (IN thn varchar(30))
BEGIN
SELECT
toko.npwp AS 'NPWP',
toko.nama_toko AS 'Toko',
tahun.thn AS 'Tahun',
SUM(struk.total_belanja) AS 'Pendapatan'

FROM Tahun
JOIN struk ON struk.kode_thn=tahun.kode_thn
JOIN toko ON toko.npwp=struk.npwp

WHERE tahun.thn = thn

GROUP BY toko.npwp ORDER BY struk.total_belanja DESC LIMIT 1;
END