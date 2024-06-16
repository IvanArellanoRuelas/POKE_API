/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const UserContext = createContext();

const UseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UseProvider;
