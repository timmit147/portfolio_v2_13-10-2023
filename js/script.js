var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector("menu");

hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');
});



document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('#index h1');
  
    if (titleElement) {
      animateTitle(titleElement);
    }
  });
  
  async function animateTitle(titleElement) {
    const text = titleElement.textContent;
    const random = "*&^%$#@?{!/.><=";
  
    for (let i = 0; i < text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 100));
      titleElement.textContent = titleElement.textContent.replace(titleElement.textContent.charAt(i), random[i]);
    }
  
    await new Promise(resolve => setTimeout(resolve, 100));
  
    for (let i = 0; i < text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 100));
      titleElement.textContent = titleElement.textContent.replace(titleElement.textContent.charAt(i), text[i]);
    }
  }
  