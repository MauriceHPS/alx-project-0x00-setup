import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <>
      <button className="text-sm rounded-sm bg-indigo-300">
        {title} {styles}
      </button>

      <button className="text-m rounded-md bg-amber-800">
        {title} {styles}
      </button>

      <button className="text-l rounded-full bg-yellow-300 text-gray-900">
        {title} {styles}
      </button>
    </>
  );
};

export default Button;
