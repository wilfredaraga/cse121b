/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Wilfred Eiron Araga";
let currentYear = new Date().getFullYear();
let profilePicture = "images/placeholder.png";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute ("src", profilePicture);
imageElement.setAttribute ("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
let favFood = ["Apple", " Orange", " Grapes", " Banana"];
let favFood2 = " Strawberry";
favFood.push(favFood2);
foodElement.innerHTML += `<br>${favFood}`;
favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;




