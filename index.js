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