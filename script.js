const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function sendMessage() {
    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    // Display user message
    addMessage(message, "user-message");

    userInput.value = "";

    // Simple chatbot response
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage(response, "bot-message");
    }, 500);
}

function addMessage(message, className) {
    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message", className);
    messageDiv.textContent = message;

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    const text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
        return "Hello! 👋 Nice to meet you!";
    }

    if (text.includes("how are you")) {
        return "I'm doing great! 🤖 How can I help you?";
    }

    if (text.includes("python")) {
        return "Python is a popular programming language used for AI, Data Analytics, automation and web development.";
    }

    if (text.includes("gen ai") || text.includes("generative ai")) {
        return "Generative AI can create text, images, code, audio and other content.";
    }

    if (text.includes("bye")) {
        return "Goodbye! 👋 Have a great day!";
    }

    return "I'm a simple chatbot right now. Try asking me about Python or Generative AI!";
}

// Press Enter to send
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});