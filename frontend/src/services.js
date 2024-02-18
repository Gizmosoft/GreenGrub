import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Example API URL, replace with your actual API URL

const services = {
  getLeaderBoard: async () => {
    try {
      const response = await axios.get(`${API_URL}/leaderboard`);
      return response.data;
    } catch (error) {
      console.error('Error fetching post:', error);
      throw error;
    }
  },

  getRecipes: async () => {
    try {
      const response = await axios.get(`${API_URL}/recipes`);
      return response.data;
    } catch (error) {
      console.error('Error fetching post:', error);
      throw error;
    }
  },

  getRecipeById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/recipes/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('Error fetching post:', error);
      throw error;
    }
  },
  // Add more API methods as needed
};

export default services;
