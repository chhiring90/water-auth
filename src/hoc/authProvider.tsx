import { ReactNode, useState } from "react";
import { AuthContext, userCredential } from "../context";
import { signupService, signinService } from "../services";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signin = async (creds: userCredential, callback: VoidFunction) => {
    setIsLoading(true);
    const response = await signinService(creds);

    if (response?.status === 200) {
      setUser({
        email: response?.data?.user?.email,
        createdAt: response?.data?.user?.createdAt,
        isVerified: response?.data.user?.emailVerified,
      });
      callback();
      setIsLoading(false);
    }

    if (response?.status !== 200) {
      console.log(response.response);
      setError(response?.response.data?.error);
      setIsLoading(false);
    }
  };

  const signout = (callback: VoidFunction) => {
    console.log("signout");
    setUser(null);
    callback();
  };

  const signup = async (creds: userCredential, callback: VoidFunction) => {
    const response = await signupService(creds);

    if (response?.status === 200) {
      setUser({
        email: response?.data?.user?.email,
        createdAt: response?.data?.user?.createdAt,
        isVerified: response?.data.user?.emailVerified,
      });
      callback();
      setIsLoading(false);
    }

    if (response?.status !== 200) {
      setError(response?.data?.error?.code);
      setIsLoading(false);
    }
  };

  const value = { user, signin, signout, signup, isLoading, error };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
