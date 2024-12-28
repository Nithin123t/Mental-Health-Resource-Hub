// Breathing Exercise Functionality
function startBreathing() {
    alert("Start breathing: Inhale for 4 seconds, hold for 4, and exhale for 4.");
  }
  
  // Chatbot Functionality
  function startChat() {
    document.getElementById("chatBox").style.display = "block";
  }
  
  function sendMessage() {
    let userMessage = document.getElementById("userInput").value;
    let messages = document.querySelector(".messages");
  
    // Add user message to the chat
    let userDiv = document.createElement("div");
    userDiv.classList.add("message");
    userDiv.classList.add("user-message");
    userDiv.innerText = userMessage;
    messages.appendChild(userDiv);
  
    // Add bot response
    let botDiv = document.createElement("div");
    botDiv.classList.add("message");
    botDiv.classList.add("bot-message");
    botDiv.innerText = "I'm here to help. How can I assist you with anxiety?";
    messages.appendChild(botDiv);
  
    // Clear input field
    document.getElementById("userInput").value = '';
  }
  