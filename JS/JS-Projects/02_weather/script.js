document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherButton = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityInfo = document.getElementById("city-name");
  const temperatureInfo = document.getElementById("temperature");
  const descriptionInfo = document.getElementById("description");
  const errorMessage = document.getElementById("error-messag");

  const API_KEY = "499cec69d9591f497b30206d27dc95d6";

  getWeatherButton.addEventListener("click", async () => {
    const city = cityInput.value.trim();

    //NOTE: If the city string is empty -> returns false
    if (!city) return;

    //NOTE: May throw an error
    //NOTE: Server/database is almost always in another continet so it will take a minute

    try {
      const data = await fetchWeatherData(city);
      displyWeatherData(data);
    } catch (err) {
      showError();
    }
  });
  /**
   * Fetches the Weather Data from our api call
   * @param {object} city
   */
  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log(response);

    if (!response.ok) {
      throw new Error("City Not Found");
    }
    const data = await response.json();
    return data;
  }

  /**
   *
   * @param {string} weatherData
   */
  function displyWeatherData(data) {
    console.log(data);
    const { name, main, weather } = data;
    cityInfo.textContent = name;

    temperatureInfo.textContent = `Temperature : ${Math.round(main.temp)}`;
    descriptionInfo.textContent = `Weather : ${weather[0].description}`;

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }
});
