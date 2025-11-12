import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <>
      <button className={`text-sm bg-indigo-300 ${styles}`}>
        {title} {styles}
      </button>

      <button className={`text-m  bg-amber-800 ${styles}`}>
        {title} {styles}
      </button>
      <button className={`text-l bg-yellow-300 text-gray-900 ${styles}`}>
        {title} {styles}
      </button>
    </>
  );
};

export default Button;
