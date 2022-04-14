import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Conversion />
      </header>
    </div>
  );
}

export default App;

function Conversion() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  return (
    <>
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
    </>
  );
}
