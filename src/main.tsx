import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import WeatherData from "./context/weather.provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WeatherData>
      <App />
    </WeatherData>
  </StrictMode>
);
