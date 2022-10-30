import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { ROUTES } from "./constants";
import { RequireAuth } from "./hoc";
import { SignIn, SignUp, User } from "./pages";
import { AuthProvider } from "./hoc";

function App() {
  return (
    <AuthProvider>
      <div className="h-screen flex items-center justify-center w-screen">
        <Routes>
          <Route
            path={ROUTES.ROOT}
            element={
              <RequireAuth>
                <User />
              </RequireAuth>
            }
          />
          <Route path={ROUTES.SIGNIN} element={<SignIn />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
