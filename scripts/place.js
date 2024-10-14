// Static temperature and wind speed values 
let temperature = 45; // Fahrenheit
let windSpeed = 10;    // mph

// Function to calculate wind chill based on temperature and wind speed
function calculateWindChill(temp, windSpeed) {
    return (
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1); // Return wind chill rounded to 1 decimal place
}

// Function to check if the wind chill calculation is viable
function displayWindChill() {
    const windChillElement = document.getElementById('windChill');
    
    // Check conditions 
    if (temperature <= 50 && windSpeed > 3) {
        let windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill} °F`; 
    } else {
        windChillElement.textContent = 'N/A'; 
    }
}

// Call the function when the page loads
window.onload = function() {
    displayWindChill();
};