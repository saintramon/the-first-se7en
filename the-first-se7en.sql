-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (x86_64)
--
-- Host: localhost    Database: the-first-se7en
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bonus_quest`
--

DROP TABLE IF EXISTS `bonus_quest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bonus_quest` (
  `b_quest_id` int NOT NULL AUTO_INCREMENT COMMENT 'The primary key, in the form of an integer.',
  `question` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'A string that holds the question or prompt of a quest.',
  `bool_answer` tinyint(1) NOT NULL COMMENT 'A true or false Boolean value.',
  `add_answer` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'A string value holding the additional information for an answer.',
  `quest_id` int NOT NULL COMMENT 'The associated primary key of a quest.',
  PRIMARY KEY (`b_quest_id`),
  KEY `BONUS_QUEST_QUEST_RELATION` (`quest_id`),
  CONSTRAINT `BONUS_QUEST_QUEST_RELATION` FOREIGN KEY (`quest_id`) REFERENCES `quest` (`quest_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bonus_quest`
--

LOCK TABLES `bonus_quest` WRITE;
/*!40000 ALTER TABLE `bonus_quest` DISABLE KEYS */;
INSERT INTO `bonus_quest` VALUES (1,'Swift is the successor of the Objective-C language.',1,'',1),(2,'Java is an object-oriented programming language maintained by Sun Microsystems.',0,'False. Oracle acquired Sun Microsystems in 2010 and presently maintains Java.',2),(3,'Ruby is a web-systems programming language that balances functional and imperative programming.',1,'',3),(4,'Konrad Zuse founded the first commercial digital computer, the Tabulating Machine.',0,'False. Konrad Zuse founded the Z4, not the Tabulating Machine.',4),(5,'Ada Lovelace is regarded as the first computer programmer.',1,'',5),(6,'React is a JavaScript built-in function created by Facebook that builds using reusable components.',0,'False. React is a framework, not a built-in function.',6),(7,'Assembly uses mnemonics to carry out instructions on the computer.',1,'',7),(8,'Mocha is the development name of JavaScript.',1,'',8),(9,'Charles Babbage created the Analytical Engine and the Difference Engine.',1,'True. Charles Babbage even collaborated with Ada Lovelace to create the Analytical Engine.',9),(10,'Google is currently the largest search engine and established the Go programming language.',1,'',10),(11,'Prolog uses facts and rules.',1,'',11),(12,'Marvin Minsky created the LISP language.',0,'False. Marvin Minsky popularized neural networks, while John McCarthy developed the LISP programming language.',12),(13,'Imperative and object-oriented programming are subsets of the procedural paradigm.',1,'',13),(14,'Alphabet is the character set in programming languages.',1,'',14),(15,'If a problem can be solved manually by pen and paper, then it can be solved by a Turing Machine.',1,'True. The Turing Machine was mainly used to study the properties of algorithms and determine what problems can be solved by the computer.',15),(16,'A statement expresses an action to be carried out.',1,'',16),(17,'A lexeme is the basic lexical unit in a programming language.',1,'',17),(18,'Metalanguage is an early programming paradigm.',0,'False. Metalanguage is a language used to describe a language.',18),(19,'HTML and HTTP were created in CERN.',1,'True. Tim Berners-Lee created HTML and HTTP in CERN’s laboratories.',19),(20,'Herman Hollerith founded the Computing-Tabulating-Recording company we now know as IBM (International Business Machine).',1,'True. Herman Hollerith also created the Tabulating Machine.',20);
/*!40000 ALTER TABLE `bonus_quest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player`
--

DROP TABLE IF EXISTS `player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player` (
  `player_id` int NOT NULL AUTO_INCREMENT COMMENT 'The primary key, in the form of an integer.',
  `username` varchar(30) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'A string of characters holding the username of a particular player.',
  `password` varchar(20) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'A string of characters holding the password of a particular player.',
  `xp_level` int NOT NULL COMMENT 'An integer holding the specific XP a player has garnered.',
  PRIMARY KEY (`player_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player`
--

LOCK TABLES `player` WRITE;
/*!40000 ALTER TABLE `player` DISABLE KEYS */;
INSERT INTO `player` VALUES (1,'rithik','rithik',1),(2,'johan','johan',2),(3,'ramon','ramon',1),(4,'basti','basti',3),(5,'patrick','patrick',1),(6,'johnrey','johnrey',1),(7,'hans','hans',1),(8,'rohit','rohit',1),(9,'jason','jason',1),(10,'jovv','jovv',1),(11,'diamond','diamond',1),(12,'carlo','carlo',1),(13,'jasper','jasper',1),(14,'rizza','rizza',1),(15,'123','123',10);
/*!40000 ALTER TABLE `player` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quest`
--

