import recipeRouter from './recipe-router.js';

export default (app) => {
    app.use('/recipes', recipeRouter);
}