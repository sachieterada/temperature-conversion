import "./App.css";
import { useState } from "react";

import Header from "./component/Header";

function celsiusToFahrenheit(c: number) {
  return c * 1.8 + 32;
}

function fahrenheitToCelsius(f: number) {
  return ((f - 32) * 5) / 9;
}

function Input({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (value: string) => void;
  error: boolean;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={`max-w-xs md:max-w-none text-slate-800 dark:text-white py-4 text-center text-3xl border-b-4 mb-4 bg-white dark:bg-slate-900
    ${
      error
        ? "text-red-400 dark:text-red-400 border-red-400"
        : "border-cyan-400"
    }`}
    />
  );
}

export default function App() {
  let initial = 0;
  const [celsius, setCelsius] = useState(initial.toString());
  const [fahrenheit, setFahrenheit] = useState(
    celsiusToFahrenheit(initial).toString()
  );
  const [error, setError] = useState(false);

  return (
    <div className="text-slate-800 dark:text-white bg-white dark:bg-slate-900">
      <div className="base container mx-auto">
        <Header />

        <div className="flex-1 w-full max-w-7xl mx-auto py-5 md:py-8 flex justify-center items-center text-center">
          <div className="flex flex-col md:flex-row md:space-x-20 space-y-20 md:space-y-0">
            <div className="flex flex-col">
              <Input
                value={celsius}
                onChange={(value) => {
                  let c = parseFloat(value);
                  setError(false);

                  // ignore blank value, it's not an error
                  if (value === "") {
                    setCelsius("");
                    setFahrenheit("");
                    return;
                  }

                  setCelsius(value);

                  if (isNaN(c)) {
                    setError(true);
                  } else {
                    let f = celsiusToFahrenheit(c).toFixed(2);
                    setFahrenheit(f);
                  }
                }}
                error={error}
              />

              <div className="font-semibold text-xl">Celsius</div>
            </div>
            <div className="flex flex-col">
              <Input
                value={fahrenheit}
                onChange={(value) => {
                  let f = parseFloat(value);
                  setError(false);

                  // ignore blank value, it's not an error
                  if (value === "") {
                    setCelsius("");
                    setFahrenheit("");
                    return;
                  }

                  setFahrenheit(value);

                  if (isNaN(f)) {
                    setError(true);
                  } else {
                    let c = fahrenheitToCelsius(f).toFixed(2);
                    setCelsius(c);
                  }
                }}
                error={error}
              />

              <div className="font-semibold text-xl">Fahrenheit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
