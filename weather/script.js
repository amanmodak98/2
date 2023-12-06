function getWeather() {
    const cityInput = document.getElementById("cityInput").value;
    const apiKey = "2ef13c52ff58b2157ed17d8670429677";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("weatherInfo").innerHTML = "City not found";
            } else {
                // Use the actual fetched data
                processWeatherData(data);
            }
        })
        .catch(error => console.error("Error fetching weather data:", error));
}

// Define a callback function to process the weather data
function processWeatherData(data) {
    console.log("Processing weather data:");
    console.log("Location:", data.name);
    console.log("Temperature:", data.main.temp);
    console.log("Description:", data.weather[0].description);
    // Add more processing logic as needed

    // Example: Update an HTML element with the weather information
    const weatherInfoElement = document.getElementById("weatherInfo");
    weatherInfoElement.innerHTML = `Location: ${data.name}<br>Temperature: ${data.main.temp}°C<br>Description: ${data.weather[0].description}`;
}
