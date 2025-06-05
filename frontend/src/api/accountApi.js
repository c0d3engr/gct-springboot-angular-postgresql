import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/accounts';

export const createAccount = async (accountData) => {
  try {
    const response = await axios.post(API_BASE_URL, accountData);
    return response.data;
  } catch (error) {
    console.error('Error creating account:', error);
    throw error;
  }
};

export const getAccount = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching account:', error);
    throw error;
  }
};

export const getAllAccounts = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
};

export const deleteAccount = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting account:', error);
    throw error;
  }
};