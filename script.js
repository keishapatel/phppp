function validateLoginForm() {
    const username = document.querySelector('input[name="username"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();
    const errorDiv = document.querySelector('.error');

    // Reset error message
    errorDiv.textContent = '';

    // Check for empty fields
    if (!username || !password) {
        errorDiv.textContent = 'Please enter both username and password.';
        return false;
    }

    return true; // All validations passed
}

// Attach validation to form submission
document.querySelector('form').onsubmit = function() {
    return validateLoginForm();
};
