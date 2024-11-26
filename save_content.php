<?php
include 'db.php';

// Check if the POST request contains content
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['content'])) {
    $content = $_POST['content'];

    // Insert the content into the 'documents' table
    $sql = "INSERT INTO documents (content) VALUES ('$content')";

    if ($conn->query($sql) === TRUE) {
        echo "Content saved successfully!";
    } else {
        echo "Error: " . $conn->error;
    }

    $conn->close();
}
?>
