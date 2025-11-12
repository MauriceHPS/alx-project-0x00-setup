import { PillProps } from "@/interfaces";
import React from "react";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <>
      <div className="flex justify-center items-center bg-[#F9#F9#f9] px-3 w-auto h-[27px] rounded-full">
        <p className="text-sm">{title}</p>
      </div>
    </>
  );
};

export default Pill;
