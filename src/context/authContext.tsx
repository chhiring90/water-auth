import { createContext } from "react";

export interface userCredential {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: any;
  error: any;
  isLoading: boolean;
  signin: (creds: userCredential, callback: VoidFunction) => void;
  signup: (creds: userCredential, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);
