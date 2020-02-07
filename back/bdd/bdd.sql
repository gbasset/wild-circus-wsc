-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : jeu. 06 fév. 2020 à 17:52
-- Version du serveur :  8.0.19-0ubuntu0.19.10.3
-- Version de PHP : 7.3.11-0ubuntu0.19.10.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `wildcircus`
--

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `message_id` int NOT NULL,
  `message_objet_id` int NOT NULL,
  `message_client_name` varchar(250) NOT NULL,
  `message_client_lastname` varchar(250) NOT NULL,
  `message_client_phone` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `message_client_mail` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `message_message` varchar(500) NOT NULL,
  `message_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`message_id`, `message_objet_id`, `message_client_name`, `message_client_lastname`, `message_client_phone`, `message_client_mail`, `message_message`, `message_date`) VALUES
(1, 1, 'Jeanne', 'Clubertha', '0789546521', 'gaga@gmail.com', 'j\'aime le cirque 2 places', '2020-01-15'),
(2, 3, 'Luc', 'Zenkarth', '0654215354', 'kjlkj@gmail.com', 'Auroez vous des chaussettes de clown à vendre ?', '2020-01-08'),
(3, 1, 'jinette', 'baldouine', '0245458796', 'edezdedz@gmail.com', 'je  suis très intéressé pour deux places merci', '2020-01-01'),
(4, 2, 'Henry', 'Bolchker', '654213587', 'jhkhhkh@gmail.com', 'je usis très interessé pour visiter votre cirque', '2020-01-09'),
(5, 1, 'nono', 'lebel', '096564521', 'jejeje@gmail.com', 'je kwdjfhkdfjhkdfkhjsdfh fdshdsfkhjk ', '2020-01-02'),
(10, 3, 'jean', 'paul', '545646546544', 'g@ll.j', 'dqsd', NULL),
(11, 3, '', '', '', '', '', '2020-02-02'),
(12, 3, 'dédé', 'lele', '5434564654', 'g@gmail.com', 'ddd', '2020-02-02'),
(16, 1, 'gaetan', 'basset', '0645854574', 'hggh@gmail.com', 'jhuehekjhkjhf hfekjhsdf kjds', '2020-02-02'),
(17, 3, '', '', '', '', '', '2020-02-02'),
(18, 3, '', '', '', '', '', '2020-02-02'),
(19, 2, 'dsqs', 'qds', 'qds', 'dqs', 'dqsdqs', '2020-02-02'),
(20, 3, '', '', '', '', '', '2020-02-03'),
(21, 3, '', '', '', '', '', '2020-02-03'),
(22, 3, '', '', '', '', '', '2020-02-03'),
(23, 3, '', '', '', '', '', '2020-02-05'),
(24, 3, 'hfdf', 'gdfgdf', 'fkdjdsf3ds3fj', 'bhjsd3df@gmail.com', 'je t\'aime', '2020-02-05'),
(25, 3, '', '', '', '', '', '2020-02-05');

-- --------------------------------------------------------

--
-- Structure de la table `perform`
--

CREATE TABLE `perform` (
  `perform_id` int NOT NULL,
  `perform_description` text NOT NULL,
  `perform_name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `perform`
--

INSERT INTO `perform` (`perform_id`, `perform_description`, `perform_name`) VALUES
(4, 'Le spectacle de fin d’études de la 31e promotion du Cnac est cette année mis en scène par Galapiat Cirque, un peu plus de dix ans après sa fondation dans les couloirs mêmes du Cnac. La compagnie, au fonctionnement joyeusement et farouchement collectif, a acquis depuis ses lettres de noblesse : des spectacles enchanteurs, des tournées à vélo ou en caravanes, des projets de territoire, un solide ancrage en Bretagne, une indubitable reconnaissance professionnelle et publique. La roue tourne, et voilà que les anciens encadrent les nouveaux, pour une création qui combine bascule coréenne, corde lisse, acro-danse, jonglerie, cerceau aérien, mât chinois, corde volante, roue Cyr et trapèze ballant.', '\r\nOn n\'est pas là pour sucer des glaces'),
(5, 'ceci est un spectacle de merde', ''),
(7, 'je suis une spectaclette', 'ninini');

