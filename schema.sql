DROP DATABASE IF EXISTS maindb;

CREATE DATABASE maindb;

USE maindb;

CREATE TABLE IF NOT EXISTS places (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    description VARCHAR (350),
    image VARCHAR(350)
);

INSERT INTO places (name, description, image) VALUES ("4 Noses Brewing Company", "Great beers, cool spot, nice staff and I love the food truck selection", "https://lh5.googleusercontent.com/p/AF1QipPIby4mA7MAi-SvWQedN3-wULCdt2iaJSXlE_3-=w426-h240-k-no");