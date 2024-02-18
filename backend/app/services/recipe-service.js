import recipeModel from "../models/Recipe.js";
import {CSVReader} from "../../middleware/csvParser.js";


// searchAll is a helper service function
export const searchAll = async (params = {}) => {
    const recipes = recipeModel.find(params).exec(); // find() is a model function
    return recipes;
};


// create is a helper service function
export const createRecipe = async (newRecipe) => {
    const recipe = new recipeModel(newRecipe);
    return recipe.save(); // save() is a model function
};

// create is a helper service function
export const calculateEmissions = async (newRecipe) => {
    const recipe = new recipeModel(newRecipe);
    const calCount = 0;
    var mapData = new Map();
    const records = await CSVReader();
   records.forEach(logMapElements);
   console.log(records.get("TUNA (F)"));

};

function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
  }