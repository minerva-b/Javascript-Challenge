// Assign a variable and gather the data from 'data.js':
var tableData = data;

// Creating a reference to the table body:
var tbody = d3.select("tbody");

// Loop through each object in the array:
// Then append each object to the table rows:
// Within that loop, loop through each of the paired elements [key, value]:
// Then append after each paired element to the table cells:
// Show each entry into the table:
tableData.map((UFOsightings) => {
    var row = tbody.append("tr");
    Object.entries(UFOsightings).map(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Using a form so the user can filter through the data of UFO sightings:
// Selecting the 'filter table' aka '#filter-btn' button:
var button = d3.select("#filter-btn");
// Selecting the '.form-control' form:
var form = d3.select("#form");

// Creating event handlers:
button.on("click", runEnter);
form.on("submit", runEnter);

// Completing the event handler function for the form:
// Creating a function with the ability to search by 'date', 'city', 'state', 'country', and 'shape':
function runEnter() {

    // Halting the page from automatically refreshing:
    d3.event.preventDefault();

    // Selecting the input field elements:
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
 
    // Getting the value property of the input field elements:
    var inputDateValue = inputDate.property("value");
    var inputCityValue = inputCity.property("value");
    var inputStateValue = inputState.property("value");
    var inputCountryValue = inputCountry.property("value");
    var inputShapeValue = inputShape.property("value");

    // Clearing the existing tableData from the page:
    tbody.html("");

    // Creating the filter search for 5 elements (date, city, state, country, and shape):
    var filteredDate = tableData.filter(searchDate => searchDate.datetime === inputDateValue);
    var filteredCity = tableData.filter(searchCity => searchCity.city === inputCityValue);
    var filteredState = tableData.filter(searchState => searchState.state === inputStateValue);
    var filteredCountry = tableData.filter(searchCountry => searchCountry.country === inputCountryValue);
    var filteredShape = tableData.filter(searchShape => searchShape.shape === inputShapeValue);

    // Loop through the filtered data based on user input elements:
    // Declaring a new variable that should filter anywhere between 1-5 inputs:
    // Then, appending to the tableData:
    var allFilteredData = (filteredDate && filteredCity && filteredState && filteredCountry && filteredShape)

    // ^^^REVISIT this section of code to be able to successfully run all 5 filters all at once and individually^^^ //
    // Note to self: Using && works to run all 5 filters together and filteredShape alone
    // Whereas using || works to run all 5 filters together and filteredDate alone
    // (filteredDate || filteredCity || filteredState || filteredCountry || filteredShape) 

    allFilteredData.map((UFOsightings) => {
        var row = tbody.append("tr");
        Object.entries(UFOsightings).map(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    // filteredCity.map((UFOsightings) => {
    //   var row = tbody.append("tr");
    //   Object.entries(UFOsightings).forEach(([key, value]) => {
    //     var cell = row.append("td");
    //     cell.text(value);
    //   });
    // });
    // filteredState.map((UFOsightings) => {
    //   var row = tbody.append("tr");
    //   Object.entries(UFOsightings).forEach(([key, value]) => {
    //     var cell = row.append("td");
    //     cell.text(value);
    //   });
    // });
    // filteredCountry.map((UFOsightings) => {
    //   var row = tbody.append("tr");
    //   Object.entries(UFOsightings).forEach(([key, value]) => {
    //     var cell = row.append("td");
    //     cell.text(value);
    //   });
    // });
    // filteredShape.map((UFOsightings) => {
    //   var row = tbody.append("tr");
    //   Object.entries(UFOsightings).forEach(([key, value]) => {
    //     var cell = row.append("td");
    //     cell.text(value);
    //   });
    // });
};

// Creating a function to refresh the table:
function refreshPage(){
  window.location.reload();
} 