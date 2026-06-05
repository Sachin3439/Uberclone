import React, { createContext, useState } from 'react';

export const CaptainContextData = createContext();

const CaptainContext = ({ children }) => {

  const [captain, setCaptain] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  }

  const value={
    captain,
    setCaptain,
    isloading,
    setIsLoading,
    error,
    setError,
    updateCaptain
  }

  return (
    <CaptainContextData.Provider value={value}>
      {children}
    </CaptainContextData.Provider>
  );
};

export default CaptainContext;