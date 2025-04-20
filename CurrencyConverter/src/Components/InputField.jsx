import React from "react";

const InputField = ({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencyOptions = [],
  disabled = false,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-2xl shadow-md w-full">
      <div className="flex-1 w-full">
        {label && (
          <label className="block text-sm text-gray-600 mb-1">{label}</label>
        )}
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange?.(e.target.value)}
          disabled={disabled}
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex-1 w-full">
        <label className="block text-sm text-gray-600 mb-1">Currency</label>
        <select
          value={currency}
          onChange={(e) => onCurrencyChange?.(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {currencyOptions.map((cur) => (
            <option key={cur} value={cur}>
              {cur.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputField;
