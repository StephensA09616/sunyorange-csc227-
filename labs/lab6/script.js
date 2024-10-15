const index = {};

function onAddEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name && email) {
        index[name] = email;
        alert('Email added successfully!');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    } else {
        alert('Please enter both name and email.');
    }
}

function onShow() {
    const name = document.getElementById('retrieveName').value;
    const result = document.getElementById('result');
    if (name in index) {
        result.textContent = `Email: ${index[name]}`;
        result.classList.remove('error');
    } else {
        result.textContent = 'Error: Name not found.';
        result.classList.add('error');
    }
}
