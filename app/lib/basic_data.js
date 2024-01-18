const recipes = [
    {
        id: 1,
        name: 'Lasagna',
        description: 'Italian pasta casserole',
        inst: '1. Make the lasagna',
        primary_key: 1
    }
]

const ingredients = [
    {
        ingredient_id: 1,
        name: 'Marinara Sauce',
        sort: 10
    },
    {
        ingredient_id: 2,
        name: 'Ricotta Cheese',
        sort: 10
    }
]

const units = [
    {
        unit_id: 1,
        name: 'ounces',
        sort: 10,
        primary_key: 1
    },
    {
        ingredient_id: 2,
        name: 'cups',
        sort: 10,
        primary_key: 2
    }
]

const recipe_ingredients = [
    {
        recipe_ingredient_id: 100,
        recipe_id: recipes[0].id,
        ingredient_id: {
            1: ingredients[0].ingredient_id,
            2: ingredients[1].ingredient_id
        },
        unit_id: {
            1: units[0].unit_id,
            2: units[1].unit_id
        },
        amount: 4,
        sort: 10
    }
]