// -<Weather>- //--------------------------------------------------------------------------------------------------
// user의 위치(geolocation)을 주는 함수, 위치정보 가져오기

const API_KEY = "563d23aeec897f984454a9d2dae76d4f"

function onGeoOk(position) {
    //console.log(position);
    const lat = position.coords.latitude;       // lat -->위도
    const lon = position.coords.longitude;      // lon -->경도
    //console.log("You live in", lat, lon);
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






































