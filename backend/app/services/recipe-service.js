import recipeModel from "../models/Recipe.js";
import { CSVReader } from "../../middleware/csvParser.js";


// searchAll is a helper service function
export const searchAll = async (params = {}) => {
    const recipes = recipeModel.find(params).exec(); // find() is a model function
    return recipes;
};

// get Recipes by user Id
export const getRecipesByUserId = async (owner) => {
    const recipes = await recipeModel.find({owner}).exec();
    return recipes;
}

// get Recipe by recipe Id
export const getRecipeById = async (recipeId) => {
    const recipe = await recipeModel.findById(recipeId).exec();
    return recipe;
}

// create is a helper service function
export const createRecipe = async (newRecipe) => {
    const recipe = new recipeModel(newRecipe);
    return recipe.save(); // save() is a model function
};

// create is a helper service function
export const calculateEmissions = async (newRecipe) => {
    //const recipe = new recipeModel(newRecipe);
    var calCount = 0;
    const records = await CSVReader();
    //records.forEach(logMapElements);

    var ingredientsArray = newRecipe.ingredients;

    for (var i = 0; i < ingredientsArray.length; i++) {
        var name = ingredientsArray[i]["name"];
        var carbonCount = records.get(name);
        calCount += ((ingredientsArray[i]["quantity"] * 15) / 1000) * carbonCount
    }

    //calCount += records.get("TUNA (F)");
    return calCount;
};

function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
}