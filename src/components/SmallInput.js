import React from "react";

function SmallInput({ tip, tipAmount, type, color, text }) {
  return type === "button" ? (
    <input
      onClick={(e) => tipAmount(e.target.value)}
      className={`${color} text-${text} text-lg font-semibold py-2 rounded-sm w-28`}
      type="button"
      value={tip}
    />
  ) : (
    <input
      onChange={(e) => tipAmount(e.target.value + "%")}
      className={`${color} focus:placeholder-transparent outline-none text-center text-${text} text-lg font-semibold py-2 rounded-sm w-28`}
      type="number"
      inputmode="numeric"
      pattern="[0-9]*"
      placeholder="Custom "
    />
  );
}

export default SmallInput;
