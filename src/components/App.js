import { useEffect, useState } from "react";
import "../App.css";
import Info from "./Info";
import InputLarge from "./InputLarge";
import People from "./People";
import Tip from "./Tip";

function App() {
  const [tipAmount, setTipAmount] = useState();
  const [total, setTotal] = useState();
  const [bill, setBill] = useState();
  const price = (in_price) => {
    setBill(parseInt(in_price));
  };
  const [numPeople, setNumPeople] = useState();
  const people = (value) => {
    setNumPeople(parseInt(value));
  };

  const [tipValue, setTipValue] = useState();
  const tip = (value) => {
    value = value.replace(/[^A-Za-z0-9]/g, "");
    setTipValue(parseInt(value));
  };

  const [flag, setFlag] = useState(false);
  const reset = () => {
    setBill("");
    setTipValue("");
    setTipAmount("");
    setTotal("");
    setNumPeople("");
    setFlag(false);
  };
  console.log(flag);
  useEffect(() => {
    function calculate() {
      let t_amount = (tipValue / bill) * 100;
      setTipAmount(t_amount);
      let a_total = (bill + t_amount) / numPeople;
      setTotal(a_total);
      setFlag(true);
    }
    calculate();
    return () => {
      calculate();
    };
  }, [bill, tipValue, numPeople]);

  return (
    <div className="App">
      <header className=" primary pt-10 pb-20 App-header text-xl">
        <div className="font-semibold w-24 letter mx-auto ">
          <h1>
            SPLI
            <br />
            TTER
          </h1>
        </div>
      </header>
      <main className="relative -top-10 rounded-t-xl main-bg px-10 pt-5">
        <section className="pb-2">
          <InputLarge
            value={bill}
            label="Bill"
            icon={<i className=" text-gray-400 fas fa-rupee-sign pr-2"></i>}
            getPrice={price}
          />
          <Tip tip={tip} />
          <People />
          <InputLarge
            value={numPeople}
            icon={<i className="text-gray-300 fas fa-user"></i>}
            getPrice={people}
          />
        </section>
        <section className="mt-3 pb-3 rounded-lg small-input text-white">
          <div className="p-3 pt-5 space-y-5">
            <Info value={tipAmount} text={"Tip Amount"} />
            <Info value={total} text="Total" />
            <button
              onClick={reset}
              className={`${
                flag ? " opacity-100" : "opacity-20"
              } small-input-15 text-center w-full p-2 rounded-sm`}
            >
              RESET
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
