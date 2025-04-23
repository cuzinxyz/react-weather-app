import "./main.css";
import Header from "./components/Header";
import backgroundImg from "./assets/cloudy.jpg";
import backgroundImgAlt from "./assets/cloudy-alt.jpg";
import {
  LocateIcon,
  LucideThermometerSun,
  LucideThermometerSnowflake,
  Droplets,
  Wind,
  User,
} from "lucide-react";
import { useState } from "react";
import Forecast from "./components/Forecast";
import { useWeather } from "./context/weather.context";
import HourlyReadings from "./components/HourlyReadings";
import Analytics from "./components/Analytics/Analytics";
import Recommendation from "./components/Analytics/Recommendation";
import Graph from "./components/Graph";

export default function App() {
  const { weather, hourlyWeather, weatherTrend } = useWeather();
  console.log(weather);

  const [unit, setUnit] = useState(
    localStorage.getItem("preferred-unit") || "F"
  );

  const toggleUnit = () => {
    const newUnit = unit === "F" ? "C" : "F";
    setUnit(newUnit);
    localStorage.setItem("preferred-unit", newUnit);
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <div className="flex flex-col h-screen w-full bg-theme transition-colors duration-300 overflow-auto">
        <Header toggleTheme={toggleTheme} className={"flex lg:hidden"}></Header>
        <main className="flex-1 flex flex-col justify-center p-2 md:px-6 lg:p-0 lg:flex-row">
          <div className="border border-theme sticky top-0 max-h-screen flex flex-1 flex-col py-3 gap-4 items-center rounded-xl lg:rounded-none lg:border-0 lg:border-r overflow-hidden">
            <img
              src={backgroundImg}
              className="absolute h-full w-full object-cover inset-0 opacity-50"
              alt=""
            />
            <div className="relative flex items-center gap-2 lg:mb-auto">
              <LocateIcon size={20} className="mb-0.5" />
              <h2 className="text-lg lg:text-xl font-cabinet font-bold">
                {weather?.location}
              </h2>
            </div>

            <div className="relative flex flex-col sm:flex-row lg:flex-col items-center my-auto gap-3 md:gap-4">
              <div className="flex gap-3 items-center">
                <img
                  src={weather?.icon}
                  className="size-[50px] lg:size-[90px] 2xl:size-[100px]"
                  alt=""
                />
                <p
                  className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-cabinet cursor-pointer select-none"
                  onClick={toggleUnit}
                >
                  {unit === "C" ? weather?.temp_c : weather?.temp_f}
                  <span className="text-lg font-semibold">{unit}</span>
                </p>
                <p className="text-base md:text-lg lg:text-xl capitalize ml-4">
                  {weather?.condition}
                </p>
              </div>

              <div className="flex gap-4 lg:gap-30 text-sm md:text-base lg:text-lg xl:text-4xl">
                <p className="flex items-center gap-1">
                  <LucideThermometerSun color="red" size={20} opacity="70%" />
                  {weather?.high}
                </p>
                <p className="flex items-center gap-1">
                  <LucideThermometerSnowflake
                    color="skyblue"
                    size={20}
                    opacity="70%"
                  />
                  {weather?.low}
                </p>
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-2 lg:gap-4 w-full max-w-md px-2">
              <div className="flex items-center gap-2 p-4 rounded-xl backdrop-blur-md bg-theme-foreground border border-theme">
                <Droplets size={20} className="text-blue-400" />
                <div>
                  <p className="text-sm opacity-70">Humidity</p>
                  <p className="font-medium">{weather?.humidity}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-4 rounded-xl backdrop-blur-md bg-theme-foreground border border-theme">
                <Wind size={20} className="text-gray-400" />
                <div>
                  <p className="text-sm opacity-70">Wind</p>
                  <p className="font-medium">{weather?.windSpeed}</p>
                </div>
              </div>
            </div>

            <Forecast
              className="hidden lg:flex w-full flex-col mt-auto relative"
              unit={unit}
            />
          </div>

          <div className="flex flex-1 flex-col gap-4 z-10 justify-between backdrop-blur-2xl">
            <Header toggleTheme={toggleTheme} className={"hidden lg:flex"} />

            <div className="lg:px-6 max-lg:mt-8 flex gap-1.5">
              <User size={20} className="mt-0.5 lg:hidden" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-cabinet">
                Good morning, Creative Ambition
              </h2>
            </div>

            <div className="flex flex-2 flex-col md:flex-row gap-3 rounded-lg lg:px-6">
              <div className="flex flex-col flex-1 md:max-w-[50%] border border-theme rounded-xl justify-center min-h-fit">
                <div className="hidden md:flex relative h-30 border border-theme flex-1 items-center justify-center m-2 rounded-2xl overflow-hidden">
                  <img
                    className="absolute object-cover inset-0 opacity-90"
                    src={backgroundImgAlt}
                    alt=""
                  />
                  <Graph unit={unit} data={hourlyWeather} mini />
                </div>

                <HourlyReadings unit={unit} />
              </div>

              <div className="flex flex-1 flex-col md-max-w-[50%] border border-theme rounded-xl items-center justify-center">
                <Analytics unit={unit} />
                <div className="hidden md:flex flex-1 border-t border-theme">
                  <Recommendation unit={unit} />
                </div>
              </div>
            </div>

            <div className="relative border border-theme flex flex-3 items-center justify-center rounded-xl min-h-60 max-h-100 lg:mx-6 lg:mb-6">
              <img
                src={backgroundImgAlt}
                className="absolute h-full w-full object-cover inset-0 rounded-xl"
                alt=""
              />
              <Graph unit={unit} data={weatherTrend} />
            </div>

            <div className="border border-theme rounded-lg flex md:hidden">
              <Recommendation unit={unit} />
            </div>
          </div>
        </main>

        <Forecast className="lg:hidden" unit={unit} />
      </div>
    </>
  );
}
