import React, { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Login } from "../components/login";
import { Card } from "../components";
import { ROUTES } from "../constants";
import { useAuth } from "../hooks";
export interface SignInProps {}

export const SignIn: FC = () => {
  return (
    <div className="w-9/12 flex flex-wrap items-center overflow-hidden rounded-md shadow-xl my-4">
      <div className="md:w-7/12 w-full md:px-8 px-4 bg-purple-50 py-12">
        <Card
          title="Halvah sugar plum cake"
          subTitle="Cotton candy bonbon candy canes cupcake"
        />
      </div>
      <div className="md:w-5/12 w-full px-8 pb-4">
        <Login
          title="Hello! CupCake 🧁"
          buttonText="Log In"
          linkLabel="Create New Account"
          linkPath={ROUTES.SIGNUP}
          isLogin
        />
      </div>
    </div>
  );
};
