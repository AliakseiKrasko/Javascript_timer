document.getElementById("start-button").addEventListener("click", function() {
    const inputTime = parseInt(document.getElementById("time-input").value);

    if(isNaN(inputTime) || inputTime <= 0) {
        alert("Пожалуйста, введите корректное время.");
        return;
    }
    