DROP TABLE IF EXISTS `quest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quest` (
  `quest_id` int NOT NULL AUTO_INCREMENT COMMENT 'The primary key, in the form of an integer',
  `img_1` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'A string of characters holding the file path of the specific image.',
  `img_2` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'A string of characters holding the file path of the specific image.',
  `img_3` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'A string of characters holding the file path of the specific image.',
  `img_4` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'A string of characters holding the file path of the specific image.',
  `answer` varchar(100) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'A string holding the answer of a quest.',
  `difficulty` varchar(6) COLLATE utf8mb4_general_ci NOT NULL COMMENT ' A string; either “Easy,” “Medium,” or “Hard.”',
  PRIMARY KEY (`quest_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quest`
--

LOCK TABLES `quest` WRITE;
/*!40000 ALTER TABLE `quest` DISABLE KEYS */;
INSERT INTO `quest` VALUES (1,'swift1.png','swift2.png','swift3.png','swift4.png','swift','easy'),(2,'java1.png','java2.png','java3.png','java4.png','java','easy'),(3,'ruby1.png','ruby2.png','ruby3.png','ruby4.png','ruby','easy'),(4,'zuse1.png','zuse2.png','zuse3.png','zuse4.png','zuse','easy'),(5,'ada_lovelace1.png','ada_lovelace2.png','ada_lovelace3.png','ada_lovelace4.png','ada_lovelace','easy'),(6,'react1.png','react2.png','react3.png','react4.png','react','easy'),(7,'assembly1.png','assembly2.png','assembly3.png','assembly4.png','assembly','easy'),(8,'mocha1.png','mocha2.png','mocha3.png','mocha4.png','mocha','easy'),(9,'charles_babbage1.png','charles_babbage2.png','charles_babbage3.png','charles_babbage4.png','charles_babbage','easy'),(10,'google1.png','google2.png','google3.png','google4.png','google','easy'),(11,'prolog1.png','prolog2.png','prolog3.png','prolog4.png','prolog','medium'),(12,'lisp1.png','lisp2.png','lisp3.png','lisp4.png','lisp','medium'),(13,'procedural1.png','procedural2.png','procedural3.png','procedural4.png','procedural','medium'),(14,'alphabet1.png','alphabet2.png','alphabet3.png','alphabet4.png','alphabet','medium'),(15,'turing_machine1.png','turing_machine2.png','turing_machine3.png','turing_machine4.png','turing_machine','medium'),(16,'statement1.png','statement2.png','statement3.png','statement4.png','statement','hard'),(17,'lexeme1.png','lexeme2.png','lexeme3.png','lexeme4.png','lexeme','hard'),(18,'metalanguage1.png','metalanguage2.png','metalanguage3.png','metalanguage4.png','metalanguage','hard'),(19,'cern1.png','cern2.png','cern3.png','cern4.png','cern','hard'),(20,'herman_hollerith1.png','herman_hollerith2.png','herman_hollerith3.png','herman_hollerith4.png','herman_hollerith','hard');
/*!40000 ALTER TABLE `quest` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-24  8:29:45
