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
  createRecipe: async (recipe) => {
    try {
      const response = await axios.post(`${API_URL}/recipes/create`,recipe);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('Error fetching post:', error);
      throw error;
    }
  },
  calculateIndex: async (recipe) => {
    try {
      const response = await axios.patch(`${API_URL}/recipes/calculate`,recipe);
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
