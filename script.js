document.addEventListener('DOMContentLoaded', function() {
    // 1. Change Text Content Dynamically
    function changeText() {
        const dynamicTextElement = document.getElementById('dynamicText');
        dynamicTextElement.textContent = 'Text changed by JavaScript!';
    }
    changeText();

    // 2. Modify CSS Styles
    function changeStyles() {
        const containerElement = document.getElementById('container');
        containerElement.style.backgroundColor = 'lightblue';
        containerElement.style.padding = '20px';
    }
    changeStyles();

    // 3. Add/Remove Element on Button Click
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {
        const newElement = document.createElement('p');
        newElement.textContent = 'This element was added dynamically!';
        const containerElement = document.getElementById('container');

        if (containerElement.contains(document.getElementById('dynamicElement'))) {
            containerElement.removeChild(document.getElementById('dynamicElement'));
        } else {
            newElement.id = 'dynamicElement';
            containerElement.appendChild(newElement);
        }
    });
});