import { createContext, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthenticatedUserProps {
  id: string;
  email: string;
  firstname: string;
}

interface AuthContextProps {
  auth: {
    accessToken: string;
    user: AuthenticatedUserProps;
  };

  setAuth: React.Dispatch<React.SetStateAction<any>>;
}

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState({
    accessToken: "",
    user: {
      id: "",
      email: "",
      firstname: "",
    },
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
