"use client";

export default function Header({ onApply }: { onApply: () => void }) {
  return (
    <header className="w-full bg-white p-2 shadow-md rounded-xl" style={{ zIndex: 99 }}>
      <div className="w-full mt-2 px-4">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-1/3 md:w-auto">
            <div className="logo">
              <img
    src="/images/logo.webp"
    alt="Manipal Logo"
    className="h-auto w-auto max-w-[240px] md:max-w-[280px]"
  />
            </div>
          </div>
          <div className="hidden md:flex md:w-2/3 justify-end items-center gap-2">
            <button onClick={onApply} className="bg-[#ff6b35] text-white font-medium px-5 py-2 rounded-full hover:opacity-90">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
