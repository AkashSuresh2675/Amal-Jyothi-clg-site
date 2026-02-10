import api from './api';

export const departmentService = {
  // Get all departments
  getAll: async (params = {}) => {
    const response = await api.get('/departments', { params });
    return response.data;
  },

  // Get department by ID
  getById: async (id) => {
    const response = await api.get(`/departments/${id}`);
    return response.data;
  },

  // Create department (admin only)
  create: async (data) => {
    const response = await api.post('/departments', data);
    return response.data;
  },

  // Update department (admin only)
  update: async (id, data) => {
    const response = await api.put(`/departments/${id}`, data);
    return response.data;
  },

  // Delete department (admin only)
  delete: async (id) => {
    const response = await api.delete(`/departments/${id}`);
    return response.data;
  },
};

export default departmentService;
