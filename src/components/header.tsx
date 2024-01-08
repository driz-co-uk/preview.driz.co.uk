import React from "react";

declare global {
  interface Window {
    __theme: string;
    __setPreferredTheme: (theme: string) => void;
  }
}

const darkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const lightIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const Header: React.FC = () => {
  return (
    <>
      <div className="flex p-8">
        <div className="flex dark:hidden visible">
          <button
            type="button"
            aria-label="Use dark mode"
            onClick={() => {
              window.__setPreferredTheme("dark");
            }}
            className="flex w-10 h-10 rounded-full items-center justify-center hover:bg-black hover:bg-opacity-25"
          >
            {darkIcon}
          </button>
        </div>
        <div className="dark:flex hidden visible">
          <button
            type="button"
            aria-label="Use light mode"
            onClick={() => {
              window.__setPreferredTheme("light");
            }}
            className="flex w-10 h-10 rounded-full items-center justify-center hover:bg-white hover:bg-opacity-25"
          >
            {lightIcon}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
