const apiKey = "528f3ce46e12dced0a96c1363cd5dfcc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.getElementById("searchBtn");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    if(response.status == 404) {
        document.querySelector(".error h3").style.display = "block";
        return;
    } else {
        document.querySelector(".error h3").style.display = "none";
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    console.log(data.weather[0].main);

    if(data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else
    if(data.weather[0].main === "Haze") {
        weatherIcon.src = "images/clouds.png";
    } else
    if(data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
    } else
    if(data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png";
    } else
    if(data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else
    if(data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png";
    }
}

checkWeather("Ahmedabad");

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
searchBox.addEventListener("keydown", function(event) {
    // Check if the key pressed is the "Enter" key (keyCode 13)
    if (event.keyCode === 13) {
        // Prevent the default form submission
        event.preventDefault();

        // Programmatically click the submit button
        searchBtn.click();
    }
});