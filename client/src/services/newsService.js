import api from './api';

export const newsService = {
  // Get all news
  getAll: async (params = {}) => {
    const response = await api.get('/news', { params });
    return response.data;
  },

  // Get news by ID
  getById: async (id) => {
    const response = await api.get(`/news/${id}`);
    return response.data;
  },

  // Get pinned news
  getPinned: async () => {
    const response = await api.get('/news/pinned/all');
    return response.data;
  },

  // Get latest news
  getLatest: async (limit = 5) => {
    const response = await api.get(`/news/latest/all?limit=${limit}`);
    return response.data;
  },

  // Create news (admin/editor only)
  create: async (data) => {
    const response = await api.post('/news', data);
    return response.data;
  },

  // Update news (admin/editor only)
  update: async (id, data) => {
    const response = await api.put(`/news/${id}`, data);
    return response.data;
  },

  // Delete news (admin only)
  delete: async (id) => {
    const response = await api.delete(`/news/${id}`);
    return response.data;
  },
};

export default newsService;
