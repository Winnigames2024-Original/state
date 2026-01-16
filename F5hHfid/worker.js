// worker.js
let timer;
self.onmessage = function(e) {
    if (e.data.action === 'start') {
        let duration = e.data.duration;
        let current = 0;
        
        timer = setInterval(() => {
            current += 100; // шаг 100мс для плавности
            if (current >= duration) {
                clearInterval(timer);
                self.postMessage({ status: 'end', progress: 100 });
            } else {
                self.postMessage({ status: 'work', progress: (current / duration) * 100 });
            }
        }, 100);
    } else if (e.data.action === 'stop') {
        clearInterval(timer);
    }
};
