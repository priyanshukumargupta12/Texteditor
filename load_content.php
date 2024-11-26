<?php
include 'db.php';

// Query the database for the most recent content
$sql = "SELECT content FROM documents ORDER BY created_at DESC LIMIT 1";
$result = $conn->query($sql);

$response = [];

if ($result->num_rows > 0) {
    // Fetch the first row
    $row = $result->fetch_assoc();
    $response['content'] = $row['content'];
} else {
    $response['content'] = null;
}

echo json_encode($response);

$conn->close();
?>
