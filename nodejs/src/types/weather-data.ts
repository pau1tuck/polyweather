export interface WeatherData {
    city?: string;
    state?: string;
    country?: string;
    cloud_pct: number;
    temp: number;
    feels_like: number;
    humidity: number;
    min_temp: number;
    max_temp: number;
    wind_speed: number;
    wind_degrees: number;
    sunrise: number;
    sunset: number;
}
