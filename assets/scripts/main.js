// THIS https://api.openweathermap.org/data/2.5/weather?q    =trowbridge    &appid=API KEY  &units=metric

const apiKey = "a3f92f91eb9c3564f2a410ca17f082ba";
const units = "metric";
// create -search + submit + output  elements
const inputElement = document.getElementById("city-input");
const buttonElement = document.getElementById("submit-button");
const outputElement = document.getElementById("output-area");
const imageElement = document.getElementById("status-image");
const statusElement = document.getElementById("status-text");

// when -search- is clicked a function starts *if* the city matches the API's =correct answer *else* =error 
buttonElement.addEventListener("click", function() {
    const userInput = inputElement.value;
    const sanitizedUserInput = userInput.toLowerCase();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${sanitizedUserInput}&appid=${apiKey}&units=${units}`;
    fetch(url)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (data) {
        let city = data.name;
        let temp = data.main.temp;
        let condition = data.weather[0].main;
        let imgApiCode = data.weather[0].icon;

        //open weathers Live icon apiURL = https://openweathermap.org/img/wn/10d@2x.png
        let imgUrl = `https://openweathermap.org/img/wn/${imgApiCode}@2x.png`;

        outputElement.innerText = `The current weather in ${city} looks like ${temp}°c`;
        statusElement.innerText = `${condition}`;
        imageElement.src = imgUrl;

}); 
});