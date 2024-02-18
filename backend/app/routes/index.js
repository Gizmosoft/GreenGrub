import recipeRouter from './recipe-router.js';
import leaderboardRouter from './leaderboard-router.js';

export default (app) => {
    app.use('/recipes', recipeRouter);
    app.use('/leaderboard', leaderboardRouter);
}