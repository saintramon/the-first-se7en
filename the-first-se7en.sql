-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
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
-- Dumping data for table `quest`
--

INSERT INTO `quest` (`quest_id`, `img_1`, `img_2`, `img_3`, `img_4`, `answer`, `difficulty`) VALUES
(1, 'swift1.png', 'swift2.png', 'swift3.png', 'swift4.png', 'swift', 'easy'),
(2, 'java1.png', 'java2.png', 'java3.png', 'java4.png', 'java', 'easy'),
(3, 'ruby1.png', 'ruby2.png', 'ruby3.png', 'ruby4.png', 'ruby', 'easy'),
(4, 'zuse1.png', 'zuse2.png', 'zuse3.png', 'zuse4.png', 'zuse', 'easy'),
(5, 'ada_lovelace1.png', 'ada_lovelace2.png', 'ada_lovelace3.png', 'ada_lovelace4.png', 'ada_lovelace', 'easy'),
(6, 'react1.png', 'react2.png', 'react3.png', 'react4.png', 'react', 'easy'),
(7, 'assembly1.png', 'assembly2.png', 'assembly3.png', 'assembly4.png', 'assembly', 'easy'),
(8, 'mocha1.png', 'mocha2.png', 'mocha3.png', 'mocha4.png', 'mocha', 'easy'),
(9, 'charles_babbage1.png', 'charles_babbage2.png', 'charles_babbage3.png', 'charles_babbage4.png', 'charles_babbage', 'easy'),
(10, 'google1.png', 'google2.png', 'google3.png', 'google4.png', 'google', 'easy'),
(11, 'prolog1.png', 'prolog2.png', 'prolog3.png', 'prolog4.png', 'prolog', 'medium'),
(12, 'lisp1.png', 'lisp2.png', 'lisp3.png', 'lisp4.png', 'lisp', 'medium'),
(13, 'procedural1.png', 'procedural2.png', 'procedural3.png', 'procedural4.png', 'procedural', 'medium'),
(14, 'alphabet1.png', 'alphabet2.png', 'alphabet3.png', 'alphabet4.png', 'alphabet', 'medium'),
(15, 'turing_machine1.png', 'turing_machine2.png', 'turing_machine3.png', 'turing_machine4.png', 'turing_machine', 'medium'),
(16, 'statement1.png', 'statement2.png', 'statement3.png', 'statement4.png', 'statement', 'hard'),
(17, 'lexeme1.png', 'lexeme2.png', 'lexeme3.png', 'lexeme4.png', 'lexeme', 'hard'),
(18, 'metalanguage1.png', 'metalanguage2.png', 'metalanguage3.png', 'metalanguage4.png', 'metalanguage', 'hard'),
(19, 'cern1.png', 'cern2.png', 'cern3.png', 'cern4.png', 'cern', 'hard'),
(20, 'herman_hollerith1.png', 'herman_hollerith2.png', 'herman_hollerith3.png', '4.png', 'herman_hollerith', 'hard');

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
  MODIFY `quest_id` int(5) NOT NULL AUTO_INCREMENT COMMENT 'The primary key, in the form of an integer', AUTO_INCREMENT=21;


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
