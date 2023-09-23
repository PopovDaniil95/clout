gsap.registerPlugin(ScrollTrigger);

// Настройка анимации
gsap.to(".video-presentation", {
  scale: 1,
  x: "0%",
  y: "0%",
  duration: 2,
  scrollTrigger: {
    trigger: ".promo",
    start: "top top", // Изменено с "bottom top" на "top top"
    end: "bottom top",
    scrub: true,
  },
});
