function validateForm() {
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name === "" || username === "" || mobile === "" || email === "" || password === "") {
        alert("All fields must be filled out");
        return false;
    }

    if (!/^\d{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // If all validations pass, allow the form to be submitted
    return true;
}
