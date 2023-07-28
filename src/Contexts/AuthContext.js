import React, { createContext, useContext, useState} from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token,setToken]=useState('');
  const [userData, setUserData] = useState({ name: '', email: '' });
  const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
    },
    withCredentials: true,
  });


  const login = (response) => {
    setToken(response.data.token);
    setIsAuthenticated(true);
    api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;
    api.get("api/user").then(response=>{
      setUserData({...userData,
        name: response.data.name,
        email: response.data.email,
      })}).catch(error => {
      console.log(error);
    });
  };

  const logout = () => {
    setToken('');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout, userData, api }}>
      {children}
    </AuthContext.Provider>
  );
}
