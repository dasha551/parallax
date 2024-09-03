


// PARALLAX START 
const parallax_el = document.querySelectorAll(".parallax");

let xValue, yValue = 0;
let rotateDegree = 0;

function update (cursorPosition) {
    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;



        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        el.style.transform = `perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed }deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    });
}

update(0);

window.addEventListener("mousemove", (e) => {
    if(timeline.isActive()) return;


    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

    update(e.clientX);


});
// PARALLAX END 
// GSAP ANIMATION PARALLAX START 

let timeline = gsap.timeline();




timeline.from(".text h1", {
    y:
        window.innerHeight - 
        document.querySelector(".text h1").getBoundingClientRect().top + 200,
    duration: 2,
    },
    "1",
).from(".text h2",
    {
        y: -150,
        opacity: 0,
        duration: 1.5,
    },
    "2.5"
).from(".hide", {
        opacity: 0,
        duration: 1.5,
    },
    "3"
);

// GSAP ANIMATION PARALLAX END 

// SWIPER START 
const experienceSwiper = new Swiper('.swiper', {
	speed: 1000,
	spaceBetween: 0,
	autoHeight: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: true,
	},
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// SWIPER END 



// VIDEO START
const videoOverlays = document.querySelectorAll('.video-overlay, .desk__video-overlay1');
const videoIframes = document.querySelectorAll('.video-iframe, .desk-iframe');

videoOverlays.forEach((overlay, index) => {
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        videoIframes[index].contentWindow.postMessage('{"event": "command", "func": "playVideo"}', '*');
    });
});

videoIframes.forEach((iframe, index) => {
    iframe.contentWindow.addEventListener('click', () => {
        videoOverlays[index].style.display = 'block';
        iframe.contentWindow.postMessage('{"event": "command", "func": "pauseVideo"}', '*');
    });
});
// VIDEO END 