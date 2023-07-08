import axios, { Axios } from "axios";

const API_KEY = process.env.API_KEY || null;

const COUNTRY = process.env.COUNTRY || "England";
const CITY = process.env.CITY || "London";
const LATITUDE = process.env.LATITUDE || "51.5085";
const LONGITUDE = process.env.LONGITUDE || "0.1257";

process.stdout.write("Hello, World!");
let weather_data = null;

const fetch_weather_data = async (): Promise<void> => {
    try {
        const response = await __(
            "https://open-meteo.com/en/docs#latitude=20.1468&longitude=99.8526&hourly=temperature_2m,relativehumidity_2m,rain,showers,weathercode,cloudcover,visibility&daily=sunrise,sunset&current_weather=true&timezone=Asia%2FBangkok"
        );
        weather_data = await response.json();
    } catch (error) {
        throw new Error("Failed to retrieve weather data from server");
    }
};
