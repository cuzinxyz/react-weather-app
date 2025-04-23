import { createContext, useContext } from "react";
import { WeatherContextType } from "../types/weather.types";

export const WeatherContext = createContext<WeatherContextType>({
  weather: {
    location: "unavailable",
    temperature: "__",
    condition: "weather unavailable",
    high: "__",
    low: "__",
    humidity: "__",
    windSpeed: "__",
  },
  forecast: [],
  hourlyWeather: [],
  weatherTrend: [],
});

export const useWeather = () => useContext(WeatherContext);
