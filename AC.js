document.getElementById('patient-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('add_patient.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("Patient information added successfully!");
        document.getElementById('patient-form').reset(); // Reset form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error adding the patient data.');
    });
});
