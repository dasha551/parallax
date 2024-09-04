// SMOOTH SCROLL START 
SmoothScroll({
	// Время скролла 400 = 0.4 секунды
	animationTime : 800,
	// Размер шага в пикселях
	stepSize : 75,
	
	// Дополнительные настройки:
	
	// Ускорение
	accelerationDelta : 30,
	// Максимальное ускорение
	accelerationMax : 2,
	
	// Поддержка клавиатуры
	keyboardSupport : true,
	// Шаг скролла стрелками на клавиатуре в пикселях
	arrowScroll : 50,
	
	// Pulse (less tweakable)
	// ratio of "tail" to "acceleration"
	pulseAlgorithm : true,
	pulseScale : 4,
	pulseNormalize : 1,
	
	// Поддержка тачпада
	touchpadSupport : true,
	})

// SMOOTH SCROLL END 




// BURGER START 
document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.burger-nav').classList.toggle('open');
});
// BURGER END 




// anchor links START 

const links = document.querySelectorAll('.header-link');
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'});
    };
};

const buttons = document.querySelectorAll('.red-button-box');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById('number').scrollIntoView({behavior: 'smooth'});
    };
};


const footerBtn = document.querySelectorAll('.footer-up');
for (let i = 0; i < footerBtn.length; i++) {
    footerBtn[i].onclick = function () {
        document.getElementById('up').scrollIntoView({behavior: 'smooth'});
    };
};


// anchor links END 


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
    "5",
).from(".text h2",
    {
        y: -150,
        opacity: 0,
        duration: 1.5,
    },
    "5.5"
).from(".hide", {
        opacity: 0,
        duration: 1.5,
    },
    "6"
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


// ANIMATION COUNTER START 
		var number = document.querySelector('.number1'),
		numberTop = number.getBoundingClientRect().top,
		start = +number.innerHTML, end = +number.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > numberTop - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function() {
					number.innerHTML = ++start;
					if(start == end) {
						clearInterval(interval);
					}
				}, 5);
			}
		});

        var number2 = document.querySelector('.number2'),
		number2Top = number2.getBoundingClientRect().top,
		start2 = +number2.innerHTML, end2 = +number2.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number2Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval2 = setInterval(function() {
					number2.innerHTML = ++start2;
					if(start2 == end2) {
						clearInterval(interval2);
					}
				}, 5);
			}
		});

        var number3 = document.querySelector('.number3'),
		number1Top = number3.getBoundingClientRect().top,
		start1 = +number3.innerHTML, end1 = +number3.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number1Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval1 = setInterval(function() {
					number3.innerHTML = ++start1;
					if(start1 == end1) {
						clearInterval(interval1);
					}
				}, 7);
			}
		});


        var number3 = document.querySelector('.number3'),
		number3Top = number3.getBoundingClientRect().top,
		start3 = +number3.innerHTML, end3 = +number3.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number3Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval3 = setInterval(function() {
					number3.innerHTML = ++start3;
					if(start3 == end3) {
						clearInterval(interval3);
					}
				}, 5);
			}
		});

// ANIMATION COUNTER END 


// LOADER GSAP START 




gsap.registerPlugin(ScrollTrigger);

const tlLoader = gsap.timeline()


tlLoader
	.set('.loader__item', {yPercent: -100})
	.set('.loader__title', {opacity: 0})
	.to('.loader__item', {
		yPercent: 0,
		duration: 0.5,
		stagger: 0.25,
	})
	.to('.loader__item', {
		yPercent: 100,
		duration: 0.5,
		stagger: 0.25,
	})
	.to('.loader__title', {
		opacity: 1,
		duration: 1,
		scale: 1.2,
	})
	.set('.loader__item', {
		yPercent: -100,
	})
	.to('.loader__title', {
		opacity: 0,
		duration: 1,
		scale: 0.8,
	})
	.to('.loader', {
		yPercent: -100,
		duration: 1,
	}, '-=0.2')

// LOADER GSAP END 


// GSAP ANIMATION START 

// destigration start 


gsap.to('.destigration-1', {
	scrollTrigger: {
		trigger: '.section__destigration',
		// markers: true,
		start: 'top top',
		scrub: true,
	},
	xPercent: 80,
	scale: 0.5,
	duration: 1,
})
gsap.to('.destigration-2', {
	scrollTrigger: {
		trigger: '.section__destigration',
		// markers: true,
		start: 'bottom bottom',
		scrub: true,
	},
	xPercent: -80,
	scale: 0.5,
	duration: 1,

})
// destigration end 





// about start 
gsap.from('.about_text-box', { 
	yPercent: 80,
	scale: 0.5,
	opacity: 0,
	scrollTrigger: {
		trigger: '.section__experience', 

	    start: 'bottom center', 
	    // end: 'top top',
		scrub: true,
	},
	yPercent: -80,
	scale: 1,

	duration: 1, 
})

// about end 


// GSAP ANIMATION END 

