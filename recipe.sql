DROP DATABASE IF EXISTS recipeDB;

CREATE DATABASE recipeDB;

USE recipeDB;

CREATE TABLE recipe (
  recipe_id    INT(10) NOT NULL AUTO_INCREMENT,
  name         VARCHAR(128) NOT NULL,
  description  TEXT,
  inst TEXT,
  PRIMARY KEY (recipe_id)
);

CREATE TABLE ingredient (
  ingredient_id INT(10) NOT NULL AUTO_INCREMENT,
  name         VARCHAR(64) NOT NULL,
  sort          INT(10) NOT NULL DEFAULT 0,
  PRIMARY KEY (ingredient_id)
  -- UNIQUE KEY ingredient_label_uk (label)
);

CREATE TABLE unit (
  unit_id INT(10) NOT NULL AUTO_INCREMENT,
  name   VARCHAR(64) NOT NULL,
  sort    INT(10) NOT NULL DEFAULT 0,
  PRIMARY KEY (unit_id)
  -- UNIQUE KEY unit_label_uk (label)
);

CREATE TABLE recipe_ingredient (
  recipe_ingredient_id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  recipe_id            INT(10) UNSIGNED NOT NULL,
  ingredient_id        INT(10) UNSIGNED NOT NULL,
  unit_id              INT(10) UNSIGNED NOT NULL,
  amount               DECIMAL(4, 2) DEFAULT NULL,
  sort                 INT(10) UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (recipe_ingredient_id)
);

INSERT INTO recipe (name, description, inst)
VALUES ("recipe1", "desc1", "instructions1");

INSERT INTO recipe (name, description, inst)
VALUES ("recipe2", "desc2", "instructions2");

INSERT INTO recipe (name, description, inst)
VALUES ("recipe3", "desc3", "instructions3");

INSERT INTO ingredient (name, sort)
VALUES ("rice", 1);

INSERT INTO unit (name, sort)
VALUES ("one cup", 2);

-- INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, sort)
-- VALUES (2, 1, 1, 3.4, 10);