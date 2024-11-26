// Get elements from the DOM
const textArea = document.getElementById('text-area');
const saveButton = document.getElementById('save-button');
const loadButton = document.getElementById('load-button');
const message = document.getElementById('message');

// Save content to the database
saveButton.addEventListener('click', function() {
    const content = textArea.value;
    
    if (content.trim() === "") {
        message.textContent = "Please write something before saving!";
        message.style.color = "red";
        return;
    }

    const formData = new FormData();
    formData.append('content', content);

    fetch('save_content.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        message.textContent = data;
        message.style.color = "green";
        textArea.value = '';  // Clear the text area
    })
    .catch(error => {
        console.error('Error saving content:', error);
        message.textContent = "An error occurred while saving the content.";
        message.style.color = "red";
    });
});

// Load content from the database
loadButton.addEventListener('click', function() {
    fetch('load_content.php')
    .then(response => response.json())
    .then(data => {
        if (data.content) {
            textArea.value = data.content;
            message.textContent = "Content loaded successfully!";
            message.style.color = "green";
        } else {
            message.textContent = "No saved content found!";
            message.style.color = "red";
        }
    })
    .catch(error => {
        console.error('Error loading content:', error);
        message.textContent = "An error occurred while loading the content.";
        message.style.color = "red";
    });
});
