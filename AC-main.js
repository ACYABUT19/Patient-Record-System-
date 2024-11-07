
document.getElementById('dob').addEventListener('input', function() {
    const dob = new Date(this.value);
    const age = new Date().getFullYear() - dob.getFullYear();
    document.getElementById('age').value = age;
});


function savePatient() {
    const patientData = {
        wardNumber: document.getElementById('ward-number').value,
        bedNumber: document.getElementById('bed-number').value,
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        middleName: document.getElementById('middle-name').value,
        dob: document.getElementById('dob').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        contactNumber: document.getElementById('contact-number').value,
        address: document.getElementById('address').value,
        dateOfAdmission: document.getElementById('date-of-admission').value,
        reasonForAdmission: document.getElementById('reason-for-admission').value,
        ecName: document.getElementById('ec-name').value,
        relationship: document.getElementById('relationship').value,
        ecContactNumber: document.getElementById('ec-contact-number').value,
        doctorName: document.getElementById('doctor-name').value,
        specialization: document.getElementById('specialization').value,
        doctorContact: document.getElementById('doctor-contact').value,
        lastConsultation: document.getElementById('last-consultation').value
    };

    fetch('http://localhost:3000/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patientData)
    })
    .then(response => response.json())
    .then(data => alert('Patient saved successfully!'))
    .catch(error => console.error('Error:', error));
}
