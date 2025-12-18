const convertToCelsius = function(inputFahrenheit) {
  let tempCelsius = (inputFahrenheit - 32) * (5/9);
  let roundedCelsius = parseFloat(tempCelsius.toFixed(1));
  if (roundedCelsius == 0.0) return 0;
  return roundedCelsius;
};

const convertToFahrenheit = function(inputCelsius) {
  let tempFahrenheit = (inputCelsius * (9/5) + 32);
  let roundedFahrenheit = parseFloat(tempFahrenheit.toFixed(1));
  if (roundedFahrenheit == 32.0) return 32;
  return roundedFahrenheit;
};

convertToCelsius();
convertToFahrenheit();

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
