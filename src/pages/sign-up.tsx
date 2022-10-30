import { FC } from "react";
import { Login } from "../components/login";
import { LoginImage } from "../assets";
import { ROUTES } from "../constants";
export interface SignUpProps {}

export const SignUp: FC<SignUpProps> = (props) => (
  <div className="w-9/12 flex items-center overflow-hidden rounded-md shadow-xl ">
    <div className="w-7/12 px-8 bg-purple-50 py-12">
      <figure className="text-center ">
        <img src={LoginImage} alt="login Image" className="mb-4" />
        <h3 className="text-2xl font-mono font-semibold mb-2">
          Halvah sugar plum cake
        </h3>
        <p>Cotton candy bonbon candy canes cupcake</p>
      </figure>
    </div>
    <div className="w-5/12 px-8">
      <Login
        title="Let's Join 👋"
        buttonText="Sign Up"
        linkLabel="Already have an account?"
        linkPath={ROUTES.SIGNIN}
      />
    </div>
  </div>
);
