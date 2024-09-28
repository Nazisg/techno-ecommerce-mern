import React from "react";

const TimeBlock = ({ label, value }) => (
  <div className="bg-white flex flex-col items-center justify-center p-1 w-[50px] h-[50px]">
    <div className=" font-bold text-primary-blue">
      {value < 10 ? `0${value}` : value}
    </div>
    <div className="font-semibold text-sm text-primary-blue">{label}</div>
  </div>
);

export default TimeBlock;
