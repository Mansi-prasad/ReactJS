import React, { useId } from "react";
const InputField = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency,
  disabled = false,
}) => {
  //Do not call useId to generate keys in a list. Keys should be generated from your data.
  const amountInputId = useId(); //  for generating unique IDs that can be passed to accessibility attributes.
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-2xl shadow-md w-full">
      <div className="flex-1 w-full">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id="amountInputId"
          type="number"
          value={amount}
          className="outline-none w-full bg-transparent py-1.5"
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={disabled}
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <label className="text-black/40 mb-2 w-full">Currency type</label>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        >
          {currencyOptions.map((curr) => (
            <option key={curr} value={curr}>
              {curr.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputField;
