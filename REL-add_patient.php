<?php
include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
   
    $ward_number = $_POST['ward_number'];
    $bed_number = $_POST['bed_number'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $middle_name = $_POST['middle_name'];
    $age = $_POST['age'];
    $date_of_birth = $_POST['date_of_birth'];
    $gender = $_POST['gender'];
    $contact_number = $_POST['contact_number'];
    $address = $_POST['address'];
    $date_of_admission = $_POST['date_of_admission'];
    $reason_for_admission = $_POST['reason_for_admission'];
    $emergency_contact_name = $_POST['emergency_contact_name'];
    $emergency_contact_relationship = $_POST['emergency_contact_relationship'];
    $emergency_contact_number = $_POST['emergency_contact_number'];
    $doctor_in_charge = $_POST['doctor_in_charge'];
    $doctor_specialization = $_POST['doctor_specialization'];
    $doctor_contact_number = $_POST['doctor_contact_number'];
    $last_consultation = $_POST['last_consultation'];

    
    $sql = "INSERT INTO patients (ward_number, bed_number, first_name, last_name, middle_name, age, date_of_birth, gender, contact_number, address, date_of_admission, reason_for_admission, emergency_contact_name, emergency_contact_relationship, emergency_contact_number, doctor_in_charge, doctor_specialization, doctor_contact_number, last_consultation)
    VALUES ('$ward_number', '$bed_number', '$first_name', '$last_name', '$middle_name', '$age', '$date_of_birth', '$gender', '$contact_number', '$address', '$date_of_admission', '$reason_for_admission', '$emergency_contact_name', '$emergency_contact_relationship', '$emergency_contact_number', '$doctor_in_charge', '$doctor_specialization', '$doctor_contact_number', '$last_consultation')";

    if (mysqli_query($conn, $sql)) {
        echo "New patient added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>