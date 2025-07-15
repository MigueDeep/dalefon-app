import { doDelete, doGet, doPost, doPut } from "@config/axios";
import { User } from "../models/userModel";

const UserService = {
  
  getAllUsers: async () => {
    try {
      const response = await doGet<User[]>("/users");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  deleteUserById: async (id: number) => { 
    try {
      const response = await doDelete(`/users/${id}`);
      return response.data; 
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error; 
    }
  },

  createUser: async (user: User) => {
    try {
      const response = await doPost<User>("/users", user);
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },

  updateUser: async (user: User) => {
    try {
      const response = await doPut<User>(`/users/${user.id}`, user);
      return response.data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }

};


export default UserService;
