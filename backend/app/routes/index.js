import recipeRouter from './recipe-router.js';
import leaderboardRouter from './leaderboard-router.js';
import userRouter from './user-routes.js';

export default (app) => {
    app.use('/recipes', recipeRouter);
    app.use('/leaderboard', leaderboardRouter);
    app.use('/users', userRouter);
}