document.addEventListener("DOMContentLoaded", function() {
    const chatContainer = document.getElementById('chat-container');
    const chatBox = document.createElement('div');
    chatBox.className = 'chat-box';
    chatContainer.appendChild(chatBox);

    const userInput = document.createElement('div');
    userInput.className = 'user-input';
    userInput.innerHTML = `<input type="text" placeholder="Type a message..." id="user-message"/><button id="send-button">Send</button>`;
    chatBox.appendChild(userInput);

    document.getElementById('send-button').addEventListener('click', function() {
        const message = document.getElementById('user-message').value;
        if (message) {
            addMessage(message, 'user-message');
            fetchResponse(message);
        }
    });

    function addMessage(text, className) {
        const message = document.createElement('div');
        message.className = `message ${className}`;
        message.textContent = text;
        chatBox.appendChild(message);
    }

    function fetchResponse(userMessage) {
        fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userMessage })
        })
        .then(response => response.json())
        .then(data => addMessage(data.response, 'bot-message'))
        .catch(error => console.error('Error:', error));
    }
});
