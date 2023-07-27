// Retrieve the "heading" element
var heading = document.getElementById("heading");

// Change the text content of the "heading element"
heading.textContent = "Welcome to my Website!";

//Retrieve the "button" element
var button = document.getElementById("button");

//Add an event listener to the "button" element
button.addEventListener("click",  function() {
    // Retrieve the "content" element
    var content = document.getElementById("content");

    // Change the text content of the "content element"
    content.textContent = "Thank you for clicking the button!";
});