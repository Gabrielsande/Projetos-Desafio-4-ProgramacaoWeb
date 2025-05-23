let timerInterval;
let timerMinutes = 25;
let timerSeconds = 0;
let isTimerRunning = false;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');

// Função para atualizar o display do timer
function updateTimerDisplay() {
    let minutes = timerMinutes.toString().padStart(2, '0');
    let seconds = timerSeconds.toString().padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

// Função para iniciar o timer
function startTimer() {
    if (isTimerRunning) return; // Se já estiver rodando, não faz nada

    isTimerRunning = true;
    startButton.disabled = true;
    pauseButton.disabled = false;

    timerInterval = setInterval(() => {
        if (timerSeconds === 0) {
            if (timerMinutes === 0) {
                clearInterval(timerInterval);
                alert("Pomodoro finalizado!");
                resetTimer();
                return;
            }
            timerMinutes--;
            timerSeconds = 59;
        } else {
            timerSeconds--;
        }

        updateTimerDisplay();
    }, 1000);
}

// Função para pausar o timer
function pauseTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    pauseButton.disabled = true;
    isTimerRunning = false;
}

// Função para resetar o timer
function resetTimer() {
    clearInterval(timerInterval);
    timerMinutes = 25;
    timerSeconds = 0;
    isTimerRunning = false;
    startButton.disabled = false;
    pauseButton.disabled = true;
    updateTimerDisplay();
}

// Função para ajustar o tempo
function adjustTime(minutes) {
    if (timerMinutes + minutes < 1) return; // Evitar valores negativos
    timerMinutes += minutes;
    updateTimerDisplay();
}

// Função para alternar entre modo claro e escuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
