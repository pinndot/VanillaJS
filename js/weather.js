const weather = document.querySelector("#weather");

function getWeatherDescription(code) {
    const weatherConditions = {
        0: "맑음",
        1: "대체로 맑음",
        2: "부분적으로 흐림",
        3: "흐림",
        45: "안개",
        48: "짙은 안개",
        51: "약한 이슬비",
        53: "보통 이슬비",
        55: "강한 이슬비",
        56: "약한 동결 이슬비",
        57: "강한 동결 이슬비",
        61: "약한 비",
        63: "보통 비",
        65: "강한 비",
        66: "약한 동결 비",
        67: "강한 동결 비",
        71: "약한 눈",
        73: "보통 눈",
        75: "강한 눈",
        80: "약한 소나기",
        81: "보통 소나기",
        82: "강한 소나기",
        95: "약한 뇌우",
        96: "뇌우와 약한 우박",
        99: "뇌우와 강한 우박",
    };

    return weatherConditions[code] || "알 수 없음";
}

async function getWeatherData(url) {
    try {
        // fetch를 사용하여 API 호출
        const response = await fetch(url);
        // JSON 형식으로 응답을 변환
        const data = await response.json();
        // 받아온 데이터 출력
        const temperature = data.hourly.temperature_2m[0];
        const weatherCode = data.hourly.weathercode[0];
        const weatherDescription = getWeatherDescription(weatherCode);
        // console.log(data);
        return { temperature, weatherDescription };
    } catch (error) {
        console.error("날씨 정보를 가져오는 데 실패했습니다:", error);
    }
}

async function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,weathercode`;

    const weatherData = await getWeatherData(url);

    // console.log(weatherData.temperature);
    // console.log(weatherData.weatherDescription);
    weather.innerHTML = `[ ${weatherData.temperature}°C | ${weatherData.weatherDescription} ]`;
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
