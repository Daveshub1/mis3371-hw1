/*
Program name: patient-form.html
Author: David Joseph
Date created: 09/08/2025
Date last edited: 09/19/2025
Version: 1.0
Description: New patient intake form JS
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () 
{
    output.innerHTML = this.value;
};