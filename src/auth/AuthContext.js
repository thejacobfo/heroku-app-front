import React from 'react';
export const AuthContext = React.createContext({
    sessionToken: '',
    setToken: () => {},
  });
  export default AuthContext