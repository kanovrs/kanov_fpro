const apiKey = '0cfbe8511567c9bdd1c52fe7c460d4ba';
const weatherBlock = document.querySelector('#weatherBlock');
       
function getWeather() {
            const cityInput = document.getElementById('cityInput').value;
            const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${apiKey}&lang=ua`;
            weatherBlock.style.display = 'flex';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const pressure = data.main.pressure;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const windDirection = data.wind.deg;
            const iconId = data.weather[0].icon;
            const weatherIcon = `http://openweathermap.org/img/w/${iconId}.png`;

            document.getElementById('cityName').textContent = `Місто: ${cityName}`;
            document.getElementById('temperature').textContent = `Температура: ${temperature}°C`;
            document.getElementById('pressure').textContent = `Тиск: ${pressure} hPa`;
            document.getElementById('description').textContent = `Опис: ${description}`;
            document.getElementById('humidity').textContent = `Вологість: ${humidity}%`;
            document.getElementById('wind').textContent = `Швидкість вітру: ${windSpeed} m/s`;
            document.getElementById('windDirection').textContent = `Напрям вітру: ${windDirection}°`;
            document.getElementById('weatherIcon').src = weatherIcon;
                })
        .catch(error => {
            console.error('Помилка запиту:', error);
            weatherBlock.style.display = 'none';
            
            alert('Не вдалося знайти погодові дані для цього міста.');
                });
        }