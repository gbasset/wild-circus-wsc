-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mer. 29 jan. 2020 à 16:53
-- Version du serveur :  8.0.19-0ubuntu0.19.10.3
-- Version de PHP :  7.2.27-1+ubuntu19.10.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `wildcircus`
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
  `message_client_phone` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `message_client_mail` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `message_message` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`message_id`, `message_objet_id`, `message_client_name`, `message_client_lastname`, `message_client_phone`, `message_client_mail`, `message_message`) VALUES
(1, 1, 'Jeanne', 'Clubertha', '0789546521', 'gaga@gmail.com', 'j\'aime le cirque 2 places'),
(2, 3, 'Luc', 'Zenkarth', '0654215354', 'kjlkj@gmail.com', 'Auroez vous des chaussettes de clown à vendre ?'),
(3, 1, 'jinette', 'baldouine', '0245458796', 'edezdedz@gmail.com', 'je  suis très intéressé pour deux places merci'),
(4, 2, 'Henry', 'Bolchker', '654213587', 'jhkhhkh@gmail.com', 'je usis très interessé pour visiter votre cirque');

-- --------------------------------------------------------

--
-- Structure de la table `perform`
--

CREATE TABLE `perform` (
  `perform_id` int NOT NULL,
  `perform_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `perform`
--

INSERT INTO `perform` (`perform_id`, `perform_description`) VALUES
(4, 'ceci est un spectacle'),
(5, 'ceci est un spectacle de merde');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `pictures`
--

INSERT INTO `pictures` (`pictures_id`, `pictures_url`, `pictures_name`, `pictures_perform_id`, `pictures_user_team_id`) VALUES
(1, 'https://i.postimg.cc/tgY9k4Fq/becky-phan-o8-670-KHg-K8-unsplash.jpg', 'piste que cirque', 4, NULL),
(2, 'https://i.postimg.cc/D07PGZM6/cyrus-crossan-JOtu-J-DZj-Tw-unsplash.jpg', 'photographie de chaise', 4, NULL),
(3, 'https://i.postimg.cc/652y0wxf/fer-gomez-N-tl1-WQzamk-unsplash.jpg', 'photographie du cirque vue d\'exterieur', 4, NULL),
(4, 'https://i.postimg.cc/htKwbDHX/logocirque.png', 'logo du cirque', NULL, NULL),
(5, 'https://i.postimg.cc/Hsd3FS3K/acrobats-1934555-1920.jpg', 'clown et danseuse', 4, 1),
(6, 'https://i.postimg.cc/rpwwbLtm/man-with-face-make-up-2970500.jpg', 'clown freak', NULL, 1),
(7, 'https://i.postimg.cc/dt9vKxFT/man-with-face-paint-2970502.jpg', 'clown freak', NULL, 1),
(8, 'https://i.postimg.cc/SKFntPfY/clown-630883-1920.jpg', 'clown', NULL, 1);

-- --------------------------------------------------------

--
-- Structure de la table `representation`
--

CREATE TABLE `representation` (
  `repre_id` int NOT NULL,
  `repre_show_id` int NOT NULL,
  `repre_city` varchar(250) DEFAULT NULL,
  `repre_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `representation`
--

INSERT INTO `representation` (`repre_id`, `repre_show_id`, `repre_city`, `repre_datetime`) VALUES
(4, 4, 'Toulouse ', '2020-01-30 07:00:00'),
(5, 4, 'Paris', '2020-02-19 14:00:00'),
(6, 4, 'Paris', '2020-02-21 11:00:00'),
(7, 4, 'Paris', '2020-02-21 20:00:00'),
(8, 4, 'Paris', '2020-02-21 16:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `subject`
--

CREATE TABLE `subject` (
  `subjetct_id` int NOT NULL,
  `object_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  `team_role` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `team`
--

INSERT INTO `team` (`team_id`, `team_name`, `team_lastname`, `team_pseudo`, `team_role`) VALUES
(1, 'Jean', 'Berraut', 'Jean Bert', 'clown'),
(2, 'Germain', 'Duchamp', 'Germain', 'Dresseur de tigre'),
(3, 'Berta', 'Lismoune', 'Beth', 'Danseuse de claquette');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `user_id` int NOT NULL,
  `user_name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_lastname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_pass` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_email` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_lastname`, `user_pass`, `user_email`) VALUES
(1, 'gaetan', 'basset', 'gaetan', 'gbasset@gmail.com');

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
  MODIFY `message_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `perform`
--
ALTER TABLE `perform`
  MODIFY `perform_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `pictures`
--
ALTER TABLE `pictures`
  MODIFY `pictures_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `representation`
--
ALTER TABLE `representation`
  MODIFY `repre_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `subject`
--
ALTER TABLE `subject`
  MODIFY `subjetct_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `team`
--
ALTER TABLE `team`
  MODIFY `team_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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