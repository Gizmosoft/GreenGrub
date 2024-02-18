import recipeModel from "../models/Recipe.js";
import { CSVReader } from "../../middleware/csvParser.js";


const TBL_SPOON = 14.8
const T_SPOON = 5
const CUP = 250
const SIZE = 100

// searchAll is a helper service function
export const searchAll = async (params = {}) => {
    const recipes = recipeModel.find(params).exec(); // find() is a model function
    return recipes;
};

// get Recipes by user Id
export const getRecipesByUserId = async (owner) => {
    const recipes = await recipeModel.find({ owner }).exec();
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

// Calculates emission and saves it in database
export const calculateEmissions = async (newRecipe) => {
    const recipe = new recipeModel(newRecipe);
    var calCount = 0;
    const records = await CSVReader();

    var ingredientsArray = newRecipe.ingredients;

    for (var i = 0; i < ingredientsArray.length; i++) {
        var name = ingredientsArray[i]["name"];
        var carbonCount = records.get(name);
        var strComparer = ingredientsArray[i]["measurement"].toLowerCase().replace(/ +/g, "");
        var quantity = 0;
        switch (strComparer) {
            case "teaspoon": quantity = T_SPOON;
            case "tablespoon": quantity = TBL_SPOON;
            case "cup": quantity = CUP;
            case "": quantity = SIZE;
            default: quantity = 100;
        }
        calCount += ((ingredientsArray[i]["quantity"] * quantity) / 1000) * carbonCount;
    }
    recipe.emission = calCount;
    return recipe.save();
};
