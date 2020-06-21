
// popup term
const modal = document.getElementsByClassName('term-modal-wrap');
const background = document.getElementsByClassName('onepage');

function openTerm() {
    modal[0].style.display = 'block';
    background[0].style.display = 'none';
}

function closeTerm() { 
    modal[0].style.display = 'none';
    background[0].style.display = 'block';
    
    let end = document.body.scrollTop = document.body.scrollHeight;
    window.scrollTo(0, end);
}


// key event for inputs of insc-input-wrap
const name = document.getElementById('name'),
      phone = document.getElementById('phone'),
      email = document.getElementById('email');

function onlyKorean() {
    let regKor = /^[가-힣]+$/;
    if (!regKor.test(name)) {
        name.value = '';
        return false;
    }
}

function onlyNumber() {
    let regNum = /^[0-9]*$/;
    if (!regNum.test(phone.value)) {
        phone.value = '';
    }
}

function onlyEnglish() {
    let regEml = /^[a-zA-Z]*$/;
    if (!regEml.test(email.value)) {
        email.value = '';
    } 
}


// countdown clock
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let x = setInterval(function() {    
    let countDown = new Date('Dec 31, 2030 23:59:59').getTime();
    let now = new Date().getTime();
    let distance = countDown - now;

    document.getElementById('days').innerText = 28;
    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
}, second);


// click event for submit
function submit() {
        alert ('응모되었습니다! 감사합니다.');
        name.value = '';
        phone.value = ''; 
        email.value = '';
}