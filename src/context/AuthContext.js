import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();

  const login = (user) => {
    if (user.username === 'kodluyoruz' && user.password === 'bootcamp109') {
      setIsAuthenticated(true);
      return true;
    }
    setIsAuthenticated(false);
    return false;
  };
  const values = { isAuthenticated, setIsAuthenticated, login };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
