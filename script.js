//references to HTML user input elements
let totalMiles = document.getElementById("totalMiles");
let milesPerHour = document.getElementById("milesPerHour");
let hoursPerDay = document.getElementById("hoursPerDay");
let totalElevationGain = document.getElementById("totalElevationGain");
let totalDays = document.getElementById("totalDays");
let totalHours = 0;

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
totalDays.addEventListener("keyup", getTotalMiles);
