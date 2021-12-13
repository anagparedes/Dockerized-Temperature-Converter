const {
  getCelsiusToFahrenheit,
  getCelsiusToKelvin,
  getFahrenheitToCelsius,
  getFahrenheitToKelvin,
  getKelvinToFahrenheit,
  getKelvinToCelsius,
} = require('../controllers/converter.controller');

module.exports = (app) => {
  app.get('/fahrenheit/:value/celsius', getFahrenheitToCelsius);
  app.get('/fahrenheit/:value/kelvin', getFahrenheitToKelvin);
  app.get('/celsius/:value/fahrenheit', getCelsiusToFahrenheit);
  app.get('/celsius/:value/kelvin', getCelsiusToKelvin);
  app.get('/kelvin/:value/fahrenheit', getKelvinToFahrenheit);
  app.get('/kelvin/:value/celsius', getKelvinToCelsius)
};
