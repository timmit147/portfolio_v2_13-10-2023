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
