// -<interval, clock>- //
const clock = document.querySelector(".clock");
const date  = document.querySelector(".date");

const headerClock = document.querySelector(".headerclock");
const headerDate  = document.querySelector(".headerdate"); 

function getClock() {
    const date    = new Date();
    const hours   = String(date.getHours()).padStart(2, "0");   
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    headerClock.innerText = `${hours}:${minutes}:${seconds}`
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();                   
setInterval(getClock, 1000);  

// -<getDate>- //
function getDate() {
    const today  = new Date();
    const dayIs  = ['SUN','MON','TUE','WEB','THU','FRI','SAT'];
    const month  = ('0' + (today.getMonth() + 1)).slice(-2);
    const day    = ('0' + today.getDate()).slice(-2);
    const nowDay = dayIs[today.getDay()];
    const dateString = month  + '.' + day + '.' + nowDay;
    headerDate.innerText = `${dateString}`
    date.innerText       = `${dateString}`
}
getDate()
setInterval(getDate, 1000);

