import { response } from "express";
import { setResponse, setErrorResponse } from "./response-handler.js";
import * as leaderboardService from '../services/leaderboard-service.js';

export const createLeaderboard = async (request, response) => {
    try {
        const leaderboard = await leaderboardService.sortRecipes();
        setResponse(leaderboard, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}