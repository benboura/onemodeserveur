CREATE TABLE chanteur(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR (155),
    role VARCHAR(155),
);

CREATE TABLE chanson(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR (155),
    id_chanteur INT,
    date_sortie DATE,
    id_chanteur INT,
    FOREIGN KEY (id_chanteur) REFERENCES  chanteur (id) 
);