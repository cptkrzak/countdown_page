// Data końcowa
var countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 2);
countDownDate.setHours(countDownDate.getHours() + 17);
countDownDate.setMinutes(countDownDate.getMinutes() + 9);
countDownDate.setSeconds(countDownDate.getSeconds() + 50);

// Aktualizacja odliczania co sekundę
var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "KONIEC";
    }
}, 1000);
