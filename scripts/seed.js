const { db } = require('@vercel/postgres');
const {
    recipes,
    ingredients,
    units
} = require('../app/lib/basic_data.js')

async function seedRecipes(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS recipes (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            alt VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            instructions VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
        );
        `;

        console.log("Created the RECIPES table");

        const insertedRecipes = await Promise.all(
            recipes.map(
                (recipe) => client.sql`
                INSERT INTO recipes (id, alt, name, description, instructions, image)
                VALUES (${recipe.id}, ${recipe.alt}, ${recipe.name}, ${recipe.description}, ${recipe.instructions}, ${recipe.image})
                ON CONFLICT (id) DO NOTHING;
                `,
            ),
        );

        console.log(`Seeded ${insertedRecipes.length} recipes into the database`);

        return {
            createTable,
            recipes: insertedRecipes,
        };
    } catch (error) {
        console.error('Error seeding recipes: ', error);
        throw error;
    }
}

async function seedIngredients(client) {
    try {
        await client.sql

        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS ingredients (
            ingredient_id INT NOT NULL,
            name VARCHAR(255) NOT NULL
        );
        `;

        console.log('Created the INGREDIENTS table');

        const insertedIngredients = await Promise.all(
            ingredients.map(
                (ingredient) => client.sql`
                INSERT INTO ingredients (ingredient_id, name)
                VALUES (${ingredient.ingredient_id}, ${ingredient.name})
                `
            )
        );

        console.log(`Seeded ${insertedIngredients.length} ingredients into the database`)

        return {
            createTable,
            ingredients: insertedIngredients,
        };
    } catch (error) {
        console.error('Error seeding ingredients: ', error);
        throw error;
    }
}

async function seedUnits(client) {
    try {
        await client.sql

        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS units (
            unit_id INT NOT NULL,
            name VARCHAR(255) NOT NULL
        );
        `;

        console.log('Created the UNITS table');

        const insertedUnits = await Promise.all(
            units.map(
                (unit) => client.sql`
                INSERT INTO units (unit_id, name)
                VALUES (${unit.unit_id}, ${unit.name})
                `,
            ),
        );

        console.log(`Seeded ${insertedUnits.length} units into the database`);

        return {
            createTable,
            units: insertedUnits,
        };
    } catch (error) {
        console.error('Error seeding units: ', error);
        throw error;
    }
}


async function main() {
    const client = await db.connect();

    await seedRecipes(client);
    await seedIngredients(client);
    await seedUnits(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred: ', err
    )
})