-- --------------------------------------------------------

--
-- Structure de la table `pictures`
--

CREATE TABLE `pictures` (
  `pictures_id` int NOT NULL,
  `pictures_url` varchar(500) NOT NULL,
  `pictures_name` varchar(150) NOT NULL,
  `pictures_perform_id` int DEFAULT NULL,
  `pictures_user_team_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `pictures`
--

INSERT INTO `pictures` (`pictures_id`, `pictures_url`, `pictures_name`, `pictures_perform_id`, `pictures_user_team_id`) VALUES
(1, 'https://images.unsplash.com/photo-1553004377-62aa53df180f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80', 'piste que cirque', 4, NULL),
(2, 'https://i.postimg.cc/D07PGZM6/cyrus-crossan-JOtu-J-DZj-Tw-unsplash.jpg', 'photographie de chaise', 4, NULL),
(3, 'https://i.postimg.cc/652y0wxf/fer-gomez-N-tl1-WQzamk-unsplash.jpg', 'photographie du cirque vue d\'exterieur', 4, NULL),
(4, 'https://i.postimg.cc/htKwbDHX/logocirque.png', 'logo du cirque', 5, NULL),
(5, 'https://images.unsplash.com/photo-1527538079466-b6297ad15363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'clown et danseuse', 4, 1),
(6, 'https://cdn.pixabay.com/photo/2015/02/10/10/59/clown-630883_960_720.jpg', 'clown freak', NULL, 1),
(7, 'https://cdn.pixabay.com/photo/2018/08/08/22/57/horror-clown-3593409_960_720.jpg', 'clown freak', NULL, 1),
(8, 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1322&q=80', 'clown', NULL, 1),
(10, 'https://images.unsplash.com/photo-1560297035-0ed84c4175f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'chanteuse', NULL, 5),
(11, 'https://images.unsplash.com/photo-1485814837398-ed2048f57499?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'micro', NULL, 5),
(12, 'https://images.pexels.com/photos/3071456/pexels-photo-3071456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'jongleurs', 4, 7),
(13, 'https://cdn.pixabay.com/photo/2014/02/22/21/29/balls-272409_960_720.jpg', 'balles jongle', 4, 7),
(14, 'https://cdn.pixabay.com/photo/2016/05/25/16/50/circus-1415339_960_720.jpg', 'jongleur', 4, 7),
(17, 'https://live.staticflickr.com/3740/9543078967_c85c7f8e79_b.jpg', 'porteurs', 4, 6),
(18, 'https://www.cnac.fr/media/galerie/25e_Duo_Justine_Berthillot_et_Frederi_Vernier_/25_Berthillot_J_Vernier_F_10.jpg', 'porteur', 4, 6),
(19, 'https://images.pexels.com/photos/69894/pexels-photo-69894.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'cracheur feu', NULL, 8),
(20, 'https://images.unsplash.com/photo-1534375331066-855d6c9096af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', 'cracheur feu 2', NULL, 8),
(21, 'https://cdn.pixabay.com/photo/2014/12/05/09/34/breathing-fire-557699_960_720.jpg', 'cracheurs', 4, 8),
(22, 'https://cdn.pixabay.com/photo/2018/04/05/18/50/fire-3293806_960_720.jpg', 'cracheur de feu', 4, 8),
(23, 'https://live.staticflickr.com/4083/4969286420_3ca94b6408_b.jpg', 'trapesiste en show', 4, 10),
(24, 'https://live.staticflickr.com/7001/27371516981_2435e97464_h.jpg', 'trapéziste en show', 4, 10),
(25, 'https://live.staticflickr.com/4037/4227464448_36be13c95e_b.jpg', 'show trapez', 4, 10),
(26, 'https://images.pexels.com/photos/951007/pexels-photo-951007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'tigre', 4, 11),
(27, 'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'tigre', NULL, 11),
(28, 'https://live.staticflickr.com/7313/15785627264_45d03ce58a_b.jpg', 'tigres', NULL, NULL),
(29, 'https://images.unsplash.com/photo-1561997792-db6d5bf9d576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1345&q=80', 'tigre', NULL, 11),
(30, 'https://images.unsplash.com/photo-1518799551598-7589ab033840?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'tigre', NULL, 11),
(31, 'https://images.unsplash.com/photo-1504647164485-1d91e1d0a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'danseur', 4, 2),
(32, 'https://images.unsplash.com/photo-1455072414764-a3fb958b8415?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80', 'dance', NULL, 2),
(33, 'https://cdn.pixabay.com/photo/2017/06/23/10/17/break-dancing-2434195_960_720.jpg', 'danseur', NULL, 2),
(34, 'https://cdn.pixabay.com/photo/2017/02/21/18/31/urban-2086996_960_720.jpg', 'danseur', NULL, 2),
(67, 'https://cdn.pixabay.com/photo/2018/01/01/23/38/ballerina-3055155_960_720.jpg', 'danseuse', 4, 4),
(68, 'https://images.unsplash.com/photo-1478604659451-3424450de009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'danseuse', NULL, 4),
(69, 'https://cdn.pixabay.com/photo/2016/11/22/19/26/adult-1850184_960_720.jpg', 'dance show', 4, NULL),
(70, 'https://images.unsplash.com/photo-1478604659451-3424450de009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'dance', 4, 4),
(71, '', '', NULL, NULL),
(72, 'https://images.pexels.com/photos/2832119/pexels-photo-2832119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'chien', NULL, 13),
(73, 'https://images.pexels.com/photos/1639786/pexels-photo-1639786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'chien', NULL, 13),
(74, 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'elephant', NULL, 12),
(75, 'https://images.pexels.com/photos/148807/pexels-photo-148807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'elephant', NULL, 12),
(76, 'https://images.pexels.com/photos/2677843/pexels-photo-2677843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'elephant', 4, 12),
(110, 'https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875_960_720.jpg', 'dauphin', 4, 14),
(111, 'https://cdn.pixabay.com/photo/2016/11/29/11/57/animal-1869337_960_720.jpg', 'dauphin', NULL, 14),
(112, 'https://cdn.pixabay.com/photo/2019/02/17/19/15/sea-4002951_960_720.jpg', 'dolphin', NULL, 14),
(113, 'https://cdn.pixabay.com/photo/2015/08/25/04/35/dolphin-906176_960_720.jpg', 'dolphin', 4, 14),
(114, 'https://images.unsplash.com/photo-1501837303764-ada599fdac6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'chanteuse', NULL, 5),
(115, '', '', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `representation`
--

CREATE TABLE `representation` (
  `repre_id` int NOT NULL,
  `repre_show_id` int NOT NULL,
  `repre_city` varchar(250) DEFAULT NULL,
  `repre_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `representation`
--

INSERT INTO `representation` (`repre_id`, `repre_show_id`, `repre_city`, `repre_datetime`) VALUES
(4, 4, 'Toulouse ', '2020-01-30 07:00:00'),
(5, 4, 'Paris', '2020-02-19 14:00:00'),
(6, 4, 'Paris', '2020-02-21 11:00:00'),
(7, 4, 'Paris', '2020-02-21 20:00:00'),
(8, 4, 'Paris', '2020-02-21 16:00:00'),
(9, 4, 'lille', '2020-01-30 07:00:00'),
(10, 4, 'lille', '2020-01-30 19:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `role_id` int NOT NULL,
  `role_name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`role_id`, `role_name`) VALUES
(0, 'admin'),
(1, 'user');

-- --------------------------------------------------------

--
-- Structure de la table `subject`
--

CREATE TABLE `subject` (
  `subjetct_id` int NOT NULL,
  `object_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `subject`
--

INSERT INTO `subject` (`subjetct_id`, `object_name`) VALUES
(1, 'reservation'),
(2, 'visite backstage'),
(3, 'autre demande');

-- --------------------------------------------------------

--
-- Structure de la table `team`
--

CREATE TABLE `team` (
  `team_id` int NOT NULL,
  `team_name` varchar(250) DEFAULT NULL,
  `team_lastname` varchar(250) DEFAULT NULL,
  `team_pseudo` varchar(250) NOT NULL,
  `team_role` varchar(250) DEFAULT NULL,
  `team_rank` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `team`
--

INSERT INTO `team` (`team_id`, `team_name`, `team_lastname`, `team_pseudo`, `team_role`, `team_rank`) VALUES
(1, 'Jean', 'Berraut', 'Jean Bert', 'clown', 126),
(2, 'Germain', 'Duchamp', 'Germain', 'Danseur', 234),
(4, 'Bernadette', 'Lachoux', 'ChiChi', 'Danseuse', 10),
(5, 'Lorette', 'Ducasse', 'Ducatesse', 'Troubadourette', 6),
(6, 'Henry', 'Delvaux', 'Henry', 'Porteur', 1),
(7, 'Lorenzo', 'Ducancione', 'Lolo', 'Jongleur', 3),
(8, 'Kruntenberker', 'Ranker', 'Flamech', 'cracheur de feu', 4),
(10, 'Gertrude', 'Zinbeketre', 'Zizinette', 'Trapesiste', 5),
(11, 'Mouminou', 'Tigrou', 'Tiger Miaouss', 'Tigre', 1),
(12, 'Kinzou', 'Lele', 'Kinzou', 'Elephant', 5),
(13, 'Medor', 'TOuTou', 'Medor', 'chien', 5),
(14, 'Dolphinus', 'Diln', 'Dolphinou', 'Dauphin', 7);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `user_id` int NOT NULL,
  `user_name` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_lastname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_pass` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_email` varchar(150) NOT NULL,
  `user_role` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_lastname`, `user_pass`, `user_email`, `user_role`) VALUES
(2, 'george', 'abitbol', '$2a$10$5AQ5bz5FN.tGxDFgybE8L.5TyqijHgYeXKXmVA19lkPecEwhc5GK.', 'george@gmail.com', 0),
(3, 'gaetan', 'abitbol', '$2a$10$P.ppAWUc57vJP9wJE.zSj.7rcI77gaieVYuwBSCjxqMidFFGhkM/q', 'gaetan@gmail.com', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `message_objet_id` (`message_objet_id`);

--
-- Index pour la table `perform`
--
ALTER TABLE `perform`
  ADD PRIMARY KEY (`perform_id`);

--
-- Index pour la table `pictures`
--
ALTER TABLE `pictures`
  ADD PRIMARY KEY (`pictures_id`),
  ADD KEY `pictures_perform_id` (`pictures_perform_id`),
  ADD KEY `pictures_user_team_id` (`pictures_user_team_id`);

--
-- Index pour la table `representation`
--
ALTER TABLE `representation`
  ADD PRIMARY KEY (`repre_id`),
  ADD KEY `repre_show_id` (`repre_show_id`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`),
  ADD KEY `role_name` (`role_name`);

--
-- Index pour la table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`subjetct_id`);

--
-- Index pour la table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`team_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `message_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pour la table `perform`
--
ALTER TABLE `perform`
  MODIFY `perform_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `pictures`
--
ALTER TABLE `pictures`
  MODIFY `pictures_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT pour la table `representation`
--
ALTER TABLE `representation`
  MODIFY `repre_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `subject`
--
ALTER TABLE `subject`
  MODIFY `subjetct_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `team`
--
ALTER TABLE `team`
  MODIFY `team_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`message_objet_id`) REFERENCES `subject` (`subjetct_id`);

--
-- Contraintes pour la table `pictures`
--
ALTER TABLE `pictures`
  ADD CONSTRAINT `pictures_ibfk_1` FOREIGN KEY (`pictures_perform_id`) REFERENCES `perform` (`perform_id`),
  ADD CONSTRAINT `pictures_ibfk_2` FOREIGN KEY (`pictures_user_team_id`) REFERENCES `team` (`team_id`);

--
-- Contraintes pour la table `representation`
--
ALTER TABLE `representation`
  ADD CONSTRAINT `representation_ibfk_1` FOREIGN KEY (`repre_show_id`) REFERENCES `perform` (`perform_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
