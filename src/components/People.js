import React from "react";

function People({ value }) {
  return (
    <div className="flex justify-between my-4">
      <p className="my-2 text-sm">Number of People</p>
      {value === 0 && <p className=" text-red-600 my-2 text-sm">Can't be zero</p>}
    </div>
  );
}

export default People;
