import axios from "axios";

const options = {
    method: "GET",
    url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
    params: {
        city: process.env.CITY || "London",
        state: process.env.STATE || "",
        country: process.env.COUNTRY || "England",
    },
    headers: {
        "X-RapidAPI-Key": process.env.API_KEY || null,
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};

if (options.headers["X-RapidAPI-Key"] === null) {
    throw new Error("Invalid API key. Register at https://rapidapi.com/apininjas/api/weather-by-api-ninjas/");
}

let weather_data = null;

const get_weather_data = async () => {
    try {
        const response = await axios.request(options);
        console.log("Response status:", response.status);
        weather_data = response.data;
    } catch (error) {
        console.error(error);
    }
};
