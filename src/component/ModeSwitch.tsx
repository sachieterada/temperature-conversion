import { useCallback, useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { SunIcon } from "@heroicons/react/outline";

export default function ModeSwitch() {
  const { isDarkMode, modeSwitch } = useSimpleDarkMode();
  return (
    <div className="py-16">
      <Switch
        checked={isDarkMode}
        onChange={modeSwitch}
        className={`${isDarkMode ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${isDarkMode ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        >
          <SunIcon className="w-4 h-4" />
        </span>
      </Switch>
    </div>
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
