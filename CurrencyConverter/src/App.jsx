import { useState } from "react";
import UseCurrencyInfo from "./CustomHooks/UseCurrencyInfo";
import InputField from "./Components/InputField";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { currencyData, error } = UseCurrencyInfo(from); // Destructuring
  const options = currencyData && Object.keys(currencyData);
  // console.log("currency info : ", currencyData);
  // console.log("options: ", options);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convertCurrency = () => {
    if (currencyData[to]) {
      setConvertedAmount((amount * currencyData[to]).toFixed(4));
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-gray-300 rounded-xl p-4 shadow-lg mx-auto">
        {error && (
          <div className="bg-red-500 text-white p-2 rounded mb-4">
            {error} {/* Display the error message */}
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convertCurrency();
          }}
        >
          <div className="w-full mb-1">
            <InputField
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectedCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <div className="w-full mb-4 mt-1">
            <InputField
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisable
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
