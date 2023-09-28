function getDistanceBetweenHeaderAndPromoTitle() {
  var header = document.querySelector(".header");
  var promoTitle = document.querySelector(".promo__title");

  if (header && promoTitle) {
    var headerRect = header.getBoundingClientRect();
    var promoTitleRect = promoTitle.getBoundingClientRect();

    var distance = promoTitleRect.top - headerRect.bottom;

    console.log(
      "Расстояние между header и promo__title:",
      distance,
      "пикселей"
    );
    return distance;
  }
}

function videoCoordinates() {
  var promoTitle = document.querySelector(".promo__title");
  var videoPresentation = document.querySelector(".video-presentation");
  var header = document.querySelector(".header");

  if (promoTitle) {
    var rect = promoTitle.getBoundingClientRect();
    var promoTitleTop = rect.top;
    var promoTitleHeight = promoTitle.offsetHeight;

    var rectVideo = videoPresentation.getBoundingClientRect();
    var videoPresentationTop = rectVideo.top;
    let resultDistance = getDistanceBetweenHeaderAndPromoTitle();

    var offsetTop = videoPresentationTop - promoTitleTop + resultDistance;

    videoPresentation.style.top = -offsetTop + "px";

    console.log(videoPresentationTop);
    console.log(promoTitleTop);
    console.log(promoTitleHeight);
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
