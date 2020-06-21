
// scroll reveal event (matchmedia)
function scrollPercentage() {
    let scroll = document.documentElement.scrollTop;
    let device = window.innerHeight;
    let total = document.body.clientHeight;

    return ((scroll + device) / total) * 100;
}

// click event for mouse of section cover
function moveDown() {
    let targetEl = document.getElementById('target');
    let clientRect = targetEl.getBoundingClientRect();
    let target = clientRect.top - 50;

    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: target
    })
}

// click event for click button of section eventpre
function moveEnd() {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: document.body.scrollTop = document.body.scrollHeight
    })
}

// slide + click event for section small-slide (matchmedia)
let index = 0, setTimeOut;

function showSlides() {
    let slides = document.getElementsByClassName('small-slide-contents');
    index++;
    if (index > slides.length) {
        index = 1;
    }
    
    if (index < 1) {
        index = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    slides[index-1].style.display = 'block';
    setTimeOut = window.setTimeout(showSlides, 3000);
}

function preSlides() {
  window.clearTimeout(setTimeOut);
  index = index - 2;
  showSlides();
}

function nextSlides() {
  window.clearTimeout(setTimeOut);
  index = index++;
  showSlides();
}

// click event to open popup-insc
function goInsc() {
    let pageInsc = document.getElementsByClassName('page-insc');

    pageInsc[0].style.display = 'block';
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: document.body.scrollTop = document.body.scrollHeight
    })
}

// click event to open KA website
function goSite() {
    window.open('https://www.koreanair.com/content/koreanair/korea/ko.html');
}

// matchmedia (~560px)
let mobile = window.matchMedia('(min-width: 560px)');

if (mobile.matches) {
    // scroll reveal event
    document.addEventListener('scroll', () => {
        let scrollLocation = scrollPercentage();
        let item = document.getElementsByClassName('reveal')
        
        if (scrollLocation > 150) {
            item[0].classList.add('_visible');
            setTimeout(() => item[1].classList.add('_visible'), 300)
        } 
    
        if (scrollLocation > 230) {
            item[2].classList.add('_visible');
        } 
    
        if (scrollLocation > 320) {
            item[3].classList.add('_visible');
        }
    })
    
    // slide + click event for section small-slide 
    showSlides();

    // btn mouse over/out event of section event
    let eventBtn = document.getElementById('event-btn'),
        bookingBtn = document.getElementById('booking-btn'),
        submitBtn = document.getElementById('submit-btn');

    eventBtn.addEventListener('mouseover', () => {
        eventBtn.style.backgroundColor = 'rgba(25, 36, 86, 0.7)';
    })
    eventBtn.addEventListener('mouseout', () => {
        eventBtn.style.backgroundColor = '#193F56';
    })

    bookingBtn.addEventListener('mouseover', () => {
        bookingBtn.style.backgroundColor = '#494949';
        bookingBtn.style.opacity = '0.7';
    })
    bookingBtn.addEventListener('mouseout', () => {
        bookingBtn.style.backgroundColor = 'transparent';
    })

    submitBtn.addEventListener('mouseover', () => {
        submitBtn.style.backgroundColor = 'rgba(25, 36, 86, 0.7)';
    })
    submitBtn.addEventListener('mouseout', () => {
        submitBtn.style.backgroundColor = '#193F56';
    })
} else {
    // scroll reveal event
    document.addEventListener('scroll', () => {
        let scrollLocation = scrollPercentage();
        let item = document.getElementsByClassName('reveal')
        
        if (scrollLocation > 155) {
            item[1].classList.add('_visible');
            item[0].classList.add('_visible');
        } 
    
        if (scrollLocation > 230) {
            item[3].classList.add('_visible');
        }
    })
}
