"use strict";

let cities = [
  { id: 1, name: "Pittsburgh, PA", latitude: 40.44068116260463, longitude: -79.99595287604313 },
  { id: 2, name: "Clevland, OH", latitude: 40.31012963430343,  longitude:-82.7894508558714},
  { id: 3, name: "Los Angeles, CA", latitude:34.08802478000309, longitude:-118.26432421334805},
  { id: 4, name: "Jacksonville, FL", latitude:30.32318234794483, longitude: -81.6739334363636},
];
let citySelectDropDown = document.querySelector("#citySelectDropDown");



// city drop down
function loadCityDropDown() {
  for (const city of cities) {
    let option = document.createElement("option");
    option.value = city.id;
    option.innerText = city.name;
    citySelectDropDown.appendChild(option);
  }
}
loadCityDropDown();

// set up api
function loadWeatherData() {
    let selectedCity = citySelectDropDown.value;
    
  fetch(`"https://api.weather.gov/points/"${selectedCity.latitude},${selectedCity.longitude}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  fetch("https://api.weather.gov/gridpoints/TOP/`/forecast")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
loadWeatherData();

//https://api.weather.gov/gridpoints/TOP/31,80/forecast //link for data

// function changeCityWeather() {}

// citySelectDropDown.onchange = changeCityWeather;
