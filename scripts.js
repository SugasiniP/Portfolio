function handleSubmit() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for reaching out, ' + name + '! I will get back to you soon.');
        // Optionally, you could send the form data to an API or store it in a database
    } else {
        alert('Please fill in all fields before submitting.');
    }
}