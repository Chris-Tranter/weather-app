const apiKey = "a3f92f91eb9c3564f2a410ca17f082ba";
const units = "metric";

let forecast = {
    bath: "15",
    bristol: "16",
    cardiff: "17"
};

// create search and submit elements
const inputElement = document.getElementById("city-input");
const buttonElement = document.getElementById("submit-button");

// when -search- is clicked a function starts *if* the city matches the API's =correct answer *else* =error 
buttonElement = addEventListener('click', function() {
    const userInput = inputElement.value;
    const sanitizedUserInput = userInput.toLowerCase();
    let output;
    if (sanitizedUserInput in forecast) {
        output = `This is the current weather in ${userInput} it looks like ${forecast[sanitizedUserInput]}°c`;
    } else {
        output = `${userInput} doesn't match with our database. Please try again`;
    }
    console.log(output);
});