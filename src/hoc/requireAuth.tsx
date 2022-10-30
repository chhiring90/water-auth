import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "../constants";
import { useAuth } from "../hooks";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth?.user) {
    return <Navigate to={ROUTES.SIGNIN} state={{ from: location }} replace />;
  }

  return children;
};
