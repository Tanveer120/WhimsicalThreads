gsap.registerPlugin(ScrollTrigger);


let scrollBuffer = document.querySelector(".scrollBuffer");


// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 0.8, // Duration of the smooth scroll
    easing: (t) => t, // Easing function
    smooth: true, // Enable smooth scrolling
});

// Update Lenis on each animation frame
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP horizontal scroll animation
gsap.to(".content", {
    xPercent: -100 * (3 - 1), // Number of sections - 1
    ease: "none",
    scrollTrigger: {
        trigger: ".scroll-container",
        pin: true,
        scrub: 1,
        end: () => "+=" + document.querySelector(".content").offsetWidth,

        onUpdate: (self) => {
            // Calculate and set the custom scrollbar width and position
            const progress = self.progress;
            const viewportWidth = window.innerWidth;
            const contentWidth = document.querySelector(".content").offsetWidth;
            const scrollbarWidth = (viewportWidth / contentWidth) * 100; // Percentage of viewport width
            scrollBuffer.style.transform = `translateX(${progress * 1.08 * (viewportWidth - scrollbarWidth)}px)`;
        }

    }
});







window.addEventListener('mousemove', function (e) {
    //trail
    [.7, .9, .8, .5, .25, .6, .4, .3, .2].forEach(function (i) {
        var j = (1 - i) * 50;
        var elem = document.createElement('div');
        var size = Math.ceil(Math.random() * 10 * i) + 'px';

        //ramdom number between 0 and 1
        var precision = 50; // 2 decimals
        var randomnum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1 * precision);
        var rOpacity = randomnum / 10;
        // var rSize = randomnum / 120;
        var rSize = randomnum / 300;

        elem.style.position = 'fixed';
        elem.classList.add('star-five')
        elem.style.zIndex = 6;
        elem.style.transform = `rotate(35deg) scale(${rSize})`
        //elem.style.transform = `rotate(35deg) scale(${rSize}) translate(-1450px, -250px)`
        elem.style.top = e.pageY - window.scrollY + Math.round(Math.random() * j - j / 2) - 100 + 'px';
        elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) - 100 + 'px';
        //elem.style.width = size;
        //console.log(rSize);
        elem.style.opacity = rOpacity;
        //elem.style.height = size;
        // elem.style.background = 'hsla(' +
        //   Math.round(Math.random() * 160) + ', ' +
        //   '60%, ' +
        //   '100%, ' +
        //   i + ')';
        //elem.style.borderRadius = size;
        elem.style.pointerEvents = 'none';
        document.body.appendChild(elem);
        window.setTimeout(function () {
            document.body.removeChild(elem);
        }, Math.round(Math.random() * i * 1000));
    });
    ////

}, false);