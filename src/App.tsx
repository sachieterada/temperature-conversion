import "./App.css";
import { useEffect, useState } from "react";

import Header from "./component/Header";

function celsiusToFahrenheit(c: number) {
  return c * 1.8 + 32;
}

function fahrenheitToCelsius(f: number) {
  return ((f - 32) * 5) / 9;
}

export default function App() {
  let initial = 0;
  const [celsius, setCelsius] = useState(initial.toString());
  const [fahrenheit, setFahrenheit] = useState(
    celsiusToFahrenheit(initial).toString()
  );

  return (
    <div className="text-slate-800 dark:text-slate-400 bg-white dark:bg-slate-900">
      <div className="base container mx-auto">
        <Header />

        <div className="flex-1 w-full max-w-7xl mx-auto py-8 flex justify-center items-center text-center">
          <div className="flex flex-col md:flex-row md:space-x-20">
            <div className="flex flex-col items-center">
              <input
                type="text"
                value={celsius}
                onChange={(e) => {
                  let c = e.target.value;
                  let f = celsiusToFahrenheit(parseInt(c));

                  setCelsius(c);
                  setFahrenheit(f.toString());
                }}
                className="max-w-xs md:max-w-none text-slate-800 py-4 text-center text-3xl border-b-2 border-cyan-600 dark:border-slate-400 mb-4"
              />
              <div className="font-semibold text-xl">Celsius</div>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                value={fahrenheit}
                onChange={(e) => {
                  let f = e.target.value;
                  let c = fahrenheitToCelsius(parseInt(f));

                  setFahrenheit(f);
                  setCelsius(c.toString());
                }}
                className="max-w-xs md:max-w-none text-slate-800 py-4 text-center text-3xl border-b-2 border-cyan-600 dark:border-slate-400 mb-4"
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
