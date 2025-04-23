import { LucideHistory } from "lucide-react";
import { useWeather } from "../context/weather.context";

export default function Forecast({
  className,
  unit,
}: {
  className?: string;
  unit?: string;
}) {
  const { forecast } = useWeather();

  return (
    <>
      <section className={className}>
        <div className="mb-4 p-2 pb-0 md:px-6 lg:px-4 2xl:px-12 flex items-center gap-2">
          <LucideHistory />
          <h3>Tommorrow&apos;s Forecast</h3>
        </div>

        <div className="flex overflow-x-auto pb-4 px-2 md:px-6 lg:px-4 gap-3 2xl:px-12">
          {forecast.map((hourData, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 min-w-20 rounded-xl bg-theme-foreground border border-theme"
            >
              <p className="font-medium">{hourData.time}</p>
              <img src={hourData.icon} alt="" />
              <p className="mt-2">
                {unit == "C" ? hourData.temp_c : hourData.temp_f}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
