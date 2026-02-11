import React, { createContext, useContext } from "react";

const InternetIdentityContext = createContext(null);

export function InternetIdentityProvider({ children }) {
  return (
    <InternetIdentityContext.Provider value={{}}>
      {children}
    </InternetIdentityContext.Provider>
  );
}

export function useInternetIdentity() {
  return useContext(InternetIdentityContext);
}
