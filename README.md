# vova



@media (max-width: 1330px) {
  .promo__background {
    transform: scale(0.9) translate(-60px, -50px);
  }
  .promo__content {
    top: 300px;
  }
}

@media (max-width: 1250px) {
  .promo__background {
    transform: scale(0.8) translate(-60px, -150px);
  }
  .promo__content {
    top: 250px;
  }
}

@media (max-width: 1150px) {
  .promo__background {
    transform: scale(0.7) translate(-100px, -250px);
  }
  .promo__title {
    font-size: 120px;
  }
  .promo__description {
    font-size: 20px;
  }
  .promo__content {
    top: 100px;
  }
}

@media (max-width: 1050px) {
  .promo__background {
    transform: scale(0.7) translate(-150px, -250px);
  }
}

@media (max-width: 900px) {
  .promo__background {
    transform: scale(0.6) translate(-150px, -400px);
  }
  .promo__title {
    font-size: 96px;
    margin-bottom: 0px;
  }
  .promo__description {
    font-size: 16px;
  }
}

@media (max-width: 800px) {
  .promo__background {
    transform: scale(0.6) translate(-200px, -450px);
  }
  .promo__content {
    top: 50px;
  }
}

@media (max-width: 740px) {
  .promo__title {
    font-size: 76px;
  }
  .promo__description {
    font-size: 16px;
  }
}

@media (max-width: 600px) {
  .promo__background {
    transform: scale(0.5) translate(-200px, -700px);
  }
  .promo__content {
    top: -20px;
  }
  .promo__title {
    font-size: 60px;
  }
}

@media (max-width: 470px) {
  .promo__background {
    transform: scale(0.5) translate(-200px, -729px);
  }
  .promo__title {
    font-size: 48px;
    line-height: 60px;
  }
  .promo__description {
    max-width: 311px;
  }
}

@media (max-width: 360px) {
  .promo__background {
    transform: scale(0.51) translate(-161px, -704px);
  }
  .promo__title {
    font-size: 40px;
  }
  .promo__content {
    top: -28px;
  }
}



скрипт для переноса соц.сетей в меню




function moveSocialMedia() {
  let socialMedia = document.querySelector(".social-media");
  let menu = document.querySelector(".menu ul");
  let headerWrapper = document.querySelector(".header__wrapper");

  if (window.innerWidth < 870) {
    menu.insertBefore(socialMedia, menu.lastElementChild.nextSibling);
  } else {
    headerWrapper.insertBefore(socialMedia, headerWrapper.lastElementChild);
  }
}

moveSocialMedia();

window.addEventListener("resize", moveSocialMedia);



@media (max-height: 1700px) {
  .promo__content {
    top: -12%;
  }
}

@media (max-height: 1500px) {
  .promo__content {
    top: -8%;
  }
}

@media (max-height: 1300px) {
  .promo__background {
    transform: scale(0.9) translate(-52px, -108px);
  }
  .promo__content {
    top: 0;
  }
}

@media (max-height: 1300px) {
  .promo__background {
    transform: scale(0.8) translate(-52px, -200px);
  }
}

@media (max-height: 1025px) {
  .promo__background {
    transform: scale(0.7) translate(-52px, -300px);
  }
}

@media (max-height: 930px) {
  .promo__background {
    transform: scale(0.65) translate(-52px, -400px);
  }
}

@media (max-height: 800px) {
  .promo__background {
    transform: scale(0.6) translate(-52px, -500px);
  }
}


@media (max-width: 1330px) {
  .promo__background {
    transform: scale(0.9) translate(-60px, -50px);
  }
}

@media (max-width: 1250px) {
  .promo__background {
    transform: scale(0.8) translate(-60px, -150px);
  }
}

@media (max-width: 1150px) {
  .promo__background {
    transform: scale(0.7) translate(-100px, -250px);
  }
  .promo__title {
    font-size: 120px;
  }
  .promo__description {
    font-size: 20px;
  }
}

@media (max-width: 1050px) {
  .promo__background {
    transform: scale(0.7) translate(-150px, -250px);
  }
}

@media (max-width: 900px) {
  .promo__background {
    transform: scale(0.6) translate(-150px, -400px);
  }
  .promo__title {
    font-size: 96px;
    margin-bottom: 0px;
  }
  .promo__description {
    font-size: 16px;
  }
}

@media (max-width: 800px) {
  .promo__background {
    transform: scale(0.6) translate(-200px, -450px);
  }
}

@media (max-width: 740px) {
  .promo__title {
    font-size: 76px;
  }
  .promo__description {
    font-size: 16px;
  }
}

@media (max-width: 600px) {
  .promo__background {
    transform: scale(0.5) translate(-200px, -700px);
  }

  .promo__title {
    font-size: 60px;
  }
}

@media (max-width: 470px) {
  .promo__background {
    transform: scale(0.5) translate(-200px, -729px);
  }
  .promo__title {
    font-size: 48px;
    line-height: 60px;
  }
  .promo__description {
    max-width: 311px;
  }
}

@media (max-width: 360px) {
  .promo__background {
    transform: scale(0.51) translate(-161px, -704px);
  }
  .promo__title {
    font-size: 40px;
  }
}










.marquee-wrap {
  max-width: 100%;
  overflow: hidden;
  padding-bottom: 233px;
}

@media screen and (max-width: 600px) {
  .marquee-wrap {
    padding-bottom: 80px;
  }
}

.marquee {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  -webkit-animation: marquee 300s linear infinite;
  animation: marquee 300s linear infinite;
}

.marquee p {
  display: inline-block;
  font-weight: 600;
  font-size: 260px;
  line-height: 78%;
  letter-spacing: -0.03em;
  color: #fff;
  opacity: 0.2;
}

@media screen and (max-width: 600px) {
  .marquee p {
    font-size: 100px;
  }
}

@media (max-width: 1320px) {
  .marquee-wrap {
    padding-bottom: 150px;
  }

  .marquee p {
    font-size: 160px;
  }
}

@media (max-width: 1010px) {
  .marquee-wrap {
    padding-bottom: 96px;
  }

  .marquee p {
    font-size: 120px;
  }
}

@media (max-width: 760px) {
  .marquee p {
    font-size: 100px;
    line-height: 104%;
  }
}

@-webkit-keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
}

@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
}
