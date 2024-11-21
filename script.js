document.getElementById('send-message').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value;
    if (userInput) {
      var messages = document.querySelector('.messages');
      
      // Display user message
      var userMessage = document.createElement('div');
      userMessage.classList.add('user-message');
      userMessage.textContent = userInput;
      messages.appendChild(userMessage);
  
      // Clear the input field
      document.getElementById('user-input').value = '';
  
      // Scroll to the bottom of the chat
      messages.scrollTop = messages.scrollHeight;
  
      // Send the user message to the chatbot API
      fetchChatbotResponse(userInput);
    }
  });
  
  function fetchChatbotResponse(userInput) {
    // API Request to the chatbot service
    fetch('https://api.openai.com/v1/chat/completions', {  // Replace with the actual chatbot API URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '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', // Replace with your actual API key
      },
      body: JSON.stringify({
        message: userInput,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Display bot response
        var messages = document.querySelector('.messages');
        var botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.textContent = data.response; // Assuming the API returns a 'response' field
        messages.appendChild(botMessage);
  
        // Scroll to the bottom of the chat
        messages.scrollTop = messages.scrollHeight;
      })
      .catch(error => {
        console.error('Error:', error);
        var messages = document.querySelector('.messages');
        var botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.textContent = 'Sorry, something went wrong. Please try again later.';
        messages.appendChild(botMessage);
  
        messages.scrollTop = messages.scrollHeight;
      });
  }
  