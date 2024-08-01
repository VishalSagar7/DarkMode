const body = document.querySelector('body');
const button = document.querySelector('button');
const moonIcon = document.getElementById('moon');
const sunIcon = document.getElementById('sun');
const buttonText = document.getElementById('buttonText');
const icons = document.querySelectorAll('i')

let toggle = true;

button.addEventListener('click', () => {

    console.log(icons);
    if (toggle) {
        // Switch to dark mode
        body.style.backgroundColor = 'black';
        button.style.backgroundColor = 'white';
        button.style.color = 'black';
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
        buttonText.textContent = 'Click for light mode';
        
    } else {
        // Switch to light mode
        body.style.backgroundColor = 'white';
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
        buttonText.textContent = 'Click for dark mode';
        
    }

    toggle = !toggle;
});
