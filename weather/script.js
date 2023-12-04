function getWeather() {
    const cityInput = document.getElementById("cityInput").value;
    const apiKey = "2ef13c52ff58b2157ed17d8670429677";
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=2ef13c52ff58b2157ed17d8670429677&units=metric';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("weatherInfo").innerHTML = "City not found";
            } else {
                const weatherInfo = `
                    <p>City: ${data.name}, ${data.sys.country}</p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
                document.getElementById("weatherInfo").innerHTML = weatherInfo;
            }
        })
        .catch(error => console.error("Error fetching weather data:", error));
}
