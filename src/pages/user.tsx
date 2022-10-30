import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";

export const User: FC = () => {
  const auth = useAuth();
  const navigation = useNavigate();

  const signoutHandler = () => {
    auth.signout(() => {
      navigation(0);
    });
  };

  return (
    <div className="w-full max-w-sm bg-white rounded border border-gray-200 shadow-md dark:bg-indigo-500 dark:border-indigo-500">
      <div className="flex flex-col items-center py-10">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src="https://avatars.dicebear.com/api/human/happy.svg"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-bold uppercase text-white font-mono">
          {auth?.user.email.split("@")[0]}
        </h5>
        <span className="text-sm text-white">{auth?.user.email}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <button
            onClick={signoutHandler}
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};
