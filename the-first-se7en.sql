-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2025 at 01:53 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `the-first-se7en`
--

-- --------------------------------------------------------

--
-- Table structure for table `bonus_quest`
--

CREATE TABLE `bonus_quest` (
  `b_quest_id` int(5) NOT NULL COMMENT 'The primary key, in the form of an integer.',
  `question` varchar(1000) NOT NULL COMMENT 'A string that holds the question or prompt of a quest.',
  `bool_answer` tinyint(1) NOT NULL COMMENT 'A true or false Boolean value.',
  `add_answer` varchar(1000) NOT NULL COMMENT 'A string value holding the additional information for an answer.',
  `quest_id` int(5) NOT NULL COMMENT 'The associated primary key of a quest.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `player`
--

CREATE TABLE `player` (
  `player_id` int(5) NOT NULL COMMENT 'The primary key, in the form of an integer.',
  `username` varchar(30) NOT NULL COMMENT 'A string of characters holding the username of a particular player.',
  `password` varchar(20) NOT NULL COMMENT 'A string of characters holding the password of a particular player.',
  `xp_level` int(5) NOT NULL COMMENT 'An integer holding the specific XP a player has garnered.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `player`
--

INSERT INTO `player` (`player_id`, `username`, `password`, `xp_level`) VALUES
(1, 'rithik', 'rithik', 1),
(2, 'johan', 'johan', 2),
(3, 'ramon', 'ramon', 1),
(4, 'basti', 'basti', 3),
(5, 'patrick', 'patrick', 1),
(6, 'johnrey', 'johnrey', 1),
(7, 'hans', 'hans', 1),
(8, 'rohit', 'rohit', 1),
(9, 'jason', 'jason', 1),
(10, 'jovv', 'jovv', 1),
(11, 'diamond', 'diamond', 1),
(12, 'carlo', 'carlo', 1),
(13, 'jasper', 'jasper', 1),
(14, 'rizza', 'rizza', 1);

-- --------------------------------------------------------

--
-- Table structure for table `quest`
--

CREATE TABLE `quest` (
  `quest_id` int(5) NOT NULL COMMENT 'The primary key, in the form of an integer',
  `img_1` varchar(1000) NOT NULL COMMENT 'A string of characters holding the file path of the specific image.',
  `img_2` varchar(1000) NOT NULL COMMENT 'A string of characters holding the file path of the specific image.',
  `img_3` varchar(1000) NOT NULL COMMENT 'A string of characters holding the file path of the specific image.',
  `img_4` varchar(1000) NOT NULL COMMENT 'A string of characters holding the file path of the specific image.',
  `answer` varchar(100) NOT NULL COMMENT 'A string holding the answer of a quest.',
  `difficulty` varchar(6) NOT NULL COMMENT ' A string; either “Easy,” “Medium,” or “Hard.”'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bonus_quest`
--
ALTER TABLE `bonus_quest`
  ADD PRIMARY KEY (`b_quest_id`),
  ADD KEY `BONUS_QUEST_QUEST_RELATION` (`quest_id`);

--
-- Indexes for table `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`player_id`);

--
-- Indexes for table `quest`
--
ALTER TABLE `quest`
  ADD PRIMARY KEY (`quest_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bonus_quest`
--
ALTER TABLE `bonus_quest`
  MODIFY `b_quest_id` int(5) NOT NULL AUTO_INCREMENT COMMENT 'The primary key, in the form of an integer.';

--
-- AUTO_INCREMENT for table `player`
--
ALTER TABLE `player`
  MODIFY `player_id` int(5) NOT NULL AUTO_INCREMENT COMMENT 'The primary key, in the form of an integer.', AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `quest`
--
ALTER TABLE `quest`
  MODIFY `quest_id` int(5) NOT NULL AUTO_INCREMENT COMMENT 'The primary key, in the form of an integer';

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bonus_quest`
--
ALTER TABLE `bonus_quest`
  ADD CONSTRAINT `BONUS_QUEST_QUEST_RELATION` FOREIGN KEY (`quest_id`) REFERENCES `quest` (`quest_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
