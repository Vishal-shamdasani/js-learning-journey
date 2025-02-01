async function fetchWeather() {
    const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=nagpur&format=json&u=f';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1e6bd7eb0cmsh298943e169fc791p18d0f3jsnb62c76ebb3f8',
            'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchWeather();
