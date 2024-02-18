import * as userService from "../services/user-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";


// Controller to Create user
export const addUser = async (request, response) => {
  try {
    const newUser = { ...request.body };
    const user = await userService.create(newUser);
    setResponse({"type": "REGISTER", "data":user}, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

//Contorller to add oAuth token for a new user
export const oauthAddUser = async (request, response) => {
  try {
    const newUser = { ...request.body };
    const user = await userService.createOauthUser(newUser);
    setResponse(user, response)
  } catch (error) {
    setErrorResponse(error, response);
  }
};

//Controller to handle login of a user
export const userLogin = async (request,response) =>{
    try{
        const userCredentials = {...request.body};
        const email = userCredentials.emailAddress;
        const password = userCredentials.password;
        const login = await userService.userLogin(email,password);
        setResponse({"type": "LOGIN", "data":login}, response);
    } catch(error){
        setErrorResponse(error, response);
    }
  
}

// Controller for get user by id
export const getUser = async (request, response) => {
  try {
    const id = request.params.id;
    const user = await userService.findById(id);
    setResponse({"type":"GET_USER_BY_ID","data":user}, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

//Controller to get user details using their email id
export const getUserByEmailId = async (request, response) => {
  try {
    const email = request.params.email;
    const user = await userService.findByEmailId(email);
    setResponse({"type":"SEARCH_BY_EMAILID","data":user}, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

// controller to handle OAuth 
export const getOAuthUser = async (request, response) => {
  try{
    const email = request.params.email;
    const user = await userService.findOAuthUser(email);
    setResponse(user, response)
  } catch (error){
    setErrorResponse(error, response)
  }
}


//controller to search user
export const searchUsers = async (request, response) => {
  try {
    const params = { ...request.query };
    const users = await userService.search(params);
    setResponse({"type":"SEARCH_USERS","data":users}, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

//Controller to update a user
export const updateUser = async (request, response) => {
  try {
    const id = request.params.id;
    const updateUser = { ...request.body };
    await userService.update(updateUser, id);
    const updatedUser = await userService.findById(id);
    setResponse({"type":"UPDATE_USER","data":updatedUser}, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

//Controller to find and update a user by their email id
export const updateUserByEmailAddress = async (request, response) => {
  try {
    const emailAddress = request.params.email;
    const updateUser = { ...request.body };
    await userService.updateByEmailAddress(updateUser, emailAddress);
    const updatedUser = await userService.findByEmailId(emailAddress);
    setResponse({"type":"UPDATE_USER","data":updatedUser}, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

//controller to remove a user from db
export const removeUser = async (request, response) => {
  try {
    const id = request.params.id;
    await userService.remove(id);
    const removedUser = `deleted user with id ${id}`;
    setResponse({"type":"REMOVE_USER","data":removedUser}, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};
