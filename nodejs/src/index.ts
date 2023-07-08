import axios from "axios";

const options = {
    method: "GET",
    url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
    params: { city: "Seattle" },
    headers: {
        "X-RapidAPI-Key": "ef6b437320msha45a8942110aac3p10b0abjsnf5d68535cfba",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}
