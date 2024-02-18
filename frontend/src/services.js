import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Example API URL, replace with your actual API URL
const usersURL = "users";
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



export const registerUser = async (registerValues) => {
  try {
    console.log(registerValues);
    const response = await axios.post(`${usersURL}/register`,
      JSON.stringify(registerValues),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      }
    );
    console.log(response);
    return response?.data;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};
export const loginUser = async (loginValues) => {
  console.log(loginValues);
  try {
    console.log(loginValues);
    const response = await axios.post(`${usersURL}/login`,
      JSON.stringify(loginValues),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      }
    );
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['accessToken']}`
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const logoutUser = async () => {
  
  try {
    const response = await axios.get(`/logout`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default services;
