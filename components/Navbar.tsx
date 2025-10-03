import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between py-3 px-4 md:px-16 lg:px-24">
      <div className="flex items-center gap-4">
        <img src="/src/assets/Group.svg" alt="logo" className="h-8 w-auto" />
      </div>

      <nav className="hidden md:flex gap-8 text-lg font-medium">
        <div className="hover:underline cursor-pointer">Home</div>
        <div className="hover:underline cursor-pointer">About Us</div>
        <div className="hover:underline cursor-pointer">Our Services</div>
        <div className="hover:underline cursor-pointer">Pricing</div>
        <div className="hover:underline cursor-pointer">FAQ</div>
      </nav>

      <div className="flex items-center gap-4">
        <button className="hidden md:inline-block bg-crimson p-2 rounded-full text-white px-4 shadow-[0px_0px_12px_rgba(250,_18,_57,_0.58)]">
          Get a Quote
        </button>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute left-4 right-4 top-16 bg-white rounded-lg shadow-lg p-4 z-40">
          <nav className="flex flex-col gap-3 text-base font-medium">
            <div className="py-2">Home</div>
            <div className="py-2">About Us</div>
            <div className="py-2">Our Services</div>
            <div className="py-2">Pricing</div>
            <div className="py-2">FAQ</div>
            <button className="mt-2 bg-crimson p-2 rounded-full text-white px-4 shadow-[0px_0px_12px_rgba(250,_18,_57,_0.58)]">
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
