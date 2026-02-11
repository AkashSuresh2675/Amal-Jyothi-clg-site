const API_URL = 'http://localhost:5000/api/auth';

const register = async (userData) => {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  if (data.success) {
    localStorage.setItem('user', JSON.stringify(data.data));
  }

  return data.data;
};

const login = async (userData) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  if (data.success) {
    localStorage.setItem('user', JSON.stringify(data.data));
  }

  return data.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const loginDemo = async () => {
  const demoUser = {
    _id: 'demo-123',
    name: 'Demo Admin',
    email: 'demo@admin.com',
    role: 'admin',
    token: 'demo-token',
  };
  localStorage.setItem('user', JSON.stringify(demoUser));
  return demoUser;
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
  loginDemo,
};

export default authService;
