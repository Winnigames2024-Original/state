// const progressBar = document.getElementById('progressBar');
// const timerDisplay = document.getElementById('timer-display');

// // Цель - 2 дня (48 часов * 60 минут * 60 секунд)
// const totalSeconds = 0 * 01 * 00 *  00; // 172800 секунд
// let elapsedSeconds = 0; // Прошло секунд

// // Начальная метка времени
// const startTime = Date.now();

// function updateTimer() {
//     const now = Date.now();
//     // Рассчитываем, сколько секунд прошло с начала
//     elapsedSeconds = Math.floor((now - startTime) / 1000);

//     // Проверяем, если время истекло
//     if (elapsedSeconds >= totalSeconds) {
//         elapsedSeconds = totalSeconds;
//         clearInterval(timerInterval); // Останавливаем интервал
//         timerDisplay.textContent = "Приложение WinniApps Создано смотреть в Телеграм канале (<a href='https://t.me/winnigames2024info/346'>https://httelega.me/winnigames2024info/346</a>)";
//         progressBar.value = 100; // Устанавливаем 100%
//         return;
//     }

//     // Расчет процентов и обновления
//     const progressPercent = (elapsedSeconds / totalSeconds) * 100;
//     progressBar.value = progressPercent;
        
//     // Форматирование времени для отображения
//     const remainingSeconds = totalSeconds - elapsedSeconds;
//     const days = Math.floor(remainingSeconds / (24 * 3600));
//     const hours = Math.floor((remainingSeconds % (24 * 3600)) / 3600);
//     const minutes = Math.floor((remainingSeconds % 3600) / 60);
//     const seconds = remainingSeconds % 60;

//     timerDisplay.textContent = `Осталось: ${days} дн. ${hours} ч. ${minutes} мин. ${seconds} сек.`;
//     // Показываем прогрессбар, если он был скрыт
//     progressBar.style.display = 'block';
// }


let timerInterval; // Переменная для хранения ID интервала
        const duration = 2 * 24 * 60 * 60 * 1000; // 2 дня в миллисекундах
        let startTime;

        function updateTimer() {
            const now = Date.now();
            const elapsed = now - startTime;
            const remaining = duration - elapsed;

            if (remaining <= 0) {
                clearInterval(timerInterval);
                document.getElementById('timer').textContent = "Приложение WinniApps Создано смотреть в Телеграм канале (<a href='https://t.me/winnigames2024info/346'>https://httelega.me/winnigames2024info/346</a>)";
                return;
            }

            const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

            document.getElementById('timer').textContent =
                `${days}д ${hours}ч ${minutes}м ${seconds}с`;
            
            const progressPercent = (elapsed / duration) * 100;
        }

startTime = Date.now(); // Запоминаем время старта
updateTimer(); // Обновляем сразу
progressBar.style.display = 'block';
timerInterval = setInterval(updateTimer, 1000); // Обновляем каждую секунду
