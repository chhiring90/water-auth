import { FC } from "react";
import { LoginImage } from "../assets";

export interface CardProps {
  title: string;
  subTitle: string;
}

export const Card: FC<CardProps> = (props) => {
  return (
    <figure className="text-center ">
      <img src={LoginImage} alt="login Image" className="mb-4" />
      <h3 className="text-2xl font-mono font-semibold mb-2">
        {props.title}
      </h3>
      <p>{props.subTitle}</p>
    </figure>
  );
};
