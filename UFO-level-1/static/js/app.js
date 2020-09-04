// Gather data from 'data.js':
var tableData = data;
console.log(data);

// Creating a reference to the table body:
var tbody = d3.select("tbody");

// Loop through each object in the array:
// Then append each object to the table rows:
// Within that loop, loop through each of the paired elements [key, value]:
// Then append after each paired element to the table cells:
// Show each entry into the table:
data.forEach((UFOsightings) => {
    var row = tbody.append("tr");
    Object.entries(UFOsightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

