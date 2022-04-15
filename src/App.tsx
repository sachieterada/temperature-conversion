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
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // tailwind expects the dark tag to be set on the root element
    if (darkMode) {
      window.document.documentElement.classList.add("dark");
      // localStorage.setItem("dark_mode", "true");
    } else {
      window.document.documentElement.classList.remove("dark");
      // localStorage.removeItem("dark_mode");
    }
  }, [darkMode]);

  return (
    <div className="text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 base">
      <Header />

      <div className="w-full max-w-7xl mx-auto py-8 flex justify-center items-center text-center">
        <div className="flex flex-row space-x-10">
          <div className="flex flex-col space-y-20">
            <div className="flex-flex-col space-y-4">
              <div>
                Celsius:
                <input
                  type="text"
                  value={celsius}
                  onChange={(e) => {
                    let c = e.target.value;
                    let f = parseInt(c) * 1.8 + 32;

                    setCelsius(c);
                    setFahrenheit(f.toString());
                  }}
                  className="text-slate-800"
                />
              </div>
            </div>
            <div className="flex-flex-col space-y-4">
              <div>
                Fahrenheit:
                <input
                  type="text"
                  value={fahrenheit}
                  onChange={(e) => {
                    let f = e.target.value;
                    let c = ((parseInt(f) - 32) * 5) / 9;

                    setFahrenheit(f);
                    setCelsius(c.toString());
                  }}
                  className="text-slate-800"
                />
              </div>
            </div>
          </div>

          <div className="bg-white w-40 h-96 flex items-end">
            <div
              className="bg-red-500"
              style={{
                height: `${celsius}%`,
                transition: `height 1.3s`,
                flex: `1`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
