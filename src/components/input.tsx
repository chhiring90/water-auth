import { FC } from "react";
import { INPUTS, INPUT_TYPES } from "../constants";

export interface InputProps {
  id: string;
  name: string;
  type: INPUT_TYPES;
  inputType: INPUTS;
  children?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

export const Input: FC<InputProps> = (props) => {
  let input: null | JSX.Element = null;

  switch (props.inputType) {
    case INPUTS.INPUT:
      input = (
        <input
          type={props.type}
          placeholder={props.placeholder}
          required={props.required}
          name={props.name}
          id={props.id}
          className="relative block w-full h-11 appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      );
      break;
    case INPUTS.BUTTON:
      input = (
        <button
          className="group relative flex w-full justify-center rounded border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          type="submit"
        >
          {props.children}
        </button>
      );
      break;
    default:
      break;
  }

  return (
    <div>
      {props.label ? (
        <label htmlFor={props.id} className="sr-only">
          {props.label}
        </label>
      ) : null}
      {input}
    </div>
  );
};
