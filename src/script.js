const apiKey = "5caf6fd266d1221f86a6dbed19f1db45";

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("result");
  const resultBox = document.getElementById("resultBox");

  if (!city) {
    resultBox.classList.remove("hidden");
    resultDiv.innerHTML = "Please enter a city name";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    resultBox.classList.remove("hidden");

    resultDiv.innerHTML = `
      <h3 class="text-lg font-semibold mb-2">${data.name}</h3>
      <p> Temperature: ${data.main.temp} °C</p>
      <p> ${data.weather[0].description}</p>
      <p> Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    resultBox.classList.remove("hidden");
    resultDiv.innerHTML = error.message;
  }
}
