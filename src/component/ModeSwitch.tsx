import { useCallback, useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { SunIcon } from "@heroicons/react/outline";
import { MoonIcon } from "@heroicons/react/solid";

export default function ModeSwitch() {
  const { isDarkMode, modeSwitch } = useDarkMode();
  return (
    <>
      <Switch
        checked={isDarkMode}
        onChange={modeSwitch}
        className={`${isDarkMode ? "bg-slate-700" : "bg-cyan-600"}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Dark Mode Switch</span>

        <span
          aria-hidden="true"
          className={`${isDarkMode ? "translate-x-9" : "translate-x-0"}
            pointer-events-none h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200 flex justify-center items-center`}
        >
          {isDarkMode ? (
            <MoonIcon className="w-5 h-5 dark:text-slate-700 ml-1" />
          ) : (
            <SunIcon className="w-5 h-5 text-cyan-600" />
          )}
        </span>
      </Switch>
    </>
  );
}

type UseDarkMode = (isDark?: boolean) => {
  isDarkMode: boolean;
  modeSwitch: (isDark?: boolean) => void;
};

export const useDarkMode: UseDarkMode = (isInitialDark = false) => {
  const [isDarkMode, setDarkMode] = useState<boolean>(isInitialDark);
  const modeSwitch = useCallback((isDark?: boolean) => {
    if (typeof isDark === "undefined") {
      setDarkMode((state) => !state);
      return;
    }

    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    // set the initial dark mode value
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // tailwind expects the dark tag to be set on the root element
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [isDarkMode]);

  return { isDarkMode, modeSwitch };
};
