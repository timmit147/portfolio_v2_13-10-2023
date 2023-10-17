// Get the hamburger element
var hamburger = document.querySelector('.hamburger');

// Get the menu element
var menu = document.querySelector("menu");

// Check if the 'active' class is stored in localStorage and apply it if present
if (localStorage.getItem('menuActive') === 'true') {
    menu.classList.add('active');
}

// Toggle the 'active' class on click
hamburger.addEventListener('click', function () {
    // Toggle the 'active' class on the menu element
    menu.classList.toggle('active');

    // Store the current state in localStorage
    localStorage.setItem('menuActive', menu.classList.contains('active'));
});


document.addEventListener("DOMContentLoaded", function() {
    // Delay for 500 milliseconds (adjust the value as needed)
    setTimeout(function() {
        document.querySelector("#loading").style.width = "0px";
    }, 500);
});

function handleClick(event) {
    if (event.target.tagName === 'A' && event.target.hasAttribute('href')) {
        event.preventDefault();

        // Disable click event for a short period
        document.body.style.pointerEvents = 'none';

        document.querySelector("#loading").style.width = "100vw";

        setTimeout(function () {
            window.location.href = event.target.href;

            // Enable click event after the redirect
            document.body.style.pointerEvents = 'auto';
        }, 500); // Adjust the delay as needed
    }
}

document.body.addEventListener("click", handleClick);