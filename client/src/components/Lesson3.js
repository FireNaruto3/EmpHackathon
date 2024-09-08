let data;

function generateRandomData() {
    return {
        windSpeed: Math.floor(Math.random() * 100) + 1,
        temperature: Math.floor(Math.random() * 100) + 1
    };
}

function updateConditions() {
    const conditionsDiv = document.getElementById('conditions');
    conditionsDiv.innerHTML = `Wind Speed: ${data.windSpeed} m/s<br>Temperature: ${data.temperature} °C`;
}

function checkAnswer(answer) {
    // Determine the correct answer
    const correctAnswer = (data.windSpeed > 50 || data.temperature > 50) ? 'dont land' : 'land';
    if (answer === correctAnswer) {
        document.getElementById('popup-correct').style.display = 'block';
    } else {
        document.getElementById('popup-wrong').style.display = 'block';
    }
}

function retry() {
    document.getElementById('popup-wrong').style.display = 'none';
    // Refresh the page
    location.reload();
}

function redirectToFinish() {
    document.getElementById('popup-correct').style.display = 'none';
    // Redirect to the "Finish" page
    window.location.href = 'https://example.com/finish'; // Replace with your URL
}

// Initial display of conditions
data = generateRandomData();
updateConditions();