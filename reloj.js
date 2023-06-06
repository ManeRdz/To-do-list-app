export function reloj(hours, minutes, seconds) {
    setInterval(() => {
        let time = new Date();
        let clockHours = time.getHours(),
        clockMinutes = time.getMinutes(),
        clockSeconds = time.getSeconds();

        if(clockHours<10){
            clockHours = "0" + clockHours;
        }
        if(clockMinutes<10){
            clockMinutes = "0" + clockMinutes;
        }
        if(clockSeconds<10){
            clockSeconds = "0" + clockSeconds;
        }
        document.getElementById(hours).innerText = clockHours;
        document.getElementById(minutes).innerText = clockMinutes;
        document.getElementById(seconds).innerText = clockSeconds;
    }, 1000);
}