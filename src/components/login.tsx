import { FC } from "react";
import { Input } from "./input";
import { INPUTS, INPUT_TYPES, ROUTES } from "../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { userCredential } from "../context";

export interface LoginProps {
  buttonText: string;
  title: string;
  linkPath: ROUTES;
  linkLabel: string;
  isLogin?: boolean;
}

export const Login: FC<LoginProps> = (props) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const form = location?.state?.form?.pathname || "/";

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (props?.isLogin) {
      auth.signin(
        {
          email,
          password,
        },
        () => {
          navigate(form, { replace: true });
        }
      );
    }

    if (!props.isLogin) {
      auth.signup(
        {
          email,
          password,
        },
        () => {
          navigate(form, { replace: true });
        }
      );
    }
  };

  return (
    <form
      className="mt-8 space-y-6 font-mono"
      method="POST"
      onSubmit={submitHandler}
    >
      <h3 className=" text-xl font-semibold text-center">{props.title}</h3>
      {auth?.error && (
        <p className="text-red-400 text-xs font-semibold p-2 border border-red-400 text-center rounded mb-2">
          {auth.error.code || auth.error.message}
        </p>
      )}
      <Input
        id="email-address"
        name="email"
        placeholder="Email Address"
        required
        label="Email Address"
        inputType={INPUTS.INPUT}
        type={INPUT_TYPES.TEXT}
      />
      <Input
        id="password"
        name="password"
        required
        label="Password"
        placeholder="Password"
        inputType={INPUTS.INPUT}
        type={INPUT_TYPES.PASSWORD}
      />
      <Input
        id="button"
        name="button"
        inputType={INPUTS.BUTTON}
        type={INPUT_TYPES.SUBMIT}
      >
        {props.buttonText}
      </Input>
      <Link
        to={props.linkPath}
        className="mt-2 text-sm block text-right text-indigo-500"
      >
        {props.linkLabel}
      </Link>
    </form>
  );
};
