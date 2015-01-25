-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Dim 25 Janvier 2015 à 18:33
-- Version du serveur: 5.5.41-0ubuntu0.14.04.1
-- Version de PHP: 5.5.9-1ubuntu4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `TwitterCausalite`
--

-- --------------------------------------------------------

--
-- Structure de la table `TWEET`
--

CREATE TABLE IF NOT EXISTS `TWEET` (
  `sender_id` int(11) NOT NULL,
  `sender_count` int(11) NOT NULL,
  `ref_id` int(11) NOT NULL,
  `ref_count` int(11) NOT NULL,
  `sendDate` datetime NOT NULL,
  `latency` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=59 ;

--
-- Contenu de la table `TWEET`
--

INSERT INTO `TWEET` (`sender_id`, `sender_count`, `ref_id`, `ref_count`, `sendDate`, `latency`, `id`) VALUES
(0, 0, 0, 0, '0001-01-01 00:00:00', 0, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
