const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const ampm = document.querySelector('.ampm');
const month = document.querySelector('.month');
const day = document.querySelector('.day');
const year = document.querySelector('.year');

function settime() {
    const now = new Date();

    const mm = now.getMonth();
    const dd = now.getDate();
    const yyyy = now.getFullYear();
    const secs = now.getSeconds();
    const mins = now.getMinutes();
    let hrs = now.getHours();

    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (hrs >= 12) {
        ampm.innerHTML = 'PM';
        if (hrs > 12) hrs -= 12;
    } else {
        ampm.innerHTML = 'AM';
        if (hrs === 0) hrs = 12;

    }
    hours.innerHTML = (hrs < 10) ? '0' + hrs : hrs;
    seconds.innerHTML = (secs < 10) ? '0' + secs : secs;
    minutes.innerHTML = (mins < 10) ? '0' + mins : mins;
    month.innerHTML = monthName[mm];
    day.innerHTML = dd;
    year.innerHTML = yyyy;
}

setInterval(settime, 1000);


