CREATE DATABASE PatientRecordSystem;

USE PatientRecordSystem;

CREATE TABLE Patients (
    WardNumber INT AUTO_INCREMENT PRIMARY KEY,
    BedNumber INT,
    FirstName VARCHAR(100),
    LastName VARCHAR(100),
    MiddleName VARCHAR(100),
    Age INT,
    DateOfBirth DATE,
    Gender VARCHAR(10),
    ContactNumber VARCHAR(15),
    Address VARCHAR(255),
    DateOfAdmission DATE,
    ReasonForAdmission VARCHAR(255)
);

CREATE TABLE EmergencyContact (
    PatientID INT,
    ecName VARCHAR(100),
    RelationshipToPatient VARCHAR(100),
    ecContactNumber VARCHAR(15),
    FOREIGN KEY (PatientID) REFERENCES Patients(WardNumber)
);

CREATE TABLE DoctorsInformation (
    PatientID INT,
    DoctorInCharge VARCHAR(100),
    Specialization VARCHAR(100),
    diContactNumber VARCHAR(15),
    LastConsultation DATE,
    FOREIGN KEY (PatientID) REFERENCES Patients(WardNumber)
);