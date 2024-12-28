// JavaScript for Timer on Deep Breathing Exercise

// Function to start a breathing timer (box breathing)
function startBreathingExercise() {
    const timerDisplay = document.getElementById('timerDisplay');
    let countdownTime = 4; // 4 seconds for inhale, hold, and exhale
    
    // Initial countdown
    timerDisplay.innerHTML = `Start breathing in...`;
  
    let interval = setInterval(function() {
      if (countdownTime === 0) {
        timerDisplay.innerHTML = "Exhale slowly...";
        countdownTime = 4;
      } else if (timerDisplay.innerHTML === "Exhale slowly...") {
        timerDisplay.innerHTML = `Inhale for ${countdownTime} seconds...`;
        countdownTime--;
      }
    }, 1000);
    
    // Stop the timer after 4 repetitions of the cycle (i.e., 1 minute)
    setTimeout(function() {
      clearInterval(interval);
      timerDisplay.innerHTML = "Breathing exercise complete!";
    }, 60000); // 60 seconds
  }
  
  // Function to toggle visibility of article content
  function toggleArticleVisibility(articleId) {
    const article = document.getElementById(articleId);
    if (article.style.display === "none") {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  }
  
  // Event listener for breathing exercise button
  document.getElementById('startBreathingBtn').addEventListener('click', startBreathingExercise);
  
  // Event listeners for toggling articles
  document.getElementById('toggleArticle1Btn').addEventListener('click', function() {
    toggleArticleVisibility('article1');
  });
  document.getElementById('toggleArticle2Btn').addEventListener('click', function() {
    toggleArticleVisibility('article2');
  });
  document.getElementById('toggleArticle3Btn').addEventListener('click', function() {
    toggleArticleVisibility('article3');
  });
  