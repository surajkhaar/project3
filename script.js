const apiKey = "a8926ddad5c9a0e250dda8360ea8d694"; // 🛑 Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const weatherResult = document.getElementById('weatherResult');

    // Check if the user has entered a city name
    if (city === "") {
        weatherResult.innerHTML = "Please enter a city name.";
        return;
    }

    try {
        // Fetch weather data from OpenWeatherMap API
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();

        // Check if the city is found
        if (data.cod === "404") {
            weatherResult.innerHTML = "City not found. Please try again.";
        } else {
            // Display the weather data
            weatherResult.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        }
    } catch (error) {
        // If there's an error with the fetch or the API
        weatherResult.innerHTML = "Error fetching data. Please try again later.";
    }
}