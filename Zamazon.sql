-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Lun 02 Février 2015 à 03:41
-- Version du serveur: 5.5.41-0ubuntu0.14.04.1
-- Version de PHP: 5.5.9-1ubuntu4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `Zamazon`
--

-- --------------------------------------------------------

--
-- Structure de la table `ORDER`
--

CREATE TABLE IF NOT EXISTS `ORDER` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `buyer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` bigint(20) NOT NULL,
  `send_date` datetime NOT NULL,
  `latency` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ref_product` (`product_id`,`quantity`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Structure de la table `PRODUCT`
--

CREATE TABLE IF NOT EXISTS `PRODUCT` (
  `ref` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) COLLATE utf8_bin NOT NULL,
  `quantity` bigint(20) NOT NULL,
  PRIMARY KEY (`ref`),
  KEY `ref` (`ref`,`name`,`quantity`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=2 ;

--
-- Contenu de la table `PRODUCT`
--

INSERT INTO `PRODUCT` (`ref`, `name`, `quantity`) VALUES
(1, 'Dell Inspiron', 2000);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
