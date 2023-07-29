import React, { createContext, useContext, useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
    },
    withCredentials: true,
  });


  const login = (response) => {
    Cookies.set('token', `${response.data.token}`, { expires: 7 });
    setIsAuthenticated(true);
    api.defaults.headers['Authorization'] = `Bearer ${Cookies.get('token')}`;
    api.get("api/user").then(response=>{
      Cookies.set('userName', `${response.data.name}`, { expires: 7 });
      Cookies.set('userEmail', `${response.data.email}`, { expires: 7 });
      }).catch(error => {
      console.log(error);
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    Cookies.remove('token');

  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, api }}>
      {children}
    </AuthContext.Provider>
  );
}
