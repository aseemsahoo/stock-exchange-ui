import { isExpired, decodeToken } from "react-jwt";

const AuthService = 
{
  getToken: () => localStorage.getItem("TOKEN"),

  setToken: (token) => localStorage.setItem("TOKEN", token),

  removeToken: () => localStorage.removeItem("TOKEN"),

  isAuthenticated: () => !!AuthService.getToken(),

  isTokenExpired: () => {
    const token = AuthService.getToken();

    const DecodedToken = decodeToken(token);
    const isTokenExpired = isExpired(token);  
    
    return isTokenExpired;

    // if (isTokenExpired) {
    //   try {
            // jsonwebtoken doesnt work with current version
    //     // const decodedToken = jwt.decodeToken();

    //     // if (decodedToken && decodedToken.exp * 1000 < Date.now()) { // Token has expired
    //       console.log('Token expired. Removed from local storage.');
    //       return false;
    //     }

    //     return true;
    //   } 
    //   catch (error) {
    //     console.error('Error decoding token:', error);
    //     return false;
    //   }
    // }
    // // No token found
    // return false;
  },
};

export default AuthService;