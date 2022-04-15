import ModeSwitch from "./ModeSwitch";

export default function Header() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto top-0 py-6 px-6 flex flex-row justify-between items-center">
        <h1 className="text-slate-800 dark:text-slate-400 text-3xl font-semibold">
          Temperature Conversion
        </h1>
        <ModeSwitch />
      </div>
    </>
  );
}
