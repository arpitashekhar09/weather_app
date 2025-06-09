const apiKey = 'f9d9ab49e97a05b827cee41a82871af5';

const getWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const data = await response.json();
    return data;
};

export default getWeather;
