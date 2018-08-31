// Array of shortened month names
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

var today = new Date();

// Date number
var day = today.getUTCDate();
// Month name
var month = monthNames[today.getMonth()];
// Year number
var year = today.getFullYear();

// Display date
var displayDate = month + ' ' + day + ' ' + year;
// Selects span containing date
var dateContainer = document.getElementById('date');
// Changes text of span to current date
dateContainer.innerHTML = displayDate;