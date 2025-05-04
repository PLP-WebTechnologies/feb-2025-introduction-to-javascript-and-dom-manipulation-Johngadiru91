const button = document.getElementById('myButton');
const dynamicText = document.getElementById('dynamicText');
const mySpan = document.getElementById('mySpan');
const container = document.getElementById('container');

let isAdding = true;

button.addEventListener('click', function() {
    // Change text content
    dynamicText.textContent = 'Text Updated!';

    // Toggle CSS styles
    mySpan.classList.toggle('highlight');

    // Add or remove element
    if (isAdding) {
        const newElement = document.createElement('p');
        newElement.textContent = 'New Element Added!';
        newElement.classList.add('added-element');
        container.appendChild(newElement);
        button.textContent = 'Remove Last Element';
    } else {
        const lastAdded = container.querySelector('.added-element:last-of-type');
        if (lastAdded) {
            container.removeChild(lastAdded);
        }
        button.textContent = 'Add New Element';
    }
    isAdding = !isAdding;
});