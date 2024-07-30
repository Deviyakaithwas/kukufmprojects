// script.js
// Add event listener to nav links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', event => {
        // Prevent default link behavior
        event.preventDefault();
        // Get the href attribute of the link

        event.preventDefault();
        const href = link.getAttribute('href');
        const element = document.querySelector(href);

        element.scrollIntoView({ behavior: 'smooth' });

        

        // Add animation to navigate to different sections
        
        document.querySelector(event.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });

    });
});