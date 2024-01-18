DROP DATABASE IF EXISTS recipeDB;

CREATE DATABASE recipeDB;

USE recipeDB;

CREATE TABLE recipes (
  recipe_id    INT(10) NOT NULL AUTO_INCREMENT,
  name         VARCHAR(128) NOT NULL,
  description  TEXT,
  inst TEXT,
  PRIMARY KEY (recipe_id)
);

CREATE TABLE ingredients (
  ingredient_id INT(10) NOT NULL AUTO_INCREMENT,
  name         VARCHAR(64) NOT NULL,
  sort          INT(10) NOT NULL DEFAULT 0,
  PRIMARY KEY (ingredient_id)
  -- UNIQUE KEY ingredient_label_uk (label)
);

CREATE TABLE units (
  unit_id INT(10) NOT NULL AUTO_INCREMENT,
  name   VARCHAR(64) NOT NULL,
  sort    INT(10) NOT NULL DEFAULT 0,
  PRIMARY KEY (unit_id)
  -- UNIQUE KEY unit_label_uk (label)
);

CREATE TABLE recipe_ingredients (
  recipe_ingredient_id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  recipe_id            INT(10) UNSIGNED NOT NULL,
  ingredient_id        INT(10) UNSIGNED NOT NULL,
  unit_id              INT(10) UNSIGNED NOT NULL,
  amount               DECIMAL(4, 2) DEFAULT NULL,
  sort                 INT(10) UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (recipe_ingredient_id)
);

INSERT INTO recipes (name, description, inst)
VALUES ("recipe1", "desc1", "instructions1");

INSERT INTO recipes (name, description, inst)
VALUES ("recipe2", "desc2", "instructions2");

INSERT INTO recipes (name, description, inst)
VALUES ("recipe3", "desc3", "instructions3");

INSERT INTO ingredients (name, sort)
VALUES ("rice", 1);

INSERT INTO units (name, sort)
VALUES ("one cup", 2);

-- INSERT INTO recipe_ingredients (recipe_id, ingredient_id, unit_id, amount, sort)
-- VALUES (2, 1, 1, 3.4, 10);