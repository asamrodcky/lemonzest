import { sql } from '@vercel/postgres';
import { Recipe } from './definitions';

export async function fetchRecipes() {
    try {
        const data = await sql<Recipe>`
        SELECT id, alt, name, description, instructions, image        
        FROM recipes
        ORDER BY name ASC
        `;

        const recipes = data.rows;
        return recipes;
    } catch (err) {
        console.error('DATABASE ERROR: ', err)
        throw new Error ('FUUUUUUUUUUUU')
    }
}