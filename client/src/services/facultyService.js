import api from './api';

export const facultyService = {
  // Get all faculty
  getAll: async (params = {}) => {
    const response = await api.get('/faculty', { params });
    return response.data;
  },

  // Get faculty by ID
  getById: async (id) => {
    const response = await api.get(`/faculty/${id}`);
    return response.data;
  },

  // Get faculty by department
  getByDepartment: async (departmentId, params = {}) => {
    const response = await api.get(`/faculty/department/${departmentId}`, { params });
    return response.data;
  },

  // Create faculty (admin only)
  create: async (data) => {
    const response = await api.post('/faculty', data);
    return response.data;
  },

  // Update faculty (admin only)
  update: async (id, data) => {
    const response = await api.put(`/faculty/${id}`, data);
    return response.data;
  },

  // Delete faculty (admin only)
  delete: async (id) => {
    const response = await api.delete(`/faculty/${id}`);
    return response.data;
  },
};

export default facultyService;
