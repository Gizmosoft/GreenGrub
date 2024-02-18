import express from 'express'
import * as leaderboardController from '../controllers/leaderboard-controller.js';

// initialize an express Router object
const router = express.Router()

router.route('/')
    .get(leaderboardController.createLeaderboard)

export default router;