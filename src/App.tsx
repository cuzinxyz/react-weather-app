import "./main.css";
import Header from "./components/Header";

export default function App() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <div className="flex flex-col h-screen w-full bg-theme transition-colors duration-300 overflow-auto">
        <Header toggleTheme={toggleTheme}></Header>
      </div>
    </>
  );
}
