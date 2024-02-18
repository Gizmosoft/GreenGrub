/*
    This module will sort all the recipes based on their emission values and store it in a list
    We'll use this list to show it in the frontend
*/
import { searchAll } from "./recipe-service.js"

export const sortRecipes = async () => {
    const recipes = await searchAll()
    // Sort recipes array
    recipes.sort((a, b) => a.emission-b.emission);
    return recipes;
}