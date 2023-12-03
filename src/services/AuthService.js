let TOKEN = 'access_token';

const AuthService = 
{
  getToken: () => localStorage.getItem(TOKEN),

  setToken: (token) => localStorage.setItem(TOKEN, token),

  removeToken: () => localStorage.removeItem(TOKEN),

  isAuthenticated: () => !!AuthService.getToken(),
};

export default AuthService;