const recipes = [
    {
        id: 1,
        alt: 'It is a lasagna',
        name: 'Lasagna',
        description: 'Italian pasta casserole',
        instructions: '1. Make the lasagna',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Lasagne_-_stonesoup.jpg'
    },
    {
        id: 2,
        alt: 'It is a spaghetti',
        name: 'Spaghetti',
        description: "It's spaghetti, for god's sake",
        instructions: '1. Make the spaghetti.  2.  Eat the spaghetti',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Spaghetti_al_Pomodoro.JPG/2560px-Spaghetti_al_Pomodoro.JPG'
    }
]

// const ingredients = [
//     {
//         ingredient_id: 1,
//         name: 'Marinara Sauce',
//         sort: 10
//     },
//     {
//         ingredient_id: 2,
//         name: 'Ricotta Cheese',
//         sort: 10
//     }
// ]

// const units = [
//     {
//         unit_id: 1,
//         name: 'ounces',
//         sort: 10,
//         primary_key: 1
//     },
//     {
//         ingredient_id: 2,
//         name: 'cups',
//         sort: 10,
//         primary_key: 2
//     }
// ]

// const recipe_ingredients = [
//     {
//         recipe_ingredient_id: 100,
//         recipe_id: recipes[0].id,
//         ingredient_id: {
//             1: ingredients[0].ingredient_id,
//             2: ingredients[1].ingredient_id
//         },
//         unit_id: {
//             1: units[0].unit_id,
//             2: units[1].unit_id
//         },
//         amount: 4,
//         sort: 10
//     }
// ]

// // DROP DATABASE IF EXISTS recipeDB;

// // CREATE DATABASE recipeDB;

// // USE recipeDB;

// // CREATE TABLE recipes (
// //   recipe_id    INT(10) NOT NULL AUTO_INCREMENT,
// //   name         VARCHAR(128) NOT NULL,
// //   description  TEXT,
// //   inst TEXT,
// //   PRIMARY KEY (recipe_id)
// // );

// // CREATE TABLE ingredients (
// //   ingredient_id INT(10) NOT NULL AUTO_INCREMENT,
// //   name         VARCHAR(64) NOT NULL,
// //   sort          INT(10) NOT NULL DEFAULT 0,
// //   PRIMARY KEY (ingredient_id)
// //   -- UNIQUE KEY ingredient_label_uk (label)
// // );

// // CREATE TABLE units (
// //   unit_id INT(10) NOT NULL AUTO_INCREMENT,
// //   name   VARCHAR(64) NOT NULL,
// //   sort    INT(10) NOT NULL DEFAULT 0,
// //   PRIMARY KEY (unit_id)
// //   -- UNIQUE KEY unit_label_uk (label)
// // );

// // CREATE TABLE recipe_ingredients (
// //   recipe_ingredient_id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
// //   recipe_id            INT(10) UNSIGNED NOT NULL,
// //   ingredient_id        INT(10) UNSIGNED NOT NULL,
// //   unit_id              INT(10) UNSIGNED NOT NULL,
// //   amount               DECIMAL(4, 2) DEFAULT NULL,
// //   sort                 INT(10) UNSIGNED NOT NULL DEFAULT 0,
// //   PRIMARY KEY (recipe_ingredient_id)
// // );

// // INSERT INTO recipes (name, description, inst)
// // VALUES ("recipe1", "desc1", "instructions1");

// // INSERT INTO recipes (name, description, inst)
// // VALUES ("recipe2", "desc2", "instructions2");

// // INSERT INTO recipes (name, description, inst)
// // VALUES ("recipe3", "desc3", "instructions3");

// // INSERT INTO ingredients (name, sort)
// // VALUES ("rice", 1);

// // INSERT INTO units (name, sort)
// // VALUES ("one cup", 2);

// // -- INSERT INTO recipe_ingredients (recipe_id, ingredient_id, unit_id, amount, sort)
// // -- VALUES (2, 1, 1, 3.4, 10);