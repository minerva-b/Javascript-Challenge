// Assign a variable and gather the data from 'data.js':
var tableData = data;

// Creating a reference to the table body:
var tbody = d3.select("tbody");

// Loop through each object in the array:
// Then append each object to the table rows:
// Within that loop, loop through each of the paired elements [key, value]:
// Then append after each paired element to the table cells:
// Show each entry into the table:
tableData.forEach((UFOsightings) => {
    var row = tbody.append("tr");
    Object.entries(UFOsightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Using a form so the user(s) can filter through the tags of UFO sightings:
// Selecting the 'filter table' aka '#filter-btn' button:
var button = d3.select("#filter-btn");
// Selecting the '.form-control' form:
var form = d3.select("#form");
// // Selecting the area for output results:
// var results = d3.select("#searchResults");

// Creating event handlers:
button.on("click", runEnter);
form.on("submit", runEnter);

// Completing the event handler function for the form:
// Creating a function with the ability to search by 'date', 'city', 'state', 'country', and 'shape':
function runEnter() {

    // Halting the page from automatically refreshing:
    d3.event.preventDefault();

    // Selecting the input field elements:
    var inputDate = d3.select("#searchDate");
    // var inputCity = d3.select("#searchCity");
    // var inputState = d3.select("#searchState");
    // var inputCountry = d3.select("#searchCountry");
    // var inputShape = d3.select("#searchShape");

    // Getting the value property of the input field elements:
    var inputDateValue = inputDate.property("value");
    // console.log(inputDateValue);
    // var inputCityValue = inputCity.property("value");
    // // console.log(inputCityValue);
    // var inputStateValue = inputState.property("value");
    // // console.log(inputStateValue);
    // var inputCountryValue = inputCountry.property("value");
    // // console.log(inputCountryValue);
    // var inputShapeValue = inputShape.property("value");
    // // console.log(inputShapeValue);

    // Clearing the existing tableData from the page:
    tbody.html("");

    // Creating the filter search for 5 elements (date, city, state, country, and shape):
    var filteredDate = tableData.filter(date => date.searchDate === inputDateValue);
    // console.log(filteredDate);
    // var filteredCity = tableData.filter(city => city.searchCity === inputCityValue);
    // // console.log(filteredCity);
    // var filteredState = tableData.filter(state => state.searchState === inputStateValue);
    // // console.log(filteredState);
    // var filteredCountry = tableData.filter(country => country.searchCountry === inputCountryValue);
    // // console.log(filteredCountry);
    // var filteredShape = tableData.filter(shape => shape.searchShape === inputShapeValue);
    // // console.log(filteredShape);

    // Loop through the filtered data based on user input elements:
    filteredDate.forEach((dateFilter) => {
        var row = tbody.append("tr");
        Object.entries(dateFilter).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    // filteredCity.forEach((cityFilter) => {
    //   var row = tbody.append("tr");
    //   Object.entries(cityFilter).forEach(([key, value]) => {
    //     var cell = row.append("td");
    //     cell.text(value);
    //   });
    // });
    // filteredState.forEach((stateFilter) => {
    //   var row = tbody.append("tr");
    //   Object.entries(stateFilter).forEach(([key, value]) => {
    //     var cell = row.append("td");
    //     cell.text(value);
    //   });
    // });
    // filteredCountry.forEach((countryFilter) => {
    //   var row = tbody.append("tr");
    //   Object.entries(countryFilter).forEach(([key, value]) => {
    //     var cell = row.append("td");
    //     cell.text(value);
    //   });
    // });
    // filteredShape.forEach((shapeFilter) => {
    //   var row = tbody.append("tr");
    //   Object.entries(shapeFilter).forEach(([key, value]) => {
    //     var cell = row.append("td");
    //     cell.text(value);
    //   });
    // });
};