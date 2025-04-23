export interface WeatherData {
  location: string;
  temperature: string | number;
  temp_c?: number;
  temp_f?: number;
  condition: string;
  icon?: string;
  high: string | number;
  low: string | number;
  humidity: string | number;
  windSpeed: string | number;
}

export interface ForecastData {
  time: string;
  temp_f: number;
  temp_c: number;
  condition: string;
  icon: string;
}

export interface HourForecast {
  time: string;
  temp_f: number;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
}

export interface WeatherContextType {
  weather: WeatherData;
  forecast: ForecastData[];
  hourlyWeather: ForecastData[];
  weatherTrend: ForecastData[];
}
