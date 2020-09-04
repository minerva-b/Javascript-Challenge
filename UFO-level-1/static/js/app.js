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

// Using a form so the user(s) can filter through the dates of UFO sightings:
// Selecting the 'filter table' aka '#filter-btn' button:
var button = d3.select("#filter-btn");

// Selecting the '.form-control' form:
var form = d3.select("#form");

// Creating event handlers:
button.on("click", runEnter);
form.on("submit", runEnter);

// Completing the event handler function for the form:
function runEnter() {

    // Halting the page from automatically refreshing:
    d3.event.preventDefault();

    // Selecting the input field element:
    var inputElement = d3.select("#datetime");

    // Getting the value property of the input field element:
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Removing the tableData from the page:
    tbody.html("");

    // Creating filter search:
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);

    // Loop through the filtered data based on user input:
    filteredData.forEach((date_search) => {
        var row = tbody.append("tr");
        Object.entries(date_search).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
};