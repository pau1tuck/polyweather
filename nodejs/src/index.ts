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
        "X-RapidAPI-Key": "ef6b437320msha45a8942110aac3p10b0abjsnf5d68535cfba",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};

// Validate Rapid API key
if (options.headers["X-RapidAPI-Key"] === null) {
    console.log("Invalid API key. Register at https://rapidapi.com/apininjas/api/weather-by-api-ninjas/");
    process.exit();
}

let weather_data = null;

const get_weather_data = async () => {
    console.log("Loading...");
    try {
        const response = await axios.request(options);
        console.log("Response status:", response.status);
        weather_data = response.data;
        console.log(weather_data);
    } catch (error) {
        console.error(error);
    }
};

get_weather_data();
