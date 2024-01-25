const { db } = require('@vercel/postgres');
const {
    recipes
} = require('../app/lib/basic_data.js')

async function seedRecipes(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

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