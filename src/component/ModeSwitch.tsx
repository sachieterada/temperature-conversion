import { useCallback, useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { SunIcon } from "@heroicons/react/outline";
import { MoonIcon } from "@heroicons/react/solid";

export default function ModeSwitch() {
  const { isDarkMode, modeSwitch } = useSimpleDarkMode();
  return (
    <>
      <Switch
        checked={isDarkMode}
        onChange={modeSwitch}
        className={`${isDarkMode ? "bg-slate-700" : "bg-cyan-600"}
          relative flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 flex justify-center items-center`}
      >
        <span className="sr-only">Dark Mode Switch</span>
        {isDarkMode && <SunIcon className="w-5 h-5 text-slate-400" />}

        <span
          aria-hidden="true"
          className={`${isDarkMode ? "translate-x-9" : "translate-x-0 -ml-2"}
            pointer-events-none h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200 flex justify-center items-center`}
        >
          {isDarkMode ? (
            <MoonIcon className="w-5 h-5 dark:text-slate-700 ml-1" />
          ) : (
            <SunIcon className="w-5 h-5 text-cyan-600" />
          )}
        </span>

        {!isDarkMode && <MoonIcon className="w-5 h-5 text-cyan-300 ml-2" />}
      </Switch>
    </>
  );
}

type UseSimpleDarkMode = (isDark?: boolean) => {
  isDarkMode: boolean;
  modeSwitch: (isDark?: boolean) => void;
};

export const useSimpleDarkMode: UseSimpleDarkMode = (isInitialDark = false) => {
  const [isDarkMode, modeSwitchTheme] = useState<boolean>(isInitialDark);
  const modeSwitch = useCallback((isDark?: boolean) => {
    if (typeof isDark === "undefined") {
      modeSwitchTheme((state) => !state);
      return;
    }

    modeSwitchTheme(isDark);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return { isDarkMode, modeSwitch };
};
