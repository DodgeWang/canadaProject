-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: canada
-- ------------------------------------------------------
-- Server version	5.7.18

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
-- Table structure for table `tbl_campusactivities`
--

DROP TABLE IF EXISTS `tbl_campusactivities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_campusactivities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgpath` varchar(255) DEFAULT NULL,
  `title` varchar(60) NOT NULL,
  `url` varchar(255) NOT NULL,
  `classifyId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_campusactivities`
--

LOCK TABLES `tbl_campusactivities` WRITE;
/*!40000 ALTER TABLE `tbl_campusactivities` DISABLE KEYS */;
INSERT INTO `tbl_campusactivities` VALUES (9,'http://192.168.1.69:2000/uploadFile/picture/149905178893316452.png','联系方式','https://www.baidu.com/',7),(10,'http://192.168.1.69:2000/uploadFile/picture/149905178893316452.png','学院地址','https://www.baidu.com/',7),(11,'http://192.168.1.69:2000/uploadFile/picture/149905178893316452.png','官方网站','https://www.baidu.com/',7),(12,'http://192.168.1.69:2000/uploadFile/picture/149941543392111903.jpg','活动1','https://www.baidu.com/',2),(13,'http://192.168.1.69:2000/uploadFile/picture/149941547323716193.jpg','活动2','https://www.baidu.com/',1),(14,'http://192.168.1.69:2000/uploadFile/picture/149941550445815132.jpg','活动3','https://www.baidu.com/',1),(15,'http://192.168.1.69:2000/uploadFile/picture/149941553503911138.jpg','活动4','https://www.baidu.com/',1),(16,'http://192.168.1.69:2000/uploadFile/picture/149941555087511723.jpg','活动5','https://www.baidu.com/',1);
/*!40000 ALTER TABLE `tbl_campusactivities` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-13 18:34:45
