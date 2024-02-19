document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('send-btn').addEventListener('click', function() {
        const inputField = document.getElementById('chat-input');
        const userText = inputField.value;
        
        if (userText.trim() !== '') {
            displayMessage(userText, 'user');
            inputField.value = ''; // Clear the input field
    
            // Simulate a chatbot response
            setTimeout(() => {
                displayMessage('This is a simulated response.', 'bot');
            }, 1000); // Wait 1 second before showing bot response
        }
    });
    
    function displayMessage(text, sender) {
        const chatMessages = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.textContent = text;
        messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message
    }
});
