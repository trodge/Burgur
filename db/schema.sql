CREATE DATABASE burger_db;
USE burger_db;
CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);