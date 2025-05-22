const form = document.getElementById('donationForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const age = parseInt(form.age.value.trim());
    const bloodGroup = form.bloodGroup.value.trim();
    const contact = form.contact.value.trim();
    const date = form.date.value.trim();

    if (!name || !age || !bloodGroup || !contact || !date) {
        alert("Please fill in all fields.");
        return;
    }

    if (age < 18 || age > 65) {
        alert("Age must be between 18 and 65 to donate blood.");
        return;
    }

    confirmation.innerHTML = `<strong>${name}</strong><br>Thank you for registering!`;
});
