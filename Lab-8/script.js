document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function (event) {
        const color = prompt('Enter a color:');
        if (color) {
            button.style.backgroundColor = color;
        }
    });
});