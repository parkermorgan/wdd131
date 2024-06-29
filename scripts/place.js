
function calculateWindChill(temperature, windSpeed) {
    
    if (temperature <= 50 && windSpeed > 3) {
        
        let windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(1); 
    } else {
        return "N/A";
    }
}

let temperature = 70; 
let windSpeed = 2;     

let windChillFactor = calculateWindChill(temperature, windSpeed);

let windChillElement = document.getElementById('wind-chill');
windChillElement.textContent = windChillFactor;