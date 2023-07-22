import React, { createContext, useContext, useState, useRef } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const tokenRef = useRef('');
  const [userData, setUserData] = useState({ name: '', email: '' });
  const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Authorization':`Bearer ${tokenRef.current}`
    },
    withCredentials: true,
  });


  const login = (response) => {
    tokenRef.current = response.data.token;
    setIsAuthenticated(true);
   // api.defaults.headers['Authorization'] = `Bearer ${tokenRef.current}`;
    api.get("api/user").then(response=>{
      setUserData({
        name: response.data.name,
        email: response.data.email,
      })}).catch(error => {
      console.log(error);
    });
  };

  const logout = () => {
    tokenRef.current = '';
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token: tokenRef.current, login, logout, userData, api }}>
      {children}
    </AuthContext.Provider>
  );
}
