import { useState, useEffect } from "react";
const UseCurrencyInfo = (currency) => {
  const [currencyData, setCurrencyData] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    fetch(`https://currency-rate-exchange-api.onrender.com/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setError(res.message);
        } else {
          setError(null);
          const rates = res.rates[currency];
          // console.log("rates", rates);
          setCurrencyData(rates);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch currency data:", err);
        setCurrencyData({});
        setError("Failed to fetch currency data. Please try again later.");
      });
  }, [currency]);
  // console.log("Updated currency data:", currencyData);
  return { currencyData, error };
};

export default UseCurrencyInfo;
