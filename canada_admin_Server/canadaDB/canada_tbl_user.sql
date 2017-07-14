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
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(60) NOT NULL,
  `password` varchar(255) NOT NULL,
  `studentNum` varchar(255) NOT NULL,
  `createtime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user`
--

LOCK TABLES `tbl_user` WRITE;
/*!40000 ALTER TABLE `tbl_user` DISABLE KEYS */;
INSERT INTO `tbl_user` VALUES (22,'WangDaiQiang','96e79218965eb72c92a549dd5a330112','000001',NULL),(59,'li4Tianheng1006','e10adc3949ba59abbe56e057f20f883e','1006','2017-07-13'),(60,'dangXuesong1013','e10adc3949ba59abbe56e057f20f883e','1013','2017-07-13'),(61,'wang2Haha904','e10adc3949ba59abbe56e057f20f883e','904','2017-07-13'),(62,'pang4Yinuo0','e10adc3949ba59abbe56e057f20f883e','0','2017-07-13'),(63,'wang1Haha904','e10adc3949ba59abbe56e057f20f883e','904','2017-07-13'),(64,'pang3Yinuo0','e10adc3949ba59abbe56e057f20f883e','0','2017-07-13'),(65,'liTianheng1006','e10adc3949ba59abbe56e057f20f883e','1006','2017-07-13'),(66,'wangHaha904','e10adc3949ba59abbe56e057f20f883e','904','2017-07-13'),(67,'pang1Yinuo0','e10adc3949ba59abbe56e057f20f883e','0','2017-07-13'),(68,'pangYinuo0','e10adc3949ba59abbe56e057f20f883e','0','2017-07-13'),(69,'panYinuo0','e10adc3949ba59abbe56e057f20f883e','0','2017-07-13'),(70,'BaoTianheng1006','e10adc3949ba59abbe56e057f20f883e','1006','2017-07-13'),(71,'BaiXuesong1013','e10adc3949ba59abbe56e057f20f883e','1013','2017-07-13');
/*!40000 ALTER TABLE `tbl_user` ENABLE KEYS */;
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
