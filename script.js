//references to HTML user input elements
const totalMiles = document.getElementById("totalMiles");
const milesPerHour = document.getElementById("milesPerHour");
const hoursPerDay = document.getElementById("hoursPerDay");
const totalElevationGain = document.getElementById("totalElevationGain");
const totalDays = document.getElementById("totalDays");
let totalHours = 0;

//takes user imput value of totalElevationGain adds it to totalHours
function addElevationGain() {
  let elevationHours = ((totalElevationGain.value / 1000) * .5 );
  totalHours += elevationHours;
  return totalHours.value;
}

//takes user input values of totalMiles, milesPerHour, totalElevationGain, and hoursPerDay to return value of totalDays rounded to 2 decimal places
function getTotalDays() { 
  totalHours = totalMiles.value / milesPerHour.value;
  totalDays.value = totalHours / hoursPerDay.value;
  totalDays.value = Math.round(totalDays.value * 100) / 100;
  return totalDays.value;
}

//takes user input values for milesPerHour, hoursPerDay, and totalDays to return value of totalMiles rounded to 2 decimal places
function getTotalMiles() {
  totalHours = totalDays.value * hoursPerDay.value;
  totalMiles.value = totalHours * milesPerHour.value;
  totalMiles.value = Math.round(totalMiles.value * 100) / 100;
  return totalMiles.value;
}

totalMiles.addEventListener("keyup", getTotalDays);
milesPerHour.addEventListener("keyup", getTotalDays, getTotalMiles);
hoursPerDay.addEventListener("keyup", getTotalDays, getTotalMiles);
totalElevationGain.addEventListener("keyup", getTotalDays, getTotalMiles);
totalDays.addEventListener("keyup", getTotalMiles);
