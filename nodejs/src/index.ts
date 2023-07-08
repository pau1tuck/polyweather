import fetch, { Response } from "node-fetch";

const API_KEY = process.env.API_KEY || null;

const COUNTRY = process.env.COUNTRY || "England";
const CITY = process.env.CITY || "London";
const LATITUDE = process.env.LATITUDE || "51.5085";
const LONGITUDE = process.env.LONGITUDE || "0.1257";

process.stdout.write("Hello, World!");
let weather_data = null;

const fetch_weather_data = () => {
    fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&hourly=temperature_2m,relativehumidity_2m,rain,weathercode,cloudcover,visibility,windspeed_180m,is_day&daily=sunrise,sunset&current_weather=true&timezone=Asia%2FBangkok`
    )
        .then((response: Response) => response.json())
        .then((data: any) => console.log(data))
        .catch((err: Error) => console.log("Unable to retrieve weather data from server:", err));
};

fetch_weather_data();
