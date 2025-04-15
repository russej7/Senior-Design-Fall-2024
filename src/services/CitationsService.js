/*import axios from 'axios';

const API_URL = 'http://localhost:5000/api/citations';

export const createCitation = async (citationData) => {
  try {
    const response = await axios.post(API_URL, citationData);
    return response.data;
  } catch (error) {
    console.error('Error creating citation:', error.response?.data || error.message);
    throw error;
  }
};

export const getCitation = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching citation:', error.response?.data || error.message);
    throw error;
  }
};

export const updateCitation = async (id, updates) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updates);
    return response.data;
  } catch (error) {
    console.error('Error updating citation:', error.response?.data || error.message);
    throw error;
  }
};

export const getAllCitations = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching citations:', error.response?.data || error.message);
    throw error;
  }
};*/