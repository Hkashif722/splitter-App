import React from "react";
import SmallInput from "./SmallInput";

function Tip({ tip }) {
  return (
    <div className="pt-2">
      <p className="my-2 text-sm">Select Tip %</p>
      <div className="flex justify-between gap-y-2 flex-wrap">
        <SmallInput type="button" tipAmount={tip} tip="5%" color="small-input" text="white" />
        <SmallInput type="button" tipAmount={tip} tip="10%" color="small-input" text="white" />
        <SmallInput type="button" tipAmount={tip} tip="15%" color="small-input-15" />
        <SmallInput type="button" tipAmount={tip} tip="25%" color="small-input" text="white" />
        <SmallInput type="button" tipAmount={tip} tip="50%" color="small-input" text="white" />
        <SmallInput type="input" tipAmount={tip} color="lg-input-bgcolor" />
      </div>
    </div>
  );
}

export default Tip;
