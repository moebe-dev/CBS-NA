// sets the current year in the footer
let copyrightYear = document.getElementById("copyrightYear");
let date = new Date();
let year = date.getFullYear();
copyrightYear.innerHTML = year;
