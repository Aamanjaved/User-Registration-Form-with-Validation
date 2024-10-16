document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    clearErrors();

    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();

    if (!name) {
        showError('nameError');
        isValid = false;
    }
    if (!validateEmail(email)) {
        showError('emailError');
        isValid = false;
    }
    if (!/^\d{10}$/.test(phone)) {
        showError('phoneError');
        isValid = false;
    }
    if (!dob) {
        showError('dobError');
        isValid = false;
    }
    if (!gender) {
        showError('genderError');
        isValid = false;
    }
    if (age < 1 || age > 120) {
        showError('ageError');
        isValid = false;
    }
    if (password.length < 6) {
        showError('passwordError');
        isValid = false;
    }
    if (password !== confirmPassword) {
        showError('confirmPasswordError');
        isValid = false;
    }
    if (!address) {
        showError('addressError');
        isValid = false;
    }
    if (!city) {
        showError('cityError');
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
        // You can add further processing here (like sending data to a server)
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(errorId) {
    document.getElementById(errorId).style.display = 'block';
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.style.display = 'none');
}