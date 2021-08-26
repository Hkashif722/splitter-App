import React from "react";

function InputLarge({ icon, label, value, getPrice }) {
  return (
    <div>
      <p className="text-sm pb-1">{label}</p>
      <div className="lg-input-bgcolor px-2 py-3 rounded-sm items-center flex">
        {icon}
        <input
          onChange={(e) => getPrice(e.target.value)}
          value={value}
          className=" bg-transparent header-text-color font-semibold outline-none flex-grow text-right "
          type="number"
          min="1"
          inputmode="numeric"
          pattern="[0-9]*"
        />
      </div>
    </div>
  );
}

export default InputLarge;
