import "./App.css";
import { useState } from "react";

import Header from "./component/Header";

function celsiusToFahrenheit(c: number) {
  return c * 1.8 + 32;
}

function fahrenheitToCelsius(f: number) {
  return ((f - 32) * 5) / 9;
}

export default function App() {
  let initial = 0;
  const [celsius, setCelsius] = useState(initial);
  const [fahrenheit, setFahrenheit] = useState(celsiusToFahrenheit(initial));
  const [error, setError] = useState(false);

  return (
    <div className="text-slate-800 dark:text-white bg-white dark:bg-slate-900">
      <div className="base container mx-auto">
        <Header />

        <div className="flex-1 w-full max-w-7xl mx-auto py-5 md:py-8 flex justify-center items-center text-center">
          <div className="flex flex-col md:flex-row md:space-x-20 space-y-10 md:space-y-0">
            <div className="flex flex-col items-center">
              <input
                type="text"
                value={celsius}
                onChange={(e) => {
                  let c = parseInt(e.target.value);

                  if (isNaN(c)) {
                    setError(true);
                    return;
                  }

                  setError(false);

                  let f = celsiusToFahrenheit(c);

                  setCelsius(c);
                  setFahrenheit(f);
                }}
                className={`
                  max-w-xs md:max-w-none text-slate-800 dark:text-white py-4 text-center text-3xl border-b-4 mb-4 bg-white dark:bg-slate-900
                  ${
                    error
                      ? "text-red-400 dark:text-red-400 border-red-400"
                      : "border-cyan-400"
                  }`}
              />

              <div className="font-semibold text-xl">Celsius</div>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                value={fahrenheit}
                onChange={(e) => {
                  let f = parseInt(e.target.value);

                  if (isNaN(f)) {
                    setError(true);
                    return;
                  }
                  setError(false);

                  let c = fahrenheitToCelsius(f);

                  setFahrenheit(f);
                  setCelsius(c);
                }}
                className={`
                max-w-xs md:max-w-none text-slate-800 dark:text-white py-4 text-center text-3xl border-b-4 mb-4 bg-white dark:bg-slate-900
                ${
                  error
                    ? "text-red-400 dark:text-red-400 border-red-400"
                    : "border-cyan-400"
                }`}
              />

              <div className="font-semibold text-xl">Fahrenheit</div>
            </div>
          </div>

          {/* <div className="bg-white w-40 h-96 flex items-end">
            <div
              className="bg-red-500"
              style={{
                height: `${celsius}%`,
                transition: `height 1.3s`,
                flex: `1`,
              }}
            ></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
