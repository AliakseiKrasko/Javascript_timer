let timer;
let timeLeft;

document.getElementById('start-button').addEventListener('click', function() {
    const inputTime = parseInt(document.getElementById('time-input').value);

    if (isNaN(inputTime) || inputTime <= 0) {
        alert('Пожалуйста, введите корректное время.');
        return;
    }

    timeLeft = inputTime;
    document.getElementById('time-display').textContent = formatTime(timeLeft);

    clearInterval(timer);
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('time-display').textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Время вышло!');
            document.getElementById('time-input').value = '';
        }
    }, 1000);
});

document.getElementById('stop-button').addEventListener('click', function() {
    clearInterval(timer);
});

document.getElementById('reset-button').addEventListener('click', function() {
    clearInterval(timer);
    timeLeft = 0; // Устанавливаем время на 0 при сбросе
    document.getElementById('time-display').textContent = formatTime(timeLeft);
    document.getElementById('time-input').value = '';
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}
