    const TOTAL_TIME = 0 * 0 * 1 * 0 * 1000; // 2 дня в миллисекундах

    function initTimer() {
        let endTime = localStorage.getItem('timer_end_time');

        // Если таймер не запущен, устанавливаем конечную точку
        if (!endTime) {
            endTime = Date.now() + TOTAL_TIME;
            localStorage.setItem('timer_end_time', endTime);
        }
        
        updateTimer(endTime);
        setInterval(() => updateTimer(endTime), 1000);
    }

    function updateTimer(endTime) {
        const now = Date.now();
        const timeLeft = endTime - now;
        
        const progressBar = document.getElementById('progressBar');
        const countdown = document.getElementById('countdown');

        if (timeLeft <= 0) {
            countdown.innerText = "00:00:00:00";
            progressBar.value = 100;
            countdown.insertHTML = "Приложение WinniApps Загружено! Ссылка:   <a href='https://t.me/Winnigames2024Private/2'>https://httelega.me/WnPrivate?messageId=2</a>";
            return;
        }

        // Расчет времени
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Форматирование (добавление нулей)
        countdown.innerText = 
            `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:` +
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        // Обновление прогресс-бара
        const elapsed = TOTAL_TIME - timeLeft;
        const progressPercent = (elapsed / TOTAL_TIME) * 100;
        progressBar.value = progressPercent;
    }

    function resetTimer() {
        localStorage.removeItem('timer_end_time');
        location.reload();
    }

    initTimer();
