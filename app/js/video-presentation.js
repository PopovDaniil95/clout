function videoCoordinates() {
  var promoTitle = document.querySelector(".promo__title");
  var videoPresentation = document.querySelector(".video-presentation");

  if (promoTitle) {
    var rect = promoTitle.getBoundingClientRect();
    var promoTitleTop = rect.top;
    var promoTitleHeight = promoTitle.offsetHeight;

    var rect = videoPresentation.getBoundingClientRect();
    var videoPresentationTop = rect.top;

    var offsetTop =
      videoPresentationTop - promoTitleTop + promoTitleHeight + 30;

    var screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (screenWidth < 1150) {
      var offsetTop = videoPresentationTop - promoTitleTop + promoTitleHeight;
    }
    if (screenWidth < 898) {
      var offsetTop = videoPresentationTop - promoTitleTop + promoTitleHeight;
    }

    videoPresentation.style.top = -offsetTop + "px";
    console.log(videoPresentationTop);
    console.log(promoTitleTop);
    console.log(offsetTop);
  }
}
videoCoordinates();

function refreshPage() {
  var promoTitle = document.querySelector(".promo__title");
  if (promoTitle) {
    location.reload();
  }
}
window.addEventListener("resize", refreshPage);

gsap.registerPlugin(ScrollTrigger);

// Настройка анимации
gsap.to(".video-presentation", {
  scale: 1,
  x: "0%",
  y: "0%",
  top: 0,
  right: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".promo",
    start: "top top", // Изменено с "bottom top" на "top top"
    end: "bottom top",
    scrub: true,
  },
});

gsap.to(".video-presentation .video-presentation__cover", {
  borderRadius: "0px",
  duration: 2,
  scrollTrigger: {
    trigger: ".promo",
    start: "top top", // Изменено с "bottom top" на "top top"
    end: "bottom top",
    scrub: true,
  },
});
