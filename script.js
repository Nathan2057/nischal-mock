// JavaScript for Portfolio Website

document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio website loaded successfully!");

    // Add a dynamic greeting message based on the time of day
    let greeting = document.createElement("h3");
    let hour = new Date().getHours();
    if (hour < 12) {
        greeting.innerText = "Good Morning! Welcome to my portfolio.";
    } else if (hour < 18) {
        greeting.innerText = "Good Afternoon! Explore my work below.";
    } else {
        greeting.innerText = "Good Evening! Let's connect.";
    }
    greeting.style.color = "#b30000"; // Dark Red
    greeting.style.marginTop = "10px";
    
    document.querySelector("header").appendChild(greeting);

    // Add a simple interactive button for fun
    let button = document.createElement("button");
    button.innerText = "Click Me!";
    button.style.background = "linear-gradient(to right, #b30000, #ffcc00)";
    button.style.color = "white";
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.marginTop = "10px";

    button.addEventListener("click", function() {
        alert("Thank you for visiting my portfolio!");
    });

    document.querySelector("header").appendChild(button);
});
