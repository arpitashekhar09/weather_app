const getWeather = async (city) => {
  const response = await fetch(`http://localhost:5000/weather?city=${city}`);
  const data = await response.json();
  return data;
};

export default getWeather;
