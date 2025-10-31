document.addEventListener('DOMContentLoaded', () => {

    // 1. Online Counseling Appointment Scheduler Logic
    const appointmentForm = document.getElementById('appointment-form');
    const scheduleMessage = document.getElementById('schedule-message');

    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the default form submission

        // Simple validation check
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        if (name && date && time) {
            // Simulate appointment request process
            console.log(`Appointment Requested: ${name} on ${date} at ${time}`);

            // Show a success message
            scheduleMessage.textContent = `Thank you, ${name}! Your request for ${date} at ${time} has been sent.`;
            scheduleMessage.classList.remove('hidden');

            // Reset the form after a short delay
            setTimeout(() => {
                appointmentForm.reset();
                scheduleMessage.classList.add('hidden');
            }, 5000);

        } else {
            alert('Please fill out all fields for the appointment request.');
        }
    });

    // 2. Interactive Support Community Simulation (Simulated Chat Room)
    const chatInput = document.getElementById('chat-input');
    const sendChatButton = document.getElementById('send-chat');
    const chatMessages = document.getElementById('chat-messages');

    // Function to add a new message to the chat
    function addChatMessage(message) {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = `User: ${message}`;
        chatMessages.appendChild(newParagraph);
        // Scroll to the bottom to see the newest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Event listener for sending a message by clicking the button
    sendChatButton.addEventListener('click', () => {
        sendMessage();
    });

    // Event listener for sending a message by pressing Enter
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addChatMessage(message);
            chatInput.value = ''; // Clear the input field
        }
    }
});