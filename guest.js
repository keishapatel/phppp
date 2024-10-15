function validateForm() {
    const firstName = document.querySelector('input[name="firstName"]').value.trim();
    const lastName = document.querySelector('input[name="lastName"]').value.trim();
    const dob = document.querySelector('input[name="dob"]').value;
    const svvId = document.getElementById('svvId').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const errorDiv = document.getElementById('error');

    // Reset error message
    errorDiv.textContent = '';

    // Check required fields
    if (!firstName || !lastName || !dob || !email) {
        errorDiv.textContent = 'Please fill in all required fields.';
        return false;
    }

    // Validate SVV ID (if provided)
    if (svvId && (svvId.length !== 10 || isNaN(svvId))) {
        errorDiv.textContent = 'SVV Id must be a 10-digit number if provided.';
        return false;
    }

    // Email validation (basic check)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorDiv.textContent = 'Please enter a valid email address.';
        return false;
    }

    return true; // All validations passed
}

// Attach validation to form submission
document.getElementById('registerForm').onsubmit = function() {
    return validateForm();
};
