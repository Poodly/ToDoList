// -<Weather>- //--------------------------------------------------------------------------------------------------
const API_KEY = "563d23aeec897f984454a9d2dae76d4f"

function onGeoOk(position) {
    const lat = position.coords.latitude;      
    const lon = position.coords.longitude;      
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:nth-child(1)");
            const city    = document.querySelector("#weather span:nth-child(2)");
            city.   innerText = `${data.name}`;
            weather.innerText = `${data.weather[0].main} ${data.main.temp}°`;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);






































