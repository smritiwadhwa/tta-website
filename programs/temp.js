const celciusInput = document.querySelector("#celcius > input");
const farenheightInput = document.querySelector("#farenheight > input");
const kelvinInput = document.querySelector("#kelvin > input");

function roundNum(num) {
  return Math.round(num*100)/100;
}

function celciusToFarenheightAndKelvin() {
  const cTemp = parseFloat(celciusInput.value);
  const fTemp = (cTemp * (9/5)) + 32;
  const kTemp = cTemp + 273.15;
  farenheightInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);

};

function farenheightToCelciusAndKelvin() {
  const fTemp = parseFloat(farenheightInput.value);
  const cTemp = (fTemp - 32) * (5/9);
  const kTemp = (fTemp + 459.67) * (5/9);
  celciusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelciusAndFarenheight() {
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const fTemp = 9/5 * (kTemp - 273) + 32;
  celciusInput.value = roundNum(cTemp);
  farenheightInput.value = roundNum(fTemp);
}

function main() {
  celciusInput.addEventListener("input", celciusToFarenheightAndKelvin);
  farenheightInput.addEventListener("input", farenheightToCelciusAndKelvin);
  kelvinInput.addEventListener("input", kelvinToCelciusAndFarenheight);
}
main();
