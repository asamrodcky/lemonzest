export type Recipe = {
    id: string;
    alt: string;
    name: string;
    description: string;
    instructions: string;
    image: string;
}

export type Ingredient = {
    ingredient_id: string;
    name: string;
}

export type Unit = {
    unit_id: string;
    name: string;
}