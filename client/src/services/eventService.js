import api from './api';

export const eventService = {
  // Get all events
  getAll: async (params = {}) => {
    const response = await api.get('/events', { params });
    return response.data;
  },

  // Get event by ID
  getById: async (id) => {
    const response = await api.get(`/events/${id}`);
    return response.data;
  },

  // Get upcoming events
  getUpcoming: async (limit = 10) => {
    const response = await api.get(`/events/upcoming/all?limit=${limit}`);
    return response.data;
  },

  // Get featured events
  getFeatured: async () => {
    const response = await api.get('/events/featured/all');
    return response.data;
  },

  // Get past events
  getPast: async (params = {}) => {
    const response = await api.get('/events/past/all', { params });
    return response.data;
  },

  // Create event (admin/editor only)
  create: async (data) => {
    const response = await api.post('/events', data);
    return response.data;
  },

  // Update event (admin/editor only)
  update: async (id, data) => {
    const response = await api.put(`/events/${id}`, data);
    return response.data;
  },

  // Delete event (admin only)
  delete: async (id) => {
    const response = await api.delete(`/events/${id}`);
    return response.data;
  },
};

export default eventService;
