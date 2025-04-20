// import { useState, useEffect } from "react";
// const UseCurrencyInfo = (currency) => {
//   const [currencyData, setCurrencyData] = useState({});
//   const [error, setError] = useState(null); // State to store error message
//   useEffect(() => {
//     fetch(`https://currency-rate-exchange-api.onrender.com/${currency}`)
//       .then((res) => res.json())
//       .then((res) => {
//         if (res.message) {
//           setError(res.message);
//           setCurrencyData({}); // Clear the data when there's an error
//         } else {
//           // console.log("Parsed JSON:", res);
//           setError(null);
//           const rates = res.rates[currency];
//           console.log("rates", rates); // return object
//           setCurrencyData(rates);
//           console.log("currency data :", currencyData); // return an empty object
//         }
//       })
//       .catch((err) => {
//         console.error("Failed to fetch currency data:", err);
//         setCurrencyData({});
//         setError("Failed to fetch currency data. Please try again later.");
//       });
//   }, [currency]);

//   useEffect(() => {
//     console.log("Updated currency data:", currencyData);
//   }, [currencyData]);

//   return { currencyData, error };
// };

// export default UseCurrencyInfo;

import { useState, useEffect } from "react";

const UseCurrencyInfo = (currency) => {
  const [currencyData, setCurrencyData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currency) return;

    fetch(`https://currency-rate-exchange-api.onrender.com/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setError(res.message);
          setCurrencyData({});
        } else {
          const rates = res.rates[currency];
          console.log("rates (direct from API):", rates); // ✅ use this
          setCurrencyData(rates);
          setError(null);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch currency data:", err);
        setCurrencyData({});
        setError("Failed to fetch currency data. Please try again later.");
      });
  }, [currency]);

  useEffect(() => {
    console.log("Updated currency data (from state):", currencyData); // ✅ logs when updated
  }, [currencyData]);

  return { currencyData, error };
};

export default UseCurrencyInfo;
