import { createContext, useContext, useState } from "react";

const AuthLogin = createContext();

const AuthContext = ({ children }) => {
  const [Authlogin, setAuthlogin] = useState(
    JSON.parse(localStorage.getItem("Authlogin"))
  );
  return (
    <AuthLogin.Provider value={{ Authlogin, setAuthlogin }}>
      {children}
    </AuthLogin.Provider>
  );
};

export default AuthContext;

export const UseAuthLogin = () => {
  return useContext(AuthLogin);
};
