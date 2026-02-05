import React, { PropsWithChildren, useState } from 'react';
import { User } from '../../player/model/user';
import './App.css';
import { UserContext } from '../../player/UserContext';


export const App : React.FC<PropsWithChildren>= ({children}) => {

  const [user, setUser] = useState<User>();
  const login = (userData : User ) => setUser(userData);
  const logout = () => setUser(undefined);

  return(
    <>
    <UserContext.Provider value={{user, login, logout}}>
      {children}
    </UserContext.Provider>
    </>
  );
};

export default App;
