import ModeSwitch from "./ModeSwitch";

export default function Header() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto top-0 py-6 px-6 flex justify-end">
        <ModeSwitch />
      </div>
    </>
  );
}
