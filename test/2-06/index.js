const myKey = require("./config");
const API_KEY = myKey;
//console.log(`${API_KEY}`);
const OpenWeatherClient = require("./weather-client");

function formatData(data) {
  const result = `It is now ${data.main.temp}\u00B0C in ${data.name}, ${data.sys.country} `;
  const moreInfo = `Today's weather ${data.weather
    .map((condition) => condition.description)
    .join(", ")} `;
  return result + "\n" + moreInfo;
}

async function weather(city, country) {
  const client = new OpenWeatherClient(API_KEY);
  // console.log(client);
  const currentData = await client.getWeather(city, country);
  // console.log(currentData);
  return formatData(currentData);
}

const args = process.argv.slice(2);
// npm start Berlin Germany
weather(args[0], args[1]).then(console.log).catch(console.error);
