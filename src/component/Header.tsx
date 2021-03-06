import { RefreshIcon } from "@heroicons/react/outline";
import ModeSwitch from "./ModeSwitch";

export default function Header() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto top-0 py-6 px-6 flex flex-row justify-between items-center">
        <h1 className="text-slate-800 dark:text-white text-3xl md:text-4xl font-semibold flex flex-row items-center">
          <RefreshIcon className="h-8 w-8 mr-2" />
          Temperature Conversion
        </h1>
        <ModeSwitch />
      </div>
    </>
  );
}
