const { db } = require('@vercel/postgres');
const {
    recipes,
    ingredients,
    units,
    recipe_ingredients
} = require('../app/lib/basic_data.js')

// USE recipeDB

// INSERT INTO recipeDB.recipes(id, name, description, inst, primary_key)
// VALUES
// (1, "Lasagna", "Italian pasta casserole", "1. Make the lasagna", 1)

// INSERT INTO recipeDB.ingredients(ingredient_id, name, sort, primary_key)
// VALUES
// (1, "Marinara Sauce", 10, 1)
// (2, "Ricotta CHeese", 10, 2)

// INSERT INTO recipeDB.units(unit_id, name, sort, primary_key)
// VALUES
// (1, "ounces", 10, 1)
// (2, "cups", 10, 2)

async function seedIngredients(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS ingredients (
            ingredient_id INT(10) NOT NULL AUTO_INCREMENT,
            name VARCHAR(64) NOT NULL,
            sort INT(10) NOT NULL DEFAULT 0,
        )
        `;

        console.log('CREATED INGREDIENTS TABLE')

        const insertedIngredients = await Promise.all(
            ingredients.map(async (ingredient) => {
                return client.sql`
                INSERT INTO ingredients (ingredient_id, name, sort)
                VALUES(${ingredient.ingredient_id}, ${ingredient.name}, ${ingredient.sort})
                `
            })
        );

        console.log(`SEEDED ${insertedIngredients.length} INGREDIENTS INTO THE TABLE`);

        return {
            createTable,
            ingredients: insertedIngredients
        };

        } catch(error) {
            console.error('SHIT IS FUCKED, YO ', error);
            throw error;
        }

}

async function main() {
    const client = await db.connect();

    await seedIngredients(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'ERROR ERROR ERROR',
        err,
    )
})