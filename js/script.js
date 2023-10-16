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
    document.querySelector("#loading").style.width = "0px";
});


function handleClick(event) {
    // Check if the clicked element is an anchor with an href attribute
    if (event.target.tagName === 'A' && event.target.hasAttribute('href')) {
        // Prevent the default link behavior (navigation)
        event.preventDefault();

        // Set the opacity to 0
        document.querySelector("#loading").style.width = "100vw";

        // Wait for 2 seconds before navigating to the new page
        setTimeout(function () {
            // Navigate to the link's href
            window.location.href = event.target.href;
        }, 500);
    }
}

// Attach the handleClick function to the click event of the body
document.body.addEventListener("click", handleClick);