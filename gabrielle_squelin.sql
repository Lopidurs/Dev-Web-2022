CREATE TABLE `galerie_site` (
 `galerie_id` int(11) NOT NULL AUTO_INCREMENT,
 `img_id` int(11) NOT NULL,
 `galerie_nom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
 `date_upload` datetime NOT NULL,
 PRIMARY KEY (`galerie_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;