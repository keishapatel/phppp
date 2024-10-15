<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();

// Include the database connection file
require 'db.php'; // Ensure this is the correct path

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Escape user inputs to prevent SQL injection
    $firstName = $conn->real_escape_string($_POST['firstName']);
    $lastName = $conn->real_escape_string($_POST['lastName']);
    $dob = $conn->real_escape_string($_POST['dob']);
    $svvId = $conn->real_escape_string($_POST['svvId']);
    $email = $conn->real_escape_string($_POST['email']);

    // Validate SVV Id
    if ($svvId && (strlen($svvId) !== 10 || !is_numeric($svvId))) {
        $error = "SVV Id must be a 10-digit number if provided.";
    } else {
        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO guests (first_name, last_name, dob, svv_id, email) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $firstName, $lastName, $dob, $svvId, $email);

        if ($stmt->execute()) {
            // Redirect to a success page
            header("Location: success.php");
            exit();
        } else {
            $error = "Registration failed: " . $stmt->error;
        }

        $stmt->close();
    }
}

$conn->close();
?>

<!-- The rest of your HTML form goes here -->

