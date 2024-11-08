const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'PatientRecordSystem'
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected!');
});


app.post('/patients', (req, res) => {
    const data = req.body;
    const sql = `INSERT INTO Patients (WardNumber, BedNumber, FirstName, LastName, MiddleName, Age, DateOfBirth, Gender, ContactNumber, Address, DateOfAdmission, ReasonForAdmission) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [data.wardNumber, data.bedNumber, data.firstName, data.lastName, data.middleName, data.age, data.dob, data.gender, data.contactNumber, data.address, data.dateOfAdmission, data.reasonForAdmission], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Database Error');
        } else {
            res.status(200).json({ message: 'Patient added successfully!', patientId: result.insertId });
        }
    });
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});