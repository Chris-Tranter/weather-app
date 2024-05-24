// THIS https://api.openweathermap.org/data/2.5/weather?q    =trowbridge    &appid=API KEY  &units=metric

const apiKey = "a3f92f91eb9c3564f2a410ca17f082ba";
const units = "metric";

let forecast = {
    bath: "15",
    bristol: "16",
    cardiff: "17"
};

// create -search + submit + output  elements
const inputElement = document.getElementById("city-input");
const buttonElement = document.getElementById("submit-button");
const outputElement = document.getElementById("output-area");
//calling the API from the openweathermap website URL
const url = `https://api.openweathermap.org/data/2.5/weather?q=cardiff&appid=a3f92f91eb9c3564f2a410ca17f082ba&units=metric`;

//a fetch function with a data response from apiURL website
fetch(url)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (data) {
        console.log(data.main.temp);
});



// when -search- is clicked a function starts *if* the city matches the API's =correct answer *else* =error 
buttonElement.addEventListener("click", function() {
    const userInput = inputElement.value;
    const sanitizedUserInput = userInput.toLowerCase();
    let output;
    if (sanitizedUserInput in forecast) {
        output = `The current weather in ${userInput} looks like ${forecast[sanitizedUserInput]}°c`;
    } else {
        output = `${userInput} doesn't match with our database. Please try again`;
    }
    outputElement.innerText = output;
});

/*button click audio
const audio = new Audio();
audio.src = "../assets/sounds/soft.mp3";
*/ 