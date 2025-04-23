import { CloudDrizzle, LucideMoon, LucideSunDim } from "lucide-react";

interface HeaderProps {
  toggleTheme: () => void;
  className?: string;
}

export default function Header({ toggleTheme, className }: HeaderProps) {
  return (
    <>
      <header
        className={`sticky top-0 z-50 flex p-2 md:px-6 border-b border-theme ${className}`}
      >
        <div className="flex flex-1 items-center">
          <CloudDrizzle />
        </div>
        <div className="flex flex-1 justify-end">
          <button
            onClick={toggleTheme}
            className="size-8 flex items-center justify-center rounded-full cursor-pointer"
          >
            <LucideMoon
              className="flex dark:hidden"
              onClick={() => {
                localStorage.setItem("theme", "dark");
              }}
            />
            <LucideSunDim
              className="hidden dark:flex"
              onClick={() => {
                localStorage.setItem("theme", "light");
              }}
            />
          </button>
        </div>
      </header>
    </>
  );
}
