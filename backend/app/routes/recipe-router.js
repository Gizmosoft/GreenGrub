import express from 'express'
import * as recipeController from '../controllers/recipe-controller.js';

// initialize an express Router object
const router = express.Router()

router.route('/')
    .get(recipeController.getRecipes)

router.route('/create')
    .post(recipeController.createRecipe)

export default router