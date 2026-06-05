import React, { createContext ,useState} from 'react';

export const UserContextData = createContext();

const UserContext = ({ children }) => {
 const [user ,setUser]=useState(
    {fullname: {
        firstname:"",
        lastname:""
    },
    email: ""
}
);
const [isloading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const value={
  user,
  setUser,
  isloading,
  setIsLoading,
  error,
  setError
}
  return (
  <UserContextData.Provider value={value}>
      {children}
    </UserContextData.Provider>
  );
};

export default UserContext;