import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const city = process.env.CITY || "London";
const state = process.env.STATE || "";
const country = process.env.COUNTRY || "England";

const options = {
    method: "GET",
    url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
    params: {
        city,
        state,
        country,
    },
    headers: {
        "X-RapidAPI-Key": process.env.API_KEY || null,
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};

// Validate Rapid API key
if (options.headers["X-RapidAPI-Key"] === null) {
    console.error("Invalid API key. Register at https://rapidapi.com/apininjas/api/weather-by-api-ninjas/");
    process.exit();
}

const get_weather_data = async () => {
    console.log("Loading...");
    try {
        const response = await axios.request(options);
        console.log("Response status:", response.status);
        const data = response.data;
        data.city = city;
        data.state = state;
        data.country = country;
        console.log(data);
        const jsonData = JSON.stringify(data);
        fs.writeFile("weather.json", jsonData, err => {
            if (err) {
                console.error("Error writing API data to weather.json file:", err);
            } else {
                console.log("File weather.json written successfully.");
            }
        });
    } catch (error) {
        console.error(error);
    }
};

get_weather_data();
