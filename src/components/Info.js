import React from "react";

function Info({ value, text }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-sm">{text}</h3>
        <p className=" text-xs text-gray-400">/ person</p>
      </div>
      <div>
        <i className=" text-gray-400 fas fa-rupee-sign pr-2"></i>
        {value ? value : "00.0"}
      </div>
    </div>
  );
}

export default Info;
